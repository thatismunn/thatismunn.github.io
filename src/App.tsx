import Header from './components/Header'
import Biography from './components/Biography'
import Education from './components/Education'
import './css/index.css'

function App() {
  return (
    <div className="App max-w-4xl mx-auto pb-3">
      <Header />
      <Biography />
      <Education />
      <p className="py-10 text-5xl text-center">STILL IN DEVELOPMENT</p>
    </div>
  )
}

export default App
