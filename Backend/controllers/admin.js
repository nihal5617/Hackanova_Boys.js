import Admin from '../models/admin.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export const signup = async (req, res) => {

    console.log(req.body)
    
    try {
        const { name, username, password, phone, location  } = req.body;
        let admin = await Admin.findOne({ username });
        if (admin) {
            return res.status(400).json({ errors: [{ msg: 'Admin Exists!' }] });
        }
        admin = new Admin({
            name,
            username,
            password,
            phone,
            location
        });
        console.log('here');
        const salt = await bcrypt.genSalt();
        admin.password = await bcrypt.hash(password, salt);

        await admin.save();

        const token = jwt.sign({id: admin.id}, process.env.SECRET, {
            expiresIn: 86400 // 24 hours
        });
        res.status(200).send({
            id: admin.id,
            username: admin.username,
            token: token
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}

export const signin = async (req, res) => {
    try{
        const admin = await Admin.findOne({username : req.body.username});
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
        const token = jwt.sign({id: admin.id}, process.env.SECRET, {
            expiresIn: 86400 // 24 hours
        });
        res.status(200).send({
            id: admin.id,
            username: admin.username,
            token: token
        });
    }catch(err){
        res.status(500).send({message: err.message});
    }
}