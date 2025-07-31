/* eslint-disable react/no-unescaped-entities */
import type { Meta, StoryObj } from "@storybook/nextjs";
import AboutLayout from "./layout";

// Mock content for the about page
const MockAboutContent = () => (
  <div className="space-y-6">
    <p className="text-gray-700 leading-relaxed">
      I'm a passionate frontend developer with expertise in React, Next.js, and modern web technologies. 
      I love creating user-friendly and accessible web applications that provide great user experiences.
    </p>
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Skills & Expertise</h3>
      <div className="flex flex-wrap gap-2">
        {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"].map((skill) => (
          <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
            {skill}
          </span>
        ))}
      </div>
    </div>
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Background</h3>
      <p className="text-gray-700">
        With several years of experience in web development, I've worked on various projects 
        ranging from small business websites to large-scale applications. I'm always eager 
        to learn new technologies and improve my craft.
      </p>
    </div>
  </div>
);

const ShortContent = () => (
  <p className="text-gray-700">
    Brief introduction about myself and my work as a developer.
  </p>
);

const DetailedContent = () => (
  <div className="space-y-8">
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Professional Journey</h3>
      <p className="text-gray-700 leading-relaxed">
        My journey in web development started several years ago when I discovered my passion 
        for creating digital experiences. Since then, I've been constantly learning and 
        evolving my skills to stay current with the latest technologies and best practices.
      </p>
    </div>
    
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Technical Expertise</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-medium text-gray-900 mb-2">Frontend Technologies</h4>
          <ul className="text-gray-700 space-y-1">
            <li>• React & Next.js</li>
            <li>• TypeScript & JavaScript</li>
            <li>• Tailwind CSS & Styled Components</li>
            <li>• Framer Motion</li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium text-gray-900 mb-2">Tools & Workflow</h4>
          <ul className="text-gray-700 space-y-1">
            <li>• Git & GitHub</li>
            <li>• VS Code</li>
            <li>• Figma</li>
            <li>• Vercel & Netlify</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Philosophy</h3>
      <p className="text-gray-700 leading-relaxed">
        I believe in writing clean, maintainable code and creating interfaces that are 
        not only visually appealing but also accessible and performant. User experience 
        is at the heart of everything I build.
      </p>
    </div>
  </div>
);

const meta: Meta<typeof AboutLayout> = {
  title: "Layouts/AboutLayout",
  component: AboutLayout,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "The about page layout that includes a decorative emoji, heading, and wraps the about content in a container.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "The about page content to be rendered inside the layout",
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <MockAboutContent />,
  },
};

export const WithShortContent: Story = {
  args: {
    children: <ShortContent />,
  },
  parameters: {
    docs: {
      description: {
        story: "About layout with minimal content.",
      },
    },
  },
};

export const WithDetailedContent: Story = {
  args: {
    children: <DetailedContent />,
  },
  parameters: {
    docs: {
      description: {
        story: "About layout with comprehensive content including skills, background, and philosophy.",
      },
    },
  },
};

export const Empty: Story = {
  args: {
    children: <div />,
  },
  parameters: {
    docs: {
      description: {
        story: "About layout with no content to show the basic structure.",
      },
    },
  },
};
