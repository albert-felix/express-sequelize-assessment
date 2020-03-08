const Sequelize = require("sequelize");

const StudentDB = new Sequelize(process.env.studentDBUrl);

StudentDB.authenticate()
.then(() => {
  console.log("Connection Successful")
})
.catch((err) => {
  console.log("Connection failed")
  console.error(err)
});

module.exports = StudentDB;
