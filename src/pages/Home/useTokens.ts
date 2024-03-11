import { useEffect, useState } from 'react'

const defaultData = [
  {
    id: 1,
    symbol: 'ETH',
    name: 'Ether',
    price: '12.35',
    priceChange: true,
    priceChangeValue: '0.25',
    Volume: '5646',
    tvl: '7979'
  },
  {
    id: 2,
    symbol: 'TOP',
    name: 'Top',
    price: '445.35',
    priceChange: false,
    priceChangeValue: '0.65',
    Volume: '68945',
    tvl: '31564'
  },
  {
    id: 3,
    symbol: 'USDT',
    name: 'usdt',
    price: '55.35',
    priceChange: true,
    priceChangeValue: '0.95',
    Volume: '1256',
    tvl: '89613'
  }
]
export function useTokens(sort: boolean) {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<any>([])

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
      setData(defaultData)
    }, 2000)
  })
  if (sort) {
    defaultData.sort((a, b) => {
      return Number(a.tvl) - Number(b.tvl)
    })
  } else {
    defaultData.sort((a, b) => {
      return Number(b.tvl) - Number(a.tvl)
    })
  }
  return {
    data,
    loading
  }
}
