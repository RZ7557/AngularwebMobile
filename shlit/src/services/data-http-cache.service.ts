import { Injectable } from '@angular/core';
import { DataHttpService } from './data-http.service';
import { HttpClient } from '@angular/common/http';
import { Liste } from 'src/model/liste';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root'
})
export class DataHttpCacheService extends DataHttpService {
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  async getListes(): Promise<Liste[]> {
    try {
      var listes = await super.getListes();
      localStorage.setItem('listes', JSON.stringify(listes));
      return listes;
    } catch (error) {
      var listeEnJson = localStorage.getItem('listes');
      var listeObjects = JSON.parse(listeEnJson);
      var listeListes = listeObjects.map(o => {
        var l = new Liste(o);
        l.id = Guid.parse(o.id.value);
        return l;
      });
      return listeListes;
    }
  }
}
