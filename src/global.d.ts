declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'

interface BiographySample {
  key: string,
  value: string
}

interface BiographyContactSample extends BiographySample {
  url: string
}
