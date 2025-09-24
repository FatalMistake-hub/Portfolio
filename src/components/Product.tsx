"use client";
import { Product } from "@/types/products";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";
import Link from "next/link";
import { motion } from "framer-motion";

export const SingleProduct = ({ product }: { product: Product }) => {
  const [activeImage, setActiveImage] = useState<StaticImageData | string>(
    product.thumbnail
  );
  return (
    <div className="py-10">
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        key={product.slug}
        className="relative"
      >
        <Image
          src={activeImage}
          alt={product.title}
          objectFit="cover"
          width="1000"
          height="1000"
          className="rounded-md max-h-fit max-w-full mx-auto"
        />
      </motion.div>
      <div className="flex flex-row justify-center my-8 flex-wrap max-h-80 overflow-">
        <div className="absolute bottom-0 bg-white dark:bg-gray-900 h-40 w-full [mask-image:linear-gradient(to_bottom,transparent,white)] transition-colors duration-300" />
        {product.images.map((image, idx) => (
          <button
            onClick={() => setActiveImage(image)}
            key={`image-thumbnail-${idx}`}
          >
            <Image
              src={image}
              alt={`thumbnail-${idx}`}
              objectFit="contain"
              height="1000"
              width="1000"
              className="h-14 w-16 md:h-40 md:w-60 object-cover object-top m-2 mb-r border rounded-lg border-neutral-100 dark:border-gray-700 hover:border-neutral-300 dark:hover:border-gray-500 transition-all duration-200"
            />
          </button>
        ))}
      </div>
      <div className="flex lg:flex-row justify-between items-center flex-col mt-20">
        <Heading className="font-black mb-2 pb-1"> {product.title}</Heading>
        <div className="flex space-x-2 md:mb-1 mt-2 md:mt-0">
          {product.stack?.map((stack: string) => (
            <span
              key={stack}
              className="text-xs md:text-xs lg:text-xs bg-gray-50 dark:bg-gray-700 px-2 py-1 rounded-sm text-secondary dark:text-gray-300 transition-colors duration-300"
            >
              {stack}
            </span>
          ))}
        </div>
      </div>
      <div>
        <Paragraph className="my-4">{product.description}</Paragraph>
      </div>
      <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none text-neutral-600 dark:text-neutral-300 my-10 transition-colors duration-300">
        {product?.content}
      </div>

      <a
        href={product.href}
        target="__blank"
        className="inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-gray-900 bg-gray-800 dark:bg-gray-700 text-white shadow-lg shadow-black/20 sm:backdrop-blur-sm group-hover/button:bg-gray-50/15 group-hover/button:scale-105 focus-visible:ring-1 focus-visible:ring-offset-2 ring-gray-50/60 text-sm font-medium px-4 py-2 mt-auto origin-left duration-300"
      >
        Live Preview
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
        >
          <path d="M5 12l14 0"></path>
          <path d="M13 18l6 -6"></path>
          <path d="M13 6l6 6"></path>
        </svg>
      </a>
    </div>
  );
};
