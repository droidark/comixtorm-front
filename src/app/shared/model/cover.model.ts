import {Issue} from './issue.model';

export class Cover {
  id: number;
  coverImageUrl: string;
  issues: Issue[];
}
