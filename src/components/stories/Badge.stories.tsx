import type { Meta, StoryObj } from '@storybook/nextjs';
import { Badge } from '@/components/Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: 'The text displayed inside the badge',
    },
    href: {
      control: 'text',
      description: 'The URL the badge links to',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Read Resume',
    href: '/resume',
  },
};

export const Contact: Story = {
  args: {
    text: 'Contact Me',
    href: '/contact',
  },
};

export const Projects: Story = {
  args: {
    text: 'View Projects',
    href: '/projects',
  },
};

export const Download: Story = {
  args: {
    text: 'Download CV',
    href: '#',
  },
};
