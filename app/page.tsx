import { About } from "@/components/about";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Pricing } from "@/components/pricing";
import { FAQ } from "@/components/faq";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <Pricing />
      <FAQ />
    </>
  );
}
