import Auth from '../../../util/auth'

export default async function (req, res){
    if(!Auth(req, res)) return;

    const user = await db.user.findOne({
        where:{
            email: req.body.email,
        }
    })
        .then(user => {
          if (user) {
            res.json(user)
          } else {
            res.send('User does not exist')
          }
        })
        .catch(err => {
          res.send('error: ' + err)
        })
    }
    



