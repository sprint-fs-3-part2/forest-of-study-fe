import { Meta, StoryFn } from '@storybook/react';
import { Modal } from './Modal';
import { CommonBtn } from '../CommonBtn';
import { codeExample } from './CodeExample';

export default {
  title: 'common/Modal',
  component: Modal,
} satisfies Meta<typeof Modal>;

const Template: StoryFn<typeof Modal> = (args) => (
  <Modal {...args}>{args.children}</Modal>
);

export const PasswordModal = Template.bind({});

const PasswordModalContent = () => {
  return (
    <>
      <div className='relative w-full flex justify-center items-center mb-[24px]'>
        <div className='absolute right-[10px] top-[6px] text-green-text'>
          나가기
        </div>
        <div className='font-extrabold text-[24px]'>연우의 개발공장</div>
      </div>
      <div className='mb-[24px] text-gray'>권한이 필요해요!</div>
      <form className='flex flex-col w-full'>
        <label className='mb-[16px]'>비밀번호</label>
        <input
          className='mb-[40px] border px-[20px] py-[12px] rounded-[15px] border-gray-light'
          placeholder='비밀번호를 입력해주세요.'
        ></input>
        <CommonBtn
          widthType='full'
          heightType='fixed'
          variant='confirm'
        >
          수정하러가기
        </CommonBtn>
      </form>
    </>
  );
};

const childrenText = `
    <>
      <div className='relative w-full flex justify-center items-center mb-[24px]'>
        <div className='absolute right-[10px] top-[6px] text-green-text'>
          나가기
        </div>
        <div className='font-extrabold text-[24px]'>연우의 개발공장</div>
      </div>
      <div className='mb-[24px] text-gray'>권한이 필요해요!</div>
      <form className='flex flex-col w-full'>
        <label className='mb-[16px]'>비밀번호</label>
        <input
          className='mb-[40px] border px-[20px] py-[12px] rounded-[15px] border-gray-light'
          placeholder='비밀번호를 입력해주세요.'
        ></input>
        <CommonBtn
          widthType='full'
          heightType='fixed'
          variant='confirm'
        >
          수정하러가기
        </CommonBtn>
      </form>
    </>
`;

const PasswordModalProps = {
  isOpen: true,
  children: <PasswordModalContent />,
};

PasswordModal.args = {
  ...PasswordModalProps,
};

PasswordModal.parameters = {
  codeExample: codeExample({ ...PasswordModalProps, childrenText }),
};
