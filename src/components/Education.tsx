function Education() {
  function printEducationArray(data: EducationSample[]): JSX.Element[] {
    return data.map((v, i) => (
      <div className="py-1" key={i}>
        <div className="w-auto">
          <p className="bg-stone-300 pr-8 pl-2 w-max">{v.year[0] === v.year[1] ? v.year[0] : v.year.join("-")}</p>
          <p className="font-bold">{v.title}</p>
          <p>{v.description}</p>
          {!v.subdescription ? null : <p>{v.subdescription}</p>}
        </div>
      </div>
    ))
  }

  const formalEducationArr: EducationSample[] = [
    {
      year: ["2017", "2020"],
      title: "Vocational High School",
      description: "SMKS Mutiara Ilmu Makassar",
      subdescription: "Software Engineering Majors"
    },
    {
      year: ["2020", "current"],
      title: "University",
      description: "Dipa Makassar University",
      subdescription: "Technical Information"
    },
  ]

  const informalEducationArr: EducationSample[] = [
    {
      year: ["2019", "2019"],
      title: "Vocational Student Graduate Academy",
      description: "DIGITALENT Kominfo",
      subdescription: "Data Management Stuff"
    },
  ]

  const experienceArr: EducationSample[] = [
    {
      year: ["2018", "current"],
      title: "Backend Developer (Volunteer)",
      description: "Media Formasi"
    },
    {
      year: ["2020", "current"],
      title: "Senior Software Engineer",
      description: "PT. Kreasi Virtual Phoenix"
    }
  ]

  const awardsArr: EducationSample[] = [
    {
      year: ["2019", "2019"],
      title: "Indonesian Inter-Provincal Students Skill Competition",
      description: "IT Software Solution for Business",
      subdescription: "Runner Up"
    }
  ]

  return (
    <div className="pb-5">
      <p className="text-center text-xl">Education</p>
      <div className="grid grid-cols-2 gap-5">

        {/* Formal Education */}
        <div>
          <div className="col-span-2 bg-stone-300 px-1 mx-4 my-1">
            <p className="font-bold text-center mb-3">Formal Education</p>
          </div>
          {printEducationArray(formalEducationArr)}
        </div>

        {/* Informal Education */}
        <div>
          <div className="col-span-2 bg-stone-300 px-1 mx-4 my-1">
            <p className="font-bold text-center mb-3">Informal Education</p>
          </div>
          {printEducationArray(informalEducationArr)}
        </div>

        {/* Experience */}
        <div>
          <div className="col-span-2 bg-stone-300 px-1 mx-4 my-1">
            <p className="font-bold text-center mb-3">Experience</p>
          </div>
          {printEducationArray(experienceArr)}
        </div>

        {/* Awards */}
        <div>
          <div className="col-span-2 bg-stone-300 px-1 mx-4 my-1">
            <p className="font-bold text-center mb-3">Awards</p>
          </div>
          {printEducationArray(awardsArr)}
        </div>

      </div>
    </div>
  )
}

export default Education;
