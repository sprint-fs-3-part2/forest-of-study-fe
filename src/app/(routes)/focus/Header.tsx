import Image from 'next/image';
import Link from 'next/link';

/* 아이콘 */
import rightArrowIcon from '@/public/icons/ic_arrow_right.svg';

type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  return (
    <div className='flex flex-row justify-between items-center mb-4 flex-wrap gap-4'>
      <h1 className='text-[32px] font-bold max-sm:text-2xl'>{title}</h1>
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

export { Header };
