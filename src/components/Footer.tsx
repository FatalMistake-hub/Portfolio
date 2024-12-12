"use client";
import React from "react";

export const Footer = () => {
  return (
    <div className="absolute bottom-2 left-0 right-0 p-4 text-center justify-center text-xs text-neutral-500 border-t border-neutral-100">
      <span className="font-semibold">{new Date().getFullYear()} </span>
    </div>
  );
};
