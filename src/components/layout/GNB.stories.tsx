import { Meta, StoryFn } from '@storybook/react';
import { GNB } from './GNB';

export default {
  title: 'common/GNB',
  component: GNB,
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
} satisfies Meta<typeof GNB>;

const Template: StoryFn<typeof GNB> = () => <GNB />;

export const GNBOnHome = Template.bind({});

GNBOnHome.parameters = {
  nextjs: {
    appDirectory: true,
    navigation: {
      pathname: '/',
    },
  },
};

export const GNBOnOtherPage = Template.bind({});

GNBOnOtherPage.parameters = {
  nextjs: {
    appDirectory: true,
    navigation: {
      pathname: '/other',
    },
  },
};
