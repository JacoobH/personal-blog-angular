export class Article {
  constructor(
    public id: number,
    public title: string,
    public date: Date,
    public visit: number,
    public content: string
  ) { }
}
