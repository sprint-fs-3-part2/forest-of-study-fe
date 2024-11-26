'use client';

import cn from '@/lib/cn';
import { usePathname } from 'next/navigation';

export default function StudyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const editPage = pathname.split('/')[3] === 'edit';
  const createPage = pathname.split('/')[2] === 'create';

  const EDIT_AND_CREATE = editPage || createPage;

  const MAX_WIDTH = EDIT_AND_CREATE ? 'max-w-[696px]' : 'max-w-[1200px]';
  const EDIT_AND_CREATE_PADDING = 'p-4 md:p-6 xl:p-6 pb-5 md:pb-10 xl:pb-10';
  const OTHERS_PADDING = 'p-4 md:p-6 xl:p-10';
  const PADDING = EDIT_AND_CREATE ? EDIT_AND_CREATE_PADDING : OTHERS_PADDING;

  return (
    <div className='px-4 md:px-6 xl:px-8 pt-5 md:pt-4 xl:pt-10 overflow-y-auto mb-[140px]'>
      <main
        className={cn(
          'w-full bg-white mx-auto rounded-[20px]',
          MAX_WIDTH,
          PADDING,
        )}
      >
        {children}
      </main>
    </div>
  );
}
