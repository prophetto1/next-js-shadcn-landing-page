import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const pricingData = [
  {
    title: "Free",
    price: "$0",
    description: "Perfect for getting started with P2P trading",
    features: [
      "Top 10 opportunities daily",
      "Basic risk scoring", 
      "3 major exchanges (Binance, OKX, Bybit)",
      "Email alerts",
      "Community support"
    ],
    buttonText: "Get Started Free",
    popular: false,
    action: () => {
      window.open("mailto:hello@p2pintelligence.com?subject=Free Plan Signup", "_blank");
    }
  },
  {
    title: "Pro", 
    price: "$49",
    description: "For serious P2P traders and arbitrageurs",
    features: [
      "Unlimited opportunities",
      "Advanced AI risk analysis",
      "All 8+ exchanges", 
      "Real-time alerts",
      "API access",
      "Historical data",
      "Priority support"
    ],
    buttonText: "Start Pro Trial",
    popular: true,
    action: () => {
      window.open("mailto:hello@p2pintelligence.com?subject=Pro Plan Trial", "_blank");
    }
  },
  {
    title: "Enterprise",
    price: "$199", 
    description: "For trading firms and institutions",
    features: [
      "Everything in Pro",
      "White-label solution",
      "Custom integrations", 
      "Team collaboration",
      "Advanced analytics",
      "Dedicated support",
      "Custom alerts"
    ],
    buttonText: "Contact Sales",
    popular: false,
    action: () => {
      window.open("mailto:sales@p2pintelligence.com?subject=Enterprise Plan Inquiry", "_blank");
    }
  }
];

export const Pricing = () => {
  return (
    <section id="pricing" className="container py-24 sm:py-32 scroll-mt-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Choose Your
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Trading Plan
        </span>
      </h2>
      <p className="text-xl text-muted-foreground text-center mt-4 mb-8">
        Start free, upgrade when you&apos;re profitable
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingData.map(({ title, price, description, features, buttonText, popular, action }) => (
          <Card 
            key={title}
            onClick={action}
            className={`${
              popular ? "border-2 border-primary shadow-xl scale-105" : "border hover:border-primary/50"
            } relative transition-all duration-300 hover:scale-110 hover:shadow-2xl cursor-pointer group bg-card hover:bg-accent/50`}
          >
            {popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                  Most Popular
                </span>
              </div>
            )}
            
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">
                {title}
              </CardTitle>
              <div className="py-4">
                <span className="text-4xl font-bold">{price}</span>
                <span className="text-muted-foreground text-lg">/month</span>
              </div>
              <CardDescription className="text-base">
                {description}
              </CardDescription>
            </CardHeader>

            <CardContent className="flex-1">
              <ul className="space-y-3">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="text-green-500 mr-3 h-5 w-5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter className="pt-6">
              <Button 
                className={`w-full text-lg py-6 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg ${
                  popular 
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white" 
                    : "group-hover:bg-primary group-hover:text-primary-foreground"
                }`}
                variant={popular ? "default" : "outline"}
                size="lg"
              >
                {buttonText}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
