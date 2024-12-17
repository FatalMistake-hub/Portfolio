import Image from "next/image";
import React from "react";
import { Heading } from "./Heading";
import { twMerge } from "tailwind-merge";

export const TechStack = () => {
  const stack = [
    {
      title: "Next.js",
      src: "/images/logos/next.png",

      className: "h-10 w-14",
    },
    // {
    //   title: "AWS",
    //   src: "/images/logos/aws.webp",

    //   className: "h-10 w-10",
    // },
    // {
    //   title: "Figma",
    //   src: "/images/logos/figma.png",

    //   className: "h-10 w-8",
    // },
    // {
    //   title: "Framer Motion",
    //   src: "/images/logos/framer.webp",

    //   className: "h-10 w-10",
    // },
    // {
    //   title: "Node",
    //   src: "/images/logos/node.png",

    //   className: "h-10 w-12",
    // },
    {
      title: "Tailwind",
      src: "/images/logos/tailwind.png",

      className: "h-10 w-24",
    },
    {
      title: "Vercel",
      src: "/images/logos/vercel.png",

      className: "h-10 w-24",
    },
  ];
  return (
    <>
      <Heading
        className="font-black my-4"
      >
        Tech Stack
      </Heading>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {stack.map((item) => (
          <Image
            src={item.src}
            key={item.src}
            width={`200`}
            height={`200`}
            alt={item.title}
            className={twMerge("object-contain", item.className)}
          />
        ))}
      </div>
    </>
  );
};
