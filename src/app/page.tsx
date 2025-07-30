/* eslint-disable react/no-unescaped-entities */
import Head from "next/head"; // <-- added
import FramerWrapper from "@/components/animations/FramerWrapper";
import { Container } from "@/components/Container";
import HeroTexts from "@/components/HeroTexts";
import { TechStack } from "@/components/TechStack";
import type { Metadata } from "next";
import Image from "next/image";

import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Home",
  description: "Welcome to Minh Nhat's portfolio. A passionate frontend developer specializing in React, Next.js, and modern web technologies. Explore my projects and discover my journey in web development.",
  keywords: [
    "Minh Nhat portfolio",
    "Frontend developer portfolio", 
    "React projects",
    "Next.js developer",
    "Web development portfolio",
    "JavaScript developer"
  ],
  path: "/",
  type: "website"
});

const jsonLdData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: "https://portfolio-rho-jet-91.vercel.app",
  name: "Minh Nhat - Developer",
  description:
    "Minh Nhat is a developer, writer and speaker. He is a digital nomad and travels around the world while working remotely.",
};

export default async function Projects() {
  return (
    <>
      <div className="h-fit w-full p-4 flex items-center justify-center flex-wrap gap-4">
        <Head>
          <script
            type="application/ld+json"
            // dangerouslySetInnerHTML is used for server-rendering JSON-LD
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
          />
        </Head>
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
                  objectFit="cover"
                  loading="lazy"
                  rel="preload"
                  fetchPriority="high"
                />
              </a>
            </FramerWrapper>
          </div>
        </Container>
      </div>
    </>
  );
}
