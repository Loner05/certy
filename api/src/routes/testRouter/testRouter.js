const { Router } = require("express");
const {Test,Question,Answer,User_Answer,User_test} = require("../../db");
const jwt = require('jsonwebtoken');
const { Op } = require("sequelize");
const router = Router()

const getTestDb = async() =>{
try{
let testList = Test.findAll()
return testList
}catch(error){
return error.message
}

}


router.get('/', async(req,res)=>{
  const authorization = req.get('authorization')
 
  if(authorization <= 7){
    res.status(401).json('token missing')
  }
  // res.send("malama")
  if(authorization && authorization.toLowerCase().startsWith('bearer ')){
    const token = authorization.substring(7)
    const decodedToken = jwt.verify(token, process.env.HASH_PASS )

    console.log(decodedToken)
    if(!token || !decodedToken.id){
      return res.status(401).json({error: 'token is missing or invalid'})
    }
    try{
      let  testList = await getTestDb()
      console.log(testList)
      if(!testList.length){res.status(200).send("No hay ningun test todavia!")}
      else{res.status(200).json(testList)}
  
    } catch(error){
   res.send(error.message)
  
    } 
  
  

  }
 

})
router.post('/', async(req,res)=>{

  const{name,description,testime,image}=req.body
  const authorization = req.get('authorization')
  
      if(!authorization || authorization.length <= 7){
        res.status(401).json('token missing')
      }
      
      if(authorization && authorization.toLowerCase().startsWith('bearer ')){
        const token = authorization.substring(7)
        const decodedToken = jwt.verify(token, process.env.HASH_PASS )
      
      
        if(!token || !decodedToken.id){
          return res.status(401).json({error: 'token is missing or invalid'})
        }
      }
  
  try{

    
    console.log("soy createtest")
    let createTest = await Test.create({
      name,
      description,
      testime,
      image
    })
   return  res.send(createTest)
  }catch{
   return res.send(error.message)
  }
  
  })


router.put('/', async(req,res)=>{
const{testid}= req.query
const{name,description,testime} = req.body
try{

 Test.update({name,description,testime
},{
 where: {id: testid}

})
return res.status(200).send(`el test ${testid}, ha sido actualizado con exito` )
}catch(error){
  return res.send(error.message)

}


})

router.post('/question', async(req,res) =>{

    const{question,correct_answer,TestId}=req.body
    const authorization = req.get('authorization')

    if(authorization.length <= 7){
      res.status(401).json('token missing')
    }
    
    if(authorization && authorization.toLowerCase().startsWith('bearer ')){
      const token = authorization.substring(7)
      const decodedToken = jwt.verify(token, process.env.HASH_PASS )
    
    
      if(!token || !decodedToken.id){
        return res.status(401).json({error: 'token is missing or invalid'})
      }
    
 const questionCreator = await Question.create({
   question,
    correct_answer
 })
await questionCreator.setTest(TestId)
res.status(200).json(questionCreator)
    }

})
 
router.get('/question',async(req,res)=>{
const{testid, page,size=1} = req.query
const authorization = req.get('authorization')
console.log(authorization)

if(authorization <= 7) {
  res.status(401).json('token is missing')
 }

if(authorization && authorization.toLowerCase().startsWith('bearer ')){
  const token = authorization.substring(7)
  const decodedToken = jwt.verify(token, process.env.HASH_PASS )


  if(!token || !decodedToken.id){
    return res.status(401).json({error: 'token is missing or invalid'})
  }

console.log(`db ${page}`)
console.log(typeof(testid))
let options = {
  where: {TestId: testid},
  distinct:true,
limit: +size,
offset:(+page) + (+size)-1
  
}
try{

  if(!page){
  let allAnswers = await Question.findAll({
    where: {TestId: testid}
  })

    if(allAnswers){
      res.status(200).json(allAnswers)


    }
  }
  if(page){
  let {count,rows} = await Question.findAndCountAll(options)
  console.log(`soy counts ${count}`)
  if(count){
  res.status(200).json({total: count,categories: rows})}
  else{
    res.status(400).send("el test no tiene aun preguntas!")
  }
  }
}catch(error){
    res.status(404).send(error.message)
}
}


})


