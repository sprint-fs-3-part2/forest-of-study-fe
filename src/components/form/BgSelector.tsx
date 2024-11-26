'use client';
import Image from 'next/image';
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

const SIZE = 'w-[150px] h-[150px]';
const BORDER = 'border border-black/10 rounded-2xl';

interface BgSelectorProps {
  title: string;
  defaultValue?: string;
  onChange: (e: string) => void;
}

const BgSelector = ({
  title,
  onChange,
  defaultValue = '',
}: BgSelectorProps) => {
  const [selectedBg, setSelectedBg] = useState(defaultValue);

  return (
    <div>
      <FormLabel target='background'>{title}</FormLabel>
      <div
        className={cn(
          'grid gap-4 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 justify-center place-items-center',
        )}
      >
        {Object.entries(BackgroundImages).map(([key, value]) => (
          <button
            id={key}
            name={key}
            key={key}
            className={cn(
              `bg-cover bg-center`,
              SIZE,
              BORDER,
              selectedBg === key &&
                'ring-2 ring-primary flex justify-center items-center',
            )}
            style={{ backgroundImage: `url(${value})` }}
            onClick={() => {
              onChange(key);
              setSelectedBg(key);
            }}
            aria-label={`${key} 배경 선택`}
            role='radio'
            aria-checked={selectedBg === key}
            value={selectedBg}
          >
            {selectedBg === key && (
              <Image
                src='/icons/ic_bg_selected.png'
                alt='선택된 배경'
                width={30}
                height={30}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BgSelector;
