import {Cover} from './cover.model';
import {Title} from './Title';

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
  title: Title;
  covers: Cover[];
  staff: Map<string,string>;
}
