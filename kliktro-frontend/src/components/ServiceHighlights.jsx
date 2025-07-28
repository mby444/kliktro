import { Truck, Headset, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: <Truck size={32} className="text-black" />,
    title: "FREE AND FAST DELIVERY",
    description:
      "Get your orders delivered to your doorstep quickly and for free.",
  },
  {
    icon: <Headset size={32} className="text-black" />,
    title: "24/7 CUSTOMER SERVICE",
    description: "Our team is here for you anytime, anywhere.",
  },
  {
    icon: <DollarSign size={32} className="text-black" />,
    title: "MONEY BACK GUARANTEE",
    description: "Not satisfied? Get your money back, no questions asked.",
  },
];

export default function ServiceHighlights() {
  return (
    <section className="w-full py-12 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-3">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="text-center hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6 flex flex-col items-center justify-center">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
