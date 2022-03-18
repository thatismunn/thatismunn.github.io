function Skills() {
  function printSkillsArray(data: string[]): JSX.Element[] {
    return data.map((v, i) => (
      <div className="py-1" key={i}>
        <div className="w-auto">
          <p className="text-center">{v}</p>
        </div>
      </div>
    ))
  }

  const progLangArr: string[] = [
    "NodeJS/Deno", "PHP", "C#", "CSS/SASS",
    "Python", "Java"
  ]

  const progFrameArr: string[] = [
    "Laravel", "Bootstrap", "Tailwinds", "React",
    "Vue", "DiscordJS/DiscordNET"
  ]

  const toolsArr: string[] = [
    "Corel Draw", "Inkscape", "Adobe Photoshop", "GIMP",
    "Adobe Premiere Pro", "DaVinci Resolve",
    "Microsoft Office"
  ]

  return (
    <div className="pb-5 px-5 md:px-0">
      <p className="text-center text-xl">Skills</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        {/* Programming Language */}
        <div>
          <div className="bg-stone-300 px-1 mx-4 my-1">
            <p className="font-bold text-center mb-3">Programming Language</p>
          </div>
          {printSkillsArray(progLangArr)}
        </div>

        {/* Framework */}
        <div>
          <div className="bg-stone-300 px-1 mx-4 my-1">
            <p className="font-bold text-center mb-3">Framework/Library</p>
          </div>
          {printSkillsArray(progFrameArr)}
        </div>

        {/* Mentoring */}
        <div className="md:col-span-2">
          <div className="bg-stone-300 px-1 mx-4 my-1">
            <p className="font-bold text-center mb-3">Tools</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3">
            {printSkillsArray(toolsArr)}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Skills;
