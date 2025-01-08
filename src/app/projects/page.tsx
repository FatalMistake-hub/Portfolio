import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { products, sideProjects } from "@/constants/products";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Projects | Minh Nhat",
  description:
    "Minh Nhat is a developer, front-end developer. This is a list of projects that i has worked on.",
};

export default function Projects() {
  return (
    <Container>
      <span className="text-4xl">⚡</span>
      <Heading className="font-black mb-10">
        {" "}
        What I&apos;ve been working on
      </Heading>
      <Products products={products} />
      <span className="text-4xl">💡 🚀 ⚗️</span>
      <Heading className="font-black mb-10">
        Side projects and experiments
      </Heading>
      <Products products={sideProjects} />
    </Container>
  );
}
