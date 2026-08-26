import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/LayoutBits";

export default function NotFound() {
  return (
    <section className="bg-night py-40 text-white">
      <Container>
        <h1 className="serif-tight text-4xl">Page not found.</h1>
        <p className="mt-4 max-w-md text-white/75">
          That page is not in the Vertex POS site. Head back to the platform or
          open Production Planner.
        </p>
        <div className="mt-8 flex gap-3">
          <Button href="/">Home</Button>
          <Button href="/products/production-planner" variant="white">
            Production Planner
          </Button>
        </div>
      </Container>
    </section>
  );
}
