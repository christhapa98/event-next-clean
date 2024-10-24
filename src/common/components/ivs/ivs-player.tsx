import React, { useEffect } from "react";
import 'video.js/dist/video-js.css';
import './ivs-player.css';

interface IVSPlayerProps {
    playbackUrl: string;
    autoplay?: boolean;
    controls?: boolean;
    playsinline?: boolean;
    className?: string;
    onPlayerReady?: () => void;
    onPlay?: () => void;
    onPause?: () => void;
    onEnded?: () => void;
}

const IVSPlayer: React.FC<IVSPlayerProps> = ({
    playbackUrl,
    autoplay = true,
    controls = true,
    playsinline = true,
    className = "video-js",
    onPlayerReady,
    onPlay,
    onPause,
    onEnded,
}) => {
    useEffect(() => {
        const loadScripts = async () => {
            try {
                if (window.videojs && window.registerIVSTech) {
                    window.registerIVSTech(window.videojs);
                    const player = window.videojs("amazon-ivs-videojs", {
                        techOrder: ["AmazonIVS"],
                        autoplay,
                        controls,
                        playsinline,
                    });

                    player.src(playbackUrl);

                    if (onPlayerReady) player.ready(onPlayerReady);
                    player.on("play", () => {
                        if (onPlay) onPlay();
                    });
                    player.on("pause", () => {
                        if (onPause) onPause();
                    });
                    player.on("ended", () => {
                        if (onEnded) onEnded();
                    });
                }
            } catch (error) {
                console.error("Script loading failed:", error);
            }
        };
        loadScripts();
    }, [
        playbackUrl,
        autoplay,
        controls,
        playsinline,
        onPlayerReady,
        onPlay,
        onPause,
        onEnded,
    ]);

    return (
        <div className="video-container">
            <video id="amazon-ivs-videojs" className={`${className} vjs-16-9 `} controls={controls}></video>
        </div>
    );
};

export default IVSPlayer;
