import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: 'string',
        required: [true, 'Please provide a username'],
        unique: true,
    },
    email: {
        type: 'string',
        required: [true, 'Please provide an email'],
        unique: true, 
    },
    password: {
        type: 'string',
        required: [true, 'Please provide a password'],
    },
    isVerified: {
        type: 'boolean',
        default: false,
    },
    isAdmin: {
        type: 'boolean',
        default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
});

const User = mongoose.models.users || mongoose.models('users', userSchema);

export default User;