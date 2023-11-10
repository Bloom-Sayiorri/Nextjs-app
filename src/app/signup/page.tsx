"use client";
import Link from 'next/link';
import React from 'react';
import {useRouter} from 'next/navigation';
import {axios} from 'axios';

export default function SignupPage() {
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    });

    const onSignup = async () => {

    };


    return(
        <div className="flex justify-center flex-col gap-4">
            <h1 className='text-center text-white text-2xl '>Create Account</h1>
            <label htmlFor="username" className='text-white'>Username</label>
            <input
                id='username'
                type='text' 
                placeholder='Enter your username'
                value={user.username}
                className="rounded-lg border-radius h-10 w-1/4 p-4"
                onChange={(e) => setUser({...user, username: e.target.value})}
            />
        </div>
    )
} 