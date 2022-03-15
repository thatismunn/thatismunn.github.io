import Logo from '../img/munn_transparent.png'

function Header() {
  return (
    <div className="container mx-auto px-5 pt-5 lg:pt-10 header-container">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <p className="text-xl">Ikramullah's Portofolio</p>
          <p className="text-base">My "hard" work repository.</p>
        </div>
        <img className="w-20 hidden sm:block" src={Logo} alt="Logo" />
      </div>
      <hr className="h-1 bg-stone-900 mt-5" />
    </div>
  )
}

export default Header
