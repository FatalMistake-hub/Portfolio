"use client";
import React from "react";

export const Footer = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 p-4 text-center justify-center text-xs text-neutral-500 dark:text-neutral-400 border-t border-neutral-100 dark:border-neutral-700 bg-white dark:bg-gray-800 transition-colors duration-300">
      <span className="font-semibold">{new Date().getFullYear()} </span>
    </div>
  );
};
