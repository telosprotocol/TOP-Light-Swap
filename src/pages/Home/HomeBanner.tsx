import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import Banner1 from '../../assets/images/banner1.png'
import Banner2 from '../../assets/images/banner2.png'

import { Pagination } from 'swiper'

export default function HomeBanner() {
  return (
    <div className=" mb-12">
      <Swiper pagination={true} modules={[Pagination]} className="">
        <SwiperSlide>
          <img src={Banner1} alt={''} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Banner2} alt={''} />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
