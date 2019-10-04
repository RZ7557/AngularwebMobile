import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Liste } from 'src/model/liste';
import { Guid } from 'guid-typescript';
import { DataHttpService } from 'src/services/data-http.service';
import { DataService } from 'src/services/data.service';
import { MessageService } from 'primeng/components/common/messageservice';

@Injectable({
  providedIn: 'root'
})
export class DataHttpCacheService extends DataHttpService {
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  getListes(): Promise<Liste[]> {
    var resultat = super.getListes().then(r => {
      localStorage.setItem('listes', JSON.stringify(r));
      return r;
    });
    resultat.catch(() => {
      var listeEnJson = localStorage.getItem('listes');
      var listeObjects = JSON.parse(listeEnJson);
      var listeListes = listeObjects.map(o => {
        var l = new Liste(o);
        l.id = Guid.parse(o.id.value);
        return l;
      });
      return listeListes;
    });
    return resultat;
  }
}


// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  appName: 'Shopping liste (dev)',
  serviceUrl: 'http://localhost:4201',
  providers: [
    { provide: DataService, useClass: DataHttpCacheService },
    MessageService
  ]
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
