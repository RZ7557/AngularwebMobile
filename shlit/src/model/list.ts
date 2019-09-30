import {Guid} from 'guid-typescript'
import { ListItem } from './list-item';
export class List{
  constructor(){
    this.id = Guid.create();
  }
  id: Guid;
  libelle: 'Nouvelle liste';
  theme: string;
  imageUrl: string;
  description: string;
  datecreation = Date;
  nbItemMax = 10;
  items: ListItem[];
}
