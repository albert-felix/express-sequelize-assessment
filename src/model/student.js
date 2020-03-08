const Sequelize = require("sequelize");

const StudentDB = require("../config/studentDB");

const Student = StudentDB.define("students", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  firstName: {
    type: Sequelize.STRING,
    field: "first_name",
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    field: "last_name",
    allowNull: false
  },
  age: {
    type: Sequelize.INTEGER,
    field: "age",
    allowNull: false
  },
  gender: {
    type: Sequelize.ENUM,
    values: ["male", "female"],
    allowNull: false
  },
  class: {
    type: Sequelize.INTEGER,
    field: "class",
    allowNull: false
  }
});

const studentData = [
  {
    firstName: "Albert",
    lastName: "Felix",
    age: 15,
    gender: "male",
    class: 10
  },
  {
    firstName: "Kavin",
    lastName: "Kumar",
    age: 14,
    gender: "male",
    class: 10
  },
  {
    firstName: "Ram",
    lastName: "Prasath",
    age: 16,
    gender: "male",
    class: 10
  },
  {
    firstName: "Priya",
    lastName: "Moorthy",
    age: 15,
    gender: "female",
    class: 10
  }
];

const Marks = StudentDB.define("marks", {
  marks_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  english: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  tamil: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  maths: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  science: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  social: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

Marks.belongsTo(Student, { foreignKey: "id" });

const marksData = [
  {
    id: 1,
    english: 40,
    tamil: 60,
    maths: 34,
    science: 55,
    social: 38,
  },
  {
    id: 2,
    english: 88,
    tamil: 85,
    maths: 100,
    science: 97,
    social: 87,
  },
  {
    id: 3,
    english: 73,
    tamil: 88,
    maths: 97,
    science: 90,
    social: 78,
  },
  {
    id: 4,
    english: 91,
    tamil: 76,
    maths: 81,
    science: 62,
    social: 86,
  }
];

Student.sync({ force: true })
  .then(() => {
    return Student.bulkCreate(studentData, { returning: true });
  })
  .then(() => {
    Marks.sync({ force: true }).then(() => {
      return Marks.bulkCreate(marksData, { returning: true });
    });
  })
  .catch(console.error);
