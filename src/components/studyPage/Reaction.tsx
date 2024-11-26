'use client';

import { useState } from 'react';
import { IconTag } from '../common/IconTag';
import PlusIcon from '@/public/icons/ic_plus-1.png';
import AddReactionIcon from '@/public/icons/add_reaction_icon.png';
import { MoreReactionProps, ReactionsType } from './studyPage.types';

const ReactionsComponents = ({
  reactions,
}: {
  reactions: [string, number][];
}) => {
  return (
    <>
      {reactions.map(([reaction, count]) => {
        return (
          <IconTag
            variant='reaction'
            parentComponent='page'
            fillColor='black'
            key={reaction}
            icon={reaction}
            text={count + ''}
          />
        );
      })}
    </>
  );
};

const MoreReactions = ({ reactions, displayMore }: MoreReactionProps) => {
  return (
    displayMore && (
      <div className='absolute p-3 bg-white flex border border-gray-light rounded-[15px] shadow-[0_2px_12px_0_rgba(0,0,0,0.08)] top-[45px]'>
        <div className='grid gap-1 grid-cols-4'>
          <ReactionsComponents reactions={reactions} />
        </div>
      </div>
    )
  );
};

export function Reaction({ reactions }: { reactions: ReactionsType }) {
  const reactionsEntry = Object.entries(reactions).sort((a, b) => b[1] - a[1]);
  const threeReactions = reactionsEntry.slice(0, 3);
  const restReactions = reactionsEntry.slice(4);
  const [showMoreReaction, setShowMoreReaction] = useState(false);

  return (
    <div className='flex gap-1'>
      <div className='flex gap-1'>
        <ReactionsComponents reactions={threeReactions} />
        {restReactions.length > 0 && (
          <>
            <IconTag
              className='opacity-30 cursor-pointer'
              variant='reaction'
              parentComponent='page'
              fillColor='black'
              key='reaction'
              icon={PlusIcon}
              text={`${restReactions.length}..`}
              onClick={() => setShowMoreReaction((prev) => !prev)}
            />
            <MoreReactions
              reactions={restReactions}
              displayMore={showMoreReaction}
            />
          </>
        )}
      </div>
      <div>
        <IconTag
          variant='reaction'
          parentComponent='page'
          fillColor='white'
          icon={AddReactionIcon}
          text='추가'
          className='cursor-pointer'
        />
      </div>
    </div>
  );
}
