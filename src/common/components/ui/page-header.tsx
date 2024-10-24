import React from 'react'

type Props = {
    title: string,
    description?: string,
    size?: string
}
export default function EventPageHeader({ title, description, size = "text-2xl" }: Props) {
    return (
        <div>
            <h3 className={` ${size} font-bold `}>{title}</h3>
            <p>{description}</p>
        </div>
    )
}
