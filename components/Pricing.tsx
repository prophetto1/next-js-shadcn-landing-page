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
    popular: false
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
    popular: true
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
    popular: false
  }
];

export const Pricing = () => {
  return (
    <section className="container py-24 sm:py-32">
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
        {pricingData.map(({ title, price, description, features, buttonText, popular }) => (
          <Card 
            key={title}
            className={`${popular ? "border-2 border-primary" : ""} relative`}
          >
            {popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm">
                  Most Popular
                </span>
              </div>
            )}
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {title}
              </CardTitle>
              <div>
                <span className="text-3xl font-bold">{price}</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <CardDescription>
                {description}
              </CardDescription>
            </CardHeader>

            <CardContent>
              <ul className="space-y-2">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="text-green-500 mr-2 h-4 w-4" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter>
              <Button 
                className="w-full"
                variant={popular ? "default" : "outline"}
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
