const { DataTypes } = require('sequelize');
const Model = require('../baseModel');

class FluxoCaixa extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true,
        },
        descricao: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        custo: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
        tipo: {
          type: DataTypes.ENUM('Regular', 'Irregular'),
          allowNull: false,
        },
      },
      {
        sequelize,
        underscored: true,
        tableName: 'fluxoCaixa',
      },
    );
  }
}
module.exports = FluxoCaixa;
