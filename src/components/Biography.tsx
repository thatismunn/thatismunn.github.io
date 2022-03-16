import MyPhoto from '../img/3x4.png'

function Biography() {
  const profileArr: BiographySample[] = [
    { key: "Gender", value: "Male" },
    { key: "Status", value: "Single" },
    { key: "Religion", value: "Islam" },
    { key: "Hometown", value: "Makassar, South Sulawesi" },
    { key: "Current City", value: "Makassar, South Sulawesi" },
    { key: "Nationality", value: "Indonesia" },
    { key: "Hobby", value: "Gaming, Writing, and Watching Movie" },
    {
      key: "Interest",
      value: "Technology, Sports (Football & Badminton), Game, Cinematography, Economy (Crypto & Stocks)."
    }
  ]

  const contactArr: BiographyContactSample[] = [
    {
      key: "E-Mail",
      value: "ikramullahzx@gmail.com",
      url: "mailto:ikramullahzx@gmail.com"
    },
    {
      key: "GitHub",
      value: "github://thatismunn",
      url: "https://github.com/thatismunn"
    },
    {
      key: "Facebook",
      value: "Ikramullah Ikram",
      url: "https://fb.me/ikram.sekai"
    },
    {
      key: "Twitter",
      value: "@ikr4mm_",
      url: "https://twitter.com/ikr4mm_"
    },
    {
      key: "Telegram",
      value: "@ikr4_m",
      url: "https://t.me/ikr4_m"
    },
    {
      key: "LinkedIn",
      value: "Ikramullah Ikram",
      url: "https://www.linkedin.com/in/ikramullah-ikram"
    }
  ]

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
            {
              profileArr.map((v, i) => (
                <div className="grid grid-cols-6" key={i}>
                  <div className="col-span-2 bg-stone-300 px-1 mx-4 my-1">
                    <p className="font-bold">{v.key}</p>
                  </div>
                  <div className="col-span-4 my-1"><p>{v.value}</p></div>
                </div>
              ))
            }
            <span className="text-xl mb-1">Contact</span>
            {
              contactArr.map((v, i) => (
                <div className="grid grid-cols-6" key={i}>
                  <div className="col-span-2 bg-stone-300 px-1 mx-4 my-1">
                    <p className="font-bold">{v.key}</p>
                  </div>
                  <div className="col-span-4 my-1">
                    <p>
                      <a href={v.url} target="_blank">{v.value}</a>
                    </p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>

        {/* Photo */}
        <div className="col-span-2 hidden sm:block">
          <img src={MyPhoto} alt="MyPhoto" placeholder="This image was uploaded in 16 March 2022" />
        </div>

      </div>
    </div>
  )
}

export default Biography
