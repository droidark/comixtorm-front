import {Title} from './title.model';
import {Profile} from './profile.model';
import {UserSocialNetwork} from './user-social-network.model';

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
  userSocialNetworks: UserSocialNetwork[];
}
