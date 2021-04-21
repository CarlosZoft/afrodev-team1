module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('familias', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    nomeFamilia: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    endereco: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    quantidadeMembros: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    preferencial: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    renda: {
      type: Sequelize.REAL,
      allowNull: false,
    },
    status: {
      type: Sequelize.ENUM("Ativo","Inativo"),
      allowNull: false,
    },
  }),

  down: async (queryInterface, Sequelize) => queryInterface.dropTable('ongs'),
};
