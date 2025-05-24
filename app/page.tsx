import { About } from "@/components/layout/sections/about";
import { Cta } from "@/components/layout/sections/cta";
import { FAQ } from "@/components/layout/sections/faq";
import { Features } from "@/components/layout/sections/features";
import { Hero } from "@/components/layout/sections/hero";
import { HowItWorks } from "@/components/layout/sections/how-it-works";
import { Newsletter } from "@/components/layout/sections/newsletter";
import { Pricing } from "@/components/layout/sections/pricing";
import { Services } from "@/components/layout/sections/services";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <HowItWorks />
      <Features />
      <Services />
      <Cta />
      <Pricing />
      <Newsletter />
      <FAQ />
    </>
  );
}
