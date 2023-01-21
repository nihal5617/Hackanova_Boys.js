import Scientist from '../models/scientist.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';


export const signup = async (req, res) => {
    console.log(req.body)
    
    try {
        const { name, username, password, phone, location  } = req.body;
        let user = await Scientist.findOne({ username });
        if (user) {
            return res.status(400).json({ errors: [{ msg: 'User Exists!' }] });
        }
        user = new Scientist({
            name,
            username,
            password,
            phone,
            location
        });
        console.log('here');
        const salt = await bcrypt.genSalt();
        user.password = await bcrypt.hash(password, salt);

        await user.save();
        const token = jwt.sign({id: user.id}, process.env.SECRET, {
            expiresIn: 86400 // 24 hours
        });
        res.status(200).send({
            id: user.id,
            username: user.username,
            token: token
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}

export const signin = async (req, res) => {
    try{
        const user = await Scientist.findOne({username : req.body.username});
        if(!user){
            return res.status(404).send({message: "user not found."});
        }
        const passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
        );
        if(!passwordIsValid){
            return res.status(401).send({
                accessToken: null,
                message: "Invalid Password!"
            });
        }
        const token = jwt.sign({id: user.id}, process.env.SECRET, {
            expiresIn: 86400 // 24 hours
        });
        res.status(200).send({
            id: user.id,
            username: user.username,
            token: token
        });
    }catch(err){
        res.status(500).send({message: err.message});
    }
}

//get all users
export const getAllUsers = async (req, res) => {
    try{
        const users = await Scientist.find();
        res.status(200).json(users);
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

