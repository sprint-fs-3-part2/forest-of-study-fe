import type { Meta, StoryFn } from '@storybook/react';
import { ActionBtnProps } from './ActionBtn.types';
import { ActionBtn } from './ActionBtn';
import { codeExample } from './codeExample';
import playIcon from '@/public/icons/play_icon.png';
import stopIcon from '@/public/icons/stop_icon.png';
import pauseIcon from '@/public/icons/pause_icon.png';
import restartIcon from '@/public/icons/restart_icon.png';

export default {
  title: 'common/ActionBtn',
  component: ActionBtn,
  tags: ['autodocs'],
} satisfies Meta<typeof ActionBtn>;

const Template: StoryFn<typeof ActionBtn> = (args) => <ActionBtn {...args} />;

export const StartButton = Template.bind({});

const StartButtonProps: ActionBtnProps = {
  variant: 'ellipse',
  children: 'Start!',
  icon: playIcon,
  disabled: false,
};

StartButton.args = {
  ...StartButtonProps,
};
StartButton.parameters = {
  codeExample: codeExample(StartButtonProps),
};

export const StopButton = Template.bind({});

const StopButtonProps: ActionBtnProps = {
  variant: 'ellipse',
  children: 'Stop!',
  icon: stopIcon,
  disabled: false,
  onClick: () => console.log('hi'),
};

StopButton.args = {
  ...StopButtonProps,
};
StopButton.parameters = {
  codeExample: codeExample(StopButtonProps),
};

export const PauseButton = Template.bind({});

const PauseButtonProps: ActionBtnProps = {
  variant: 'circle',
  icon: pauseIcon,
  disabled: false,
};

PauseButton.args = {
  ...PauseButtonProps,
};
PauseButton.parameters = {
  codeExample: codeExample(PauseButtonProps),
};

export const RestartButton = Template.bind({});

const RestartButtonProps: ActionBtnProps = {
  variant: 'circle',
  icon: restartIcon,
  disabled: false,
};

RestartButton.args = {
  ...RestartButtonProps,
};

RestartButton.parameters = {
  codeExample: codeExample(RestartButtonProps),
};
