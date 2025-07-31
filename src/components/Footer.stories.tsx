import type { Meta, StoryObj } from "@storybook/nextjs";
import { Footer } from "./Footer";

const meta: Meta<typeof Footer> = {
  title: "Components/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "A simple footer component that displays the current year with absolute positioning at the bottom.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithContent: Story = {
  decorators: [
    (Story) => (
      <div className="relative min-h-screen bg-gray-50">
        <div className="p-8">
          <h1 className="text-2xl font-bold mb-4">Page Content</h1>
          <p className="text-gray-700">
            This is some sample content to show how the footer appears at the bottom of the page.
          </p>
        </div>
        <Story />
      </div>
    ),
  ],
};

export const DarkTheme: Story = {
  decorators: [
    (Story) => (
      <div className="relative min-h-screen bg-gray-900">
        <div className="p-8">
          <h1 className="text-2xl font-bold mb-4 text-white">Page Content</h1>
          <p className="text-gray-300">
            Dark theme version with sample content.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 text-center justify-center text-xs text-neutral-400 border-t border-neutral-700 bg-gray-800">
          <span className="font-semibold">{new Date().getFullYear()} </span>
        </div>
      </div>
    ),
  ],
};

export const Standalone: Story = {
  decorators: [
    (Story) => (
      <div className="relative">
        <Story />
      </div>
    ),
  ],
};
