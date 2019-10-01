import { Injectable } from '@angular/core';
import { Liste } from 'src/model/liste';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root'
})
export abstract class DataService {
  abstract getListes(): Promise<Liste[]>;
  abstract getListe(id: Guid): Promise<Liste>;
}
