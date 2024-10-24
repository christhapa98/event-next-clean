"use client"
import IVSPlayer from '@/common/components/ivs/ivs-player'
import React from 'react'

export default function EventPlayer() {
    return (
        <IVSPlayer
            playbackUrl={"https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"}
            autoplay={true}
            controls={true}
            playsinline={true}
        />
    )
}
