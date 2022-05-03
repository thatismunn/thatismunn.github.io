import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Mousewheel, EffectFade } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'

function Porto() {
  const [page, setPage] = useState(0)

  return (
    <div className="porto">
      <Swiper
        className="h-screen v-screen"
        spaceBetween={30}
        direction={'vertical'}
        pagination={{clickable: true}}
        mousewheel={true}
        effect={"fade"}
        modules={[EffectFade, Pagination, Mousewheel]}
        onSlideChange={swiper => {
          setPage(swiper.realIndex)
        }}
      >
        <SwiperSlide className='flex bg-gray-200'>
          <p className="m-auto text-5xl">Slide 1</p>
        </SwiperSlide>
        <SwiperSlide className='flex bg-gray-400'>
          <p className="m-auto text-5xl">Slide 2</p>
        </SwiperSlide>
        <SwiperSlide className='flex bg-gray-600'>
          <p className="m-auto text-5xl">Slide 3</p>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Porto
