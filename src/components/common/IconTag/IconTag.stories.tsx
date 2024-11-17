import { Meta, StoryFn } from '@storybook/react';
import { IconTag } from './IconTag';
import addReactionIcon from '@/public/icons/add_reaction_icon.png';
import pointIcon from '@/public/icons/point_icon.png';
import { IconTagProps } from './IconTag.types';
import { codeExample } from './CodeExample';

export default {
  title: 'IconTag',
  component: IconTag,
  tags: ['autodocs'],
} satisfies Meta<typeof IconTag>;

const Template: StoryFn<typeof IconTag> = (args) => <IconTag {...args} />;

export const PointTagOnPageWithImage = Template.bind({});
const PointTagOnPageWithImageProps: IconTagProps = {
  variant: 'point',
  parentComponent: 'page',
  fillColor: 'white',
  backgroundType: 'image',
  icon: pointIcon,
  text: '500P 획득',
};
PointTagOnPageWithImage.args = {
  ...PointTagOnPageWithImageProps,
};

PointTagOnPageWithImage.parameters = {
  codeExample: codeExample(PointTagOnPageWithImageProps),
};

export const PointTagOnPageWithColor = Template.bind({});
const PointTagOnPageWithColorProps: IconTagProps = {
  variant: 'point',
  parentComponent: 'page',
  fillColor: 'black',
  backgroundType: 'color',
  icon: pointIcon,
  text: '500P 획득',
};

PointTagOnPageWithColor.args = {
  ...PointTagOnPageWithColorProps,
};

PointTagOnPageWithColor.parameters = {
  codeExample: codeExample(PointTagOnPageWithColorProps),
};

export const PointTagOnCard = Template.bind({});
const PointTagOnCardProps: IconTagProps = {
  variant: 'point',
  parentComponent: 'card',
  fillColor: 'white',
  icon: pointIcon,
  text: '500P 획득',
};

PointTagOnCard.args = {
  ...PointTagOnCardProps,
};

PointTagOnCard.parameters = {
  codeExample: codeExample(PointTagOnCardProps),
};

export const ReactionTagOnPage = Template.bind({});
const ReactionTagOnPageProps: IconTagProps = {
  variant: 'reaction',
  parentComponent: 'page',
  fillColor: 'black',
  icon: '😍',
  text: '35',
};

ReactionTagOnPage.args = {
  ...ReactionTagOnPageProps,
};

ReactionTagOnPage.parameters = {
  codeExample: codeExample(ReactionTagOnPageProps),
};

export const ReactionTagOnCardWithImage = Template.bind({});
const ReactionTagOnCardWithImageProps: IconTagProps = {
  variant: 'reaction',
  parentComponent: 'card',
  fillColor: 'black',
  backgroundType: 'image',
  icon: '😍',
  text: '35',
};

ReactionTagOnCardWithImage.args = {
  ...ReactionTagOnCardWithImageProps,
};

ReactionTagOnCardWithImage.parameters = {
  codeExample: codeExample(ReactionTagOnCardWithImageProps),
};

export const ReactionTagOnCardWithColor = Template.bind({});
const ReactionTagOnCardWithColorProps: IconTagProps = {
  variant: 'reaction',
  parentComponent: 'card',
  fillColor: 'black',
  backgroundType: 'color',
  icon: '😍',
  text: '35',
};

ReactionTagOnCardWithColor.args = {
  ...ReactionTagOnCardWithColorProps,
};

ReactionTagOnCardWithColor.parameters = {
  codeExample: codeExample(ReactionTagOnCardWithColorProps),
};

export const AddReactionTag = Template.bind({});
const AddReactionTagProps: IconTagProps = {
  variant: 'reaction',
  parentComponent: 'card',
  fillColor: 'white',
  backgroundType: 'color',
  icon: addReactionIcon,
  text: '추가',
  className: 'cursor-pointer',
};

AddReactionTag.args = {
  ...AddReactionTagProps,
};

AddReactionTag.parameters = {
  codeExample: codeExample(AddReactionTagProps),
};
