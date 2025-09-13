import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Upload, BookOpen, Clock, TrendingUp, Star, Play, ClipboardList, CheckCircle, XCircle, Timer } from "lucide-react";
export const Dashboard = () => {
  return (
    <section className="py-24 px-6 bg-muted/30">
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

        <Tabs defaultValue="dashboard" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="dashboard" className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="assessments" className="flex items-center gap-2">
              <ClipboardList className="h-4 w-4" />
              Assessments
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Upload Area */}
              <Card className="lg:col-span-2 bg-gradient-card border-border/50 hover:shadow-medium transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Upload className="h-5 w-5 text-primary" />
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
                  <CardContent className="p-6">
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
                      <span>Communication</span>
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
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
                    <Play className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">Practice Calculus Integration</h4>
                      <p className="text-xs text-muted-foreground mt-1">Based on your recent quiz results</p>
                      <Badge variant="secondary" className="mt-2 text-xs">
                        15 min
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
                    <Play className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
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
          </TabsContent>

          <TabsContent value="assessments" className="space-y-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Assessment Stats */}
              <div className="space-y-6">
                <Card className="bg-gradient-card border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Completed</p>
                        <p className="text-2xl font-bold text-accent">18</p>
                      </div>
                      <CheckCircle className="h-8 w-8 text-accent" />
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-card border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Average Score</p>
                        <p className="text-2xl font-bold text-primary">84%</p>
                      </div>
                      <Star className="h-8 w-8 text-primary" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Available Assessments */}
              <Card className="lg:col-span-2 bg-gradient-card border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ClipboardList className="h-5 w-5 text-primary" />
                    Available Assessments
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-lg bg-background border border-border">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <BookOpen className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Calculus Fundamentals Quiz</h4>
                        <p className="text-sm text-muted-foreground">20 questions • 30 min</p>
                      </div>
                    </div>
                    <Button size="sm" className="bg-gradient-primary hover:opacity-90">
                      Start Quiz
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-lg bg-background border border-border">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                        <Timer className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-medium">Data Structures Assessment</h4>
                        <p className="text-sm text-muted-foreground">15 questions • 25 min</p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      Start Assessment
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-lg bg-background border border-border">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <ClipboardList className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Communication Skills Test</h4>
                        <p className="text-sm text-muted-foreground">12 questions • 20 min</p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      Start Test
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Assessment Results */}
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-accent" />
                  Recent Results
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg bg-background border border-border">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <div>
                      <h4 className="font-medium">Linear Algebra Quiz</h4>
                      <p className="text-sm text-muted-foreground">Completed 2 days ago</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-green-500">92%</p>
                    <p className="text-xs text-muted-foreground">18/20 correct</p>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 rounded-lg bg-background border border-border">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-yellow-500" />
                    <div>
                      <h4 className="font-medium">Algorithm Analysis</h4>
                      <p className="text-sm text-muted-foreground">Completed 1 week ago</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-yellow-600">76%</p>
                    <p className="text-xs text-muted-foreground">11/15 correct</p>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 rounded-lg bg-background border border-border">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <div>
                      <h4 className="font-medium">Essay Structure Assessment</h4>
                      <p className="text-sm text-muted-foreground">Completed 1 week ago</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-green-500">88%</p>
                    <p className="text-xs text-muted-foreground">Excellent structure</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};