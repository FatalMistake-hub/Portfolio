import Link from "next/link";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl mb-8">Sorry, the page you are looking for cannot be found.</p>
        <Link href="/">
          <a className="text-teal-500 hover:underline">Return Home</a>
        </Link>
      </div>
    </Container>
  );
}
