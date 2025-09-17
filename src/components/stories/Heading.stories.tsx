import type { Meta, StoryObj } from '@storybook/nextjs';
import { Heading } from '@/components/Heading';

const meta: Meta<typeof Heading> = {
  title: 'Components/Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'The content of the heading',
    },
    as: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'],
      description: 'The HTML tag to render',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    children: 'Main Heading',
    as: 'h1',
  },
};

export const H2: Story = {
  args: {
    children: 'Secondary Heading',
    as: 'h2',
  },
};

export const H3: Story = {
  args: {
    children: 'Tertiary Heading',
    as: 'h3',
  },
};

export const CustomStyle: Story = {
  args: {
    children: 'Custom Styled Heading',
    as: 'h2',
    className: 'text-red-500 font-bold',
  },
};

export const LongHeading: Story = {
  args: {
    children: 'This is a very long heading that demonstrates how the component handles longer text content',
    as: 'h1',
  },
};
