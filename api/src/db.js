require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;



const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/certy`, {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  });


  const basename = path.basename(__filename);
  const modelDefiners = [];

  // Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
  fs.readdirSync(path.join(__dirname, '/models'))
    .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
    .forEach((file) => {
      modelDefiners.push(require(path.join(__dirname, '/models', file)));
    });
  
  // Injectamos la conexion (sequelize) a todos los modelos
  modelDefiners.forEach(model => model(sequelize));
  // Capitalizamos los nombres de los modelos ie: product => Product
  let entries = Object.entries(sequelize.models);
  let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
  sequelize.models = Object.fromEntries(capsEntries);

console.log(sequelize.models)
const {User,Answer,Question,Test,User_Answer,User_test} = sequelize.models;
console.log(sequelize.models)
// Aca vendrian las relaciones

Test.hasMany(Question);
Question.belongsTo(Test)

Question.hasMany(Answer);
Answer.belongsTo(Question);

User_Answer.hasMany(Answer);
Answer.belongsTo(User_Answer);

User.hasMany(User_Answer)
User_Answer.belongsTo(User)

Question.hasMany(User_Answer)
User_Answer.belongsTo(Question)

Answer.hasMany(User_Answer);
User_Answer.belongsTo(Answer)

User.belongsToMany(Answer,{through:"user_answer", foreignKey: 'modeloAId'})
Question.belongsToMany(User,{through:"user_answer", foreignKey: 'modeloAId'}) 

// Test.belongsToMany(Question,{through:"test_idd"})
// Question.belongsToMany(Test,{through:"test_idd"})
// Answer.belongsToMany(Question,{through:"question_id"})
// Question.belongsToMany(Answer,{through:"question_id"})
 User.belongsToMany(User_test,{through:"user_test"})
User_test.belongsToMany(User,{through:"user_test"})
 //Test.belongsToMany(User_test,{through:"test_id"})
// User_test.belongsToMany(Test, {through:"test_id"})

// User_answer.belongsToMany(Answer,{through:"answer_id"})
// Answer.belongsToMany(User_answer,{through:"answer_id"})
// Question.belongsToMany(User_answer,{through:"question_id"})
// User_answer.belongsToMany(Question,{through:"question_id"})
// User.belongsToMany(User_answer,{through:"user_id"})
// User_answer.belongsToMany(User,{through:"user_id"})

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};


