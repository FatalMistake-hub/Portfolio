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
      openGraph: {
        title: product.title,
        description: product.description,
      },
      twitter: {
        title: product.title,
        description: product.description,
      },
    };
  } else {
    return {
      title: "Projects | Minh Nhat",
      description:
        "Minh Nhat is a developer, front-end developer. This is a list of projects that i has worked on.",
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
