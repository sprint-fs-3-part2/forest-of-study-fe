import type { Meta, StoryFn } from '@storybook/react';
import { ActionBtnProps } from './ActionBtn.types';
import { ActionBtn } from './ActionBtn';
import { codeActionExample } from './ActionExample';
import playIcon from '@/public/icons/play_icon.png';
import pauseIcon from '@/public/icons/pause_icon.png';

export default {
  title: 'ActionBtn',
  component: ActionBtn,
  tags: ['autodocs'],
} satisfies Meta<typeof ActionBtn>;

const Template: StoryFn<typeof ActionBtn> = (args) => <ActionBtn {...args} />;

export const StartButton = Template.bind({});

const StartButtonProps: ActionBtnProps = {
  variant: 'ellipse',
  children: 'Start!',
  type: 'button',
  icon: playIcon,
};

StartButton.args = {
  ...StartButtonProps,
};
StartButton.parameters = {
  codeExample: codeActionExample(StartButtonProps),
};

export const PauseButton = Template.bind({});

const PauseButtonProps: ActionBtnProps = {
  variant: 'ellipse',
  children: 'Stop!',
  type: 'button',
  icon: pauseIcon,
};

PauseButton.args = {
  ...PauseButtonProps,
};
PauseButton.parameters = {
  codeExample: codeActionExample(PauseButtonProps),
};
