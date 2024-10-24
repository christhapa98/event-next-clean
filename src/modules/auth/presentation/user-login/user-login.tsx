"use client";
import React from 'react';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import UserLoginForm from './form';

export default function UserLogin() {
    const { data: session, status } = useSession();

    if (status === "loading") {
        return <div>Loading...</div>;
    }

    // if (session?.user) {
    //     redirect('/')
    // }

    return (
        <div>
            <UserLoginForm />
        </div>
    );
}
