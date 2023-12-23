const { DataTypes} = require('sequelize')



module.exports = (sequelize) =>{

sequelize.define('User_test',{
        id:{
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true
            },

    testId:{
        type: DataTypes.UUID,

      
        },
        userId:{
 type: DataTypes.UUID,



        },

complete_rate:{
type: DataTypes.BIGINT,
allowNull: true 


},
date:{
 type: DataTypes.BIGINT,
 allowNull: true       
}

})}