import jwt from 'jsonwebtoken';
import userRepository from '../repositories/userRepository.js';

export default async function authMiddleware(req, res, next) {
    try {
        const token = req.headers.authorization?.split(' ')[1]; 
        if (!token) {
            return res.status(401).json({ message: 'No token provided' });
        }
        
        const decoded = jwt.verify(token, process.env.TOKEN);
        const user = await userRepository.findById(decoded.id);
        
        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }
        
        req.user = user;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }
}