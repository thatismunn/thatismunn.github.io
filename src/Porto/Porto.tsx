import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Mousewheel, Scrollbar } from 'swiper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LoadingGIF from './img/loading.gif'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
  faTelegram
} from '@fortawesome/free-brands-svg-icons'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import 'animate.css'

import HeroBanner from './components/HeroBanner'
import AboutMe from './components/AboutMe'

function Porto() {
  const [isLoading, setIsLoading] = useState(true)
  const [changingPage, setChangingPage] = useState(false)
  const [page, setPage] = useState(0)
  const snsList = [
    {
      icon: faFacebook,
      hover: 'Facebook',
      url: 'https://fb.me/ikram.sekai'
    },
    {
      icon: faTwitter,
      hover: 'Twitter',
      url: 'https://twitter.com/ikr4mm_'
    },
    {
      icon: faInstagram,
      hover: 'Instagram',
      url: 'https://instagram.com/ikr.4m_'
    },
    {
      icon: faGithub,
      hover: 'Github',
      url: 'https://github.com/thatismunn'
    },
    {
      icon: faLinkedin,
      hover: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ikramullah-ikram'
    },
    {
      icon: faTelegram,
      hover: 'Telegram',
      url: 'https://t.me/ikr4_m'
    }
  ]

  const titleNavbar = [
    'Ikramullah',
    'About Me',
    'Biography',
    'Project',
    'Skills',
    'Contact'
  ]

  // Loading Screen
  useEffect(() => {
    const uncheckLoading = () => setIsLoading(false)
    window.addEventListener('load', uncheckLoading)
    
    // Double execute, soalnya ngebug untuk loadingnya
    uncheckLoading()

    return () => {
      window.removeEventListener('load', uncheckLoading)
    }
  }, [])

  const whenChangePage = (swiper: SwiperCore) => {
    setChangingPage(!changingPage)
  }

  const afterChangePage = (swiper: SwiperCore) => {
    setPage(swiper.realIndex)
    setChangingPage(!changingPage)
  }

  const renderSNS = () => (
    <>
      {
        snsList.map((v, i) => (
          <a href={v.url} title={v.hover} rel='noreferrer' target='_blank' key={i}>
            <button className="btn btn-ghost normal-case">
              <FontAwesomeIcon icon={v.icon} size='1x' />
            </button>
          </a>
        ))
      }
    </>
  )

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
          <div className="navbar-start ml-10">
            <p className={`btn btn-ghost normal-case text-xl ${!changingPage ? 'flex': 'hidden'}`}>
              {titleNavbar[page]}
            </p>
          </div>

          {/* Navbar End */}
          <div className="navbar-end mr-10">
            <div className="dropdown dropdown-end">
              <button className="btn btn-ghost btn-circle" tabIndex={0}>
                <FontAwesomeIcon icon={faBars} />
              </button>
              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <Link to='/'>Homepage</Link>
                </li>
                <li>
                  <Link to='/resume'>Portfolio</Link>
                </li>
              </ul>
            </div>
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
          onSlideChangeTransitionStart={whenChangePage}
          onSlideChangeTransitionEnd={afterChangePage}
        >
          <SwiperSlide children={<HeroBanner active={page === 0} />} />
          <SwiperSlide children={<AboutMe active={page === 1} />} />
        </Swiper>
      </div>

      {/* Footer */}
      <footer className="navbar fixed w-full bottom-0 z-50" style={{backgroundColor: 'transparent'}}>
        {/* Navbar Start */}
        <div className="lg:flex hidden navbar-start ml-10">
          <p className="text-md">
            &copy; 2022-{new Date().getFullYear()}, All rights reserved.
          </p>
        </div>

        {/* Navbar Center */}
        <div className="lg:hidden flex navbar-center w-screen">
          <div className="mx-auto">
            {renderSNS()}
          </div>
        </div>

        {/* Navbar End */}
        <div className="lg:flex hidden navbar-end mr-10">
          {renderSNS()}
        </div>
      </footer>
    </div>
  )
}

export default Porto
