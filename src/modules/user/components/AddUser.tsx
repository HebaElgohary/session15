'use client'
import React from 'react'
import { usePostUser } from '../hooks/usePostUser';

export default function AddUser() {
    const ref = React.useRef<HTMLFormElement>(null);
    const { mutate, isPending } = usePostUser();

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;

        mutate(
            { name, email, password },
            {
                onSuccess: () => {
                    ref.current?.reset();
                    alert('User added successfully');
                },
                onError: (error) => {
                    alert(error);
                    console.log('error', error);
                },
            }
        );
    }

    return (
        <div className='flex flex-col justify-center items-center gap-4  md:w-1/2 w-full  !mx-auto !mt-10 !p-6  rounded-md shadow-md'>
            <h1 className='text-2xl font-bold text-red-400 text-center'>Add User</h1>
            <form onSubmit={onSubmit} ref={ref} className='flex flex-col gap-4'>
                <div className='flex flex-row gap-4 !p-4 rounded-md'>
                    <label htmlFor="name">Name</label>
                    <input name="name" type="text" placeholder="Name" />
                </div>
                <div className='flex flex-row gap-4 !p-4 rounded-md'>
                    <label htmlFor="email">Email</label>
                    <input name="email" type="text" placeholder="Email" />
                </div>
                <div className='flex flex-row gap-4 !p-4 rounded-md'>
                    <label htmlFor="password">Password</label>
                    <input name="password" type="password" placeholder="Password" />
                </div>
                <button type="submit" className='bg-red-400 flex items-center justify-center hover:bg-red-500 text-white font-bold !py-2 !px-4 rounded'>{isPending ? 'Loading...' : 'Add User'}</button>
            </form>
        </div>
    )
}
