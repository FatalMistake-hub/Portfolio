import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { WorkHistory } from "@/components/WorkHistory";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Resume",
  description: "View Minh Nhat's professional resume showcasing work history, skills, and experience as a frontend developer. Discover expertise in React, Next.js, and modern web development technologies.",
  keywords: [
    "Minh Nhat resume",
    "Frontend developer resume",
    "React developer experience",
    "Web developer skills",
    "Work history",
    "Professional experience",
    "Technical skills"
  ],
  path: "/resume",
  type: "profile"
});

export default function Home() {
    return (
        <Container>
            <span className="text-4xl">💼</span>
            <Heading className="font-black">Work History</Heading>
            <Paragraph className="mt-4">
                I&apos;m a front-end developer that loves{" "}
                <Highlight>building products</Highlight> and web apps that are
                user-friendly and accessible. I have worked with a variety of
                companies and clients over the years. Here is a list of
                companies that I have worked with.
            </Paragraph>
            <WorkHistory />
        </Container>
    );
}
