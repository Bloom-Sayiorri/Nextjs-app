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
        <div className='min-h-screen flex justify-center flex-col gap-4 mx-auto my-5 max-w-lg'>
            <h1 className='text-center text-white text-2xl '>Login</h1>
            <label htmlFor='email' className='text-white'>Email</label>
            <input
                id='email'
                type='email'
                placeholder='Enter your email address'
                value={user.email}
                className="rounded-lg border-radius p-2"
                onChange={(e) => setUser({...user, email: e.target.value})}
            />
            <label htmlFor='password' className='text-white'>Password</label>
            <input
                id='password'
                type='password'
                placeholder='Enter your password'
                value={user.password}
                className="rounded-lg border-radius p-2 mb-7"
                onChange={(e) => setUser({...user, password: e.target.value})}
            />
            <button className='rounded-lg text-white bg-cyan-400 p-4' onSubmit={(e) => {
                e.preventDefault();
            }}>Login</button>
            <Link href='/signup'>Sign Up</Link>
       </div>
    )
};