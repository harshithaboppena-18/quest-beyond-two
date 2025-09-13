import { Button } from "@/components/ui/button";
import { BookOpen, Brain, BarChart3 } from "lucide-react";
import heroImage from "@/assets/hero-learning.jpg";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Adaptive Learning
                <br />
                <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Platform
                </span>
              </h1>
              <p className="text-xl text-blue-100 max-w-lg">
                Personalized study system with AI-driven recommendations, 
                document processing, and intelligent progress analytics.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-blue-50 shadow-medium">
                Get Started
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2 text-blue-100">
                <BookOpen className="h-5 w-5" />
                <span className="text-sm">Smart Documents</span>
              </div>
              <div className="flex items-center gap-2 text-blue-100">
                <Brain className="h-5 w-5" />
                <span className="text-sm">AI Recommendations</span>
              </div>
              <div className="flex items-center gap-2 text-blue-100">
                <BarChart3 className="h-5 w-5" />
                <span className="text-sm">Progress Analytics</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <img 
                src={heroImage} 
                alt="Adaptive Learning Platform Interface"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white rounded-full opacity-30 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-32 h-32 bg-white/5 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-accent/10 rounded-full"></div>
      </div>
    </section>
  );
};