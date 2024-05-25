import * as url from 'url'

export interface IArticle {
  id: number
  createdAt: Date | string
  title: string
  preview: string
  image: string | URL
  description: string
}
