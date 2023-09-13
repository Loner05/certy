const { Router } = require("express");
require('dotenv').config();
const {User} = require("../db")
const router = Router();
const bcrypt = require('bcrypt')
// const{ HASH_PASS} = process.env
const jwt = require('jsonwebtoken')

router.post('/login', async(req,res)=>{

const{email,password}=req.body
const user = await User.findOne({
   where: {
     email
   }})
console.log(user)
try{

   const userForToken = {
      name: user.name,
       id: user.id
     
     
     }
     
     const token = jwt.sign(userForToken, process.env.HASH_PASS)
     
//  if(EnteredEmail){
//   let userFind = await  User.findOne({
//    where: {
//      email
   
//    }


// })

const passwordCorrect = user === null ? false 
: await bcrypt.compare(password, user.password  ) 


if(!user || !passwordCorrect){
   res.status(401).json({error:'Usuario o contraseña incorrecto!'})
}
if(user && passwordCorrect){
   res.send({
      name: user.name,
      email: user.email,
      token
   })
}
// console.log("hola")
// console.log(`soy userfind ${userFind}`)
// if(userFind){res.status(200).json({userFind})}
// console.log("estoy en userfind")
//   if(!userFind){res.status(200).send(`No se ha encontrado ningun usuario con el correo ${EnteredEmail}`)}
// //   else{res.status(200).json(userFind)}


//  }
//  else{
//  console.log("soy allusers")
//   console.log(EnteredEmail)
//    let userAll =  await User.findAll()
//    if(!userAll.length){res.status(200).send("No hay ningun usario registrado!")}
//    else{res.status(200).json(userAll)}
//  }



}catch(error){
   res.status(400).send(error.message)
}


})

router.post('/signup', async(req,res)=>{
  
   // console.log(name)
   const{name,lastname,email,password} = req.body
try{

    let userAlreadyExists = await User.findOne({where: {email}})
       console.log(userAlreadyExists)

     if(!userAlreadyExists){
      let saltRounds = 10
      const  passwordHash = await bcrypt.hash(password,saltRounds)
   
      const userCreate = await User.create({
       name,
       lastname,
       email,
       password: passwordHash
   
   
      })
       
       res.status(200).send(`Usuario creado con exito`)

     }
    if(userAlreadyExists){ res.status(400).json(userAlreadyExists)}
  
   }catch(error){
      res.status(400).send(error.message)

   }
    
    })


router.get('/user', async(req,res)=>{

   const{userId}= req.params
  
   const authorization = req.get('Authorization')
   console.log(`soy authorization ${authorization}`)
     if(authorization.length <= 7) {
      res.status(401).json('token is missing')
     }
     
     if(authorization && authorization.toLowerCase().startsWith('bearer ')){
      const token = authorization.substring(7)
      const decodedToken = jwt.verify(token, process.env.HASH_PASS )
      if( !token || !decodedToken.id){
         return res.status(401).json({error: "token is missing or invalid"})
      }
      console.log(`soy el id decodificado ${decodedToken.id}`)
       const findUserDb = await User.findOne({where: {id : decodedToken.id}})
       console.log(findUserDb.dataValues.id)
       console.log(userId)
      if( findUserDb.dataValues.id === decodedToken.id){

         res.status(200).json({findUserDb})
      }
          else{ res.status(200).send("mistaken path")}
     }
    
})




module.exports = router