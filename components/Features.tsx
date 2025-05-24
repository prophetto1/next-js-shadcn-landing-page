import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "🤖 AI Terms Analysis",
    description: "Gemini AI automatically extracts and analyzes trading requirements from human-readable terms with 99% accuracy.",
    badge: "AI-Powered"
  },
  {
    title: "⚡ Real-Time Monitoring",
    description: "50,000+ P2P advertisements analyzed every hour across 8 major exchanges for instant opportunities.",
    badge: "Live Data"
  },
  {
    title: "🎯 Smart Risk Scoring",
    description: "AI-powered risk assessment based on merchant history, terms complexity, and market conditions.",
    badge: "Risk Management"
  },
  {
    title: "💱 Multi-Exchange Coverage",
    description: "Connected to Binance, OKX, Bybit, KuCoin, Huobi, Gate.io, Kraken and more for comprehensive coverage.",
    badge: "8+ Exchanges"
  },
  {
    title: "📈 Arbitrage Detection",
    description: "Automatic detection of profitable price differences between exchanges with profit calculations.",
    badge: "Profit Focused"
  },
  {
    title: "🔔 Smart Alerts",
    description: "Customizable notifications for opportunities matching your risk tolerance and profit targets.",
    badge: "Personalized"
  }
];

export const Features = () => {
  return (
    <section id="features" className="container py-24 sm:py-32 space-y-8 scroll-mt-20">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        AI-Powered{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          P2P Trading Intelligence
        </span>
      </h2>
      <div className="flex flex-wrap md:justify-center gap-4">
        <div>
          <Badge variant="secondary" className="text-sm">
            Cross-Platform
          </Badge>
        </div>
        <div>
          <Badge variant="secondary" className="text-sm">
            Real-Time
          </Badge>
        </div>
        <div>
          <Badge variant="secondary" className="text-sm">
            AI-Enhanced
          </Badge>
        </div>
        <div>
          <Badge variant="secondary" className="text-sm">
            Risk-Aware
          </Badge>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, badge }) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {title}
                <Badge variant="outline" className="ml-auto">
                  {badge}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              {description}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};