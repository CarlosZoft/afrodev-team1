const { DataTypes } = require('sequelize');
const Model = require('../baseModel');

class Familia extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true,
        },
        nome_familia: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        endereco: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        quantidade_membros: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        preferencial: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
        renda: {
          type: DataTypes.REAL,
          allowNull: false,
        },
        status: {
          type: DataTypes.ENUM('Ativo', 'Inativo'),
          allowNull: false,
        },

      },
      {
        sequelize,
        underscored: true,
        tableName: 'familias',
      },
    );
  }
}

module.exports = Familia;
