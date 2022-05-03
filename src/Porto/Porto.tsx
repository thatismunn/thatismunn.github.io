import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Mousewheel } from 'swiper'

function Porto() {
  const [page, setPage] = useState(0)

  return (
    <div className="porto">
      <Swiper
        className='h-screen w-screen'
        spaceBetween={15}
        direction={'vertical'}
        pagination={{clickable: true}}
        mousewheel={true}
        modules={[Pagination, Mousewheel]}
        onSlideChange={swiper => setPage(swiper.realIndex)}
      >
        {
          // Simulasi ganti page
          "Slide|".repeat(3).split('|').slice(0,3).map((v, i) => (
            <SwiperSlide key={i} className='bg-gray-300 flex'>
              <p className="m-auto text-9xl">{v} {page + 1}</p>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

export default Porto
