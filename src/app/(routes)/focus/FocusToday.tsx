'use client';

import Image from 'next/image';
import Link from 'next/link';
import rightArrowIcon from '@/public/icons/ic_arrow_right.svg';
import { useEffect, useRef, useState } from 'react';

type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  return (
    <div className='flex flex-row justify-between items-center mb-4'>
      <h1 className='text-[32px] font-bold'>{title}</h1>
      <div className='flex gap-4'>
        <Link href={'/habit'}>
          <Button>오늘의 습관</Button>
        </Link>

        <Link href={'/'}>
          <Button>홈</Button>
        </Link>
      </div>
    </div>
  );
};

type ButtonProps = {
  children: React.ReactNode;
};

const Button = ({ children }: ButtonProps) => {
  return (
    <button className='border border-gray-light rounded-2xl py-3 pl-6 pr-4 flex'>
      {children}
      {rightArrowIcon && (
        <Image
          src={rightArrowIcon}
          width={24}
          height={24}
          alt='페이지 이동 아이콘'
        />
      )}
    </button>
  );
};

const Point = () => {
  return (
    <div className='mb-6'>
      <p className='text-gray'>현재까지 획득한 포인트</p>
      {/* <IconTag  /> */}
      <p>IconTag 공통 컴포넌트 필요</p>
    </div>
  );
};

const Timer = () => {
  const initTime = 25 * 60; // 25분
  const [isPaused, setIsPaused] = useState(true); // 일시정지 상태
  const [secondsLeft, setSecondsLeft] = useState(initTime); // 남은 시간

  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);

  // 1초마다 실행되는 함수
  const tick = () => {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  };

  // 멈춤 및 진행 기능
  const handlePause = () => {
    setIsPaused(!isPaused);
    isPausedRef.current = !isPaused;
  };

  // 초기화 기능
  const handleReset = () => {
    setIsPaused(true);
    isPausedRef.current = true;
    setSecondsLeft(initTime);
    secondsLeftRef.current = initTime;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPausedRef.current) return;
      tick();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // 타이머 화면 표시 처리 (양수일 때)
  const minutes = Math.floor(secondsLeft / 60);
  let formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
  const seconds = secondsLeft % 60;
  let formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

  // 타이머 화면 표시 처리 (음수일 때)
  if (minutes < 0) {
    formattedMinutes =
      Math.abs(minutes + 1) < 10
        ? '-0' + Math.abs(minutes + 1)
        : Math.abs(minutes + 1);

    formattedSeconds =
      Math.abs(seconds) < 10 ? '0' + Math.abs(seconds) : Math.abs(seconds);
  }

  return (
    <div className='border border-gray-light rounded-[20px] flex flex-col justify-around items-center h-[546px]'>
      {/* 타이머 제목 */}
      <h2 className='font-extrabold text-2xl'>오늘의 집중</h2>

      {/* 타이머 */}
      {secondsLeft >= 10 && (
        <span className='font-extrabold text-[150px]'>
          {formattedMinutes + ':' + formattedSeconds}
        </span>
      )}
      {secondsLeft < 10 && secondsLeft >= 0 && (
        <span className='font-extrabold text-[150px] text-red'>
          {formattedMinutes + ':' + formattedSeconds}
        </span>
      )}
      {secondsLeft < 0 && (
        <span className='font-extrabold text-[150px] text-gray'>
          {formattedMinutes + ':' + formattedSeconds}
        </span>
      )}

      {/* 타이머 관련 버튼 */}
      <div className='flex justify-between gap-6'>
        {secondsLeft === initTime && (
          <button onClick={handlePause}> start! 가능 </button>
        )}
        {secondsLeft !== initTime && secondsLeft >= 0 && (
          <>
            <button
              disabled={isPaused}
              onClick={isPaused ? undefined : handlePause}
            >
              {isPaused ? 'stop불가능' : 'stop 가능'}
            </button>

            <button
              disabled={!isPaused}
              onClick={isPaused ? handlePause : undefined}
            >
              {isPaused ? 'start! 가능' : 'start! 불가능'}
            </button>
            <button onClick={handleReset}> reset</button>
          </>
        )}
        {secondsLeft < 0 && (
          <button
            onClick={handleReset}
            className='text-gray'
          >
            stop!
          </button>
        )}
      </div>
    </div>
  );
};

export { Timer, Point, Button, Header };
