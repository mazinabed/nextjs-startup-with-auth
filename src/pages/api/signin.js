import bcrypt from 'bcrypt'
import db from '../../../models'
import jwt from 'jsonwebtoken'
const env = process.env.NODE_ENV || 'development';



export default async function (req, res){


const user = await db.user.findOne({
    where:{
        email: req.body.email,
    }
});

const result = await bcrypt.compare(req.body.password, user.password)
if (result) {

    const token = jwt.sign({id: user.id, email: user.email}, process.env.secretkey)
    res.json({
        id: user.id, 
        email: user.emai,
        
        token})
}else{
    res.end("Login failed")
}



}