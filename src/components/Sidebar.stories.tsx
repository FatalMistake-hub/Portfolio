import type { Meta, StoryObj } from "@storybook/nextjs";
import { Sidebar } from "./Sidebar";

const meta: Meta<typeof Sidebar> = {
  title: "Components/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "A responsive sidebar component with navigation links, social links, and a collapsible mobile menu.",
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
      <div className="relative min-h-screen bg-gray-50">
        <Story />
        <div className="lg:ml-56 p-8">
          <h1 className="text-2xl font-bold mb-4">Main Content Area</h1>
          <p className="text-gray-700">
            This is the main content area. The sidebar should appear on the left side.
          </p>
        </div>
      </div>
    ),
  ],
};

export const MobileView: Story = {
  parameters: {
    viewport: { defaultViewport: "mobile1" },
  },
  decorators: [
    (Story) => (
      <div className="relative min-h-screen bg-gray-50">
        <Story />
        <div className="p-8">
          <h1 className="text-2xl font-bold mb-4">Mobile Content</h1>
          <p className="text-gray-700">
            On mobile, the sidebar is hidden by default. Click the menu button to open it.
          </p>
        </div>
      </div>
    ),
  ],
};

export const DarkBackground: Story = {
  decorators: [
    (Story) => (
      <div className="relative min-h-screen bg-gray-900">
        <Story />
        <div className="lg:ml-56 p-8">
          <h1 className="text-2xl font-bold mb-4 text-white">Dark Theme Content</h1>
          <p className="text-gray-300">
            The sidebar maintains its light theme while the main content uses a dark background.
          </p>
        </div>
      </div>
    ),
  ],
};

export const WithoutContent: Story = {
  decorators: [
    (Story) => (
      <div className="relative min-h-screen bg-white">
        <Story />
      </div>
    ),
  ],
};
