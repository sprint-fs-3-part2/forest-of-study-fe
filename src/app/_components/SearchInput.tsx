import Image from 'next/image';

type SearchInputProps = {
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function SearchInput({
  value,
  onChange,
  placeholder,
}: SearchInputProps) {
  return (
    <label className='relative flex w-[335px]'>
      <span className='sr-only'>Search</span>
      <span className='absolute inset-y-0 left-5 flex items-center'>
        <Image
          src='/icons/ic_search.png'
          width={18}
          height={18}
          alt='검색 아이콘'
        />
      </span>

      <input
        className='outlined pl-12 leading-none max-h-10 w-full'
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type='text'
        name='search'
      />
    </label>
  );
}
