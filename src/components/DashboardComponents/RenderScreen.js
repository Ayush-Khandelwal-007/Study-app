import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Chart } from 'react-charts'
import DropDown from './DropDown'

function RenderScreen() {
  const [data1, setData1] = useState(null)
  const [data2, setData2] = useState(null)
  const [data3, setData3] = useState(null)
  const [graph1, setGraph1] = useState(1)
  const [graph2, setGraph2] = useState(2)
  const [data, setData] = useState(null)

  const dropdownOptions = ['Id1', 'Id2', 'Id3']

  useEffect(() => {
    const fetchData = () => {
      const options = {
        method: 'GET',
        url: 'https://coinranking1.p.rapidapi.com/coin/1/history/7d',
        headers: {
          'x-rapidapi-key': 'b3bdb530acmsha777171e97dd90ep199712jsn1c204b6d3108',
          'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
        }
      };

      axios.request(options).then(function (response) {
        // console.log(response);
        const data = response.data.data.history;
        var result1 = [];
        for (var i in data) {
          var newDate = new Date(data[i].timestamp);
          result1.push({ primary: newDate, secondary: parseInt(data[i].price) });
        }
        // console.log(result1);
        setData1({ label: 'Id1', data: result1 });


      }).catch(function (error) {
        console.error(error);
      });
    }
    fetchData()
    const timer = setTimeout(fetchData, 1000);
    return () => {
      clearInterval(timer);
    }
  }, [])
  useEffect(() => {
    const fetchData = () => {
      const options = {
        method: 'GET',
        url: 'https://coinranking1.p.rapidapi.com/coin/2/history/7d',
        headers: {
          'x-rapidapi-key': 'b3bdb530acmsha777171e97dd90ep199712jsn1c204b6d3108',
          'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
        }
      };

      axios.request(options).then(function (response) {
        // console.log(response);
        const data = response.data.data.history;
        var result2 = [];
        for (var i in data) {
          var newDate = new Date(data[i].timestamp);
          result2.push({ primary: newDate, secondary: parseInt(data[i].price) });
        }
        // console.log(result2);
        setData2({ label: 'Id2', data: result2 });


      }).catch(function (error) {
        console.error(error);
      });
    }
    fetchData()
    const timer = setTimeout(fetchData, 1000);
    return () => {
      clearInterval(timer);
    }
  }, [])
  useEffect(() => {
    const fetchData = () => {
      const options = {
        method: 'GET',
        url: 'https://coinranking1.p.rapidapi.com/coin/5/history/7d',
        headers: {
          'x-rapidapi-key': 'b3bdb530acmsha777171e97dd90ep199712jsn1c204b6d3108',
          'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
        }
      };

      axios.request(options).then(function (response) {
        // console.log(response);
        const data = response.data.data.history;
        var result3 = [];
        for (var i in data) {
          var newDate = new Date(data[i].timestamp);
          result3.push({ primary: newDate, secondary: parseInt(data[i].price) });
        }
        // console.log(result3);
        setData3({ label: 'Id3', data: result3 });


      }).catch(function (error) {
        console.error(error);
      });
    }
    fetchData()
    const timer = setTimeout(fetchData, 1000);
    return () => {
      clearInterval(timer);
    }
  }, [])

  useEffect(() => {
    if (graph1 === 1) {
      switch (graph2) {
        case 1:
          if (data1 ) setData([data1, data1]);
          break;
        case 2:
          if (data1 && data2) setData([data1, data2]);
          break;
        case 3:
          if (data1 && data3) setData([data1, data3]);
          break;

        default:
          setData(null)
          console.log("data", data)
          break;
      }
    }
    else if (graph1===2){

      switch (graph2) {
        case 1:
          if (data2 && data1) setData([data2, data1]);
          break;
        case 2:
          if (data2 ) setData([data2, data2]);
          break;
        case 3:
          if (data2 && data3) setData([data2, data3]);
          break;

        default:
          setData(null)
          console.log("data", data)
          break;
      }
    }
    else if (graph1===3){
      switch (graph2) {
        case 1:
          if (data3 && data1) setData([data3, data1]);
          break;
        case 2:
          if (data3 && data2) setData([data3, data2]);
          break;
        case 3:
          if (data3) setData([data3, data3]);
          break;

        default:
          setData(null)
          console.log("data", data)
          break;
      }
    }

    
    else { setData(null) }
    // eslint-disable-next-line
  }, [data1, data2, data3, graph1, graph2])

  const series = React.useMemo(
    () => ({
      showPoints: false,
    }),
    []
  );

  const axes = React.useMemo(
    () => [
      {
        primary: true,
        type: "time",
        position: "bottom",
        // filterTicks: (ticks) =>
        //   ticks.filter((date) => +timeDay.floor(date) === +date),
      },
      { type: "linear", position: "left" },
    ],
    []
  );

  return (
    <div className="RenderScreen">
      <div className="Graph_header">
        <h1 className="PurpleText">Real-Time Bitcoin Graph</h1>
        <DropDown options={dropdownOptions} color='#C30F70' displayText='Commodity1' set={setGraph1} />
        <DropDown options={dropdownOptions} color='#5843BE' displayText='Commodity2' set={setGraph2} />
      </div>
      <div
        className='Chart_box'
        style={{
          height: '70vh',
          width: '95%',
          padding: '0vw 0vw 1vw 1vw'
        }}
      >
        {
          data && series && axes && <Chart data={data} series={series} axes={axes} tooltip />
        }
      </div>
    </div>
  )
}

export default RenderScreen
