import { Study } from '@/components/study';

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <div className='gap-6 grid pb-44 scroll-smooth'>
      <Study.Recent />
      <Study.Explorer />
    </div>
  );
}
