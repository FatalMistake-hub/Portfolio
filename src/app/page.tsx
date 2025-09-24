/* eslint-disable react/no-unescaped-entities */
import ContainerHome from "@/components/ContainerHome";
import { createPageMetadata } from "@/lib/seo";
import Head from "next/head"; // <-- added

export const metadata = createPageMetadata({
    title: "Home",
    description:
        "Welcome to Minh Nhat's portfolio. A passionate frontend developer specializing in React, Next.js, and modern web technologies. Explore my projects and discover my journey in web development.",
    keywords: [
        "Minh Nhat portfolio",
        "Frontend developer portfolio",
        "React projects",
        "Next.js developer",
        "Web development portfolio",
        "JavaScript developer",
    ],
    path: "/",
    type: "website",
});

const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: "https://portfolio-rho-jet-91.vercel.app",
    name: "Minh Nhat - Developer",
    description:
        "Minh Nhat is a developer, writer and speaker. He is a digital nomad and travels around the world while working remotely.",
};

export default async function Projects() {
    return (
        <>
            <div className="h-fit w-full flex items-center justify-center flex-wrap gap-4">
                <Head>
                    <script
                        type="application/ld+json"
                        // dangerouslySetInnerHTML is used for server-rendering JSON-LD
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify(jsonLdData),
                        }}
                    />
                </Head>
                <ContainerHome />
            </div>
        </>
    );
}
