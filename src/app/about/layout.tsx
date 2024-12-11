import type { Metadata } from "next";
import { Heading } from "@/components/Heading";
import { Container } from "@/components/Container";
export const metadata: Metadata = {
  title: "About | Minh Nhat",
  description:
    "Minh Nhat is a developer, writer and speaker. He is a digital nomad and travels around the world while working remotely.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container>
      <span className="text-4xl">💬</span>
      <Heading className="font-black">About Me</Heading>
      {children}
    </Container>
  );
}
