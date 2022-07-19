'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('articles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type_produit: {
        type: Sequelize.STRING
      },
      nom: {
        type: Sequelize.STRING
      },
      model: {
        type: Sequelize.STRING
      },
      reseau: {
        type: Sequelize.STRING
      },
      dual_sim: {
        type: Sequelize.STRING
      },
      ecran: {
        type: Sequelize.STRING
      },
      resolution: {
        type: Sequelize.STRING
      },
      ram: {
        type: Sequelize.STRING
      },
      rom: {
        type: Sequelize.STRING
      },
      camera_arriere: {
        type: Sequelize.STRING
      },
      camera_avant: {
        type: Sequelize.STRING
      },
      systeme_exploitation: {
        type: Sequelize.STRING
      },
      connectivite: {
        type: Sequelize.STRING
      },
      batterie: {
        type: Sequelize.STRING
      },
      dimension: {
        type: Sequelize.STRING
      },
      date_ajouter: {
        type: Sequelize.STRING
      },
      date_update: {
        type: Sequelize.STRING
      },
      poids: {
        type: Sequelize.STRING
      },
      prix: {
        type: Sequelize.STRING
      },
      processeur: {
        type: Sequelize.STRING
      },
      id_cathegorie: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('articles');
  }
};