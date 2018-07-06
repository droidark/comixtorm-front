import {Author} from './author.model';

export class Role {
  id: number;
  description: string;
  authors: Author[];
}
