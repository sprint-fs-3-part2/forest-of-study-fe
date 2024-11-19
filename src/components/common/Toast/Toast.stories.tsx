import { Meta, StoryFn } from '@storybook/react';
import { Toast } from './Toast';
import { ToastProps } from './Toast.types';
import { codeExample } from './codeExample';

export default {
  title: 'common/Toast',
  component: Toast,
  tags: ['autodocs'],
} satisfies Meta<typeof Toast>;

const Template: StoryFn<typeof Toast> = (args) => <Toast {...args} />;

export const PointToast = Template.bind({});
const PointToastProps: ToastProps = {
  variant: 'point',
  children: '🎉 50포인트를 획득했습니다!',
};

PointToast.args = {
  ...PointToastProps,
};

PointToast.parameters = {
  codeExample: codeExample(PointToastProps),
};

export const WarningToast = Template.bind({});
const WarningToastProps: ToastProps = {
  variant: 'warning',
  children: '🚨 집중이 중단되었습니다.',
};

WarningToast.args = {
  ...WarningToastProps,
};

WarningToast.parameters = {
  codeExample: codeExample(WarningToastProps),
};
