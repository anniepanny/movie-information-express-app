import sequelize from "sequelize";
const { DataTypes, Model } = sequelize;
import { sequelize as iSequelize } from "../config/sequelize.js";


export class Movie extends Model {}
Movie.init(
  {
    id: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    releaseDate: DataTypes.STRING,
    //timeDuration: DataTypes.TIME,
  },
  { 
    sequelize: iSequelize,
  }
);

