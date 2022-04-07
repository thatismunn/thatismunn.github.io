import Logo from '../img/munn_transparent.png'
import { useGlobalState } from '../GlobalState'

function Header() {
  const { state, setState } = useGlobalState()
  function togglePrint() {
    setState(prev => ({ ...prev, webMode: !state.webMode }))
  }

  return (
    <div className="px-5 pt-5 lg:pt-10 pb-4 border-b border-stone-900">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <p className="text-2xl font-bold">Ikramullah's Portofolio</p>
          { !state.webMode && <p className="text-base">My "hard" work repository.</p> }
        </div>
        <img className="w-20 hidden md:block" src={Logo} alt="Logo" onClick={togglePrint} />
      </div>
    </div>
  )
}

export default Header
