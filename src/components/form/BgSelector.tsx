'use client';
// import Image from 'next/image';
import cn from '@/lib/cn';
import FormLabel from './FormLabel';
import { useState } from 'react';

const BackgroundImages = {
  green: '/image/green.webp',
  yellow: '/image/yellow.webp',
  blue: '/image/blue.webp',
  pink: '/image/pink.webp',
  laptop: '/image/laptop.webp',
  plant: '/image/plant.webp',
  desk: '/image/desk.webp',
  wall: '/image/wall.webp',
};

type BgSelectorProps = {
  title: string;
};

const SIZE = 'w-[150px] h-[150px]';
const BORDER = 'border border-black/10 rounded-2xl';

// Radio형태가 아니라 Button으로 처리
const BgSelector = ({ title }: BgSelectorProps) => {
  const [_selectedBg, setSelectedBg] = useState('');
  return (
    <>
      <FormLabel target='background'>{title}</FormLabel>
      <div className={cn('grid grid-cols-4 gap-4')}>
        {Object.entries(BackgroundImages).map(([key, value]) => (
          <button
            key={key}
            className={cn(`bg-cover bg-center`, SIZE, BORDER)}
            style={{ backgroundImage: `url(${value})` }}
            onClick={() => setSelectedBg(key)}
          ></button>
        ))}
      </div>
    </>
  );
};

export default BgSelector;
