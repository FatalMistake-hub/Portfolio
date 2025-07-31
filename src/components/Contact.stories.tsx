import type { Meta, StoryObj } from "@storybook/nextjs";
import { Contact } from "./Contact";

const meta: Meta<typeof Contact> = {
  title: "Components/Contact",
  component: Contact,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "A contact form component with name, email, message fields and submit functionality.",
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
      <div className="max-w-md mx-auto">
        <Story />
      </div>
    ),
  ],
};

export const FullWidth: Story = {
  decorators: [
    (Story) => (
      <div className="w-full max-w-2xl mx-auto">
        <Story />
      </div>
    ),
  ],
};
