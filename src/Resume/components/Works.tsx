import KadinSulsel from '../img/works_kadinsulsel.png'
import MMSKadinSulsel from '../img/works_mmskadinsulsel.png'
import { useGlobalState } from '../../GlobalState'

function Work() {
  const { state } = useGlobalState()

  function generateSocialifySVG(username: string, repo: string): string {
    return `https://socialify.git.ci/${username}/${repo}/image?description=1&forks=1&issues=1&pulls=1&stargazers=1&theme=Light`
  }

  const renderArr: WorksSample[] = [
    {
      title: "Discord Template",
      position: "Owner",
      src: generateSocialifySVG("thatismunn", "Discord-Template"),
      url: "https://github.com/thatismunn/Discord-Template"
    },
    {
      title: "Coffee Break Discord Bot",
      position: "Project Leader",
      src: generateSocialifySVG("CoffeeBreak-Discord", "roadmap"),
      url: "https://github.com/CoffeeBreak-Discord/roadmap"
    },
    {
      title: "bellshade/Typescript",
      position: "Project Leader",
      src: generateSocialifySVG("bellshade", "Typescript"),
      url: "https://github.com/bellshade/Typescript"
    },
    {
      title: "bellshade/PHP",
      position: "Documentation",
      src: generateSocialifySVG("bellshade", "PHP"),
      url: "https://github.com/bellshade/PHP"
    },
    {
      title: "Kadin Sulsel",
      position: "Backend",
      src: KadinSulsel,
      alt: KadinSulsel,
      url: "https://kadinsulsel.id"
    },
    {
      title: "MMS Kadin Sulsel",
      position: "Fullstack",
      src: MMSKadinSulsel,
      alt: MMSKadinSulsel,
      url: "https://mms.kadinsulsel.id"
    }
  ]

  return (
    <div className={`pb-5 px-5 md:px-0 ${state.webMode && "hidden"}`}>
      <p className="text-center text-xl">Works</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {
          renderArr.map((v, i) => (
            <div key={i}>
              <a href={v.url} target="_blank" rel="noreferrer">
                <p className="text-lg text-center mb-2">{`${v.title} (${v.position})`}</p>
              </a>
              <img src={v.src} alt={!v.alt ? v.src : v.alt} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Work
