const { DataTypes } = require("sequelize")



module.exports = (sequelize) =>{
sequelize.define('User',{

id:{
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    
primaryKey: true

},
name:{
type: DataTypes.STRING,
allowNull: false
},
lastname:{
type: DataTypes.STRING,
allowNull: false   
},
email:{
type: DataTypes.STRING,
allowNull: false
},
password: {
type:  DataTypes.STRING,
allowNull:false
},
role:{
    type: DataTypes.STRING,
    defaultValue: 'user'
   
}, 
suscription:{
  type:DataTypes.STRING,
  defaultValue: "free"   

}


})}