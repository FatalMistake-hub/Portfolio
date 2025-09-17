import type { Meta, StoryObj } from "@storybook/nextjs";
import { TechStack } from "../TechStack";

const meta: Meta<typeof TechStack> = {
  title: "Components/TechStack",
  component: TechStack,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A component that displays a collection of technology logos in a flex layout.",
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
      <div className="bg-gray-100 p-8 rounded-lg">
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
      <div className="max-w-sm">
        <Story />
      </div>
    ),
  ],
};
