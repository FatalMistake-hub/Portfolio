import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Products } from "@/components/Products";
import { products, sideProjects } from "@/constants/products";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Projects",
  description: "Explore Minh Nhat's portfolio of web development projects. Discover innovative React and Next.js applications, side projects, and experiments showcasing modern frontend development skills.",
  keywords: [
    "Minh Nhat projects",
    "React projects",
    "Next.js applications",
    "Frontend projects",
    "Web development portfolio",
    "Side projects", 
    "JavaScript projects"
  ],
  path: "/projects",
  type: "website"
});

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
