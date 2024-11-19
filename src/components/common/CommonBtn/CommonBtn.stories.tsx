import { CommonBtn } from './CommonBtn';
/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'CommonBtn',
  component: CommonBtn,
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      return (
        <div className='w-1/2 flex gap-4'>
          <Story />
        </div>
      );
    },
  ],
} satisfies Meta<typeof CommonBtn>;

const Template: StoryFn<typeof CommonBtn> = (args) => <CommonBtn {...args} />;

export const SubmitButton = Template.bind({});

SubmitButton.args = {
  variant: 'submit',
  width: 'half',
  height: 'fixed',
  children: '확인',
};
