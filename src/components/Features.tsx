import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Brain, BarChart3, Target, FileText, Users } from "lucide-react";
const features = [{
  icon: Upload,
  title: "Document Processing",
  description: "Upload and process study materials with intelligent content extraction and organization."
}, {
  icon: Brain,
  title: "AI-Driven Recommendations",
  description: "Get personalized study suggestions based on your learning patterns and progress."
}, {
  icon: BarChart3,
  title: "Progress Analytics",
  description: "Track your learning journey with detailed insights and performance metrics."
}, {
  icon: Target,
  title: "Adaptive Assessments",
  description: "Automatically generated quizzes and tests that adapt to your skill level."
}, {
  icon: FileText,
  title: "Smart Study Plans",
  description: "Customized learning paths optimized for your goals and available time."
}, {
  icon: Users,
  title: "Collaborative Learning",
  description: "Connect with study groups and share insights with fellow learners."
}];
export const Features = () => {
  return <section className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-cyan-800">
            Powerful Features for 
            <span className="bg-gradient-primary bg-clip-text text-cyan-900"> SMART Learning</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to create a personalized and effective learning experience
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => <Card key={index} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border-border/50 bg-gradient-card">
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};