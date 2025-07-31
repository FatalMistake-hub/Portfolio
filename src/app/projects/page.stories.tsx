/* eslint-disable react/no-unescaped-entities */
import type { Meta, StoryObj } from "@storybook/nextjs";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Products } from "@/components/Products";
import { products, sideProjects } from "@/constants/products";

// Simplified version of the projects page for Storybook
const ProjectsPage = () => {
  return (
    <Container>
      <span className="text-4xl">⚡</span>
      <Heading className="font-black mb-10">
        {" "}
        What I've been working on
      </Heading>
      <Products products={products} />
      <span className="text-4xl">💡 🚀 ⚗️</span>
      <Heading className="font-black mb-10">
        Side projects and experiments
      </Heading>
      <Products products={sideProjects} />
    </Container>
  );
};

const meta: Meta<typeof ProjectsPage> = {
  title: "Pages/ProjectsPage",
  component: ProjectsPage,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "The projects page showcasing main projects and side projects with decorative emojis and headings.",
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
  parameters: {
    docs: {
      description: {
        story: "Projects page with a subtle background.",
      },
    },
  },
};

export const Compact: Story = {
  decorators: [
    (Story) => (
      <div className="max-w-4xl mx-auto">
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "Projects page with constrained width for better layout control.",
      },
    },
  },
};

export const MobileView: Story = {
  parameters: {
    viewport: { defaultViewport: "mobile1" },
    docs: {
      description: {
        story: "Projects page optimized for mobile devices.",
      },
    },
  },
};
