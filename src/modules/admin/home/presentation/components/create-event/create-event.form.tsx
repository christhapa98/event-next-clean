"use client"
import { Button } from '@/common/components/ui/button'
import { Input } from '@/common/components/ui/form/input'
import { Label } from '@/common/components/ui/label'
import React from 'react'
import useCreateEvent from '../../hook/use-create-event'

export default function CreateEventForm() {
    const { register, handleSubmit, errors } = useCreateEvent()

    return (
        <form onSubmit={handleSubmit}>
            <div className='space-y-2'>
                <div className='space-y-2'>
                    <Label>Event Name</Label>
                    <Input {...register('name')} type="text" />
                    {errors.name && <p>{errors.name.message}</p>}
                </div>
                <div className='space-y-2'>
                    <Label>Slug</Label>
                    <Input {...register('slug')} type="text" />
                    {errors.slug && <p>{errors.slug.message}</p>}
                </div>
                <div className='space-y-2'>
                    <Label>Start Date</Label>
                    <Input {...register('startDate')} type="date" />
                    {errors.startDate && <p>{errors.startDate.message}</p>}
                </div>
                <div className='space-y-2'>
                    <Label>End Date</Label>
                    <Input {...register('endDate')} type="date" />
                    {errors.endDate && <p>{errors.endDate.message}</p>}
                </div>
                <div className='pt-4'>
                    <Button className='float-right w-full' type='submit'>Create event</Button>
                </div>
            </div>
        </form>
    )
}
