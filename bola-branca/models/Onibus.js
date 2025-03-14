import { DataTypes } from "sequelize";

import db from '../db/conn.js';

const Onibus = db.define('Onibus', {
  numeroCarro: {
    type: DataTypes.INTEGER,
    allowNull: false,
    require: true
  },
  marca: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true
  },
  carroceria: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true
  },
  placa: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true
  }
})

export default Onibus;