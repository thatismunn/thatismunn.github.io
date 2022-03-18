import Logo from '../img/munn_transparent.png'

function Header() {
  return (
    <div className="px-5 pt-5 lg:pt-10 pb-4 border-b border-stone-900">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <p className="text-2xl font-bold">Ikramullah's Portofolio</p>
          <p className="text-base">My "hard" work repository.</p>
        </div>
        <img className="w-20 hidden md:block" src={Logo} alt="Logo" />
      </div>
    </div>
  )
}

export default Header
