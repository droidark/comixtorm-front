import {Title} from './title.model';

export class Publisher {
  id: number;
  name: string;
  vanity: string;
  url: string;
  logo: string;
  information: string;
  titles: Title[];
}
