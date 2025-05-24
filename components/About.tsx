import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const statistics = [
  {
    quantity: "50,000+",
    description: "P2P ads analyzed daily",
  },
  {
    quantity: "8+",
    description: "Major exchanges supported",
  },
  {
    quantity: "100+",
    description: "Fiat currencies tracked",
  },
  {
    quantity: "99%",
    description: "AI accuracy rate",
  },
];

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src="/pilot.png"
            alt="P2P Trading Intelligence"
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                P2P Intelligence
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                We&apos;re revolutionizing P2P crypto trading with AI-powered market intelligence. 
                Our platform analyzes thousands of advertisements across major exchanges to find 
                profitable arbitrage opportunities while assessing risks automatically.
              </p>
              <p className="text-lg text-muted-foreground mt-4">
                Built by traders, for traders - we understand the challenges of manual P2P analysis. 
                Our Gemini AI processes complex trading terms, calculates execution probabilities, 
                and identifies the most profitable opportunities in real-time.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {statistics.map(({ quantity, description }) => (
                <Card key={description}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-center text-2xl font-bold text-primary">
                      {quantity}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center pb-2">
                    <p className="text-sm text-muted-foreground">
                      {description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
