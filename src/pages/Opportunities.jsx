import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Clock, Users, Heart } from "lucide-react";

const mockOpportunities = [
  {
    id: 1,
    title: "Community Food Bank Volunteer",
    organization: "City Food Bank",
    location: "Downtown Community Center",
    date: "Every Saturday",
    duration: "3-4 hours",
    participants: 12,
    maxParticipants: 15,
    description: "Help sort and distribute food to families in need. Perfect for individuals or groups looking to make a direct impact.",
    skills: ["Organization", "Customer Service", "Physical Work"],
    category: "Food Security"
  },
  {
    id: 2,
    title: "Environmental Cleanup Drive",
    organization: "Green Earth Initiative",
    location: "Riverside Park",
    date: "March 15, 2025",
    duration: "2-3 hours",
    participants: 25,
    maxParticipants: 50,
    description: "Join us for a community cleanup to preserve our local environment and waterways.",
    skills: ["Outdoors", "Environmental Awareness"],
    category: "Environment"
  },
  {
    id: 3,
    title: "Youth Mentorship Program",
    organization: "Future Leaders Foundation",
    location: "Lincoln High School",
    date: "Weekdays 4-6 PM",
    duration: "2 hours",
    participants: 8,
    maxParticipants: 20,
    description: "Mentor high school students in academic and life skills. Long-term commitment preferred.",
    skills: ["Teaching", "Communication", "Leadership"],
    category: "Education"
  }
];

const Opportunities = () => {
  return (
    <div className="bg-gradient-to-br from-background via-accent-light/20 to-highlight-light/10">
      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Find Your Perfect 
            <span className="text-transparent bg-clip-text bg-gradient-hero ml-3">
              Volunteer Opportunity
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover meaningful ways to make a difference in your community. 
            Browse verified opportunities from trusted local NGOs.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-card rounded-2xl shadow-card p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input 
                  placeholder="Search opportunities, organizations, or causes..."
                  className="pl-12 h-12 text-lg border-2 border-border/50 focus:border-primary"
                />
              </div>
            </div>
            <div>
              <Input 
                placeholder="Location"
                className="h-12 text-lg border-2 border-border/50 focus:border-primary"
              />
            </div>
            <Button size="lg" className="bg-gradient-hero hover:opacity-90 h-12">
              <Search className="w-5 h-5 mr-2" />
              Search
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-6">
            <Badge variant="secondary" className="cursor-pointer hover:bg-accent hover:text-accent-foreground">
              Food Security
            </Badge>
            <Badge variant="secondary" className="cursor-pointer hover:bg-accent hover:text-accent-foreground">
              Environment
            </Badge>
            <Badge variant="secondary" className="cursor-pointer hover:bg-accent hover:text-accent-foreground">
              Education
            </Badge>
            <Badge variant="secondary" className="cursor-pointer hover:bg-accent hover:text-accent-foreground">
              Healthcare
            </Badge>
            <Badge variant="secondary" className="cursor-pointer hover:bg-accent hover:text-accent-foreground">
              Youth Development
            </Badge>
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {mockOpportunities.map((opportunity) => (
            <Card key={opportunity.id} className="group hover:shadow-glow transition-all duration-300 border-0 bg-gradient-card overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-3">
                  <Badge className="bg-gradient-accent text-highlight-foreground">
                    {opportunity.category}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="w-4 h-4 mr-1" />
                    {opportunity.participants}/{opportunity.maxParticipants}
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {opportunity.title}
                </CardTitle>
                <div className="text-accent font-semibold">{opportunity.organization}</div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2 text-accent" />
                    {opportunity.location}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2 text-accent" />
                    {opportunity.date} • {opportunity.duration}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {opportunity.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {opportunity.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button className="flex-1 bg-gradient-hero hover:opacity-90">
                    <Heart className="w-4 h-4 mr-2" />
                    Apply Now
                  </Button>
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            Load More Opportunities
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Opportunities;