import { Sequelize } from "sequelize";
import "dotenv/config";

const seqConfig = {
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  dialect: "postgres",
};

// db configuration
export const sequelize = new Sequelize(seqConfig);

// db connection check
async function init() {
  await sequelize
    .authenticate()
    .then(() => console.log(" ==== sequelize connected ==="))
    .catch((err) => console.log("ERROR", err));
  await sequelize.sync({ force: process.env.NODE_ENV === "development" });
}
init();
