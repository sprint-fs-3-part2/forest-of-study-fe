'use client';

import { usePathname } from 'next/navigation';

export default function StudyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const editPage = pathname.split('/')[3] === 'edit';
  const createPage = pathname.split('/')[2] === 'create';
  const MAX_WIDTH = editPage || createPage ? 'max-w-[696px]' : 'max-w-[1200px]';

  return (
    <div className='px-4 md:px-6 xl:px-8 pt-5 md:pt-4 xl:pt-10 overflow-y-auto mb-[140px]'>
      <main
        className={`w-full bg-white mx-auto rounded-[20px] p-4 md:p-6 xl:p-10 ${MAX_WIDTH}`}
      >
        {children}
      </main>
    </div>
  );
}
