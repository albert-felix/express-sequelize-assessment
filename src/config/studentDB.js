const Sequelize = require("sequelize");

const StudentDB = new Sequelize(process.env.studentDBUrl);

StudentDB.authenticate()
.then(() => {
  console.log("Connection Successful")
})
.then(() => {
  StudentDB.query('show tables').then((rows) => {
    console.log(JSON.stringify(rows));
  });
})
.catch((err) => {
  console.log("Connection failed")
  console.error(err)
});

module.exports = StudentDB;
