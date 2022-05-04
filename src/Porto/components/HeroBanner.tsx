import HeroChara from '../img/mul2TR.png'
import { ReactTypical } from '@deadcoder0904/react-typical'
import { Link } from 'react-router-dom'

function HeroBanner() {
  return (
    <>
      {/* Desktop Layout */}
      <div className='grid-cols-2 lg:grid hidden h-screen'>
        <div className="col-span-1 flex">
          <div className="my-auto mx-28">
            <div className="text-5xl text-primary font-bold animate__animated animate__fadeInLeft animate__faster" data-aos='fade-up'>
              <p className='py-3'>
                <span className="text-secondary">
                  {'$ '}
                </span>
                <ReactTypical steps={['echo "Hello!"', 6000, 'echo "Hello world!"', 10000]} loop={Infinity} wrapper='span' />
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
            <p className='text-xl py-4 text-primary animate__animated animate__fadeInUp animate__faster'>Scroll down for more information!</p>
          </div>
        </div>

        <div className="col-span-1 bg-contain bg-no-repeat bg-left-bottom flex animate__animated animate__fadeInRight animate__fast" style={{backgroundImage: `url(${HeroChara})`}}>
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
    </>
  )
}

export default HeroBanner
