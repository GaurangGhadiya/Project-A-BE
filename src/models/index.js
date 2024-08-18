import { Sequelize, DataTypes } from 'sequelize';
import UserModel from './user.js';
import CategoryModal from './category.js';

const sequelize = new Sequelize("project_a", "postgres", "password", {
  host: "localhost",
  logging: false,
  dialect:
    "postgres"
});

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = UserModel(sequelize, DataTypes);
db.category = CategoryModal(sequelize, DataTypes);
// db.contact = import("./contact")(sequelize, DataTypes);

db.sequelize.sync({force: false});

export default db 
