/* eslint-disable react/no-unescaped-entities */
import FramerWrapper from "@/components/animations/FramerWrapper";
import { Container } from "@/components/Container";
import HeroTexts from "@/components/HeroTexts";
import { TechStack } from "@/components/TechStack";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Projects | Minh Nhat",
  description:
    "Minh Nhat is a developer, writer and speaker. He is a digital nomad and travels around the world while working remotely.",
};

export default async function Projects() {
  return (
    <Container className="bg-[radial-gradient(#00cfab_1px,transparent_1px)] [background-size:16px_16px] flex items-center justify-center min-h-screen">
      <div className="flex flex-wrap break-words items-center pb-4 gap-14">
        <FramerWrapper
          className="w-auto flex flex-col justify-start gap-4"
          y={0}
          x={-100}
        >
          <HeroTexts />
          <div className="h-fit w-full p-4 flex items-center justify-center flex-wrap gap-4">
            {/* <SocialLinks /> */}
            <TechStack />
          </div>
        </FramerWrapper>
        {/* RIGHT SIDE image  */}
        <FramerWrapper
          y={0}
          x={100}
        >
          {/* IMAGE  */}
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

        {/* GITHUB BUTTON  */}
      </div>
    </Container>
  );
}
