import { QueryInterface, DataTypes } from "sequelize";

module.exports = {
  up: async (queryInterface : QueryInterface, Sequelize) => {
    await queryInterface.addColumn("Tickets", "flowStopped", {
      type: DataTypes.STRING,
      allowNull: true,
    });
  },

  down: async (queryInterface : QueryInterface) => {
    await queryInterface.removeColumn("Tickets", "flowStopped");
  }
};
