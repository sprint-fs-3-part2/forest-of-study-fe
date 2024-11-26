import trashIcon from '@/public/icons/trash_icon.png';
import cn from '@/lib/cn';
import Image from 'next/image';
import { ModalRowProps } from '../habitComponent.types';

const ROW_SIZING = 'flex w-full justify-center items-center relative gap-2';

const INPUT_BG_COLOR = 'bg-gray-lighter';
const INPUT_SIZING = 'rounded-[20px] w-[400px] h-[54px]';
const INPUT_TEXT = 'text-center font-bold text-gray';
const INPUT_WIDTH = 'w-[256px] md:w-[400px] xl:w-[400px]';

const TRASH_POSITION = 'relative md:absolute xl:absolute';
const TRASH_RIGHT = 'right-0 md:right-[44px] xl:right-[44px]';
const TRASH_COLOR = 'bg-pink';
const TRASH_SIZING =
  'flex justify-center items-center  w-[48px] h-[48px] rounded-full';

export const ModalRow = ({ register, name, onDelete }: ModalRowProps) => {
  return (
    <div className={ROW_SIZING}>
      <input
        type='text'
        {...register(name)}
        className={cn(
          INPUT_SIZING,
          INPUT_BG_COLOR,
          INPUT_WIDTH,
          INPUT_TEXT,
          'underline',
        )}
      ></input>
      <div
        onClick={onDelete}
        className={cn(TRASH_COLOR, TRASH_RIGHT, TRASH_POSITION, TRASH_SIZING)}
      >
        <Image
          src={trashIcon}
          alt='휴지통 아이콘'
          width={24}
          height={24}
        ></Image>
      </div>
    </div>
  );
};
