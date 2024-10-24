import React, { Fragment } from 'react'
import CreateEventDrawer from './components/create-event/create-event'
import EventTab from './components/event-tab'

export default function Home() {
  return (
    <Fragment>
      <CreateEventDrawer />
      <EventTab />
    </Fragment>
  )
}
