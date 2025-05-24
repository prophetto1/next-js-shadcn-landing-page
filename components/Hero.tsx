// src/components/Hero.tsx

import { Button } from "@/components/ui/button"; // Standardized path
// import { buttonVariants } from "@/components/ui/button"; // buttonVariants often not needed if Button is used directly
// import { HeroCards } from "./HeroCards"; // Assuming HeroCards.tsx is in the same directory (src/components/)
                                         // If HeroCards is in src/components/layout/ or src/components/specifics/, adjust path
import Link from "next/link";

export const Hero = () => {
  return (
    <section id="hero" className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10 scroll-mt-20"> {/* Added id and scroll-mt */}
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
          <Link href="#pricing" passHref legacyBehavior>
            <Button asChild className="w-full md:w-1/3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105">
              <a>🔥 View Live Opportunities</a>
            </Button>
          </Link>
          <Link href="#features" passHref legacyBehavior>
            <Button
              asChild
              variant="outline"
              className="w-full md:w-1/3 hover:bg-primary/10 transition-all duration-300"
            >
              <a>📊 See Demo</a>
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Hero cards sections - Temporarily commented out. If you use it, ensure HeroCards.tsx exists and path is correct */}
      {/* <div className="z-10">
        <HeroCards />
      </div> */}
      
      <div className="flex items-center justify-center row-start-1 lg:row-start-auto lg:col-start-2">
        <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg p-8 text-center shadow-lg">
          <div className="text-6xl mb-4">🚀</div>
          <p className="text-xl font-semibold">AI-Powered P2P Insights</p>
          <p className="text-muted-foreground">Discover your edge.</p>
        </div>
      </div>
      
      {/* Removed the lone <div className="shadow"></div> as its effect/purpose isn't clear. 
          If it's for a specific visual effect, ensure the .shadow class is defined in globals.css 
      */}
    </section>
  );
};
