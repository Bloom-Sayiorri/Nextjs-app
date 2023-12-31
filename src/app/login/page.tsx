"use client";
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import axios from 'axios';

export default function LoginPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
    });

    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onLogin = async () => {
        try {
            setLoading(true);
            await axios.post('/api/users/login', user);
            toast.success('Login success');
            router.push('/profile');
        } catch (error: any) {
            console.log("Login failed", error.message);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);


    return(
        <div className='min-h-screen flex justify-center flex-col gap-4 mx-auto max-w-lg'>
            <h1 className='text-center text-white text-2xl '>{loading ? 'Processing' : 'Login'}</h1>
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
            }}>{buttonDisabled ? 'Input Details' : 'Submit'}</button>
            <section className='text-lg flex justify-between items-center'>
                <p className='text-white flex justify-start'>Have an Account?</p>
                <Link className='text-white items-center mx-end p-2' href='/signup'>Signup Here</Link>
            </section>
       </div>
    )
};