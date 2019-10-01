import { Injectable } from '@angular/core';

import { Liste } from 'src/model/liste';
import { Guid } from 'guid-typescript';
import { DataService } from './data-service';

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
    // cette fonction renvoit une promesse
    // qui renvoit la liste des listes
    // Au bout de 2 secondes
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.listeDeListe);
      }, 2000);
    });
  }
  getListe(id: Guid): Promise<Liste> {
    // Recherche de la liste dans le tableau
    const listeCherchee = this.listeDeListe.find(l => l.id.equals(id));
    if (listeCherchee) {
      // Si trouvee, on résoud la promesse
      return Promise.resolve(listeCherchee);
    } else {
      // La promesse est rejetée
      return Promise.reject(new Error("La liste n'existe pas"));
    }
  }
}
