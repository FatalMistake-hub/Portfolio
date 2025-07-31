import type { Meta, StoryObj } from "@storybook/nextjs";
import RootLayout from "./layout";

// Mock child content for testing the layout
const MockContent = () => (
  <div className="p-8 space-y-6">
    <h1 className="text-3xl font-bold text-gray-900">Sample Page Content</h1>
    <p className="text-gray-700">
      This is sample content to demonstrate how the root layout wraps around page content.
      The layout includes the sidebar, main content area, footer, and all the necessary meta tags.
    </p>
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Features of this layout:</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-600">
        <li>Responsive sidebar navigation</li>
        <li>Main content area with rounded corners</li>
        <li>Footer component at the bottom</li>
        <li>SEO optimized with meta tags</li>
        <li>Structured data for better search results</li>
      </ul>
    </div>
    <div className="h-96 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg flex items-center justify-center">
      <p className="text-gray-500">Sample content area</p>
    </div>
  </div>
);

const LongContent = () => (
  <div className="p-8 space-y-8">
    <h1 className="text-3xl font-bold text-gray-900">Long Content Example</h1>
    {Array.from({ length: 10 }, (_, i) => (
      <div key={i} className="space-y-4">
        <h2 className="text-xl font-semibold">Section {i + 1}</h2>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <div className="h-32 bg-gray-100 rounded flex items-center justify-center">
          <span className="text-gray-400">Content Block {i + 1}</span>
        </div>
      </div>
    ))}
  </div>
);

const meta: Meta<typeof RootLayout> = {
  title: "Layouts/RootLayout",
  component: RootLayout,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "The main layout component that wraps all pages. Includes sidebar navigation, main content area, footer, and all necessary meta tags for SEO.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "The page content to be rendered inside the layout",
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <MockContent />,
  },
};

export const WithLongContent: Story = {
  args: {
    children: <LongContent />,
  },
  parameters: {
    docs: {
      description: {
        story: "Layout with scrollable long content to test overflow behavior.",
      },
    },
  },
};

export const MinimalContent: Story = {
  args: {
    children: (
      <div className="p-8">
        <h1 className="text-2xl font-bold">Minimal Page</h1>
        <p className="text-gray-600 mt-4">Simple content example</p>
      </div>
    ),
  },
};

export const EmptyContent: Story = {
  args: {
    children: <div className="h-screen" />,
  },
  parameters: {
    docs: {
      description: {
        story: "Layout with empty content to show the basic structure.",
      },
    },
  },
};
