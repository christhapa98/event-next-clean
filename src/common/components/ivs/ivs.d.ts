// global.d.ts
declare global {
    interface Window {
        videojs: any; // Replace 'any' with the actual type if known
        registerIVSTech: (videojs: any) => void; // Define other types as needed
    }
}

export { };
