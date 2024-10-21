import EventHomeLayout from '@/common/components/layout/event'
import React, { PropsWithChildren } from 'react'

export default function EventHomeRootLayout({ children }: PropsWithChildren) {
  return (
    <EventHomeLayout>{children}</EventHomeLayout>
  )
}
