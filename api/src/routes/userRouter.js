const { Router } = require("express");
const {User} = require("../db")
const router = Router();


router.get('/', async(req,res)=>{

const{EnteredEmail}=req.query
console.log(EnteredEmail)
try{
 if(EnteredEmail){
  let userFind = await  User.findOne({
   where: {
     email: EnteredEmail,
   
   }
})

console.log("hola")
console.log(`soy userfind ${userFind}`)
if(userFind){res.status(200).json({userFind})}
console.log("estoy en userfind")
  if(!userFind){res.status(200).send(`No se ha encontrado ningun usuario con el correo ${EnteredEmail}`)}
//   else{res.status(200).json(userFind)}


 }
 else{
 console.log("soy allusers")
  console.log(EnteredEmail)
   let userAll =  await User.findAll()
   if(!userAll.length){res.status(200).send("No hay ningun usario registrado!")}
   else{res.status(200).json(userAll)}
 }
}catch(error){
   res.status(400).send(error.message)
}


})

router.post('/', async(req,res)=>{
  
   // console.log(name)
   const{name,lastname,email,password} = req.body
try{
   const userCreate = await User.create({
    name,
    lastname,
    email,
    password


   })
    
    res.status(200).send(`Usuario creado con exito`)
   }catch(error){
    res.send(error.message)

   }
    
    })


module.exports = router