import { GlobalStateProvider } from '../GlobalState'
import Header from './components/Header'
import Biography from './components/Biography'
import Education from './components/Education'
import Skills from './components/Skills'
import Work from './components/Works'
import { useEffect } from 'react'

function App() {
  // Untuk balikin rapalan dari daisyui
  useEffect(() => {
    document.getElementById('root')?.classList.add('bg-stone-200')
    return () => {
      document.getElementById('root')?.classList.remove('bg-stone-200')
    }
  }, [])

  return (
    <div className="App max-w-4xl mx-auto pb-3 px-0 md:px-3 text-base-100" style={{fontFamily: 'Roboto Mono, monospace'}}>
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
