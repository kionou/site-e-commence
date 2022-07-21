'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class articles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  articles.init({
    type_produit: DataTypes.STRING,
    nom: DataTypes.STRING,
    model: DataTypes.STRING,
    reseau: DataTypes.STRING,
    dual_sim: DataTypes.STRING,
    ecran: DataTypes.STRING,
    resolution: DataTypes.STRING,
    ram: DataTypes.STRING,
    rom: DataTypes.STRING,
    camera_arriere: DataTypes.STRING,
    camera_avant: DataTypes.STRING,
    systeme_exploitation: DataTypes.STRING,
    connectivite: DataTypes.STRING,
    batterie: DataTypes.STRING,
    dimension: DataTypes.STRING,
    poids: DataTypes.STRING,
    prix: DataTypes.STRING,
    processeur: DataTypes.STRING,
    id_cathegorie: DataTypes.STRING,
    image:DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'articles',
  });
  return articles;
};