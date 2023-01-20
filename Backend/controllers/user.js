import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import {check,validationResult } from 'express-validator';


export const signup = async (req, res) => {
    const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { email, password } = req.body;
    try{

        let user = await User.findOne({ email });
			if (!user) {
				return res
					.status(400)
					.json({ errors: [{ msg: 'Invalid Credentials' }] });
			}

			const isMatch = await bcrypt.compare(password, user.password);
			if (!isMatch) {
				return res
					.status(400)
					.json({ errors: [{ msg: 'Invalid Crendentials' }] });
			}

			const payload = {
				user: {
					id: user.id,
				},
			};

			jwt.sign(
				payload,
				config.get('jwtSecret'),
				{ expiresIn: 360000 }, // Change to 3600 during production
				(err, token) => {
					if (err) throw err;
					res.json({ token });
				}
			);
    } catch (error) {
        console.error(err.message);
        res.status(400).json({ error: error.message });
    }
}

export const signin = async (req, res) => {
    try {
		const user = await User.findById(req.user.id).select('-password');
		res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(400).json({ error: error.message });
    }
}