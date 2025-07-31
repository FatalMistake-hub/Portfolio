import type { Meta, StoryObj } from "@storybook/nextjs";
import FramerWrapper from "./FramerWrapper";

const meta: Meta<typeof FramerWrapper> = {
  title: "Components/Animations/FramerWrapper",
  component: FramerWrapper,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A reusable animation wrapper component using Framer Motion that provides entrance animations with customizable duration, delay, and movement properties.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    y: {
      control: { type: "number", min: -100, max: 100, step: 5 },
      description: "Vertical offset for the initial animation",
    },
    x: {
      control: { type: "number", min: -100, max: 100, step: 5 },
      description: "Horizontal offset for the initial animation",
    },
    delay: {
      control: { type: "number", min: 0, max: 2, step: 0.1 },
      description: "Animation delay in seconds",
    },
    duration: {
      control: { type: "number", min: 0.1, max: 2, step: 0.1 },
      description: "Animation duration in seconds",
    },
    scale: {
      control: { type: "number", min: 0, max: 2, step: 0.1 },
      description: "Initial scale for animation (0 to disable scale animation)",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div className="bg-blue-500 text-white p-4 rounded-lg">
        <h3 className="text-lg font-bold">Animated Content</h3>
        <p>This content animates in from below</p>
      </div>
    ),
  },
};

export const FromTop: Story = {
  args: {
    y: -30,
    children: (
      <div className="bg-green-500 text-white p-4 rounded-lg">
        <h3 className="text-lg font-bold">From Top</h3>
        <p>This content slides down from above</p>
      </div>
    ),
  },
};

export const FromLeft: Story = {
  args: {
    x: -50,
    y: 0,
    children: (
      <div className="bg-purple-500 text-white p-4 rounded-lg">
        <h3 className="text-lg font-bold">From Left</h3>
        <p>This content slides in from the left</p>
      </div>
    ),
  },
};

export const FromRight: Story = {
  args: {
    x: 50,
    y: 0,
    children: (
      <div className="bg-red-500 text-white p-4 rounded-lg">
        <h3 className="text-lg font-bold">From Right</h3>
        <p>This content slides in from the right</p>
      </div>
    ),
  },
};

export const WithScale: Story = {
  args: {
    scale: 0.5,
    children: (
      <div className="bg-orange-500 text-white p-4 rounded-lg">
        <h3 className="text-lg font-bold">Scale Animation</h3>
        <p>This content scales up while animating</p>
      </div>
    ),
  },
};

export const SlowAnimation: Story = {
  args: {
    duration: 1,
    delay: 0.5,
    children: (
      <div className="bg-teal-500 text-white p-4 rounded-lg">
        <h3 className="text-lg font-bold">Slow Animation</h3>
        <p>This has a longer duration and delay</p>
      </div>
    ),
  },
};

export const MultipleElements: Story = {
  render: () => (
    <div className="space-y-4">
      <FramerWrapper delay={0}>
        <div className="bg-blue-500 text-white p-4 rounded-lg">
          <h3 className="text-lg font-bold">First Element</h3>
          <p>No delay</p>
        </div>
      </FramerWrapper>
      <FramerWrapper delay={0.2}>
        <div className="bg-green-500 text-white p-4 rounded-lg">
          <h3 className="text-lg font-bold">Second Element</h3>
          <p>0.2s delay</p>
        </div>
      </FramerWrapper>
      <FramerWrapper delay={0.4}>
        <div className="bg-purple-500 text-white p-4 rounded-lg">
          <h3 className="text-lg font-bold">Third Element</h3>
          <p>0.4s delay</p>
        </div>
      </FramerWrapper>
    </div>
  ),
};
