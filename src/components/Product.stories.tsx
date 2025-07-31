import type { Meta, StoryObj } from "@storybook/nextjs";
import { SingleProduct } from "./Product";
import { Product } from "@/types/products";

// Mock product data for stories
const mockProduct: Product = {
  href: "https://portfolio-rho-jet-91.vercel.app/",
  title: "Tour Experience Booking System",
  description: "A comprehensive system that streamlines tour management and booking, making the process fast and convenient. It provides users with easy and intuitive access while ensuring transparent and secure storage of personal information through Blockchain technology.",
  thumbnail: "/images/picture1.webp",
  images: [
    "/images/picture1.webp",
    "/images/picture2.webp",
    "/images/picture3.webp",
    "/images/picture4.webp",
    "/images/picture5.webp",
  ],
  stack: ["Next.js", "TypeScript", "Tailwind CSS", "Blockchain", "React", "Node.js"],
  slug: "tour-booking-system",
  content: (
    <div>
      <h3>Key Features</h3>
      <ul>
        <li>User-friendly booking interface</li>
        <li>Secure blockchain-based data storage</li>
        <li>Real-time availability updates</li>
        <li>Integrated payment processing</li>
        <li>Tour guide management system</li>
      </ul>
      <h3>Technologies Used</h3>
      <p>This project leverages modern web technologies including Next.js for the frontend, blockchain technology for secure data storage, and a robust backend infrastructure to handle booking operations efficiently.</p>
    </div>
  ),
};

const mockProductWithLessImages: Product = {
  ...mockProduct,
  title: "Quang Ngai Tourism Portal",
  description: "A tourism portal showcasing the beauty of Quang Ngai province.",
  thumbnail: "/images/quangngai1.webp",
  images: ["/images/quangngai1.webp", "/images/quangngai2.webp"],
  stack: ["React", "Node.js", "MongoDB"],
  content: <div><p>A simple tourism portal with basic features.</p></div>,
};

const meta: Meta<typeof SingleProduct> = {
  title: "Components/Product",
  component: SingleProduct,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "A detailed product view component that displays product information with an image gallery, tech stack, and live preview link.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    product: {
      description: "Product object containing all the product information",
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    product: mockProduct,
  },
};

export const WithFewImages: Story = {
  args: {
    product: mockProductWithLessImages,
  },
};

export const WithBackground: Story = {
  args: {
    product: mockProduct,
  },
  decorators: [
    (Story) => (
      <div className="bg-gray-50 p-8 rounded-lg">
        <Story />
      </div>
    ),
  ],
};

export const Compact: Story = {
  args: {
    product: mockProduct,
  },
  decorators: [
    (Story) => (
      <div className="max-w-4xl mx-auto">
        <Story />
      </div>
    ),
  ],
};
