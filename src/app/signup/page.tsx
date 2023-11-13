"use client";
import Link from 'next/link';
import React, { useEffect } from 'react';
import {useRouter} from 'next/navigation';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function SignupPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    });

    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const onSignup = async () => {
        try {
            setLoading(true);
            const response = await axios.post('/api/users/signup', user);
            console.log('Signup successful', response.data);
            router.push('/login')
        } catch (error: any) {
            console.log("Signup failed", error.message);
            toast.error(error.message);
        } finally {
            setLoading(false)
        }
    };

    useEffect(() => {
        if (user.email.length > 0 && user.username.length > 0&&
            user.password.length > 0) {
                setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);


    return(
        <div className='min-h-screen flex justify-center flex-col gap-4 mx-auto max-w-lg'>
            <h1 className='text-center text-white text-2xl '>{loading ? "Signup" : "Processing"}</h1>
            <label htmlFor="username" className='text-white'>Username</label>
            <input
                id='username'
                type='text' 
                placeholder='Enter your username'
                value={user.username}
                className="rounded-lg border-radius p-2"
                onChange={(e) => setUser({...user, username: e.target.value})}
            />
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
            <button onClick={onSignup} className='rounded-lg border-none p-4 text-white bg-cyan-400'>
                {buttonDisabled ? "Input fields empty" : "Signup"}
            </button>
            <Link href='/login'>Sign In</Link>
        </div>
    )
};