/**
 * Point 컴포넌트
 *
 * @description 사용자가 현재까지 획득한 포인트를 보여주는 컴포넌트입니다.
 */

import { IconTag } from '@/components/common/IconTag';

/* 아이콘 */
import pointIcon from '@/public/icons/point_icon.png';

const Point = () => {
  const point = 310;
  return (
    <div className='mb-6'>
      <p className='text-gray mb-2'>현재까지 획득한 포인트</p>
      <IconTag
        variant='point'
        parentComponent='page'
        fillColor='white'
        icon={pointIcon}
        text={`${point}P 획득`}
      />
    </div>
  );
};

export { Point };
