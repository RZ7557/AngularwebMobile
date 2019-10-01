import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export  abstract  class  DataService {

  //constructor() { }
  abstract getListes(): Promise<Liste[]>;
  abstract getListe(id : Guid) / Promise<Liste> ;
}
