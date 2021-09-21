module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('fluxoCaixa', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    descricao: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    custo: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    tipo: {
      type: Sequelize.ENUM('Regular', 'Irregular'),
      allowNull: false,
    },
    updated_at: {
      field: 'updated_at',
      type: Sequelize.DATE,
    },
    created_at: {
      field: 'created_at',
      type: Sequelize.DATE,
    },
  }),

  down: async (queryInterface) => queryInterface.dropTable('fluxoCaixa'),
};
