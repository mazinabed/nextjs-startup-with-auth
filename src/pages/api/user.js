import bcrypt from 'bcrypt'
import db from '../../../models'



export default async function (req, res){

     
           const hash = await bcrypt.hash(req.body.password, 10);
            const user = await db.user.create({
                // if you added more fields on Signup form then add them below for example firstname and lastname:
                // firstname: req.body.firstname,
                // lastname: req.body.lastname,
                email: req.body.email,
                password: hash,
               
            });
            res.end(JSON.stringify(user));
          
       
     



    
}