const express = require("express");

const app = express()

const rootRoutes = require("./routes");
const db = require("./models");

const PORT = process.env.PORT || 3000


async function testConnection() {
    try {
      await db.Sequelize.authenticate;
      console.log("Connection has been established succesfully.");
      console.log("All models were synchronized succesfully.");
    } catch (error) {
      console.error("Unable to connect to the database", error);
    }
  }
  
  testConnection();
  
app.use(express.json())
app.use(rootRoutes)


app.listen(PORT, () => {
    console.log("server running on port :"+ PORT)
})