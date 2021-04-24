module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('familias', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    nome_familia: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    endereco: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    quantidade_membros: {
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
      type: Sequelize.ENUM('Ativo', 'Inativo'),
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
  down: async (queryInterface) => queryInterface.dropTable('familias'),
};
