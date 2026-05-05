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
                onError: () => {
                    console.log('error');
                },
            }
        );
    }

    return (
        <div>AddUser
            <form onSubmit={onSubmit} ref={ref} className='flex flex-col gap-4'>
                <div className='flex flex-col gap-2 bg-gray-400 p-4 rounded-md'>
                    <label htmlFor="name">Name</label>
                    <input name="name" type="text" placeholder="Name" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input name="email" type="text" placeholder="Email" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input name="password" type="password" placeholder="Password" />
                </div>
                <button type="submit">{isPending ? 'Loading...' : 'Add User'}</button>
            </form>
        </div>
    )
}
