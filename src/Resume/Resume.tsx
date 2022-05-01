import { GlobalStateProvider } from '../GlobalState'
import Header from './components/Header'
import Biography from './components/Biography'
import Education from './components/Education'
import Skills from './components/Skills'
import Work from './components/Works'

function App() {
  return (
    <div className="App max-w-4xl mx-auto pb-3 px-0 md:px-3">
      <GlobalStateProvider>
        <Header />
        <Biography />
        <Education />
        <Skills />
        <Work />
        <div className="border-t border-stone-900 pt-3 mb-3 flex justify-between items-center">
          <p>(C) Ikramullah - All rights reserved.</p>
          <p>Made with ❤️.</p>
        </div>
      </GlobalStateProvider>
    </div>
  )
}

export default App
