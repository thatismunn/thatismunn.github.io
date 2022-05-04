declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'

interface BiographySample {
  key: string,
  value: string
}

interface BiographyContactSample extends BiographySample {
  url: string,
  hiddenPrint?: boolean
}

interface EducationSample {
  year: string[],
  title: string,
  description: string,
  subdescription?: string
}

interface WorksSample {
  title: string,
  position: string,
  src: string,
  url: string,
  alt?: string
}
