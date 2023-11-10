export default function UserProfile({params}: any) {
    return(
        <div className='flex flex-col justify-center items-center min-h-screen py-2'>
            <h1 className='text-white'>Profile</h1>
            <p className=" text-white text-4xl">Profile Page <span className="p-2 rounded bg-orange-500 text-black">{params.id}</span></p>
        </div>
    )
};