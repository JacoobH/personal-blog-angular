import {Article} from './article';

export class Comment {
  constructor(
    public article: Article,
    public content: string,
    public time: string
  ) { }
}
