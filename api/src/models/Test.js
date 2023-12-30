const {DataTypes} = require('sequelize')

module.exports = (sequelize) =>{

sequelize.define('Test',{

id:{
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
},
name:{
type: DataTypes.STRING,
allowNull: false   
},

description:{
type: DataTypes.STRING,
allowNull: true

},
testime: {
type: DataTypes.INTEGER,
allowNull: true

},
image:{
type: DataTypes.STRING,
allowNull: true

},
})}