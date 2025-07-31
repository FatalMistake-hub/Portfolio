/* eslint-disable react/no-unescaped-entities */
import type { Meta, StoryObj } from "@storybook/nextjs";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { WorkHistory } from "@/components/WorkHistory";

// Simplified version of the resume page for Storybook
const ResumePage = () => {
    return (
        <Container>
            <span className="text-4xl">💼</span>
            <Heading className="font-black">Work History</Heading>
            <Paragraph className="mt-4">
                I'm a front-end developer that loves{" "}
                <Highlight>building products</Highlight> and web apps that are
                user-friendly and accessible. I have worked with a variety of
                companies and clients over the years. Here is a list of
                companies that I have worked with.
            </Paragraph>
            <WorkHistory />
        </Container>
    );
};

const meta: Meta<typeof ResumePage> = {
  title: "Pages/ResumePage",
  component: ResumePage,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "The resume page displaying work history with a briefcase emoji, heading, description paragraph with highlighted text, and work history timeline.",
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
        story: "Resume page with a subtle background for professional presentation.",
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
        story: "Resume page with constrained width for better readability.",
      },
    },
  },
};

export const MobileView: Story = {
  parameters: {
    viewport: { defaultViewport: "mobile1" },
    docs: {
      description: {
        story: "Resume page optimized for mobile viewing with responsive timeline layout.",
      },
    },
  },
};
