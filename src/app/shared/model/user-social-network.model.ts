import {User} from './user.model';

export class UserSocialNetwork {
  id: number;
  socialNetworkName: string;
  socialNetworkNickname: string;
  socialNetworkUrl: string;
  user: User;
}
