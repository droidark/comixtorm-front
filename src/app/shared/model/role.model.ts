import {Author} from './author.model';
import {Issue} from './issue.model';

export class Role {
  id: number;
  description: string;
  issues: Issue[];
  authors: Author[];
}
