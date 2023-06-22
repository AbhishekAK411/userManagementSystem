import users from "../models/users.js";


export const loadRegister = (req,res) =>{
    res.render('registration');
}

export const insertRegister = async (req,res) =>{
    try{
        const {username, email, password, confirmPassword} = req.body;
        console.log(username, email, password, confirmPassword);

        const newUser = new users({
            username,
            email,
            password,
        });
        const response = await newUser.save();
        return res.send(response);
        
    }catch(err){
        return res.send(err);
    }
}