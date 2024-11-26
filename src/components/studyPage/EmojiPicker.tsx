import EmojiPicker, { EmojiClickData, Categories } from 'emoji-picker-react';
import { useState } from 'react';
import AddReactionIcon from '@/public/icons/add_reaction_icon.png';
import { IconTag } from '../common/IconTag';

interface Props {
  onEmojiSelect: (emoji: string) => void;
}

export function EmojiPickerComponent({ onEmojiSelect }: Props) {
  const [showPicker, setShowPicker] = useState(false);

  const onEmojiClick = (emojiData: EmojiClickData) => {
    onEmojiSelect(emojiData.emoji);
    setShowPicker(false);
  };

  return (
    <div className='relative'>
      <IconTag
        variant='reaction'
        parentComponent='page'
        fillColor='white'
        icon={AddReactionIcon}
        text='추가'
        className='cursor-pointer'
        onClick={() => setShowPicker(!showPicker)}
      />

      {showPicker && (
        <div className='absolute z-50 mt-1'>
          <div
            className='fixed inset-0'
            onClick={() => setShowPicker(false)}
          />
          <div className='relative'>
            <EmojiPicker
              onEmojiClick={onEmojiClick}
              searchPlaceholder='이모지 검색...'
              width={350}
              height={450}
              lazyLoadEmojis={true}
              previewConfig={{
                showPreview: false,
              }}
              skinTonesDisabled
            />
          </div>
        </div>
      )}
    </div>
  );
}
