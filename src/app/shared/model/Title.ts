import {Issue} from './issue.model';
import {Publisher} from './publisher.model';

export class Title {
  id: number;
  name: string;
  vanity: string;
  avatar: string;
  totalIssues: string;
  launchDate: Date;
  publisher: Publisher;
  issues: Issue[];
}
