import React, { useState } from 'react'
// import { useTokens } from './useTokens'
import Loader from '../../components/Loader'
import { useQuery } from '@tanstack/react-query'
import { dexPoolTokenPage } from '../../api/index'
import NumberAnimation from '../../components/NumberAnimation'

const sequence = (data: any, order: boolean) => {
  if (data === undefined) {
    return []
  } else if (order) {
    data.sort((a: any, b: any) => {
      return Number(a.tvl) - Number(b.tvl)
    })
  } else {
    data.sort((a: any, b: any) => {
      return Number(b.tvl) - Number(a.tvl)
    })
  }
  return data
}
export default function AllTokens() {
  // const { data, loading } = useTokens(sort)
  const { isLoading, isError, data, error }: { isLoading: any; isError: any; data: any; error: any } = useQuery({
    queryKey: ['allTokens'],
    queryFn: dexPoolTokenPage,
    refetchInterval: 5000
  })
  const [sortSymbol, setSortSymbol] = useState(true)
  const dataList = sequence(data, sortSymbol)

  return (
    <>
      <div className="text-2xl font-bold text-black mb-6">All Tokens</div>
      <div className="overflow-x-auto bg-white rounded-2xl">
        <table className="w-full min-w-[768px] ">
          <thead>
            <tr className="h-20 text-base font-semibold text-zinc-400">
              <th className="w-1/12">#</th>
              <th className=" w-3/12 text-left">Name</th>
              <th className=" w-1/6">Price</th>
              <th className=" w-1/6">Price Change</th>
              <th className=" w-1/6">Volume 24H</th>
              <th className=" w-1/6">
                TVL{' '}
                <span
                  className=" inline-block px-3"
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    setSortSymbol(!sortSymbol)
                  }}
                >
                  {sortSymbol ? '↑' : '↓'}
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {isLoading && (
              <tr>
                <td colSpan={6} className="h-20">
                  <div className=" flex justify-center items-center w-full h-full">
                    <Loader></Loader>
                  </div>
                </td>
              </tr>
            )}
            {isError && (
              <tr>
                <td colSpan={6} className="h-10">
                  <div className=" flex justify-center items-center w-full h-full">{error.message}</div>
                </td>
              </tr>
            )}
            {!isLoading &&
              !isError &&
              dataList.map((item: any, index: number) => {
                return (
                  <tr key={item.id} className="h-20 font-semibold">
                    <td className=" text-center">{index + 1}</td>
                    <td className=" text-left">
                      <div className="flex items-center">
                        <img className="w-6 mr-3" alt="" src={item.tokenUrl}></img>
                        <span>{item.name}</span>
                        <span className=" inline-block pl-3 text-zinc-400">({item.symbol})</span>
                      </div>
                    </td>
                    <td className=" text-center">
                      {/* ${item.price} */}
                      $<NumberAnimation value={item.price} />
                    </td>
                    <td
                      className={`${Number(item.priceChange).toFixed(2) !== '0.00' &&
                        (Number(item.priceChange) > 0 ? 'text-[#20B593]' : 'text-[#FF503D]')} text-center `}
                    >
                      {Number(item.priceChange).toFixed(2) !== '0.00' &&
                        (Number(Number(item.priceChange).toFixed(2)) > 0 ? '↑' : '↓')}
                      <NumberAnimation value={Math.abs(Number(Number(item.priceChange).toFixed(2)))} />%
                    </td>
                    <td className=" text-center">
                      $<NumberAnimation value={Number(item.amount)?.toFixed(0)}></NumberAnimation>
                    </td>
                    <td className=" text-center">
                      $<NumberAnimation value={Number(item.tvl)?.toFixed(0)}></NumberAnimation>
                    </td>
                    {/* <td className=" text-center">{undefined}</td> */}
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
    </>
  )
}
