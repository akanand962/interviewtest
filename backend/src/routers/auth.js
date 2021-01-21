const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()

const User = mongoose.model('User')
const bcrypt = require('bcrypt')
const{ JWT_SECRET} = require('../keys')
const jwt = require("jsonwebtoken")
const protectedApi = require('../middleware/protectedApi')
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDA5MTRjOTQ4ZjY2MDUwZGNkMDdhYzIiLCJpYXQiOjE2MTEyMTQyNzV9.4zBqHUqGXCnjHQvaQWW_aUb-m2zN2hHt4Xq7gbHpHRA

router.get('/protected',protectedApi,(req,res)=>{
    res.send('hello welcome to auth project')
})


router.post('/signup',(req,res)=>{
    const {name,email,password} = req.body
    if(!name || !email || !password){
        res.status(422).json({error:'plz add required field'})
    }
    User.findOne({email:email})
    .then((isuser)=>{
        if(isuser){
            return  res.status(422).json({error:'user All ready exits'})
        
        }
        bcrypt.hash(password,12)
        .then((hashedpassword)=>{
                    console.log(hashedpassword,'hashpassword')
                    const allUser = new User({
                        name,
                        email,
                        password:hashedpassword
                    })
            
                    allUser.save()
                    .then((allUser)=>{
                        res.json({message:'User Saves successfully'})
                    })
                    .catch((err)=>{
                        console.log("error",err)
                    })
        })
      
    })
    .catch((err)=>{
        console.log("error",err)
    })
})



// Login Api 

router.post('/signin',(req,res)=>{
    const {email,password} = req.body
     if(!email || !password){
         return res.status(422).json({error:'Plz Add user And Password'})
     }
     User.findOne({email:email})
     .then((savedUser)=>{
         if(!savedUser){
         return res.status(422).json({error:'Invalid user And Password'})

         }
         bcrypt.compare(password,savedUser.password)
         .then((doMatch)=>{
             if(doMatch){
                
                 const token = jwt.sign({_id:savedUser._id},JWT_SECRET)
                                
                 res.json({token})

             }
             else{
                    return res.status(422).json({error:'Invalid user And Password'})

             }
         })

         .catch((err)=>{
             console.log("error",err)
         })
     })
})

module.exports = router