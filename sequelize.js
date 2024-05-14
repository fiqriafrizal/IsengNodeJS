// #1 Import Sequelize
import { Sequelize, DataTypes, Model } from "sequelize";

// #2 Create an "Sequelize" Object to connect to the database
const sequelize = new Sequelize("nestjs", "root", "", {
  host: "localhost", // Configure the database host
  dialect: "mysql", // Configure the database dialect
  port: "3306", // Configure the database port
});

// #3 Define the "User" Model
const User = sequelize.define("User", {
  name: {
    // Define the "name" column
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    // Define the "age" column
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  gender: {
    // Define the "gender" column
    type: DataTypes.ENUM("male", "female"),
    allowNull: false,
  },
  email: {
    // Define the "email" column
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// #4 Create the "User" table based on the models
await User.sync({ force: true });
console.log("The table for the User model was just (re)created!");

// #5.1 Using User.create to create and save the instance in one step
const insert = await User.create({
  name: "John",
  age: 30,
  gender: "male",
  email: "HJtO7@example.com",
});

// #5.1 No need to call save after create
console.log(`${insert.name} data has been created`);

// #5.2 Using User.build to create an instance in memory
const jenny = User.build({
  name: "Jenny",
  age: 27,
  gender: "female",
  email: "jenny123@example.com",
});

// #5.2 Saving the instance to the database
await jenny.save();
console.log(`${jenny.name} data has been created`);

// #6 Finding all users
const users = await User.findAll();
console.log(users.every(user => user instanceof User)); // true
console.log('All users:', JSON.stringify(users, null, 2));

// #7 Edit Data using User.update
await User.update(
  // Updated Information
  { name: "James", age: 22, email: "james123@example.com" },

  // Where Clause
  {
    where: {
      id: 1,
    },
  }
);

// #8 Delete data using User.destroy
await User.destroy({
  where: {
    id: 2,
  },
});

