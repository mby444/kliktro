import {
  ShieldCheck,
  Truck,
  CreditCard,
  Info,
  Target,
  Users,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";

import whoWeAre from "@/assets/about/who_we_are.jpg";
import ourMission from "@/assets/about/our_mission.jpg";

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-black to-gray-700 text-transparent bg-clip-text">
          About Our Store
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Empowering your digital lifestyle with top-notch electronics and
          reliable service.
        </p>
      </div>

      <Separator />

      {/* Who We Are Section */}
      <section className="grid md:grid-cols-2 items-center gap-8">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-gray-800">
            <Users className="w-5 h-5" />
            <h2 className="text-xl font-semibold">Who We Are</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            We are a passionate team committed to making high-quality
            electronics accessible to everyone. From smartphones and wearables
            to smart home devices, our curated selection ensures you get the
            best from trusted brands.
          </p>
        </div>
        <img src={whoWeAre} alt="Team" className="rounded-xl shadow-md" />
      </section>

      {/* Our Mission Section */}
      <section className="grid md:grid-cols-2 items-center gap-8">
        <img
          src={ourMission}
          alt="Mission"
          className="rounded-xl shadow-md order-2 md:order-1"
        />
        <div className="space-y-3 order-1 md:order-2">
          <div className="flex items-center gap-2 text-gray-800">
            <Target className="w-5 h-5" />
            <h2 className="text-xl font-semibold">Our Mission</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Our mission is simple: Deliver top-tier tech with unbeatable
            service. We blend quality, affordability, and convenience so you can
            enjoy the latest gadgets without the hassle.
          </p>
        </div>
      </section>

      {/* Why Shop With Us Section */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-gray-800">
          <Info className="w-5 h-5" />
          <h2 className="text-xl font-semibold">Why Shop With Us?</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Trusted Products",
              desc: "Only curated and quality-assured electronics from reliable brands.",
              icon: <ShieldCheck className="text-black w-6 h-6" />,
            },
            {
              title: "Fast Delivery",
              desc: "We work with top logistics providers to ensure your products arrive quickly.",
              icon: <Truck className="text-black w-6 h-6" />,
            },
            {
              title: "Secure Payment",
              desc: "Shop with confidence using our safe and encrypted payment system.",
              icon: <CreditCard className="text-black w-6 h-6" />,
            },
          ].map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-all">
              <CardContent className="p-6 space-y-3">
                <div className="flex items-center gap-3">
                  {item.icon}
                  <h3 className="text-lg font-medium">{item.title}</h3>
                </div>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
