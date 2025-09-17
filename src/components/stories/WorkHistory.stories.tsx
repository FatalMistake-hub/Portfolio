import type { Meta, StoryObj } from "@storybook/nextjs";
import { WorkHistory } from "../WorkHistory";

const meta: Meta<typeof WorkHistory> = {
  title: "Components/WorkHistory",
  component: WorkHistory,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "A timeline component that displays work experience with company details, dates, and responsibilities.",
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
