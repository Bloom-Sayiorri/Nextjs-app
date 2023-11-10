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
        <div className='flex justify-center flex-col gap-4'>
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
            <label htmlFor='email' className='text-white'>Email</label>
            <input
                id='email'
                type='email'
                placeholder='Enter your email address'
                value={user.email}
                onChange={(e) => setUser({...user, email: e.target.value})}
            />
            <label htmlFor='password' className='text-white'>Password</label>
            <input
                id='password'
                type='password'
                placeholder='Enter your password address'
                value={user.password}
                onChange={(e) => setUser({...user, password: e.target.value})}
            />
            <button className='border-none rounded-lg p-4 text-white bg-cyan-400' onSubmit={(e) => {
                e.preventDefault();

            }}>Submit</button>
        </div>
    )
} 