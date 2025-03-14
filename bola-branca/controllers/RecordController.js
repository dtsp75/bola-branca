import Onibus from '../models/Onibus.js'
import Record from '../models/Record.js'

class RecordController {
  static async showRentedOnibus(req, res){

    const rentedOnibus = await Record.findAll()
    const rentedOnibusObj = JSON.parse(JSON.stringify(rentedOnibus))

    res.status(302).json(rentedOnibusObj);

  }

  static async rentOnibus(req, res) {
    const record = {
      carroNumero: req.body.carroNumero,
      initialDate: req.body.initialDate,
      finalDate: req.body.finalDate,
    }

    const availableOnibus = await Onibus.findOne({
      where: {
        numeroCarro: record.carroNumero,
      },
      raw: true,
    })

    const availableOnibusObj = JSON.parse(JSON.stringify(availableOnibus))

    if (availableOnibusObj == null) {
      res
        .status(404)
        .json('Veículo não encontrado na tabela de ônibus disponíveis para a linha')
      return
    } else {
      console.log(` Veículo encontrado para a linha: ${availableOnibusObj.numeroCarro} `)
    }

    if (availableOnibusObj.numeroCarro == record.carroNumero) {
      try {
        const isOnibusRented = await Record.findOne({
          where: {
            carroNumero: record.carroNumero,
          },
        })

        if (isOnibusRented) {
          res.json('Este veículo está na linha')
          return
        }

        await Record.create(record)

        res.status(302).json(availableOnibus)
      } catch (error) {
        console.log('Opa, tivemos um erro', +error)
      }
    }
  }

/*

  static async showAvailableCars(req, res) {
    const onibusTable = await Onibus.findAll()
    const onibusTableObj = JSON.parse(JSON.stringify(onibusTable))

    const recordTable = await Record.findAll()
    const recordObjPlates = recordTable.map((item) => item.carroNumero)

    const filteredResults = onibusTableObj.filter((el) => {
      return !recordObjPlates.includes(el.numeroCarro)
    })

    res.json(filteredResults);
  }

*/

}

export default RecordController;


// car

// Plates

// Cars