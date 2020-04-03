import bcrypt from 'bcrypt'
import db from '../../../models'



export default async function (req, res){

     
           const hash = await bcrypt.hash(req.body.password, 10);
            const user = await db.user.create({
                email: req.body.email,
                password: hash,
               
            });
            res.end(JSON.stringify(user));
          
       
     



    
}