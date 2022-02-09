export class movie {
  id?: string
  title: string
  score: number
  imgUrl: string
  description: string

  constructor(id:string, title:string, popularity:number, poster_path:string, overview:string){
    this.id = id
    this.title = title
    this.score = Math.round(popularity)
    this.imgUrl = 'https://image.tmdb.org/t/p/w500/' + poster_path
    this.description = overview

  }
}


export interface MovieApiObject {
  results: [{id:string, title:string, popularity:number, poster_path:string, overview:string}]
  page: string
  total_pages: number
  total_results: number
}
