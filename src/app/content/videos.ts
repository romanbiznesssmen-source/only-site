import { CREATOR_NAME } from './creator'

export { CREATOR_NAME }

export type MomentVideo = {
  id: string
  src: string
  caption: string
  locked: boolean
}

export const MOMENT_VIDEOS: MomentVideo[] = [
  {
    id: 'morning-pool',
    src: '/content/videos/preview/morning-by-the-pool.mp4',
    caption: 'Slow morning today ☕',
    locked: false,
  },
  {
    id: 'sunset-balcony',
    src: '/content/videos/preview/sunset-on-the-balcony.mp4',
    caption: 'Golden hour, just us 🌅',
    locked: false,
  },
  {
    id: 'bedroom-mirror',
    src: '/content/videos/locked/bedroom-mirror-teaser.mp4',
    caption: "Something I'd only share here",
    locked: true,
  },
  {
    id: 'cosplay-bts',
    src: '/content/videos/locked/cosplay-behind-the-scenes.mp4',
    caption: 'Behind the scenes 👀',
    locked: true,
  },
  {
    id: 'late-night',
    src: '/content/videos/locked/late-night-private.mp4',
    caption: 'Late night vibes only',
    locked: true,
  },
  {
    id: 'members-clip',
    src: '/content/videos/locked/members-only-clip.mp4',
    caption: 'Full version inside',
    locked: true,
  },
]
