export interface MenuState {
  hoveredPath: string
  activePath: string
}

export interface Project {
  title: string
  description: string
  to: string
  target: string
  categories: string[]
  image: {
    src: string
    alt: string
  }
}
