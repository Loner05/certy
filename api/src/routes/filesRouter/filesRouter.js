const { Router } = require("express");
const multer = require('multer')
const path = require("node:path");
const express = require('express')
const router = Router();
const fs = require('node:fs');
const storage = multer.diskStorage({
    destination: path.join(__dirname, '../../public/uploads'),
    filename: (req,file,cb) =>{
    cb(null,file.originalname)
}})

const upload = multer({
    storage,
    dest: path.join(__dirname, '../public/uploads'),
    limits: {fileSize: 5000000},
}).single("image")
    



router.get('/',(req,res)=>{

res.render('index')

})

router.post('/images/single', upload ,(req,res)=>{
    console.log(req.file)
    console.log(`soy dirname ${__dirname}`)

    res.send(`http://localhost:3001/uploads/${req.file.originalname}`)
    
})

function saveImage(file){
    const newPath = `./uploads/${file.originalname}`
    fs.renameSync(file.path, newPath);
    return newPath

}



module.exports = router