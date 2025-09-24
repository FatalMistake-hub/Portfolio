import React, { FC } from "react";

type ContainerProps = {
    children: React.ReactNode;
    containerRef?: React.MutableRefObject<HTMLDivElement | null>;
    className?: string;
};

export const Container: FC<ContainerProps> = ({ children, className, containerRef }) => {
    return (
        <main
            ref={containerRef}
            className={`relative w-full mx-auto py-16 px-4 md:px-10 transition-colors duration-300 ${className}
    `}
        >
            {children}
        </main>
    );
};
