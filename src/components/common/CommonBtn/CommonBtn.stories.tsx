import { codeExample } from './CodeExample';
import { CommonBtn } from './CommonBtn';
/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Meta, StoryFn } from '@storybook/react';
import { CommonBtnProps } from './CommonBtn.types';

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

export const FullWidthButton = Template.bind({});

const FullWidthButtonProps: CommonBtnProps = {
  variant: 'confirm',
  widthType: 'full',
  heightType: 'fixed',
  children: '오늘의 습관으로 가기',
  type: 'button',
};

FullWidthButton.args = {
  ...FullWidthButtonProps,
};
FullWidthButton.parameters = { codeExample: codeExample(FullWidthButtonProps) };

const HalfWidthSubmitButtonProps: CommonBtnProps = {
  variant: 'confirm',
  widthType: 'half',
  heightType: 'fixed',
  children: '확인',
  type: 'button',
};

export const HalfWidthSubmitButton = Template.bind({});

HalfWidthSubmitButton.args = {
  ...HalfWidthSubmitButtonProps,
};

HalfWidthSubmitButton.parameters = {
  codeExample: codeExample(HalfWidthSubmitButtonProps),
};

export const HalfWidthCancelButton = Template.bind({});

const HalfWidthCancelButtonProps: CommonBtnProps = {
  variant: 'cancel',
  widthType: 'half',
  heightType: 'fixed',
  children: '취소',
  type: 'button',
};

HalfWidthCancelButton.args = {
  ...HalfWidthCancelButtonProps,
};

HalfWidthCancelButton.parameters = {
  codeExample: codeExample(HalfWidthCancelButtonProps),
};

export const DynamicWidthMakeStudyButton = Template.bind({});

const DynamicWidthMakeStudyButtonProps: CommonBtnProps = {
  variant: 'confirm',
  widthType: 'dynamic',
  heightType: 'dynamic',
  children: '스터디 만들기',
  type: 'button',
};

DynamicWidthMakeStudyButton.args = {
  ...DynamicWidthMakeStudyButtonProps,
};

DynamicWidthMakeStudyButton.parameters = {
  codeExample: codeExample(DynamicWidthMakeStudyButtonProps),
};
