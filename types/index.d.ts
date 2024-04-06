import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

export interface BlogPost extends ParsedContent {
  title: string
  description: string
  date: string
  image?: HTMLImageElement
  badge?: Badge
  authors?: ({
    name: string
    description?: string
    avatar?: Avatar
  } & Link)[]
}

export interface CareerStep {
  client: string
  contract?: string
  date: string
  project: string
  projectUrl?: string
  role: string
  stack: string
  imageUrl?: string
}
