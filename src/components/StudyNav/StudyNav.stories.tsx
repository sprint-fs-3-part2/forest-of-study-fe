import { Meta, StoryFn } from '@storybook/react';
import { StudyNav } from './StudyNav';
import { codeExample } from './codeExample';

export default {
  title: 'common/StudyNav',
  component: StudyNav,
  decorators: [
    (Story) => (
      <div className='w-[1000px]'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof StudyNav>;

const Template: StoryFn<typeof StudyNav> = (args) => <StudyNav {...args} />;

export const DailyHabitNav = Template.bind({});

const StudyNavProps = {
  nickname: '연우',
  studyName: '개발공장',
};

DailyHabitNav.args = {
  ...StudyNavProps,
};

DailyHabitNav.parameters = {
  nextjs: {
    appDirectory: true,
    navigation: {
      pathname: '/study/1/habit',
    },
  },
  codeExample: codeExample(StudyNavProps),
};

export const DailyFocusNav = Template.bind({});

DailyFocusNav.args = {
  ...StudyNavProps,
};

DailyFocusNav.parameters = {
  nextjs: {
    appDirectory: true,
    navigation: {
      pathname: '/study/1/focus',
    },
  },
  codeExample: codeExample(StudyNavProps),
};

export const StudyHomeNav = Template.bind({});

StudyHomeNav.args = {
  ...StudyNavProps,
};

StudyHomeNav.parameters = {
  nextjs: {
    appDirectory: true,
    navigation: {
      pathname: '/study',
    },
  },
  codeExample: codeExample(StudyNavProps),
};
