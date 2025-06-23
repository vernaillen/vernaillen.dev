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
  text: string
  contract?: string
  date: string
  project: string
  projectUrl?: string
  role: string
  stack: string
  imageUrl?: string
  id: string
}

export interface Technology {
  label: string
  icon: string
  value: number
  color: string
  class: string
}
export interface ReleaseInfo {
  id: string
  type: string
  repo: string
  title: string
  commit: string
  created_at: string
  version: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any
}
export interface Contributions {
  user: {
    username: string
    name: string
    avatar: string
  }
  prs: {
    repo: string
    title: string
    url: string
    created_at: string
    state: 'merged' | 'open' | 'closed'
    number: string
  }[]
}
