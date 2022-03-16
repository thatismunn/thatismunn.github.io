function Biography() {
  return (
    <div className="p-5">
      <div className="grid grid-cols-6 h-max">

        {/* Biodata */}
        <div className="col-span-6 sm:col-span-4">
          <div className="w-min">
            <span className="text-xl">Ikramullah</span>
            <span className="ml-5 text lg">Ikram</span>
          </div>
          <div className="w-auto mt-2">
            <span className="text-xl mb-1">Profile</span>
            <div className="grid grid-cols-6">
              <div className="col-span-2 bg-stone-300 px-1 mx-4 my-1">
                <p className="font-bold">Gender</p>
              </div>
              <div className="col-span-4 my-1"><p>Male</p></div>
              <div className="col-span-2 bg-stone-300 px-1 mx-4 my-1">
                <p className="font-bold">Status</p>
              </div>
              <div className="col-span-4 my-1"><p>Single</p></div>
              <div className="col-span-2 bg-stone-300 px-1 mx-4 my-1">
                <p className="font-bold">Religion</p>
              </div>
              <div className="col-span-4 my-1"><p>Islam</p></div>
              <div className="col-span-2 bg-stone-300 px-1 mx-4 my-1">
                <p className="font-bold">Hometown</p>
              </div>
              <div className="col-span-4 my-1"><p>Makassar, South Sulawesi</p></div>
              <div className="col-span-2 bg-stone-300 px-1 mx-4 my-1">
                <p className="font-bold">Current City</p>
              </div>
              <div className="col-span-4 my-1"><p>Makassar, South Sulawesi</p></div>
              <div className="col-span-2 bg-stone-300 px-1 mx-4 my-1">
                <p className="font-bold">Nationality</p>
              </div>
              <div className="col-span-4 my-1"><p>Makassar</p></div>
              <div className="col-span-2 bg-stone-300 px-1 mx-4 my-1">
                <p className="font-bold">Hobby</p>
              </div>
              <div className="col-span-4 my-1"><p>Gaming, Writing, and Watching Movie</p></div>
              <div className="col-span-2 bg-stone-300 px-1 mx-4 my-1">
                <p className="font-bold">Interest</p>
              </div>
              <div className="col-span-4 my-1"><p>Technology, Sports (Football & Badminton), Game, Cinematography, Economy (Crypto & Stocks).</p></div>
            </div>
          </div>
          <span className="text-xl mb-1">Contact</span>
          <div className="grid grid-cols-6">
            <div className="col-span-2 bg-stone-300 px-1 mx-4 my-1">
              <p className="font-bold">E-Mail</p>
            </div>
            <div className="col-span-4 my-1">
              <p>
                <a href="mailto:ikramullahzx@gmail.com">ikramullahzx@gmail.com</a>
              </p>
            </div>
            <div className="col-span-2 bg-stone-300 px-1 mx-4 my-1">
              <p className="font-bold">GitHub</p>
            </div>
            <div className="col-span-4 my-1">
              <p>
                <a href="https://github.com/thatismunn">github://thatismunn</a>
              </p>
            </div>
            <div className="col-span-2 bg-stone-300 px-1 mx-4 my-1">
              <p className="font-bold">Facebook</p>
            </div>
            <div className="col-span-4 my-1">
              <p>
                <a href="https://fb.me/ikram.sekai">Ikramullah Ikram</a>
              </p>
            </div>
            <div className="col-span-2 bg-stone-300 px-1 mx-4 my-1">
             <p className="font-bold">Twitter</p>
            </div>
            <div className="col-span-4 my-1">
              <p>
                <a href="https://twitter.com/ikr4mm_">@ikr4mm_</a>
              </p>
            </div>
            <div className="col-span-2 bg-stone-300 px-1 mx-4 my-1">
              <p className="font-bold">Telegram</p>
            </div>
            <div className="col-span-4 my-1">
              <p>
                <a href="https://t.me/ikr4_m">@ikr4_m</a>
              </p>
            </div>
            <div className="col-span-2 bg-stone-300 px-1 mx-4 my-1">
              <p className="font-bold">LinkedIn</p>
            </div>
            <div className="col-span-4 my-1">
              <p>
                <a href="https://www.linkedin.com/in/ikramullah-ikram/">Ikramullah Ikram</a>
              </p>
            </div>
          </div>
        </div>

        {/* Carousel Photo */}
        <div className="col-span-2 flex hidden sm:block">
          <p className="mx-auto text-center">
            Ini rencananya foto, tapi gatau sapa yang mau ambil fotonya
          </p>
        </div>

      </div>
    </div>
  )
}

export default Biography
