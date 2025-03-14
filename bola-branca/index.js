import express from "express";
import conn from './db/conn.js';
import OnibusController from "./controllers/OnibusController.js";
//import CarController from './controllers/CarController.js';
import RecordController from './controllers/RecordController.js';

const app = express();

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true
  })
)

conn
  .sync()
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));


  app.post('/onibus', OnibusController.createOnibus);
  app.post('/onibus/paraLinha', RecordController.rentOnibus);  
  //app.post('/onibus/alugar', RecordController.rentOnibus);

/*

app.post('/carros', CarController.createCar);
app.post('/carros/alugar', RecordController.rentCar);
app.get('/carros/disponiveis', RecordController.showAvailableCars);
app.get('/carros/alugados', RecordController.showRentedCars);
app.get('/carros', CarController.listAllCars);
app.get('/carros/:plate', CarController.getCar);
app.put('/carros/:plate', CarController.updateCar);
app.delete('/carros/:plate', CarController.deleteCar);

*/