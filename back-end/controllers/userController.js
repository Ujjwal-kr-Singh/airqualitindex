const userdb= require('../models/usermodel');

const createUser = async (req,res)=>{
    try{
        let data = userdb(req.body);
        console.log(data);
        await data.save();
        console.log('User created')
        res.status(200).send({success: true, message: 'course data received...',data: data})
    }
    catch(err){
        console.log(err,': error');
        res.status(200).send({success: false, message: 'course data null...',data: ''})
    }
}
const getUser= async (req,res)=>{
    try{
        let data = await userdb.find();
        console.log(data);
        res.status(200).send({success: true, message: 'user data received...',data: data})
    }
    catch(err){
        console.log(err,': error');
        res.status(500).send({success: false, message: 'user data null...',data: ''})
    }
}



module.exports ={
    createUser,
    getUser,
}