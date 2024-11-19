import { Meta, StoryFn } from '@storybook/react';
import { LinkBtn } from './LinkBtn';
import { codeExample } from './CodeExample';

export default {
  title: 'common/LinkBtn',
  component: LinkBtn,
  tags: ['autodocs'],
} satisfies Meta<typeof LinkBtn>;

const Template: StoryFn = (args) => <LinkBtn {...args} />;

export const TodayFocus = Template.bind({});

const TodayFocusProps = {
  children: '오늘의 집중',
};

TodayFocus.args = {
  ...TodayFocusProps,
};

TodayFocus.parameters = {
  codeExample: codeExample(TodayFocusProps),
};

export const Home = Template.bind({});

const HomeProps = {
  children: '홈',
};

Home.args = {
  ...HomeProps,
};

Home.parameters = {
  codeExample: codeExample(HomeProps),
};

export const TodayHabit = Template.bind({});

const TodayHabitProps = {
  children: '오늘의 습관',
};

TodayHabit.args = {
  ...TodayHabitProps,
};

TodayHabit.parameters = {
  codeExample: codeExample(TodayHabitProps),
};
