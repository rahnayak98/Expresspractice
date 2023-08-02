const {Router}=require('express');
const router=Router()
const User=require('../database/schema/User')
const {hashPassword, comparepassword}=require('../../src/utils/helpers')


router.post('/login',async (req,res)=>{
const{email,password}=req.body;

if(!email || !password) res.send(400);

const userDB= await User.findOne({email});
if(!userDB)return res.send(401);

const isvalid=comparepassword(password,userDB.password);
if(isvalid)
{
    req.session.user=userDB;
    return res.send(200);
}
else
{
    return res.send(401);

}

})

router.post('/register',async (req,res)=>
{
    const{username,email}=req.body;
    const userDB= await User.findOne({email});
    if(userDB)
    {
        res.status(400).send({msg:'User already exists'});

    }
    else
    {
        const password=hashPassword(req.body.password);
        console.log(password);

        const newuser=await User.create({username,password,email});
        res.send(201);

        // newuser.save();


    }


})

module.exports=router;
