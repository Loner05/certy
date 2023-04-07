const{DataTypes} = require('sequelize')



module.exports = (sequelize) =>{

sequelize.define( 'User_Answer',{
    id:{
        type: DataTypes.UUID,
defaultValue: DataTypes.UUIDV4,
primaryKey: true
       
        },
correct:{
type: DataTypes.BOOLEAN,
allowNull: false


}

})
}
