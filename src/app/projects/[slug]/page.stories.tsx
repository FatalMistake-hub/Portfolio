/* eslint-disable react/no-unescaped-entities */
import type { Meta, StoryObj } from "@storybook/nextjs";
import { Container } from "@/components/Container";
import { SingleProduct } from "@/components/Product";
import { Product } from "@/types/products";

// Mock product data for the dynamic project page
const mockTourProject: Product = {
  href: "https://portfolio-rho-jet-91.vercel.app/",
  title: "Tour Experience Booking System",
  description: "A system that streamlines tour management and booking, making the process fast and convenient. It provides users with easy and intuitive access while ensuring transparent and secure storage of personal information through Blockchain technology.",
  thumbnail: "/images/picture1.webp",
  images: [
    "/images/picture1.webp",
    "/images/picture2.webp",
    "/images/picture3.webp",
    "/images/picture4.webp"
  ],
  stack: ["Next.js", "Tailwind CSS", "TypeScript", "Blockchain"],
  slug: "tour-booking-system",
  content: (
    <div>
      <h3>Project Overview</h3>
      <p>This comprehensive tour booking system revolutionizes how users discover and book travel experiences. Built with modern web technologies, it offers a seamless interface for both travelers and tour operators.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li>Intuitive booking interface with real-time availability</li>
        <li>Secure blockchain-based payment processing</li>
        <li>Advanced search and filtering capabilities</li>
        <li>Mobile-responsive design for all devices</li>
        <li>Tour operator dashboard for management</li>
      </ul>
      
      <h3>Technical Implementation</h3>
      <p>The application leverages Next.js for server-side rendering and optimal performance, while Tailwind CSS ensures a consistent and responsive design system. Blockchain integration provides enhanced security for user data and transactions.</p>
    </div>
  ),
};

// Simplified version of the single project page for Storybook
const SingleProjectPage = () => {
  return (
    <Container>
      <SingleProduct product={mockTourProject} />
    </Container>
  );
};

const meta: Meta<typeof SingleProjectPage> = {
  title: "Pages/SingleProjectPage",
  component: SingleProjectPage,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "A dynamic project page that displays detailed information about a single project including images, description, tech stack, and content. This page is generated for each project slug.",
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
    (Story: any) => (
      <div className="bg-gray-50 min-h-screen py-8">
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "Single project page with a subtle background for better content presentation.",
      },
    },
  },
};

export const MobileView: Story = {
  parameters: {
    viewport: { defaultViewport: "mobile1" },
    docs: {
      description: {
        story: "Single project page optimized for mobile devices with responsive layout.",
      },
    },
  },
};

export const TabletView: Story = {
  parameters: {
    viewport: { defaultViewport: "tablet" },
    docs: {
      description: {
        story: "Single project page layout on tablet devices.",
      },
    },
  },
};
