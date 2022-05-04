import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Mousewheel, Scrollbar } from 'swiper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AOS from 'aos'
import LoadingGIF from './img/loading.gif'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'

import HeroBanner from './components/HeroBanner'

function Porto() {
  const [isLoading, setIsLoading] = useState(true)
  const [page, setPage] = useState(0)

  // Loading Screen
  useEffect(() => {
    const uncheckLoading = () => setIsLoading(false)
    window.addEventListener('load', uncheckLoading)
    AOS.init()

    return () => {
      window.removeEventListener('load', uncheckLoading)
      AOS.refreshHard()
    }
  }, [])

  return (
    <div className="porto">
      {
        isLoading && <div id="loading-screen" className='h-screen v-screen flex bg-primary'>
          <img src={LoadingGIF} alt='loadinggif' className="m-auto" />
        </div>
      }
      <div id="content" className={isLoading ? 'none' : 'block'} style={{display: isLoading ? 'none' : 'block'}}>
        <header className="navbar fixed w-full top-0 z-50" style={{backgroundColor: 'transparent'}}>
          {/* Navbar Start */}
          <div className="lg:flex hidden navbar-start ml-10">
            <p className="btn btn-ghost normal-case text-xl">Ikramullah</p>
          </div>

          {/* Navbar Center */}
          <div className="lg:flex hidden navbar-center">
            <ul className="menu menu-horizontal rounded-box">
              <li>
                <a className={page === 0 ? 'active' : ''} href="#index">Index</a>
              </li>
              <li>
                <a className={page === 1 ? 'active' : ''} href="#aboutme">About Me</a>
              </li>
              <li>
                <a className={page === 2 ? 'active' : ''} href="#biography">Biography</a>
              </li>
            </ul>
          </div>

          {/* Navbar End */}
          <div className="lg:flex hidden navbar-end mr-10">
            <button className="btn btn-ghost btn-circle">
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </header>

        <Swiper
          className="h-screen v-screen"
          spaceBetween={30}
          direction={'vertical'}
          pagination={{clickable: true}}
          mousewheel={true}
          scrollbar={true}
          modules={[Pagination, Mousewheel, Scrollbar]}
        >
          {/* 
            TODO List:
            - Hero Banner
            - About Me
            - Biography
            - Project
            - Skills
            - Contact
           */}
          <SwiperSlide children={<HeroBanner />} />
          <SwiperSlide children={<HeroBanner />} />
        </Swiper>
      </div>
    </div>
  )
}

export default Porto
