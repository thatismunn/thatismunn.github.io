import Background from '../img/biographyBG.webp'

function Biography({active}: {active: boolean}) {
  const render = () => (
    <div className='h-full bg-cover bg-center animate__animated animate__fadeIn animate__faster' style={{backgroundImage: `url(${Background})`}}>
      <div className="bg-base-100/90 backdrop-blur-sm h-full flex">
        <div className="m-auto">Coming Soon</div>
      </div>
    </div>
  )

  return (<>{active && render()}</>)
}

export default Biography
