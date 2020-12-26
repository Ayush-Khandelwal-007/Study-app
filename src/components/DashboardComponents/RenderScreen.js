import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ResizableBox from './ResizableBox'
import { Chart } from 'react-charts'
// const rp = require('request-promise');

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
          // console.log(newDate.getTime());
          result.push({ primary: newDate, secondary: response.data.bpi[i] });
          result1.push({ primary: newDate, secondary: response.data.bpi[i] + 200 });
        }
        setData1([{ label: 'BitCoin', data: result }, { label: 'BitCoin+100', data: result1 }]);
      })

  }, [])

  // useEffect(() => {
  //   const requestOptions = {
  //     method: 'GET',
  //     uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
  //     qs: {
  //       'start': '1',
  //       'limit': '5000',
  //       'convert': 'USD'
  //     },
  //     headers: {
  //       'X-CMC_PRO_API_KEY': '93016d6e-617c-43be-88f2-092fec07501d'
  //     },
  //     json: true,
  //     gzip: true
  //   };

  //   rp(requestOptions).then(response => {
  //     console.log('API call response:', response);
  //   }).catch((err) => {
  //     console.log('API call error:', err.message);
  //   });

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
      <h1>Real-Time Bitcoin Graph</h1>
      <div
        className='Chart_box'
        style={{
          height: '40vh',
          width: '100%'
        }}
      >
        <Chart data={data1} series={series} axes={axes} tooltip />
      </div>
    </div>
  )
}

export default RenderScreen
