import type { Meta, StoryObj } from "@storybook/nextjs";
import { Products } from "./Products";
import { Product } from "@/types/products";

// Mock data for stories
const mockProducts: Product[] = [
  {
    href: "https://example.com/project1",
    title: "Tour Experience Booking System",
    description: "A system that streamlines tour management and booking, making the process fast and convenient. It provides users with easy and intuitive access while ensuring transparent and secure storage of personal information.",
    thumbnail: "/images/picture1.webp",
    images: ["/images/picture1.webp", "/images/picture2.webp"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Blockchain"],
    slug: "tour-booking-system",
  },
  {
    href: "https://example.com/project2",
    title: "Quang Ngai Tourism Portal",
    description: "A comprehensive tourism portal showcasing the beauty and culture of Quang Ngai province with interactive features and booking capabilities.",
    thumbnail: "/images/quangngai1.webp",
    images: ["/images/quangngai1.webp", "/images/quangngai2.webp"],
    stack: ["React", "Node.js", "MongoDB", "Express"],
    slug: "quang-ngai-portal",
  },
  {
    href: "https://example.com/project3",
    title: "Point Game Application",
    description: "An interactive gaming platform that allows users to earn points through various challenges and compete with friends.",
    thumbnail: "/images/pointgame1.webp",
    images: ["/images/pointgame1.webp", "/images/pointgame2.webp"],
    stack: ["Vue.js", "Firebase", "CSS3", "JavaScript"],
    slug: "point-game",
  },
];

const meta: Meta<typeof Products> = {
  title: "Components/Products",
  component: Products,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "A products showcase component that displays a list of projects/products with images, descriptions, and tech stacks.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    products: {
      description: "Array of product objects to display",
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    products: mockProducts,
  },
};

export const SingleProduct: Story = {
  args: {
    products: [mockProducts[0]],
  },
};

export const TwoProducts: Story = {
  args: {
    products: mockProducts.slice(0, 2),
  },
};

export const WithBackground: Story = {
  args: {
    products: mockProducts,
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
    products: mockProducts,
  },
  decorators: [
    (Story) => (
      <div className="max-w-4xl mx-auto">
        <Story />
      </div>
    ),
  ],
};
