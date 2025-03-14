import { DataTypes } from 'sequelize';

import db from '../db/conn.js';

const Record = db.define('Record', {
  numeroCarro: {
    type: DataTypes.INTEGER,
    allowNull: false,
    require: true,
  },
  initialDate: {
    type: DataTypes.DATE,
    allowNull: false,
    require: true,
  },
  finalDate: {
    type: DataTypes.DATE,
    allowNull: false,
    require: true,
  },
})

export default Record;