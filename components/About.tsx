import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is P2P crypto trading?",
    answer:
      "P2P (peer-to-peer) crypto trading allows you to buy and sell cryptocurrencies directly with other users, often at better rates than traditional exchanges. Our platform helps you find the most profitable opportunities across multiple P2P marketplaces.",
  },
  {
    question: "How does the AI analysis work?",
    answer:
      "Our Gemini AI automatically reads and analyzes thousands of P2P advertisements, extracting trading requirements, payment methods, and risk factors. It then scores each opportunity based on profit potential and execution probability.",
  },
  {
    question: "Which exchanges do you support?",
    answer:
      "We currently support 8+ major exchanges including Binance, OKX, Bybit, KuCoin, Huobi, Gate.io, Kraken, and more. We&apos;re constantly adding new platforms based on user demand.",
  },
  {
    question: "How accurate is the risk scoring?",
    answer:
      "Our AI risk scoring achieves 99% accuracy by analyzing merchant history, completion rates, trading terms complexity, and market conditions. Each opportunity is scored from low to high risk with detailed explanations.",
  },
  {
    question: "Can I use this for arbitrage trading?",
    answer:
      "Absolutely! Our platform is specifically designed for arbitrage traders. We automatically detect price differences between exchanges and calculate potential profits, including fees and execution risks.",
  },
  {
    question: "Do you store my trading data?",
    answer:
      "We only analyze public P2P advertisement data. We never access your personal trading accounts or store any sensitive information. Your privacy and security are our top priorities.",
  },
  {
    question: "What&apos;s included in the free plan?",
    answer:
      "The free plan includes access to the top 10 daily opportunities, basic risk scoring, and coverage of 3 major exchanges (Binance, OKX, Bybit). Perfect for getting started with P2P trading intelligence.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply sign up for a free account to start seeing profitable P2P opportunities immediately. No credit card required for the free tier. Upgrade to Pro when you&apos;re ready for unlimited access and advanced features.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion type="single" collapsible className="w-full AccordionRoot">
        {faqs.map(({ question, answer }, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
