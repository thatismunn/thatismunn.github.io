import Logo from '../img/munn_transparent.png'

function Header() {
  return (
    <div className="px-5 pt-5 lg:p-10">
      <div className="max-w-4xl mx-auto pb-3 border-b border-stone-900">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <p className="text-xl">Ikramullah's Portofolio</p>
            <p className="text-base">My "hard" work repository.</p>
          </div>
          <img className="w-20 hidden sm:block" src={Logo} alt="Logo" />
        </div>
      </div>
    </div>
  )
}

export default Header
