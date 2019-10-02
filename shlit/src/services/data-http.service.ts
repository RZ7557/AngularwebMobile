import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Guid } from 'guid-typescript';
import { Liste } from 'src/model/liste';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataHttpService extends DataService {
  constructor(private httpClient: HttpClient) {
    super();
  }
  validateItemFromList(
    idItem: Guid,
    idListe: Guid,
    valide: boolean
  ): Promise<void> {
    throw new Error('Method not implemented.');
  }
  removeItemFromListe(idItem: Guid, idListe: Guid): Promise<void> {
    throw new Error('Method not implemented.');
  }
  getListes(): Promise<Liste[]> {
    return (
      this.httpClient
        // Envois la requête sur le serveur
        .get<any[]>('http://localhost:4201/liste')
        // Crée une promesse avec le resultat
        // Le resultat est un tableau
        .toPromise()
        // Crée une nouvelle promesse avec un tableau de liste
        .then(tab =>
          tab.map(
            e =>
              new Liste({
                id: Guid.parse(e.id.value),
                libelle: e.libelle
              })
          )
        )
    );
  }
  getListe(id: Guid): Promise<Liste> {
    return (
      this.httpClient
        // Requete vers le serveur
        .get<any>(`http://localhost:4201/liste/${id.toString()}`)
        // On obtient la promesse
        .toPromise()
        // On transforme l'objet recu
        // {"libelle":"Les merveilles du monde","nbItemsMax":20,"items":[],"id":{"value":"b7f40fb3-cbb5-bfe9-77e7-167ef94a185c"},"dateCreation":"2019-10-02T12:00:15.629Z","theme":"Géographie"}
        // En liste avec le constructeur de Liste
        .then(o => {
          var l = new Liste(o);
          l.id = Guid.parse(o.id.value);
          return l;
        })
    );
  }
  addItemToListe(id: Guid, libelle: string): Promise<void> {
    return this.httpClient
      .post<void>('http://localhost:4201/liste/' + id.toString(), { libelle })
      .toPromise();
  }
}
