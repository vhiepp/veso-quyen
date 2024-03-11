import React, { useEffect, useState } from 'react'
import LotteryResultTable from '../components/lotteries/LotteryResultTable'
import lotteryResult from '../_mock/lottery-result'
import axios from 'axios'

export default function Home() {
  const [kqXS, setKQXS] = useState([])

  useEffect(() => {
    axios.get('http://192.168.1.16:9000').then(({ data }) => {
      console.log(data)
      setKQXS(data)
    })
  }, [])
  return (
    <div className="container">
      <div className="flex flex-row">
        <div className="basis-full sm:basis-3/5 lg:basis-1/2 py-4">
          {kqXS.length > 0 && <LotteryResultTable data={kqXS[0]} />}
        </div>
      </div>
    </div>
  )
}
