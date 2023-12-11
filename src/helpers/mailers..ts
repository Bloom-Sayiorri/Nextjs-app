import nodemailer from 'nodemailer';
import User from '@/models/userModel';
import bcryptjs from 'bcryptjs';

export const sendEmail = async({email, emailType, userId}: any) {
    try {
        const hashedToken = await bcryptjs.hash(userId.toString(), 10)

        if (emailType === 'VERIFY') {
            await User.findByIdAndUpdate(userId,
            {verifyToken: hashedToken, verifyTokenExpiry: Date.now() + 3600000}, {new: true, runValidators: true}
            )
        } else if (emailType === 'RESET')
        await User.findByIdAndUpdate(userId,
            {
                forgotPasswordToken: hashedToken,
                forgotPasswordTokenExpiry: Date.now() + 3600000
            }
        )
        
        const transporter = nodemialer.createTransport({
            
        })
    } 
    catch (error: any) {
        throw new Error(error.message);
    }
}