const passport=require('passport')
const {strategy}= require('passport-local')

passport.use(
    new strategy(
        {
        usernamefield:'email',
        } ,(email,password,done)=>{
            console.log(email);
            console.log(password)
        }
    )
)