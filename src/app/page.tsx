/* eslint-disable react/no-unescaped-entities */
import FramerWrapper from "@/components/animations/FramerWrapper";
import { Container } from "@/components/Container";
import HeroTexts from "@/components/HeroTexts";
import SocialLinks from "@/components/SocialLink";
import { TechStack } from "@/components/TechStack";
import { IconBrandGithub } from "@tabler/icons-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects | Minh Nhat",
  description:
    "Minh Nhat is a developer, writer and speaker. He is a digital nomad and travels around the world while working remotely.",
};

export default async function Projects() {
  return (
    <Container>
      {/* <h1>Hi 👋, I'm Quach Minh Nhat</h1>
      <Highlight>
        Student at Danang university technology and science.🌟.
      </Highlight>
      <br />
      <p>
        - 🌱 I’m currently learning FE Development and other programming
        languages
      </p>
      <p>
        - 📫 How to reach me{" "}
        <Link href="mailto: quachminhnhat1711@gmail.com">
          quachminhnhat1711@gmail.com
        </Link>
      </p>
      <p>- ⚡ Fun fact : Food and Music🎵 are the reasons to live.</p>
      <br />
      <Highlight>Languages and Tools:</Highlight>
      <div className="my-12">
        <TechStack />
      </div> */}

      {/* <span className="text-4xl">⚡</span>
      <div className="my-12">
        <TechStack />
      </div>
      <Heading className="font-black mb-10">
        {" "}
        What I&apos;ve been working on
      </Heading> */}
      {/* <Products /> */}

      {/* LEFT SIDE  */}
      <FramerWrapper
        className=" h-full w-auto flex flex-col justify-start gap-4"
        y={0}
        x={-100}
      >
        <HeroTexts />
        <div className="h-fit w-full p-4 flex gap-4">
          <SocialLinks />
        </div>
        {/* <DownLoadResumeBtn /> */}
      </FramerWrapper>
      {/* RIGHT SIDE image  */}
      <FramerWrapper
        className="h-full w-[47%] relative block   max-lg:hidden"
        y={0}
        x={100}
      >
        {/* IMAGE  */}
        <a href="https://app.daily.dev/nhat1711">
          <Image
            src="https://api.daily.dev/devcards/9a0ee9d7ddba41a09af6fc800b2cca7a.png?r=f0b"
            alt="MinhNhat's Dev Card"
            height={400}
            width={400}
          />
        </a>
      </FramerWrapper>

      {/* GITHUB BUTTON  */}
      <TechStack />
      <Link
        href={"https://github.com/FatalMistake-hub"}
        target="blank"
        className=" animate-pulse absolute left-0 bottom-16 sm:bottom-5 flex rounded-r-full justify-center items-center gap-2 z-50 w-fit h-fit p-2 shadow-md  border-y border-r  border-black hover:bg-primary hover:text-white hover:animate-none "
      >
        <IconBrandGithub />
        <span className="font-rubik text-2xl max-sm:text-xl">Github</span>
      </Link>
    </Container>
  );
}
