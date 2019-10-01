import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Guid } from 'guid-typescript';

import { Liste } from 'src/model/liste';
import { DataService } from 'src/services/data-service';

@Component({
  selector: 'app-liste-details',
  templateUrl: './liste-details.component.html',
  styleUrls: ['./liste-details.component.scss']
})
export class ListeDetailsComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private service: DataService
  ) {}

  liste: Liste = undefined;
  error: string = undefined;

  addItem(libelle: string) {
    this.service.addItemToList(this.liste.id, libelle).then(() => {
      alert('Terminé');
    });
  }




  //sync ngOnInit() {  ---> asi try avec await
  async ngOnInit() {
    var id = this.activatedRoute.snapshot.params.id;
    var guid = Guid.parse(id);
    // je demande la liste au service
    this.service
      .getListe(guid)
      .then(resultat => {
        // Quand la liste est là (promesse résolue)
        // Je la mets dans la propriété liste de mon component
        this.liste = resultat;
      })
      .catch(e => {
        this.error = e.message;
      });
    // try {
    //   this.liste = await this.service.getListe(id);
    // } catch (error) {
    //   this.error = error.message;
    // }
  }
}
