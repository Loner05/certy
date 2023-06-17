const { Router } = require("express");
const {Test,Question,Answer,User_Answer} = require("../../db");
const jwt = require('jsonwebtoken')
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
 console.log(authorization)
  if(authorization.length <= 7){
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

const{name}=req.body
const{authorization}=req.get
if(authorization <= 7){
  res.status(401).json('token missing')
}

if(authorization && authorization.toLowerCase().startsWith('bearer ')){
  const token = authorization.substring(7)
  const decodedToken = jwt.verify(token, process.env.HASH_PASS )


  if(!token || !decodedToken.id){
    return res.status(401).json({error: 'token is missing or invalid'})
  }

try{
  let createTest = Test.create({
    name
  })
  res.send(`el test ${name}, ha sido creado con exito.`)
}catch{
 res.send(error.message)
}
}


})


router.post('/question', async(req,res) =>{

    const{question,correct_answer,TestId}=req.body
    const {authorization}= req.get

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
res.status(200).send(`pregunta ${question} creada con exito`)
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
  let {count,rows} = await Question.findAndCountAll(options)
  console.log(`soy counts ${count}`)
  if(count){
  res.status(200).json({total: count,categories: rows})}
  else{
    res.status(400).send("el test no tiene aun preguntas!")
  }
}catch(error){
    res.status(404).send(error.message)
}
}

// res.status(200).send("soy la respuesta")
})


router.post('/questionanswer', async(req,res)=>{
  const{authorization}=req.get
const{QuestionId,answer} = req.body
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
 let postAnswer = await Answer.create({
   QuestionId,
   answer
 })
 res.status(200).send(`respuesta ${answer} creada con exito`)
}catch(error){
  res.status(400).send(error.message)
}
}
})

router.get('/questionanswer', async(req,res)=>{
const{QuestionId}=req.query
try{
  let findQuestionAnswers = await Answer.findAll({
   where:{ QuestionId: QuestionId}

  })
  // if(!findQuestionAnswers.length){ res.status(200).send("La pregunta aun no tiene ninguna opcion de respuesta")}
  // else{ res.status(200).json(findQuestionAnswers)}
  res.status(200).json(findQuestionAnswers)
}catch(error){
  res.status(400).send(error.message)
}


})

router.post('/useranswers',async(req,res)=>{

const{UserId, QuestionId, AnswerId,correct}=req.body
const{authorization}=req.get
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
let answerPost = await User_Answer.create({
  
  correct,
  UserId,
  QuestionId,
  AnswerId

})
  //  answerPost.setUser(UserId)
  //  answerPost.setQuestion(QuestionId)
  //  answerPost.Answer(AnswerId)
   res.status(400).send("respuesta registrada correctamente")
}catch(error){
  res.status(400).send(error.message)
}


}

})

router.get('/useranswers',async(req,res)=>{
  
const{UserId,userTestId} = req.body
const{authorization}=req.get
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
 findUserAnswers= user_tests.findAll({
   where:{ UserId: UserId, userTestId: userTestId }
 })
if(!findUserAnswers.length){res.status(200).send("No se encontraron respuestas del usuario para este test")}
else{res.status(200).json(findUserAnswers)}
}catch(error){
  res.status(400).send(error.message)
}
}
})
module.exports = router