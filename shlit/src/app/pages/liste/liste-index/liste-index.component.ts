import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-index',
  templateUrl: './liste-index.component.html',
  styleUrls: ['./liste-index.component.scss']
})
export class ListeIndexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  dateCourant = new Date();
  listnumber= [2,3,6,9];

}
