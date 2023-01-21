import Scientist from '../models/scientist.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import {check,validationResult } from 'express-validator';


export const signup = async (req, res) => {

    console.log(req.body)
    
    try {
        const { name, username, password, phone,email, location  } = req.body;
        let scientist = await Scientist.findOne({ username });
        if (scientist) {
            return res.status(400).json({ errors: [{ msg: 'scientist Exists!' }] });
        }
        scientist = new Scientist({
            name,
            username,
            password,
            email,
            phone,
            location
        });
        console.log('here');
        const salt = await bcrypt.genSalt();
        scientist.password = await bcrypt.hash(password, salt);

        await scientist.save();

        const token = jwt.sign({id: scientist.id}, process.env.SECRET, {
            expiresIn: 86400 // 24 hours
        });
        res.status(200).send({
            id: scientist.id,
            username: scientist.username,
            token: token
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}

export const signin = async (req, res) => {
    try{
        const scientist = await Scientist.findOne({
            where: {
                email: req.body.email
            }
        });
        if(!scientist){
            return res.status(404).send({message: "scientist not found."});
        }
        const passwordIsValid = bcrypt.compareSync(
            req.body.password,
            scientist.password
        );
        if(!passwordIsValid){
            return res.status(401).send({
                accessToken: null,
                message: "Invalid Password!"
            });
        }
        const token = jwt.sign({id: scientist.id}, process.env.SECRET, {
            expiresIn: 86400 // 24 hours
        });
        res.status(200).send({
            id: scientist.id,
            username: scientist.username,
            token: token
        });
    }catch(err){
        res.status(500).send({message: err.message});
    }
}