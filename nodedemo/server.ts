import express from 'express';
import { DataDurService } from './services/data-dur.service';
import { Guid } from 'guid-typescript';
import cors from 'cors';
import bodyParser from 'body-parser';
const app = express();

const service = new DataDurService();

app.use(cors({ origin: 'http://localhost:4200' }));

// Liste les listes
app.get('/liste', async (req, res) => {
  res.send(await service.getListes());
});

// détail d'une liste
app.get('/liste/:id', async (req, res) => {
  var id = req.params.id;
  res.send(await service.getListe(Guid.parse(id)));
});

app.use(bodyParser.json());

app.post('/liste/:id', async (req, res) => {
  // L'id de la liste
  var id = req.params.id;

  // L'objet envoyé coté client
  var newItem = req.body;
  // J'utilise mon service DataDur pour ajouter l'item
  service.addItemToListe(Guid.parse(id), newItem.libelle);
  // Je termine la requete
  res.send();
});

app.listen(4201, () => {
  console.log('Le port est ouvert');
});
