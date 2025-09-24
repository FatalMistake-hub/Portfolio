/* eslint-disable react/no-unescaped-entities */
"use client";
import { Container } from "@/components/Container";
import HeroTexts from "@/components/HeroTexts";
import { TechStack } from "@/components/TechStack";
import { WaterDropEffect } from "@/components/WaterDropEffect";
import FramerWrapper from "@/components/animations/FramerWrapper";
import Image from "next/image";
import { useRef } from "react";

export default function ContainerHome() {
    const containerRef = useRef<HTMLDivElement | null>(null);
    return (
        <>
            <Container
                containerRef={containerRef}
                className=" relative bg-[radial-gradient(#00cfab_1px,transparent_1px)] [background-size:16px_16px] flex items-center justify-center min-h-screen"
            >
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
                <WaterDropEffect containerRef={containerRef} />
            </Container>
        </>
    );
}
