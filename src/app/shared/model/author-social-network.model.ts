import {Author} from './author.model';

export class AuthorSocialNetwork {
  id: number;
  socialNetworkName: string;
  socialNetworkNickname: string;
  socialNetworkUrl: string;
  author: Author;
}
