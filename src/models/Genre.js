import sequelize from "sequelize";
const { DataTypes, Model } = sequelize;
import { Movie } from "./Movie.js";
import { sequelize as iSequelize } from "../config/sequelize.js";

export class Genre extends Model {}
Genre.init(
  {
  id: {
    type: DataTypes.STRING,
    unique: true,
    primaryKey: true,
    allowNull: false,
  },
  type:{
    type: DataTypes.STRING,
    unique: true,
  }
}, 
{
  sequelize: iSequelize
}
);
Genre.belongsToMany(Movie, {
  foreignKey: {
    name: "movieId",
    allowNull: false,
  },
  through: "GenreMovie"
});
