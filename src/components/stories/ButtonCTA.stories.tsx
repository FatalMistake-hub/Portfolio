import type { Meta, StoryObj } from '@storybook/nextjs';
import { ButtonCTA } from '@/components/ButtonCTA';

const meta: Meta<typeof ButtonCTA> = {
  title: 'Components/ButtonCTA',
  component: ButtonCTA,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
