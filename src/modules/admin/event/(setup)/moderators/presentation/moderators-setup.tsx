import EventPageHeader from '@/common/components/ui/page-header'
import React from 'react'
import ModeratorsList from './components/moderators-list'

export default function ModeratorsSetup() {
    return (
        <div>
            <EventPageHeader title='Moderators Setup' />
            <ModeratorsList />
        </div>
    )
}
