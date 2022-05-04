function AboutMe({active}: {active: boolean}) {
  const render = () => (
    <>
      <div className="flex h-screen w-screen">
        <p className="text-9xl text-center m-auto animate__animated animate__fadeInUp">Still In Progress!</p>
      </div>
    </>
  )

  return (<>{active && render()}</>)
}

export default AboutMe
