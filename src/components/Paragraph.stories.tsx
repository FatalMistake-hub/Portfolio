import type { Meta, StoryObj } from '@storybook/nextjs';
import { Paragraph } from '@/components/Paragraph';

const meta: Meta<typeof Paragraph> = {
  title: 'Typography/Paragraph',
  component: Paragraph,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'The text content of the paragraph',
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
    children: 'This is a default paragraph with standard styling.',
  },
};

export const Short: Story = {
  args: {
    children: 'Short paragraph.',
  },
};

export const Long: Story = {
  args: {
    children: 'This is a much longer paragraph that demonstrates how the component handles extended text content. It should wrap naturally and maintain good readability across different screen sizes. The responsive typography should scale appropriately from mobile to desktop viewports.',
  },
};

export const WithCustomStyling: Story = {
  args: {
    children: 'This paragraph has custom styling applied.',
    className: 'text-blue-600 font-semibold text-lg',
  },
};

export const WithMarkup: Story = {
  args: {
    children: (
      <>
        This paragraph contains <strong>bold text</strong>, <em>italic text</em>, and a{' '}
        <span className="text-blue-500 underline">custom styled span</span>.
      </>
    ),
  },
};
