
const {DataTypes} = require('sequelize')


module.exports = (sequelize) =>{

sequelize.define('Question',{

id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true

},
question:{
type: DataTypes.STRING,
AllNull: false

},
correct_answer:{
type: DataTypes.STRING,
AllNull: false

}
})


}