import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";

export const Hero = () => {
  const scrollToPricing = () => {
    const pricingElement = document.getElementById("pricing");
    if (pricingElement) {
      pricingElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openDemo = () => {
    // For now, scroll to features. Later you can add actual demo link
    const featuresElement = document.getElementById("features");
    if (featuresElement) {
      featuresElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
              Find Profitable P2P Trades
            </span>{" "}
            Across 8+ Exchanges. Powered by
          </h1>{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              AI Intelligence.
            </span>{" "}
          </h2>
        </main>
        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Real-time arbitrage opportunities with AI risk scoring and automated terms analysis. 
          It&apos;s like your Bloomberg Terminal for the P2P crypto market.
        </p>
        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button 
            className="w-full md:w-1/3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            onClick={scrollToPricing}
          >
            🔥 View Live Opportunities
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            className={`w-full md:w-1/3 hover:bg-primary/10 transition-all duration-300 ${buttonVariants({
              variant: "outline",
            })}`}
            onClick={openDemo}
          >
            <Play className="mr-2 w-4 h-4" />
            📊 See Demo
          </Button>
        </div>
      </div>
      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>
      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
