import {Article} from './article';

export class Comment {
  constructor(
    public id: number,
    public article: Article,
    public content: string,
    public time: string
  ) { }
}
