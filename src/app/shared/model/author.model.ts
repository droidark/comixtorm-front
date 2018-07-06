import {Role} from './role.model';
import {Issue} from './issue.model';

export class Author {
  id: number;
  name: string;
  avatar: string;
  boigraphy: string;
  issues: Issue[];
  roles: Role[];
}
