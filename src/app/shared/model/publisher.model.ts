import {Title} from './Title';

export class Publisher {
  id: number;
  name: string;
  vanity: string;
  url: string;
  logo: string;
  information: string;
  titles: Title[];
}
