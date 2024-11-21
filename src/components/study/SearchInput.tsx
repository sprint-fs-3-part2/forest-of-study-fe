import Image from 'next/image';

type SearchInputProps = {
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SEARCH_INPUT_CLASSES = {
  icon: 'absolute inset-y-0 left-5 flex items-center',
  input: 'outlined pl-12 leading-none max-h-10 w-full',
};

export default function SearchInput({
  name,
  value,
  onChange,
  placeholder,
}: Readonly<SearchInputProps>) {
  return (
    <label className='relative flex w-[335px]'>
      <span className='sr-only'>Search</span>
      <span className={SEARCH_INPUT_CLASSES.icon}>
        <Image
          src='/icons/ic_search.png'
          width={18}
          height={18}
          alt='검색 아이콘'
        />
      </span>

      <input
        className={SEARCH_INPUT_CLASSES.input}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        role='searchbox'
        type='text'
        value={value}
      />
    </label>
  );
}
