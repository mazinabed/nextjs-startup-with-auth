import jwt from "jsonwebtoken"
export default function Auth(req, res){
    try{
        const token = req.headers.authorization.split(' ')[1]
        const result = jwt.verify(token, process.env.secretkey);
        req.authorization = result;
        return true
    }catch(e){
        // console.error(e);
        res.status(401).send("You are not authorized")
        return false
    }
}
