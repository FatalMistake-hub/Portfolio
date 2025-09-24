"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { IconArrowDown } from "@tabler/icons-react";
import LiquidGlass from "liquid-glass-react";
// A simple draggable circular glass lens over background text.
// Uses the same SVG filter pipeline as other demos.
interface WaterDropEffectProps {
    containerRef: React.MutableRefObject<HTMLDivElement | null>;
}

export const WaterDropEffect: React.FC<WaterDropEffectProps> = ({
    containerRef,
}) => {
    // const containerRef = useRef<HTMLDivElement | null>(null);
    const isDragging = useMotionValue(false);
    const velocityX = useMotionValue(0);
    const [showInstruction, setShowInstruction] = useState(true);
    const [hasInteracted, setHasInteracted] = useState(false);

    // Lens geometry
    const width = 140;
    const height = 100;
    const radius = height / 2;

    // Controls (MotionValues) — same pattern as Searchbox/MixedUI
    const specularOpacity = useMotionValue(0.5); // 0..1
    const specularSaturation = useMotionValue(9); // 0..50
    const refractionBase = useMotionValue(1); // 0..1
    // Readouts
    const specularOpacityText = useTransform(specularOpacity, (v) =>
        v.toFixed(2)
    );
    const specularSaturationText = useTransform(specularSaturation, (v) =>
        Math.round(v).toString()
    );
    const refractionLevelText = useTransform(refractionBase, (v) =>
        v.toFixed(2)
    );
    // Animate effective refraction level on drag (snaps stronger while dragging)
    const dragMultiplier = useTransform(isDragging, (d): number =>
        d ? 1 : 0.8
    );
    const refractionLevel = useSpring(
        useTransform(() => refractionBase.get() * dragMultiplier.get()),
        { stiffness: 250, damping: 14 }
    );
    const magnifyingScale = useSpring(
        useTransform(isDragging, (d): number => (d ? 48 : 24)),
        {
            stiffness: 250,
            damping: 14,
        }
    );

    const objectScale = useSpring(
        useTransform(isDragging, (d): number => (d ? 1.05 : 0.95)),
        { stiffness: 340, damping: 20 }
    );

    // Subtle magnifying glass zoom effect
    const magnifyingZoom = useSpring(
        useTransform(isDragging, (d): number => (d ? 1.15 : 1.08)),
        { stiffness: 300, damping: 25 }
    );

    // Subtle magnifying glass backdrop filter effects
    const backdropBlur = useSpring(
        useTransform(isDragging, (d): number => (d ? 1.2 : 0.8)),
        { stiffness: 300, damping: 25 }
    );

    const backdropBrightness = useSpring(
        useTransform(isDragging, (d): number => (d ? 1.15 : 1.05)),
        { stiffness: 300, damping: 25 }
    );

    const backdropSaturate = useSpring(
        useTransform(isDragging, (d): number => (d ? 1 : 0.9)),
        { stiffness: 300, damping: 25 }
    );
    const objectScaleY = useSpring(
        useTransform(
            (): number =>
                objectScale.get() *
                Math.max(0.7, 1 - Math.abs(velocityX.get()) / 5000)
        ),
        { stiffness: 340, damping: 30 }
    );
    const objectScaleX = useSpring(
        useTransform(
            (): number => objectScale.get() + (1 - objectScaleY.get())
        ),
        { stiffness: 340, damping: 30 }
    );

    // This could be done with only one spring (derived from ) and multiple transforms
    const shadowSx = useSpring(
        useTransform(isDragging, (d): number => (d ? 4 : 0)),
        { stiffness: 340, damping: 30 }
    );
    const shadowSy = useSpring(
        useTransform(isDragging, (d): number => (d ? 16 : 4)),
        { stiffness: 340, damping: 30 }
    );
    const shadowAlpha = useSpring(
        useTransform(isDragging, (d): number => (d ? 0.22 : 0.16)),
        {
            stiffness: 220,
            damping: 24,
        }
    );
    const insetShadowAlpha = useSpring(
        useTransform(isDragging, (d): number => (d ? 0.27 : 0.2)),
        {
            stiffness: 220,
            damping: 24,
        }
    );
    const shadowBlur = useSpring(
        useTransform(isDragging, (d): number => (d ? 24 : 9)),
        {
            stiffness: 340,
            damping: 30,
        }
    );
    const boxShadow = useTransform(
        () =>
            `${shadowSx.get()}px ${shadowSy.get()}px ${shadowBlur.get()}px rgba(0,0,0,${shadowAlpha.get()}),
      inset ${shadowSx.get() / 2}px ${
          shadowSy.get() / 2
      }px 24px rgba(0,0,0,${insetShadowAlpha.get()}),
      inset ${-shadowSx.get() / 2}px ${
          -shadowSy.get() / 2
      }px 24px rgba(255,255,255,${insetShadowAlpha.get()})`
    );

    // Reset dragging on any global pointer/mouse/touch end
    useEffect(() => {
        const handleUp = () => isDragging.set(false);
        window.addEventListener("pointerup", handleUp);
        window.addEventListener("mouseup", handleUp);
        window.addEventListener("touchend", handleUp);
        return () => {
            window.removeEventListener("pointerup", handleUp);
            window.removeEventListener("mouseup", handleUp);
            window.removeEventListener("touchend", handleUp);
        };
    }, [isDragging]);

    // Auto-hide instruction after 8 seconds if no interaction
    useEffect(() => {
        if (showInstruction) {
            const timer = setTimeout(() => {
                if (!hasInteracted) {
                    setShowInstruction(false);
                }
            }, 8000);
            return () => clearTimeout(timer);
        }
    }, [showInstruction, hasInteracted]);

    return (
        <>
            <motion.div
                className="absolute bottom-11 right-8 z-10 cursor-grab active:cursor-grabbing"
                style={{
                    width,
                    height,
                    borderRadius: radius,
                    scaleX: useTransform(
                        () => objectScaleX.get() * magnifyingZoom.get()
                    ),
                    scaleY: useTransform(
                        () => objectScaleY.get() * magnifyingZoom.get()
                    ),
                    backdropFilter: useTransform(
                        () =>
                            `blur(${backdropBlur.get()}px) brightness(${backdropBrightness.get()}) saturate(${backdropSaturate.get()}) contrast(1.1)`
                    ),
                    WebkitBackdropFilter: useTransform(
                        () =>
                            `blur(${backdropBlur.get()}px) brightness(${backdropBrightness.get()}) saturate(${backdropSaturate.get()}) contrast(1.1)`
                    ),
                }}
                drag
                dragConstraints={containerRef}
                dragElastic={0.13}
                dragMomentum={false}
                onDrag={(_, info) => {
                    velocityX.set(info.velocity.x);
                    if (!hasInteracted) {
                        setHasInteracted(true);
                        setShowInstruction(false);
                    }
                }}
                onDragEnd={() => velocityX.set(0)}
                onMouseDown={() => isDragging.set(true)}
                onTouchStart={() => isDragging.set(true)}
            >
                <motion.div
                    className="absolute inset-0 ring-1 ring-black/10 dark:ring-white/10"
                    style={{
                        borderRadius: radius,
                        backdropFilter: `url(#magnifying-glass-filter)`,
                        boxShadow,
                    }}
                />
            </motion.div>

            {/* Instruction Arrow and Label */}
            {showInstruction && (
                <motion.div
                    className="absolute z-20 pointer-events-none"
                    style={{
                        bottom: height + 36,
                        right: width / 2 - 48,
                    }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
                >
                    {/* Arrow pointing up */}
                    <motion.div
                        className="flex flex-col items-center"
                        animate={{
                            y: [0, -8, 0],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        {/* Label */}
                        <motion.div
                            className=" backdrop-blur-sm text-teal-400 dark:text-teal-300 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap border border-teal-500/30 dark:border-teal-400/20 shadow-lg dark:shadow-teal-500/10"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 2, duration: 0.5 }}
                        >
                            Let&apos;s try liquid glass
                        </motion.div>
                        <IconArrowDown
                            size={24}
                            className="text-teal-400 dark:text-teal-300 mb-2 drop-shadow-lg"
                        />
                    </motion.div>
                </motion.div>
            )}
        </>
    );
};
