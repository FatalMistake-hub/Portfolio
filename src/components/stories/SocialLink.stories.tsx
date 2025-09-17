import type { Meta, StoryObj } from '@storybook/nextjs';
import SocialLinks from '@/components/SocialLink';

const meta: Meta<typeof SocialLinks> = {
  title: 'Components/SocialLinks',
  component: SocialLinks,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const InDarkBackground: Story = {
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#1a1a1a' },
      ],
    },
  },
};
