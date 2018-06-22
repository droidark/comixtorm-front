import {Title} from './Title';
import {Profile} from './profile.model';

export class User {
  id: number;
  username: string;
  email: string;
  avatar: string;
  cover: string;
  aboutYou: string;
  signUpDate: string;
  status: string;
  profiles: Profile[];
  titles: Title[];
}
