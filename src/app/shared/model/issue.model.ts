import {Cover} from './cover.model';
import {Title} from './title.model';
import {Author} from './author.model';

export class Issue {
  id: number;
  name: string;
  vanity: string;
  number: number;
  printPrice: number;
  digitalPrice: number;
  currency: string;
  publishedDate: string;
  shortReview: string;
  event: string;
  storyArch: string;
  isbn: number;
  collected: boolean;
  title: Title;
  covers: Cover[];
  authors: Author[];
}
