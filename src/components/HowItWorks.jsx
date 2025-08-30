import { Card, CardContent } from "@/components/ui/card";
import { Search, UserPlus, Heart, MessageCircle } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Create Your Profile",
    description: "Sign up and tell us about your skills, interests, and availability. We'll help match you with the perfect opportunities."
  },
  {
    icon: Search,
    title: "Discover Opportunities",
    description: "Browse verified NGOs and volunteer events. Filter by location, cause, time commitment, and required skills."
  },
  {
    icon: MessageCircle,
    title: "Connect & Communicate",
    description: "Reach out to organizations directly. Ask questions, get details, and coordinate your volunteer experience."
  },
  {
    icon: Heart,
    title: "Make an Impact",
    description: "Volunteer with confidence knowing you're making a real difference. Share your experience and inspire others."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-accent-light/30 to-highlight-light/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Getting started with volunteer work has never been easier. 
            Follow these simple steps to begin your journey of making a difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative group hover:shadow-card transition-all duration-300 border-0 bg-gradient-card">
              <CardContent className="p-8 text-center">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Connection Lines for Desktop */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="w-full relative">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="absolute top-1/2 bg-gradient-to-r from-primary/30 to-accent/30 h-0.5"
                  style={{
                    left: `${i * 25 - 12}%`,
                    width: '12%',
                    transform: 'translateY(-50%)'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;