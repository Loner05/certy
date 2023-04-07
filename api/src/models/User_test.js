const { DataTypes} = require('sequelize')



module.exports = (sequelize) =>{

sequelize.define('user_test',{
    id:{
        type: DataTypes.UUID,
defaultValue: DataTypes.UUIDV4,
primaryKey: true
      
        },

complete_rate:{
type: DataTypes.BIGINT,
allowNull: true 


}

})}