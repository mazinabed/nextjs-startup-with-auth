import Auth from '../../../util/auth'

export default async function (req, res){
    if(!Auth(req, res)) return;
    res.json({success: true})
}

