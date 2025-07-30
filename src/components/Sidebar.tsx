"use client";
import { navlinks } from "@/constants/navlinks";
import { socials } from "@/constants/socials";
import { useIsMobile, useClickOutside } from "@/lib/utils";
import { Navlink } from "@/types/navlink";
import { IconMenu2 } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Badge } from "./Badge";
import { Heading } from "./Heading";

export const Sidebar = () => {
    const isMobile = useIsMobile();
    const [open, setOpen] = useState(isMobile ? false : true);
    const ref = useRef<HTMLDivElement>(null);
    useClickOutside(ref, () => isMobile && setOpen(false));
    useEffect(() => {
        if (isMobile) {
            setOpen(false);
        } else {
            setOpen(true);
        }
    }, [isMobile]);
    return (
        <>
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ x: -200 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.2, ease: "linear" }}
                        exit={{ x: -200 }}
                        className={`px-5 z-[100] pt-12 pb-8 bg-neutral-100 max-w-[14rem] lg:w-fit fixed lg:relative h-screen left-0 flex flex-col justify-between overflow-auto`}
                        ref={ref}
                    >
                        <div className="flex-1 ">
                            <SidebarHeader />
                            <Navigation setOpen={setOpen} />
                        </div>
                        <div onClick={() => isMobile && setOpen(false)}>
                            <Badge href="/resume" text="Read Resume" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <button
                id="menu"
                aria-label="Menu"
                className="fixed  top-4 left-4 h-8 w-8 backdrop-blur-sm flex items-center justify-center z-50 shadow-xl rounded-2xl"
                onClick={() => setOpen(!open)}
            >
                <IconMenu2 className="h-4 w-4 text-secondary" />
            </button>
        </>
    );
};

export const Navigation = ({
    setOpen,
}: {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const pathname = usePathname();

    const isActive = (href: string) => pathname === href;
    const isMobile = useIsMobile();
    return (
        <div className="flex flex-col space-y-1 my-10 relative z-[100]">
            {navlinks.map((link: Navlink) => (
                <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => isMobile && setOpen(false)}
                    className={twMerge(
                        "text-secondary hover:text-primary transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm",
                        isActive(link.href) && "bg-white shadow-lg text-primary"
                    )}
                >
                    <link.icon
                        className={twMerge(
                            "h-4 w-4 flex-shrink-0",
                            isActive(link.href) && "text-teal-500"
                        )}
                    />
                    <span className="font-rubik text-lg max-sm:text-base">
                        {link.label}
                    </span>
                </Link>
            ))}

            <Heading
                as="p"
                className="text-sm md:text-sm lg:text-sm pt-10 px-2"
            >
                Socials
            </Heading>
            {socials.map((link: Navlink) => (
                <Link
                    rel="noopener noreferrer"
                    target="_blank"
                    key={link.href}
                    href={link.href}
                    className={twMerge(
                        "text-secondary hover:text-primary text-sm animate-pulse flex rounded-full justify-start items-center gap-2 w-full h-fit p-2 shadow-md border-black hover:bg-primary hover:text-white hover:animate-none"
                    )}
                >
                    <link.icon
                        className={twMerge(
                            "h-4 w-4 flex-shrink-0",
                            isActive(link.href) && "text-teal-500"
                        )}
                    />
                    <span>{link.label}</span>
                </Link>
            ))}
        </div>
    );
};

const SidebarHeader = () => {
    return (
        <div className="flex space-x-2">
            <Image
                src="/images/avt.jpg"
                alt="Avatar"
                height="40"
                width="40"
                className="object-cover object-top rounded-full flex-shrink-0"
            />
            <div className="flex text-sm flex-col">
                <p className="font-bold text-primary">Minh Nhat</p>
                <p className="font-light text-secondary">Developer</p>
            </div>
        </div>
    );
};