router.post('/questionanswer', async(req,res)=>{
  const authorization = req.get('authorization')
const{QuestionId,answer,payload} = req.body
if(authorization.length <= 7){
  res.status(401).json('token missing')
}

if(authorization && authorization.toLowerCase().startsWith('bearer ')){
  const token = authorization.substring(7)
  const decodedToken = jwt.verify(token, process.env.HASH_PASS )


  if(!token || !decodedToken.id){
    return res.status(401).json({error: 'token is missing or invalid'})
  }

try{

  if(payload && QuestionId){
   for(let i =0; i< payload.length; i++){
    console.log(payload[i].value)
    let postAnswer = await Answer.create({
      QuestionId,
      answer: payload[i].value
    })
   

   }
   res.status(200).send(`respuestas creadas con exito`)

  }

  if(!payload){
 let postAnswer = await Answer.create({
   QuestionId,
   answer
 })
 res.status(200).send(`respuesta ${answer} creada con exito`)
}
}catch(error){
  res.status(400).send(error.message)
}
}
})


router.get('/questionanswer', async(req,res)=>{
const{QuestionId}=req.query

try{
  let findQuestionAnswers = await Answer.findAll({
   where:{ QuestionId: QuestionId

  }

  })
  // if(!findQuestionAnswers.length){ res.status(200).send("La pregunta aun no tiene ninguna opcion de respuesta")}
  // else{ res.status(200).json(findQuestionAnswers)}
  res.status(200).json(findQuestionAnswers)
}catch(error){
  res.status(400).send(error.message)
}


})

router.delete('/useranswers', async(req,res)=>{

  const authorization = req.get('authorization')
  const{testId} = req.query
if(authorization <= 7) {
  res.status(401).json('token is missing')
 }

if(authorization && authorization.toLowerCase().startsWith('bearer ')){
  const token = authorization.substring(7)
  const decodedToken = jwt.verify(token, process.env.HASH_PASS )
  let userId = decodedToken.id

  if(!token || !decodedToken.id){
    return res.status(401).json({error: 'token is missing or invalid'})
  }

  try{
   
     let findUserAnswer = await User_Answer.findAll({
       where:{
                  UserId : userId,
                 
      }
     })

    let TestAnswers = await Question.findAll({
      where: {TestId: testId,
                            }
    })
     
    console.log(TestAnswers[1].id)



    
   

   
  
 for(let i=0; i < TestAnswers.length; i++){
  
   await  User_Answer.destroy({
    where: {UserId: userId,
            QuestionId: TestAnswers[i].id
     }

    })




 }

 //  answerPost.setUser(UserId)
 //  answerPost.setQuestion(QuestionId)
 //  answerPost.Answer(AnswerId)
  res.status(200).send("respuestas borradas correctamente")
}catch(error){
 res.status(400).send(error.message)
}



}})

// router.post('/useranswers',async(req,res)=>{

// const{ QuestionId, AnswerId}=req.body
// const authorization = req.get('authorization')
// let correct = true

// if(authorization.length <= 7){
//   res.status(401).json('token missing')
// }

// if(authorization && authorization.toLowerCase().startsWith('bearer ')){
//   const token = authorization.substring(7)
//   const decodedToken = jwt.verify(token, process.env.HASH_PASS )
//   console.log(decodedToken)
//   let UserId = decodedToken.id

//   if(!token || !decodedToken.id){
//     return res.status(401).json({error: 'token is missing or invalid'})
//   }

// try{
// let answerPost = await User_Answer.create({
  
//   correct,
//   UserId,
//   QuestionId,
//   AnswerId

// })
//   //  answerPost.setUser(UserId)
//   //  answerPost.setQuestion(QuestionId)
//   //  answerPost.Answer(AnswerId)
//    res.status(200).send("respuesta registrada correctamente")
// }catch(error){
//   res.status(400).send(error.message)
// }


// }

// })

router.post('/useranswers',async(req,res)=>{

  const{ payload}=req.body
  console.log(`soy payload useranswers ${payload}`)
  // console.log(`soy posto ${payload[1].QuestionId}`)
  const authorization = req.get('authorization')
  let correct = true
  
  if(authorization.length <= 7){
    res.status(401).json('token missing')
  }
  
  if(authorization && authorization.toLowerCase().startsWith('bearer ')){
    const token = authorization.substring(7)
    const decodedToken = jwt.verify(token, process.env.HASH_PASS )
    console.log(decodedToken)
    let UserId = decodedToken.id
  
    if(!token || !decodedToken.id){
      return res.status(401).json({error: 'token is missing or invalid'})
    }
  
  try{
         console.log(`soy la cantidad de respuestas ${payload.length}`)
    for(let i=0; i < payload.length; i++){
     
      await User_Answer.create({
    
        correct,
        UserId,
        QuestionId: payload[i].QuestionId,
       AnswerId: payload[i].AnswerId
      
      })  




    }

    //  answerPost.setUser(UserId)
    //  answerPost.setQuestion(QuestionId)
    //  answerPost.Answer(AnswerId)
     res.status(200).send("respuestas registradas correctamente")
  }catch(error){
    res.status(400).send(error.message)
  }
  
  
  }
  
  })
  

