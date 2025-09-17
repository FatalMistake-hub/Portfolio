import type { Meta, StoryObj } from "@storybook/nextjs";
import { Circles } from "../Circles";

const meta: Meta<typeof Circles> = {
  title: "Components/Circles",
  component: Circles,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "An animated circles component using Framer Motion with pulsating teal circles.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <div className="relative w-96 h-96 bg-gray-100 rounded-lg overflow-hidden">
        <Story />
      </div>
    ),
  ],
};

export const DarkBackground: Story = {
  decorators: [
    (Story) => (
      <div className="relative w-96 h-96 bg-gray-900 rounded-lg overflow-hidden">
        <Story />
      </div>
    ),
  ],
};

export const LargeContainer: Story = {
  decorators: [
    (Story) => (
      <div className="relative w-[600px] h-[400px] bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden">
        <Story />
      </div>
    ),
  ],
};

export const SmallContainer: Story = {
  decorators: [
    (Story) => (
      <div className="relative w-48 h-48 bg-gray-100 rounded-lg overflow-hidden">
        <Story />
      </div>
    ),
  ],
};

export const WithContent: Story = {
  decorators: [
    (Story) => (
      <div className="relative w-96 h-96 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
        <div className="text-center z-10">
          <h3 className="text-xl font-bold text-gray-800">Content Above Circles</h3>
          <p className="text-gray-600 mt-2">The circles animate behind this content</p>
        </div>
        <Story />
      </div>
    ),
  ],
};
