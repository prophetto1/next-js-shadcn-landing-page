// src/components/About.tsx

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const statistics = [
  {
    quantity: "70,000+",
    description: "P2P ads analyzed daily",
  },
  {
    quantity: "10+",
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
      className="container py-24 sm:py-32 scroll-mt-20" // Added scroll-mt for fixed navbar
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6">
          <div className="flex flex-col justify-center items-center text-center space-y-8">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                P2P Analytics
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-4xl">
              {statistics.map(({ quantity, description }) => (
                <Card key={description} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-center text-3xl font-bold text-primary">
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
