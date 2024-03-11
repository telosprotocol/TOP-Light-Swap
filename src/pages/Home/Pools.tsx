import React from 'react'
import purpleRectangle from '../../assets/images/purple-rectangle.webp'
import { useQuery } from '@tanstack/react-query'
import { dexPoolTokenCombinationPage } from '../../api/index'
import Loader from '../../components/Loader'
import { ErrorText } from 'components/swap/styleds'
import NumberAnimation from '../../components/NumberAnimation'

export default function Pools() {
  const { isLoading, isError, data, error }: { isLoading: any; isError: any; data: any; error: any } = useQuery({
    queryKey: ['pools'],
    queryFn: dexPoolTokenCombinationPage,
    refetchInterval: 5000
  })
  const propertyToSum = 'tvl'

  const totalTVL = data?.reduce((accumulator: any, currentValue: any) => {
    return Number(accumulator) + Number(currentValue[propertyToSum])
  }, 0)

  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-full h-full">
        <Loader></Loader>
      </div>
    )
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center w-full h-full">
        <ErrorText>{error.message}</ErrorText>
      </div>
    )
  }

  return (
    <div className="mb-12">
      <div className=" text-2xl font-bold text-black mb-6">Pools</div>
      <div className="grid gap-8 lg:grid-cols-2">
        {data.map((item: any) => (
          <div key={item.id} className=" bg-white rounded-2xl w-full p-7">
            <div className=" flex items-center mb-10">
              <img className="w-6" alt="" src={item.topUrl}></img>
              <img className="w-6" alt="" src={item.downUrl}></img>
              <span className="inline-block ml-1 font-bold text-xl">
                {item.topName}/{item.downName}
              </span>
              <span
                className="inline-block ml-1 text-sm bg-no-repeat px-2.5 py-0.5 text-white font-bold"
                style={{ backgroundImage: `url(${purpleRectangle})`, backgroundSize: '100% 100%' }}
              >
                {((Number(item.tvl) / totalTVL) * 100).toFixed(0)}%
              </span>
            </div>
            <div className="lg:flex lg:justify-around">
              <div className="flex mb-8 lg:block lg:mb-0 lg:pr-10">
                <div className="basis-3/6">
                  <div className="text-xs font-medium text-[#666666] mb-1.5">TVL</div>
                  <div className="text-[26px] font-medium">
                    $<NumberAnimation value={Number(item.tvl).toFixed(2)} />
                  </div>
                </div>
                <div className="basis-3/6 lg:mt-6">
                  <div className="text-xs font-medium text-[#666666] mb-1.5">24h Fees</div>
                  <div className="text-[26px] font-medium">
                    $<NumberAnimation value={Number(item.h24Fees).toFixed(2)} />
                  </div>
                </div>
              </div>
              <div className="grow pl-6 pr-8 bg-[#EDF0F2] rounded-xl bg-opacity-50">
                <div className="text-base text-[#666666] pt-4  pb-5">Total Tokens Locked</div>
                <div className=" flex items-center justify-between pb-5">
                  <div className="flex items-center">
                    <img className="w-6" alt="" src={item.topUrl}></img>
                    <span className="ml-2 text-base font-medium">{item.topName}</span>
                  </div>
                  <div>
                    <span className="text-base font-medium">
                      <NumberAnimation value={Number(item.topAmount).toFixed(2)} />
                    </span>
                  </div>
                </div>
                <div className=" flex items-center justify-between pb-6">
                  <div className="flex items-center">
                    <img className="w-6" alt="" src={item.downUrl}></img>
                    <span className="ml-2 text-base font-medium">{item.downName}</span>
                  </div>
                  <div>
                    <span className="text-base font-medium">
                      <NumberAnimation value={Number(item.downAmount).toFixed(2)} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
