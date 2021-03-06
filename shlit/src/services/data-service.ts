import { Injectable } from '@angular/core';
import { Liste } from 'src/model/liste';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root'
})
export abstract class DataService {
  deleteItemFromListe(id: Guid) {
    throw new Error("Method not implemented.");
  }
  abstract removeItemFromListe(idItem: Guid, idListe: Guid): Promise<void>;
  abstract getListes(): Promise<Liste[]>;
  abstract getListe(id: Guid): Promise<Liste>;
  abstract addItemToListe(id: Guid, libelle: string): Promise<void>;
}
