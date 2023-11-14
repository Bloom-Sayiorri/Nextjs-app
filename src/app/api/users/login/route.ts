import {connect} from '@/dbConfig/dbConfig';
import User from '@/models/userModel';
import {NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';
import { error } from 'console';

connect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const {email, password} = reqBody;
        console.log(reqBody);

        //check if user exists
        const user = await User.findOne({email})
        if(!user) {
            return NextResponse.json({error: 'User not found!!'},
            {status: 400});
        }

        //check if password exists

{}    } catch (error: any) {
        return NextResponse.json({error: error.message},
        {status: 500});
    }
};