function Biography({active}: {active: boolean}) {
  const render = () => (
    <>
      <div className="flex h-screen">
        <p className="text-4xl m-auto animate__animated animate__fadeInUp">Coming Soon!</p>
      </div>
    </>
  )

  return (<>{active && render()}</>)
}

export default Biography
