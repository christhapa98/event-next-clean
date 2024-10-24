import React, { Fragment } from 'react'
import PublicChat from './components/chat/public-chat'
import EventPlayer from './components/player'
import { Rss } from 'lucide-react'
import BannerAdslider from '@/common/components/ads-slider/banner-ads'

export default function EventHome() {
    return (
        <Fragment>
            <div className='h-full flex gap-4 py-8'>
                <div className='space-y-4 pr-4 h-full overflow-y-scroll aspect-video'>
                    <EventPlayer />
                    <div className='flex gap-4'>
                        <h5 className='text-xl'>Albatross Nepal</h5>
                        <div className='text-xs bg-red-600 text-white animate-pulse delay-200 p-2 flex gap-2 rounded  items-center'><Rss size={12} /> Live</div>
                    </div>
                    <p className='text-gray-600'>
                        Albatross (Nepali: आल्बाट्रस) is a Nepali rock band from Kathmandu, Nepal.
                        Formed in 1998 as a three-piece school band, Albatross has made a landmark in
                        the Nepali music scene. It all began when a couple of guys joined hands together
                        with their rusted guitars and other old instruments to transcend the sound of
                        Nepali Alternative music, each of which has significantly influenced the music
                        which the band creates. The band's fast tempos, signature chord progression and
                        contemporary compositions has made them one of the pioneers of rock music in Nepal
                    </p>
                    <BannerAdslider/>
                </div>
                <div className='h-full overflow-y-scroll min-w-[300px]'>
                    <PublicChat />
                </div>
            </div>
        </Fragment>
    )
}