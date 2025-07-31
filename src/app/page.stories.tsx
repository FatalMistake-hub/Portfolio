/* eslint-disable react/no-unescaped-entities */
import type { Meta, StoryObj } from "@storybook/nextjs";
import FramerWrapper from "@/components/animations/FramerWrapper";
import { Container } from "@/components/Container";
import HeroTexts from "@/components/HeroTexts";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";

// Simplified version of the home page for Storybook
const HomePage = () => {
  return (
    <div className="h-fit w-full p-4 flex items-center justify-center flex-wrap gap-4">
      <Container className="bg-[radial-gradient(#00cfab_1px,transparent_1px)] [background-size:16px_16px] flex items-center justify-center min-h-screen">
        <div className="flex flex-wrap break-words items-center pb-4 gap-14">
          <FramerWrapper
            className="w-auto flex flex-col justify-start gap-4"
            y={0}
            x={-100}
          >
            <HeroTexts />
            <div className="h-fit w-full p-4 flex items-center justify-center flex-wrap gap-4">
              <TechStack />
            </div>
          </FramerWrapper>
          <FramerWrapper y={0} x={100}>
            <a href="https://app.daily.dev/nhat1711">
              <Image
                src="https://api.daily.dev/devcards/v2/CSF1vbHz88qerLPko9lfv.png?type=default&r=ysu"
                alt="MinhNhat's Dev Card"
                height={200}
                width={200}
                className="object-cover"
                loading="lazy"
              />
            </a>
          </FramerWrapper>
        </div>
      </Container>
    </div>
  );
};

const meta: Meta<typeof HomePage> = {
  title: "Pages/HomePage",
  component: HomePage,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "The main home page featuring hero text, tech stack, and developer card with animated entrances.",
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
      <div className="bg-gray-900">
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "Home page with a dark background to see contrast.",
      },
    },
  },
};

export const MobileView: Story = {
  parameters: {
    viewport: { defaultViewport: "mobile1" },
    docs: {
      description: {
        story: "Home page optimized for mobile viewing with responsive layout.",
      },
    },
  },
};

export const TabletView: Story = {
  parameters: {
    viewport: { defaultViewport: "tablet" },
    docs: {
      description: {
        story: "Home page layout on tablet devices.",
      },
    },
  },
};
