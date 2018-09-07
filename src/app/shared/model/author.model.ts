import {Role} from './role.model';
import {Issue} from './issue.model';
import {AuthorSocialNetwork} from './author-social-network.model';

export class Author {
  id: number;
  name: string;
  avatar: string;
  boigraphy: string;
  issues: Issue[];
  roles: Role[];
  authorSocialNetwork: AuthorSocialNetwork[];
}
