const express=require('express')
const router=new express.Router()
//register
router.post('/user/register',users.register)

//login
router.post('/user/login',users.login)

router.post('/user/category',categorys.register)











module.exports=router