import { Container } from "@/components/Container";
import { SingleProduct } from "@/components/Product";
import { products, sideProjects } from "@/constants/products";
import { Product } from "@/types/products";
import { Metadata } from "next";
import { redirect } from "next/navigation";

// export const revalidate = 3600;

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return [...products, ...sideProjects].map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const product = [...products, ...sideProjects].find(
    (p) => p.slug === slug
  ) as Product | undefined;
  
  if (product) {
    return {
      title: product.title,
      description: product.description,
      keywords: [
        product.title,
        "Minh Nhat project",
        "Frontend project",
        "React project",
        "Web development",
        ...(product.stack || [])
      ],
      openGraph: {
        title: `${product.title} - Minh Nhat Portfolio`,
        description: product.description,
        type: "article",
        url: `https://portfolio-rho-jet-91.vercel.app/projects/${slug}`,
        images: [
          {
            url: product.thumbnail,
            width: 1200,
            height: 630,
            alt: product.title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: `${product.title} - Minh Nhat Portfolio`,
        description: product.description,
        creator: "@minhnhat_dev",
        images: [
          {
            url: product.thumbnail,
            alt: product.title,
          },
        ],
      },
      alternates: {
        canonical: `https://portfolio-rho-jet-91.vercel.app/projects/${slug}`,
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
    };
  } else {
    return {
      title: "Project Not Found",
      description:
        "The requested project could not be found. Explore other projects by Minh Nhat, a frontend developer specializing in React and Next.js.",
      robots: {
        index: false,
        follow: true,
      },
    };
  }
}

export default function SingleProjectPage({ params }: Props) {
  const slug = params.slug;
  const product = [...products, ...sideProjects].find(
    (p) => p.slug === slug
  ) as Product | undefined;
  
  if (!product) {
    redirect("/projects");
  }

  return (
    <Container>
      <SingleProduct product={product} />
    </Container>
  );
}
