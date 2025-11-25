import bcrypt from 'bcrypt';
import Jwt from 'jsonwebtoken';
import sellerModel from '../model/sellerModel.js';


export const signUp = async (req, res) => {
    try {
        const { companyname , sellername , email , phone , address , city , state , country , pincode , password } = req.body;

        const user = await sellerModel.findOne({ email });

        if (user) {
            return res.status(409).json({ success: false, message: 'User already exists you can login' });
        }

        const SellerModel = new sellerModel({ companyname , sellername , email , phone , address , city , state , country , pincode , password });
        SellerModel.password = await bcrypt.hash(password, 10);
        await SellerModel.save();
        return res.status(200).json({ success: true, message: 'Account created successfully!' });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
}

export const signIn = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await sellerModel.findOne({ email });

        if (!user) {
            return res.status(404).json({ success: false, message: 'No user found please signup first' });
        }

        const isPassEqual = await bcrypt.compare(password, user.password);
        if (!isPassEqual) {
            return res.status(401).json({ success: false, message: 'Invalid password' });
        }

        const JwtToken = Jwt.sign({ email: user.email, _id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        )
        return res.status(200).json({ success: true, message: 'Login successfully!', jwtToken: JwtToken, name: user.name, email: user.email });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
}