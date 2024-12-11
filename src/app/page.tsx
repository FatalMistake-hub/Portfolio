/* eslint-disable react/no-unescaped-entities */
import { Container } from "@/components/Container";
import { Highlight } from "@/components/Highlight";
import { TechStack } from "@/components/TechStack";
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
      <h1>Hi 👋, I'm Quach Minh Nhat</h1>
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
      </div>
      <a href="https://app.daily.dev/nhat1711">
        <Image
          src="https://api.daily.dev/devcards/9a0ee9d7ddba41a09af6fc800b2cca7a.png?r=f0b"
          alt="MinhNhat's Dev Card"
          height={175}
          width={175}
        />
      </a>
      {/* <span className="text-4xl">⚡</span>
      <div className="my-12">
        <TechStack />
      </div>
      <Heading className="font-black mb-10">
        {" "}
        What I&apos;ve been working on
      </Heading> */}
      {/* <Products /> */}
    </Container>
  );
}
