import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ResizableBox from './ResizableBox'
import { Chart } from 'react-charts'

function RenderScreen() {
  const [data1, setData1] = useState([])
  useEffect(() => {
    axios.get('https://api.coindesk.com/v1/bpi/historical/close.json')
      .then(response => {
        // console.log(response.data.bpi);
        var result = [];
        var result1 = [];

        for (var i in response.data.bpi) {
          var z = i.split("-");
          var newDate = new Date(z[0], z[1] - 1, z[2]);
          console.log(newDate.getTime());
          result.push({ primary: newDate, secondary: response.data.bpi[i] });
          result1.push({ primary: newDate, secondary: response.data.bpi[i]+200 });
        }
        setData1([{ label: 'BitCoin', data: result },{ label: 'BitCoin+100', data: result1 }]);
      })

  }, [])

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
      <h1>Real-Time Bitcoin Graph</h1>
      <ResizableBox>
        <Chart data={data1} series={series} axes={axes} tooltip />
      </ResizableBox>
    </div>
  )
}

export default RenderScreen
