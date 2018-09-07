import {Title} from './title.model';
import {PublisherSocialNetwork} from './publisher-social-network.model';

export class Publisher {
  id: number;
  name: string;
  vanity: string;
  url: string;
  logo: string;
  information: string;
  titles: Title[];
  publisherSocialNetwork: PublisherSocialNetwork[];
}
