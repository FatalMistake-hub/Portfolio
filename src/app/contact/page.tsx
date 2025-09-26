import { Contact } from "@/components/Contact";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Contact",
  description: "Get in touch with Minh Nhat for web development opportunities, collaborations, or project inquiries. Quick response guaranteed for all professional inquiries.",
  keywords: [
    "Contact Minh Nhat",
    "Hire frontend developer",
    "Web development services",
    "React developer contact",
    "Project collaboration",
    "Freelance developer"
  ],
  path: "/contact",
  type: "website"
});

export default function Projects() {
  return (
    <Container>
      <span className="text-4xl">✉️</span>
      <Heading className="font-black text-gray-800 dark:text-gray-200 mb-2">Contact Me</Heading>
      <Paragraph className="mb-10 max-w-xl">
        Reach out to me over email or fill up this contact form. I will get back
        to you ASAP - I promise.{" "}
      </Paragraph>
      <Contact />
    </Container>
  );
}