router.get('/useranswers',async(req,res)=>{
  
const{TestId,  QuestionId} = req.params
const authorization = req.get('authorization')

console.log(`soy authorization ${authorization}`)
if(authorization && authorization.length <= 7){
  res.status(401).json('token missing')
}

if(authorization && authorization.toLowerCase().startsWith('bearer ')){
  const token = authorization.substring(7)
  const decodedToken = jwt.verify(token, process.env.HASH_PASS )
  let UserId = decodedToken.id

  if(!token || !decodedToken.id){
    return res.status(401).json({error: 'token is missing or invalid'})
  }

try{
if(QuestionId){
let findanswer = await user_answer.findAll({
  where:{QuestionId : QuestionId,
             UserId : UserId
   }
})

findanswer.length ? res.status(200).json(findanswer): res.status(404).send("sin respuestas")
}


//  findUserAnswers=  await user_test.findAll({
//    where:{ UserId: UserId, UserTestId: userTestId }
//  })

if(UserId && TestId && !QuestionId){

  findUserAnswers=  await User_Answer.findAll({
    where:{ UserId: UserId }
  })

  findTestQuestions = await Question.findAll({
    where: {TestId: TestId}
  })

  let repetidos = findUserAnswers.filter(item1 => findTestQuestions.some(item2 => item1.QuestionId === item2.id))


  if(repetidos){ res.status(200).send(repetidos)}
  else(res.status(200).send("no hay respuestas registradas por el usuario para este test"))
    


}
if(UserId && !TestId && !QuestionId){
  findUserAnswers=  await User_Answer.findAll({
    where:{ UserId: UserId }
  })
  if(findUserAnswers){
  res.status(200).send(findUserAnswers)}
  else{res.status(200).send("No hay respuestas del usuario para este test")}
}


}catch(error){
  res.status(400).send(error.message)
}
}
})


router.post('/usertests', async(req,res)=>{
   let{userId,testId,complete_rate,date} = req.body
   const authorization = req.get('authorization')
 console.log(`soy usertest ${date} ${testId}`)
   if(authorization <= 7 || !authorization) {
   res.status(401).json('token is missing')
   }
   
   if(authorization && authorization.toLowerCase().startsWith('bearer ')){
   const token = authorization.substring(7)
   const decodedToken = jwt.verify(token, process.env.HASH_PASS )
 
   if(!userId){userId=decodedToken.id}
  
   if(!token || !decodedToken.id){
     return res.status(401).json({error: 'token is missing or invalid'})
   }
   try{

let findRecord = await User_test.findOne({where:{ testId: testId, userId: userId}})
if(findRecord){
User_test.update({
complete_rate,
date

},
{
  where: {testId: testId,
          userId: userId 
  }
}
)

res.status(200).send("sesion de test de usuario guardada correctamente")
}
if(!findRecord){
  await User_test.create({
  userId: userId,
  testId,
  complete_rate,
  date
  })

  res.status(200).send("sesion de test de usuario guardada correctamente")}
}catch(error){
 res.status(400).send(error.message)

}

   }
})




/////////////////////////////////////////////////////////////






router.get('/usertests', async(req,res)=>{


let{testId,userId} = req.query
let tokenUserId 
const authorization = req.get('authorization')

if(authorization <= 7 || !authorization) {
res.status(401).json('token is missing')
}

if(authorization && authorization.toLowerCase().startsWith('bearer ')){
const token = authorization.substring(7)
const decodedToken = jwt.verify(token, process.env.HASH_PASS )
 if(!userId){ userId= decodedToken.id }

if(!token || !decodedToken.id){
  return res.status(401).json({error: 'token is missing or invalid'})
}

try{
if(userId && !testId){

let findallUserTests = await User_test.findAll({
where: { userId: userId}

}) 
res.status(200).json(findallUserTests)

}

if(!userId){ res.status(400).send("indica el userId!")}
if(!testId){ res.status(400).send("indica el testId!")}
if(userId && testId){

let findUserTest = await User_test.findAll({
  where: {testId: testId,
          userId: userId
  }
})
if(!findUserTest){res.status(400).send("el usuario no ha respondido ningun test!")}
if(findUserTest){res.status(200).json(findUserTest)}
}
}catch(error){
  res.status(400).send(error.message)

}
}

// res.status(200).send("soy respuesta")
})

module.exports = router