import GithubSignInButton from '@/common/components/social-buttons/github-signin'
import GoogleSignInButton from '@/common/components/social-buttons/google-signin'
import React from 'react'

export default function UserLoginForm() {
    return (
        <div className='space-y-4'>
            <GoogleSignInButton />
            <GithubSignInButton />
        </div>
    )
}
