/* eslint-disable react/no-unescaped-entities */
import type { Meta, StoryObj } from "@storybook/nextjs";
import { Paragraph } from "@/components/Paragraph";
import ImageContainer from "@/components/ImageContainer";

// Simplified version of the about page for Storybook
const AboutPage = () => {
  return (
    <>
      <ImageContainer />
      <Paragraph className="mt-4">
        Hey there, I'm Minh Nhat - a junior frontend developer passionate
        about building engaging and user-friendly web experiences. I'm
        excited to bring my creativity, technical skills, and attention to
        detail to a team that values clean code and great design.
      </Paragraph>
      <Paragraph className="mt-4">
        From the start of my journey in web development, I've been captivated by
        the process of turning ideas into functional and visually appealing
        websites. I specialize in crafting responsive and accessible user
        interfaces, ensuring every detail works smoothly across devices. My goal
        is to create products that not only meet technical requirements but also
        deliver an outstanding user experience.
      </Paragraph>

      <Paragraph className="mt-4">
        In addition to coding, I have a knack for writing and sharing knowledge.
        Whether it's breaking down complex topics for others or
        collaborating on creative projects, I value communication and the power
        of storytelling to connect ideas and people.
      </Paragraph>
      <Paragraph className="mt-4">
        What sets me apart is my eye for design and usability. I believe that
        good development and great design go hand in hand, and I take pride in
        ensuring my work strikes the perfect balance between form and function.
      </Paragraph>
      <Paragraph className="mt-4">
        I'm currently seeking opportunities where I can grow, contribute, and
        make a meaningful impact as part of a collaborative team. If you're
        looking for someone who's eager to learn, dedicated to their craft, and
        driven to create exceptional digital experiences, I'd love to connect!
      </Paragraph>
      <Paragraph className="mt-4">
        Join me on this journey of bytes and narratives, logic and creativity,
        code and prose. Together, we can explore the boundless possibilities of
        technology and storytelling, all while reveling in the sheer beauty of
        thoughtful design.
      </Paragraph>
      <Paragraph className="mt-4">
        Let's build something amazing together—thank you for considering me!
      </Paragraph>
    </>
  );
};

const meta: Meta<typeof AboutPage> = {
  title: "Pages/AboutPage",
  component: AboutPage,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "The about page content featuring an image container and detailed paragraphs about Minh Nhat's background and skills.",
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
        story: "About page with a subtle background to enhance readability.",
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
        story: "About page with constrained width for better reading experience.",
      },
    },
  },
};

export const MobileView: Story = {
  parameters: {
    viewport: { defaultViewport: "mobile1" },
    docs: {
      description: {
        story: "About page optimized for mobile viewing.",
      },
    },
  },
};
