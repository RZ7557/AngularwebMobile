import express from 'express';
import { DataDurService } from './services/data-dur.service';
import { Guid } from 'guid-typescript';
 import cors from 'cors';
const app = express();

const service = new DataDurService();

app.use(cors({origin: 'http://localhost:4200'}))
app.get('/liste', async (req, res) => {
  res.send(await service.getListes());
});

app.get('/liste/:id', async (req, res) => {
  var id = req.params.id;
  res.send(await service.getListe(Guid.parse(id)));
});

app.listen(4201, () => {
  console.log('Le port est ouvert');
});
