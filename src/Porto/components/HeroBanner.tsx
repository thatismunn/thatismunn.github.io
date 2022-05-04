import HeroChara from '../img/mul2TR.png'
import { ReactTypical } from '@deadcoder0904/react-typical'
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
  faTelegram
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

function HeroBanner() {
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
  return (
    <>
      {/* Desktop Layout */}
      <div className='grid-cols-2 lg:grid hidden h-screen'>
        <div className="col-span-1 flex">
          <div className="my-auto mx-28">
            <div className="text-5xl text-primary font-bold">
              <p className='py-3'>
                <span className="text-secondary">
                  {'<b>'}
                </span>
                <ReactTypical steps={['Hello!', 6000, 'Hello world!', 10000]} loop={Infinity} wrapper='span' />
                <span className="text-secondary">
                  {'</b>'}
                </span>
              </p>
              <p className='py-3'>
                I'm <span className="text-secondary">Ikram</span>, a developer!
              </p>
              <Link to='/resume'>
                <button className="py-3 mt-5 btn-outline btn btn-primary btn-wide">
                  Resume
                </button>
              </Link>
            </div>
            <p className='text-xl py-4 text-primary'>Scroll down!</p>
          </div>
        </div>

        <div className="col-span-1 bg-contain bg-no-repeat bg-left-bottom flex" style={{backgroundImage: `url(${HeroChara})`}}>
          <div className="ml-auto mt-auto mr-10 mb-16">
            <p>
              pixel art from&nbsp;
              <a href='https://www.facebook.com/yuuuuts'>
                yuuuuts
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Phone/Tablet Layout */}
      <div className="grid-cols-2 lg:hidden grid">
        <div className="col-span-1">Foo</div>
        <div className="col-span-1">Bar</div>
      </div>

      {/* Footer */}
      <footer className="navbar fixed w-full bottom-0 z-49" style={{backgroundColor: 'transparent'}}>
        {/* Navbar Start */}
        <div className="lg:flex hidden navbar-start ml-10">
          <p className="text-md">
            &copy; 2022 - {new Date().getFullYear()} Ikramullah. All rights reserved.
          </p>
        </div>

        {/* Navbar End */}
        <div className="lg:flex hidden navbar-end mr-10">
          {
            snsList.map((v, i) => (
              <a href={v.url} title={v.hover} rel='norreferrer' target='_blank'>
                <button className="btn btn-ghost normal-case">
                  <FontAwesomeIcon icon={v.icon} size='1x' />
                </button>
              </a>
            ))
          }
        </div>
      </footer>
    </>
  )
}

export default HeroBanner
