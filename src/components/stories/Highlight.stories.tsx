/* eslint-disable react/no-unescaped-entities */
import type { Meta, StoryObj } from '@storybook/nextjs';
import { Highlight } from '@/components/Highlight';
import { Paragraph } from '@/components/Paragraph';

const meta: Meta<typeof Highlight> = {
  title: 'Typography/Highlight',
  component: Highlight,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'The text content to highlight',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'highlighted text',
  },
};

export const InParagraph: Story = {
  render: (args) => (
    <Paragraph>
      This paragraph contains <Highlight {...args}>highlighted content</Highlight> within it.
    </Paragraph>
  ),
  args: {
    children: 'highlighted content',
  },
};

export const CustomBackground: Story = {
  args: {
    children: 'custom highlight',
    className: 'bg-yellow-200',
  },
};

export const MultipleTags: Story = {
  args: {
    children: 'React, Next.js, TypeScript',
    className: 'bg-blue-100 text-blue-800',
  },
};

export const InContext: Story = {
  render: () => (
    <Paragraph>
      I'm a frontend developer that loves <Highlight>building products</Highlight> and web apps that are
      user-friendly and accessible. I specialize in <Highlight className="bg-green-100">React</Highlight>,{' '}
      <Highlight className="bg-blue-100">Next.js</Highlight>, and{' '}
      <Highlight className="bg-purple-100">modern web technologies</Highlight>.
    </Paragraph>
  ),
};
