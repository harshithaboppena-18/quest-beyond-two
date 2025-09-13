import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Upload, BookOpen, Clock, TrendingUp, Star, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";
export const Dashboard = () => {
  const navigate = useNavigate();
  
  return <section className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">
            Your Learning 
            <span className="bg-gradient-secondary bg-clip-text text-transparent"> Dashboard</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Track progress, manage documents, and discover personalized recommendations
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Upload Area */}
          <Card className="lg:col-span-2 bg-gradient-card border-border/50 hover:shadow-medium transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5 text-primary bg-zinc-50" />
                Upload Study Materials
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-primary/30 rounded-lg p-12 text-center hover:border-primary/50 transition-colors duration-300 cursor-pointer group">
                <Upload className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-semibold mb-2">Drop your documents here</h3>
                <p className="text-muted-foreground mb-4">Support for PDFs, Word docs, presentations, and more</p>
                <Button className="bg-gradient-primary hover:opacity-90">
                  Choose Files
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <div className="space-y-6">
            <Card className="bg-gradient-card border-border/50">
              <CardContent className="p-6 rounded-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Documents</p>
                    <p className="text-2xl font-bold text-primary">24</p>
                  </div>
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Study Hours</p>
                    <p className="text-2xl font-bold text-accent">42</p>
                  </div>
                  <Clock className="h-8 w-8 text-accent" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Progress Overview */}
          <Card className="bg-gradient-card border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-accent" />
                Learning Progress
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Mathematics</span>
                  <span className="text-muted-foreground">85%</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Computer Science</span>
                  <span className="text-muted-foreground">72%</span>
                </div>
                <Progress value={72} className="h-2" />
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Communication </span>
                  <span className="text-muted-foreground">91%</span>
                </div>
                <Progress value={91} className="h-2" />
              </div>
            </CardContent>
          </Card>

          {/* Recommendations */}
          <Card className="bg-gradient-card border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 text-primary" />
                AI Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10 cursor-pointer hover:bg-primary/10 transition-colors" onClick={() => navigate('/quiz')}>
                <Play className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <h4 className="font-medium text-sm">Take Adaptive Quiz</h4>
                  <p className="text-xs text-muted-foreground mt-1">Test your knowledge across subjects</p>
                  <Badge variant="secondary" className="mt-2 text-xs">
                    10 min
                  </Badge>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 rounded-lg bg-accent/5 border border-accent/10">
                <Play className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <h4 className="font-medium text-sm">Review Data Structures</h4>
                  <p className="text-xs text-muted-foreground mt-1">Optimize your algorithm understanding</p>
                  <Badge variant="secondary" className="mt-2 text-xs">
                    25 min
                  </Badge>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
                <Play className="h-4 w-4 text-primary mt-1 flex-shrink-0 bg-slate-50" />
                <div className="flex-1">
                  <h4 className="font-medium text-sm">Essay Writing Workshop</h4>
                  <p className="text-xs text-muted-foreground mt-1">Improve your literary analysis skills</p>
                  <Badge variant="secondary" className="mt-2 text-xs">
                    30 min
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};