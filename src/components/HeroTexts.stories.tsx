import type { Meta, StoryObj } from "@storybook/nextjs";
import HeroTexts from "./HeroTexts";

const meta: Meta<typeof HeroTexts> = {
  title: "Components/HeroTexts",
  component: HeroTexts,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A hero text component featuring animated text slides and stylized typography for the main landing section.",
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
      <div className="bg-gray-900 p-8 rounded-lg text-white">
        <Story />
      </div>
    ),
  ],
};

export const Compact: Story = {
  decorators: [
    (Story) => (
      <div className="max-w-md">
        <Story />
      </div>
    ),
  ],
};

export const FullWidth: Story = {
  decorators: [
    (Story) => (
      <div className="w-full max-w-4xl text-center">
        <Story />
      </div>
    ),
  ],
};

export const LeftAligned: Story = {
  decorators: [
    (Story) => (
      <div className="text-left max-w-2xl">
        <Story />
      </div>
    ),
  ],
};
