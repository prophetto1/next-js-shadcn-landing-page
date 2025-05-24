import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const faqs = [
  {
    question: "What is P2P crypto trading?",
    answer: "P2P (peer-to-peer) crypto trading allows you to buy and sell cryptocurrencies directly with other users, often at better rates than traditional exchanges. Our platform helps you find the most profitable opportunities across multiple P2P marketplaces."
  },
  {
    question: "How does the AI analysis work?",
    answer: "Our Gemini AI automatically reads and analyzes thousands of P2P advertisements, extracting trading requirements, payment methods, and risk factors. It then scores each opportunity based on profit potential and execution probability."
  },
  {
    question: "Which exchanges do you support?",
    answer: "We currently support 8+ major exchanges including Binance, OKX, Bybit, KuCoin, Huobi, Gate.io, Kraken, and more. We're constantly adding new platforms based on user demand."
  },
  {
    question: "How accurate is the risk scoring?",
    answer: "Our AI risk scoring achieves 99% accuracy by analyzing merchant history, completion rates, trading terms complexity, and market conditions. Each opportunity is scored from low to high risk with detailed explanations."
  },
  {
    question: "Can I use this for arbitrage trading?",
    answer: "Absolutely! Our platform is specifically designed for arbitrage traders. We automatically detect price differences between exchanges and calculate potential profits, including fees and execution risks."
  },
  {
    question: "What's included in the free plan?",
    answer: "The free plan includes access to the top 10 daily opportunities, basic risk scoring, and coverage of 3 major exchanges (Binance, OKX, Bybit). Perfect for getting started with P2P trading intelligence."
  }
];

export const FAQ = () => {
  return (
    <section id="faq" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {faqs.map(({ question, answer }, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-lg md:text-xl">
                {question}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {answer}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
