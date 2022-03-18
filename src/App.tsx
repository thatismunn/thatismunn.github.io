import Header from './components/Header'
import Biography from './components/Biography'
import Education from './components/Education'
import Skills from './components/Skills'

function App() {
  return (
    <div className="App max-w-4xl mx-auto pb-3 px-0 md:px-3">
      <Header />
      <Biography />
      <Education />
      <Skills />
      <p className="py-10 text-5xl text-center">STILL IN DEVELOPMENT</p>
    </div>
  )
}

export default App
