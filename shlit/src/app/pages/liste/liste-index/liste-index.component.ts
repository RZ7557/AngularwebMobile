import { Component, OnInit } from '@angular/core';
import { List } from 'src/model/list';

@Component({
  selector: 'app-liste-index',
  templateUrl: './liste-index.component.html',
  styleUrls: ['./liste-index.component.scss']
})
export class ListeIndexComponent implements OnInit {
  constructor() {}

  // La date courante est "calculée" ici, et cosommée
  // Dans le template html

  dateCourante = new Date();

  listeDeListe: List[] = [
    new List({
      libelle: 'Les merveilles du monde',
      nbItemsMax: 20,
      theme: 'Géographie'
    }),
    new List({
      libelle: 'Les meilleurs fromages',
      nbItemsMax: 20,
      theme: 'Alimentation'
    }),
    new List({
      libelle: 'Les meilleurs chocolats',
      nbItemsMax: 10,
      theme: 'Alimentation'
    })
  ];
  mavar = 1;

  ngOnInit() {}
}
