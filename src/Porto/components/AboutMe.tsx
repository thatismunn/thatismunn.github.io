import FullPict from '../img/mul2.png'

function AboutMe({active}: {active: boolean}) {
  const data = [
    ['Gender', 'Male'],
    ['Religion', 'Islam'],
    ['Hometown', 'Makassar, South Sulawesi (Indonesia)'],
    ['Current City', 'Makassar, South Sulawesi (Indonesia)'],
    ['Hobby', 'Gaming, Writing, and Watching Movie'],
    ['Interest', 'Technology, Game, Cinematography, Sports, and Economy'],
  ]

  const render = () => (
    <>
      {/* Desktop */}
      <div className='grid-cols-2 lg:grid hidden h-screen'>
        {/* Pict */}
        <div className='col-span-1 bg-center bg-cover flex animate__animated animate__fadeIn animate__faster' style={{backgroundImage: `url(${FullPict})`}}>
          <p className="mt-auto mr-auto mb-14 ml-12">Pict by</p>
        </div>

        {/* Tulisan */}
        <div className='col-span-1 flex text-primary'>
          <div className='my-auto mx-32'>
            <p className='text-5xl font-bold pb-3 underline decoration-1 underline-offset-[0.5rem] animate__animated animate__fadeInDown animate__faster'>
              About <span className="text-secondary">Me</span>
            </p>
            <p className="py-3 text-xl animate__animated animate__fadeInRight animate__faster">
              An IT undergraduate student who is trying to establish himself to be able to compete in today's technological era. Have a desire to become a teacher in the future and develop technology both nationally and internationally.
            </p>
            <div className="pt-2 text-lg animate__animated animate__fadeInUp animate__faster">
              {
                data.map((v, i) => (
                  <div className="grid grid-cols-4" key={i}>
                    <div className="col-span-1">
                      <span className="text-secondary">{v[0]}</span>
                    </div>
                    <div className="col-span-3">
                      <span className="text-primary">{v[1]}</span>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className='lg:hidden h-screen bg-cover bg-center animate__animated animate__fadeIn animate__faster' style={{backgroundImage: `url(${FullPict})`}}>
        <div className="bg-base-100/80 backdrop-blur-sm h-full flex">
          <div className="my-auto mx-8 text-primary">
            <p className='text-xl font-bold pb-3 underline decoration-1 underline-offset-[0.5rem] text-center animate__animated animate__fadeInDown animate__faster'>
              About <span className="text-secondary">Me</span>
            </p>
            <p className="py-3 text-lg text-center animate__animated animate__fadeInRight animate__faster">
              An IT undergraduate student who is trying to establish himself to be able to compete in today's technological era. Have a desire to become a teacher in the future and develop technology both nationally and internationally.
            </p>
            <div className="pt-2 animate__animated animate__fadeInUp animate__faster">
              {
                data.map((v, i) => (
                  <div className="grid grid-cols-4 gap-10" key={i}>
                    <div className="col-span-1">
                      <span className="text-secondary">{v[0]}</span>
                    </div>
                    <div className="col-span-3">
                      <span className="text-primary">{v[1]}</span>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )

  return (<>{active && render()}</>)
}

export default AboutMe
