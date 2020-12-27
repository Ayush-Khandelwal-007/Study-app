import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Chart } from 'react-charts'

function RenderScreen() {
  const [data1, setData1] = useState([])
  useEffect(() => {
    axios.get('https://api.coindesk.com/v1/bpi/historical/close.json')
      .then(response => {
        // console.log(response.data.bpi);
        var result = [];
        var result1=[];

        for (var i in response.data.bpi) {
          var z = i.split("-");
          var newDate = new Date(z[0], z[1] - 1, z[2]);
          // console.log(newDate.getTime());
          result.push({ primary: newDate, secondary: response.data.bpi[i] });
          result1.push({ primary: newDate, secondary: response.data.bpi[i]+(Math.random()* 1600)-800});
        }
        setData1([{ label: 'BitCoin', data: result },{ label: 'Random Graph', data: result1 }]);
      })

  }, [])

  // useEffect(() => {
  //   axios.get('https://rest.coinapi.io/v1/exchangerate/BTC?apikey=E952333A-CA2F-46B2-8E23-DB5BE021C4BD')
  //     .then(response => {
  //       console.log(response);
  //       var result1 = [];
  //       // response.data.rates.length
  //       for (var i = 0; i < 1000; i++) {

  //         // if(i%100===0)console.log(i)
  //         var date = response?.data?.rates[i].time

  //         try {
  //           var newDate = new Date(date);
  //           result1.push({ primary: newDate, secondary: response?.data?.rates[i].rate });
  //         }
  //         catch (err) {
  //           console.log(err);
  //         }

  //         // console.log(result1);

  //       }
  //       result1.sort(function (a, b) {
  //         // Turn your strings into dates, and then subtract them
  //         // to get a value that is either negative, positive, or zero.
  //         return new Date(b.primary) - new Date(a.primary);
  //       });

  //       try {
  //         setData1([{ label: 'BitCoin', data: result1 }]);
  //         console.log(result1);
  //       }
  //       catch (err) {
  //         console.log(err);
  //       }

  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     })
  // }, [])

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
      <h1 className="PurpleText">Real-Time Bitcoin Graph</h1>
      <div
        className='Chart_box'
        style={{
          height: '70vh',
          width: '95%',
          padding: '0vw 0vw 1vw 1vw'
        }}
      >
        {
          data1 && series && axes && <Chart data={data1} series={series} axes={axes} tooltip />
        }
      </div>
    </div>
  )
}

export default RenderScreen
