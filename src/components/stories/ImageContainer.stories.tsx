import type { Meta, StoryObj } from "@storybook/nextjs";
import ImageContainer from "../ImageContainer";

const meta: Meta<typeof ImageContainer> = {
  title: "Components/ImageContainer",
  component: ImageContainer,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "A grid container component that displays images with rotation animations and hover effects using Framer Motion.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithBackground: Story = {
  decorators: [
    (Story) => (
      <div className="bg-gray-50 p-8 rounded-lg">
        <Story />
      </div>
    ),
  ],
};

export const DarkBackground: Story = {
  decorators: [
    (Story) => (
      <div className="bg-gray-900 p-8 rounded-lg">
        <Story />
      </div>
    ),
  ],
};

export const Compact: Story = {
  decorators: [
    (Story) => (
      <div className="max-w-2xl mx-auto">
        <Story />
      </div>
    ),
  ],
};

export const FullWidth: Story = {
  decorators: [
    (Story) => (
      <div className="w-full">
        <Story />
      </div>
    ),
  ],
};
