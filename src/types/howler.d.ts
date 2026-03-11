// howler.d.ts
// minimal ambient declaration for Howler library; Vercel build lacked types.
// only the parts we use are included; you can expand as needed later.

declare module 'howler' {
    export interface HowlOptions {
        src: string | string[];
        [key: string]: any;
    }

    export class Howl {
        constructor(options: HowlOptions);
        play(): void;
        stop(): void;
        pause(): void;
        volume(volume: number): number;
        fade(from: number, to: number, duration: number): void;
        once(event: string, listener: () => void): void;
    }

    export class Howler {
        static mute(mute: boolean): void;
        static volume(v: number): void;
        static stop(): void;
    }
}
