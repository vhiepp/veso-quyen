import React from 'react'
import cn from 'classnames'

const prizeList = [
  {
    prize: 'Giải 8',
    prizeShort: 'G. 8',
  },
  {
    prize: 'Giải 7',
    prizeShort: 'G. 7',
  },
  {
    prize: 'Giải 6',
    prizeShort: 'G. 6',
  },
  {
    prize: 'Giải 5',
    prizeShort: 'G. 5',
  },
  {
    prize: 'Giải tư',
    prizeShort: 'G. 4',
  },
  {
    prize: 'Giải 3',
    prizeShort: 'G. 3',
  },
  {
    prize: 'Giải nhì',
    prizeShort: 'G. 2',
  },
  {
    prize: 'Giải nhất',
    prizeShort: 'G. 1',
  },
  {
    prize: 'Giải đặc biệt',
    prizeShort: 'G. ĐB',
  },
]

export default function LotteryResultTable({ data }) {
  const date = data.date.split('-')

  return (
    <div className="w-full relative">
      <div className="absolute right-2 top-0 w-20 bg-[#020202] flex flex-col items-center border-[1px] border-amber-300 rounded-b-md">
        <div>
          <p className="text-center text-white font-bold">
            {date[0]}/{date[1]}
          </p>
        </div>
        <hr className="w-4/5" />
        <div>
          <p className="text-center text-white font-bold">{date[2]}</p>
        </div>
      </div>
      <table className="w-full">
        <caption className="w-full py-2 px-4 font-bold text-white bg-[#c50000] text-left sm:text-center">
          KẾT QUẢ XỔ SỐ MIỀN NAM
        </caption>
        <thead>
          <tr className="text-lg">
            <th className="border-2 py-2">CN</th>

            {data.results.map((e) => (
              <th
                className="border-2 capitalize"
                key={Math.random()}
              >
                {e.province}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {prizeList.map((e, index) => (
            <tr key={Math.random()}>
              <td className="border-2 text-center">{e.prizeShort}</td>
              {data.results.map((r) => (
                <td
                  className="border-2"
                  key={Math.random()}
                >
                  <div>
                    {r.result[index].reverse().map((result) => (
                      <p
                        className={cn('text-center font-bold', {
                          'text-lg': index != 0 && index != 8,
                          'text-3xl': index === 0,
                          'text-red-600': index === 0 || index === 8,
                          'text-2xl': index === 8,
                        })}
                        key={Math.random()}
                      >
                        {result}
                      </p>
                    ))}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
