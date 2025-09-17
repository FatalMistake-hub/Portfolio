import type { Meta, StoryObj } from '@storybook/nextjs';
import { Container } from '@/components/Container';

const meta: Meta<typeof Container> = {
  title: 'Layout/Container',
  component: Container,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Content to be contained',
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
    children: 'This is content inside the container',
  },
};

export const WithCustomClass: Story = {
  args: {
    children: 'Container with custom background',
    className: 'bg-gray-100',
  },
};

export const WithMultipleElements: Story = {
  args: {
    children: (
      <div>
        <h1 className="text-2xl font-bold mb-4">Sample Content</h1>
        <p className="mb-4">This demonstrates how the container works with multiple elements.</p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded">Button</button>
      </div>
    ),
  },
};
