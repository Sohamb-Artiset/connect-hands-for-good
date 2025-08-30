import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Users, Building } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Get in touch via email",
    contact: "hello@volunteerconnect.org",
    action: "Send Email"
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak with our team",
    contact: "(555) 123-HELP",
    action: "Call Now"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Our main office",
    contact: "123 Community St, Downtown District",
    action: "Get Directions"
  },
  {
    icon: Clock,
    title: "Office Hours",
    description: "When we're available",
    contact: "Mon-Fri: 9AM-6PM, Sat: 10AM-4PM",
    action: "View Calendar"
  }
];

const inquiryTypes = [
  { icon: Users, label: "I want to volunteer", value: "volunteer" },
  { icon: Building, label: "Register my organization", value: "organization" },
  { icon: MessageCircle, label: "General inquiry", value: "general" },
  { icon: Mail, label: "Partnership opportunity", value: "partnership" }
];

const Contact = () => {
  return (
    <div>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-accent-light/20 to-highlight-light/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Get in 
              <span className="text-transparent bg-clip-text bg-gradient-hero ml-3">
                Touch
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Have questions? Want to partner with us? We're here to help you make a difference in your community.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactMethods.map((method, index) => (
                <Card key={index} className="group hover:shadow-card transition-all duration-300 border-0 bg-gradient-card text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <method.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{method.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                    <p className="text-sm font-medium text-foreground mb-4">{method.contact}</p>
                    <Button variant="outline" size="sm" className="text-xs">
                      {method.action}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 bg-gradient-to-br from-accent-light/30 to-highlight-light/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-foreground mb-6">Send Us a Message</h2>
                <p className="text-xl text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              <Card className="border-0 shadow-glow bg-gradient-card">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Contact Form</CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <form className="space-y-6">
                    {/* Inquiry Type */}
                    <div>
                      <Label className="text-base font-semibold">What can we help you with?</Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                        {inquiryTypes.map((type) => (
                          <label key={type.value} className="flex items-center gap-3 p-4 border-2 border-border/50 rounded-lg cursor-pointer hover:border-primary transition-colors">
                            <input type="radio" name="inquiry-type" value={type.value} className="text-primary" />
                            <type.icon className="w-5 h-5 text-accent" />
                            <span className="text-sm font-medium">{type.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Personal Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="first-name" className="text-base font-semibold">First Name</Label>
                        <Input 
                          id="first-name" 
                          placeholder="Enter your first name"
                          className="mt-2 h-12 border-2 border-border/50 focus:border-primary"
                        />
                      </div>
                      <div>
                        <Label htmlFor="last-name" className="text-base font-semibold">Last Name</Label>
                        <Input 
                          id="last-name" 
                          placeholder="Enter your last name"
                          className="mt-2 h-12 border-2 border-border/50 focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="email" className="text-base font-semibold">Email Address</Label>
                        <Input 
                          id="email" 
                          type="email"
                          placeholder="your@email.com"
                          className="mt-2 h-12 border-2 border-border/50 focus:border-primary"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-base font-semibold">Phone Number (Optional)</Label>
                        <Input 
                          id="phone" 
                          type="tel"
                          placeholder="(555) 123-4567"
                          className="mt-2 h-12 border-2 border-border/50 focus:border-primary"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <Label htmlFor="subject" className="text-base font-semibold">Subject</Label>
                      <Input 
                        id="subject" 
                        placeholder="Brief description of your inquiry"
                        className="mt-2 h-12 border-2 border-border/50 focus:border-primary"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <Label htmlFor="message" className="text-base font-semibold">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us more about how we can help you..."
                        rows={6}
                        className="mt-2 border-2 border-border/50 focus:border-primary resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <div className="text-center pt-4">
                      <Button size="lg" className="bg-gradient-hero hover:opacity-90 px-8">
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Quick answers to common questions about VolunteerConnect.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <Card className="border-0 bg-gradient-card">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-3">How do I get started volunteering?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Simply create a free account, complete your profile with your skills and interests, 
                    then browse available opportunities in your area.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-card">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-3">Are all organizations verified?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Yes, we thoroughly vet all partner organizations to ensure they meet our standards 
                    for legitimacy, impact, and volunteer safety.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-card">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-3">Is there a cost to volunteer?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    VolunteerConnect is completely free for volunteers. Some opportunities may have 
                    specific requirements, which are clearly listed in the event details.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-card">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-3">Can my organization join?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We welcome applications from registered nonprofits and NGOs. Contact us to begin 
                    the verification process and start connecting with volunteers.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;