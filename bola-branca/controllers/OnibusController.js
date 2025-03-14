import Onibus from "../models/Onibus.js";

class OnibusController {
  static async createOnibus(req, res) {
    const onibus = {
      numeroCarro: req.body.numeroCarro,
      marca: req.body.marca,
      carroceria: req.body.carroceria,
      placa: req.body.placa,
      descricao: req.body.descricao
    }

    try {
      await Onibus.create(onibus);
      res.status(200).json('Novo ônibus adicionado a empresa.');
    } catch (error) {
      console.log('Não foi possível completar a ação.', + error);
    }
  }
}
  

export default OnibusController;  


/*
  static async listAllOnibuses(req, res) {
    const allOnibus = await Onibus.findAll();

    // const onibusObj = allOnibuses.map(item => item.get());
    const carObj = JSON.parse(JSON.stringify(allOnibuses));

    res.status(302).json(carObj);
  }


/*

  static async getCar(req, res) {
    const carPlate = req.params.plate;

    const car = await Car.findOne({
      where: {
        licensePlate: carPlate,
      },
    })

    res.status(200).json(car);
  }

  static async updateCar(req, res) {

    const carPlate = req.params.plate;

    await Car.update(req.body, {
      where: {
        licensePlate: carPlate
      }
    })

    res.status(200).json('Carro atualizado');

  }

  static async deleteCar(req, res) {

    const carPlate = req.params.plate;

    await Car.destroy({
      where: {
        licensePlate: carPlate
      }
    })

    res.status(200).json('Carro deletado com sucesso da tabela de carros da empresa');
  }
}

*/

//export default OnibusController;

