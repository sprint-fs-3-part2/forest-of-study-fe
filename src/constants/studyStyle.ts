import type { BgType } from '@/services/study/api/types';
import styles from '@/styles/study.module.css';

export const STUDY_GRID_CLASSES = {
  container: [
    'grid',
    'grid-cols-1',
    'sm:grid-cols-2',
    'md:grid-cols-3',
    'gap-6',
  ].join(' '),
} as const;

export const STUDY_BG_CLASSES: Record<BgType, string> = {
  blue: `${styles.bgBlue} [&>*]:bg-black-50`,
  pink: `${styles.bgPink} [&>*]:bg-black-50`,
  green: `${styles.bgGreen} [&>*]:bg-black-50`,
  yellow: `${styles.bgYellow} [&>*]:bg-black-50`,
  wall: `${styles.bgWall} [&>*]:bg-black-50`,
  desk: `${styles.bgDesk} [&>*]:bg-black-50`,
  laptop: `${styles.bgLaptop} [&>*]:bg-black-50`,
  plant: `${styles.bgPlant} [&>*]:bg-black-50`,
} as const;

export const STUDY_BOARD_CLASSES = {
  section: [
    'container',
    'base-container',
    'grid',
    'grid-rows-[auto_1fr]',
    'max-w-[1200px]',
    'mx-auto',
    'gap-6',
  ].join(' '),
} as const;

export const STUDY_LINK_CLASSES = {
  base: [
    'w-full',
    'h-full',
    'bg-cover',
    'rounded',
    'bg-no-repeat',
    'bg-center',
    'min-h-[180px]',
    'transition-transform',
    'hover:scale-[1.02]',
    'focus:scale-[1.02]',
  ].join(' '),
} as const;

export const STUDY_BG_STYLES: Record<BgType, React.CSSProperties> = {
  blue: { backgroundImage: 'url("/image/blue.webp")' },
  pink: { backgroundImage: 'url("/image/pink.webp")' },
  green: { backgroundImage: 'url("/image/green.webp")' },
  yellow: { backgroundImage: 'url("/image/yellow.webp")' },
  wall: { backgroundImage: 'url("/image/wall.webp")' },
  desk: { backgroundImage: 'url("/image/desk.webp")' },
  laptop: { backgroundImage: 'url("/image/laptop.webp")' },
  plant: { backgroundImage: 'url("/image/plant.webp")' },
} as const;
