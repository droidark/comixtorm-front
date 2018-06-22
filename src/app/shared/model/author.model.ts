import {Role} from './role.model';

export class Author {
  id: number;
  name: string;
  avatar: string;
  boigraphy: string;
  roles: Role[];
}
