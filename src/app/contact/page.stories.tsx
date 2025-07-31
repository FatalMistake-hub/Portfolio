/* eslint-disable react/no-unescaped-entities */
import type { Meta, StoryObj } from "@storybook/nextjs";
import { Contact } from "@/components/Contact";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";

// Simplified version of the contact page for Storybook
const ContactPage = () => {
  return (
    <Container>
      <span className="text-4xl">✉️</span>
      <Heading className="font-black mb-2">Contact Me</Heading>
      <Paragraph className="mb-10 max-w-xl">
        Reach out to me over email or fill up this contact form. I will get back
        to you ASAP - I promise.{" "}
      </Paragraph>
      <Contact />
    </Container>
  );
};

const meta: Meta<typeof ContactPage> = {
  title: "Pages/ContactPage",
  component: ContactPage,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "The contact page featuring an email emoji, heading, description, and contact form component.",
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
        story: "Contact page with a subtle background for better visual separation.",
      },
    },
  },
};

export const Compact: Story = {
  decorators: [
    (Story) => (
      <div className="max-w-2xl mx-auto">
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "Contact page with constrained width for better form layout.",
      },
    },
  },
};

export const MobileView: Story = {
  parameters: {
    viewport: { defaultViewport: "mobile1" },
    docs: {
      description: {
        story: "Contact page optimized for mobile devices with responsive form layout.",
      },
    },
  },
};
