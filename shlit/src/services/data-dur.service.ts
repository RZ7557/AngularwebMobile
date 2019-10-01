import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Liste } from 'src/model/liste';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root'
})
export class DataDurService extends DataService {
  listeDeListe: Liste[] = [
    new Liste({
      libelle: 'Les merveilles du monde',
      nbItemsMax: 20,
      theme: 'Géographie'
    }),
    new Liste({
      libelle: 'Les meilleurs fromages',
      nbItemsMax: 20,
      theme: 'Alimentation'
    }),
    new Liste({
      libelle: 'Les meilleurs chocolats',
      nbItemsMax: 10,
      theme: 'Alimentation'
    })
  ];
  getListes(): Promise<Liste[]> {
    throw new Error('Method not implemented.');
  }
  getListe(id: Guid): Promise<Liste> {
    throw new Error('Method not implemented.');
  }
}
