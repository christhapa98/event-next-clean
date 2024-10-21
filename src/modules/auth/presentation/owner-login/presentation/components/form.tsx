"use client"
import React from 'react';
import { Input } from '@/common/components/ui/form/input';
import { Label } from '@/common/components/ui/label';
import { Button } from '@/common/components/ui/button';

const OwnerLoginForm: React.FC = () => {
    return (
        <form className='w-[400px] space-y-4' >
            <div className='space-y-2'>
                <Label>Username</Label>
                <Input type="text" />
            </div>

            <div className='space-y-2'>
                <Label>Password</Label>
                <Input type="password" />
            </div>
            <Button className='w-full' type="submit">Login</Button>
        </form>
    );
};

export default OwnerLoginForm;
