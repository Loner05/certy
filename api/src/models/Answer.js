const {DataTypes} = require('sequelize')

module.exports = (sequelize) =>{

sequelize.define('Answer', {
id:{
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
},
answer:{
type:DataTypes.STRING,
allowNull: false
}

})
}