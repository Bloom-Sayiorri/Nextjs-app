"use client";
import axios from 'axios';
import Link from 'next/link';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {

    const router = useRouter();

    const logout = async () => {
        try {
            await axios.get('/api/users/logout')
            toast.success('Logout Successful')
            router.push('/login');
        } catch (error) {
            
        }
    }

    return(
        <div className='flex justify-center items-center flex-col min-h-screen py-2'>
            <h1 className=" text-white">Profile</h1>
            <hr/>
            <p className=" text-white text-4xl">Profile Page</p>
            <hr/>
            <button
                onClick={logout}
                className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-blo\d py-2 px-4 rounded"
            >
                Logout
            </button>
        </div>
    )
};