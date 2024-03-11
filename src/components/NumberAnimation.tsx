import React from 'react'
import CountUp from 'react-countup'

const NumberAnimation = ({ value }: { value: any }) => {
  return <CountUp end={Number(value)} duration={1} decimals={2} />
}

export default NumberAnimation
