import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, ArrowLeft, ArrowRight, Trophy } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const sampleQuestions: Question[] = [
  {
    id: 1,
    question: "What is the derivative of x²?",
    options: ["x", "2x", "x³", "2x²"],
    correctAnswer: 1,
    explanation: "The derivative of x² is 2x using the power rule: d/dx(xⁿ) = n·xⁿ⁻¹"
  },
  {
    id: 2,
    question: "Which data structure uses LIFO (Last In, First Out) principle?",
    options: ["Queue", "Stack", "Array", "Linked List"],
    correctAnswer: 1,
    explanation: "A stack follows the LIFO principle where the last element added is the first one to be removed."
  },
  {
    id: 3,
    question: "What is the main purpose of a thesis statement in an essay?",
    options: ["To introduce the topic", "To conclude the essay", "To present the main argument", "To provide evidence"],
    correctAnswer: 2,
    explanation: "A thesis statement presents the main argument or central claim that the essay will support and develop."
  },
  {
    id: 4,
    question: "What is the time complexity of binary search?",
    options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
    correctAnswer: 1,
    explanation: "Binary search has O(log n) time complexity because it eliminates half of the remaining elements in each step."
  },
  {
    id: 5,
    question: "Which of the following is NOT a type of logical fallacy?",
    options: ["Ad hominem", "Straw man", "Red herring", "Thesis statement"],
    correctAnswer: 3,
    explanation: "A thesis statement is a legitimate part of argumentative writing, not a logical fallacy."
  }
];

export const Quiz = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(new Array(sampleQuestions.length).fill(-1));
  const [showResults, setShowResults] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < sampleQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    return selectedAnswers.reduce((score, answer, index) => {
      return answer === sampleQuestions[index].correctAnswer ? score + 1 : score;
    }, 0);
  };

  const score = calculateScore();
  const percentage = Math.round((score / sampleQuestions.length) * 100);

  if (showResults) {
    return (
      <div className="min-h-screen bg-background p-6">
        <div className="container mx-auto max-w-4xl">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>

          <Card className="bg-gradient-card border-border/50">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                <Trophy className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-3xl">Quiz Complete!</CardTitle>
              <div className="space-y-2">
                <p className="text-4xl font-bold text-primary">{percentage}%</p>
                <p className="text-muted-foreground">You scored {score} out of {sampleQuestions.length} questions correctly</p>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                  <p className="text-2xl font-bold text-primary">{score}</p>
                  <p className="text-sm text-muted-foreground">Correct</p>
                </div>
                <div className="p-4 rounded-lg bg-destructive/5 border border-destructive/10">
                  <p className="text-2xl font-bold text-destructive">{sampleQuestions.length - score}</p>
                  <p className="text-sm text-muted-foreground">Incorrect</p>
                </div>
                <div className="p-4 rounded-lg bg-accent/5 border border-accent/10">
                  <p className="text-2xl font-bold text-accent">{sampleQuestions.length}</p>
                  <p className="text-sm text-muted-foreground">Total</p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Review Your Answers</h3>
                {sampleQuestions.map((question, index) => {
                  const userAnswer = selectedAnswers[index];
                  const isCorrect = userAnswer === question.correctAnswer;
                  
                  return (
                    <div key={question.id} className="p-4 rounded-lg border border-border/50 bg-card">
                      <div className="flex items-start gap-3 mb-3">
                        {isCorrect ? (
                          <CheckCircle className="h-5 w-5 text-success mt-1 flex-shrink-0" />
                        ) : (
                          <XCircle className="h-5 w-5 text-destructive mt-1 flex-shrink-0" />
                        )}
                        <div className="flex-1">
                          <p className="font-medium mb-2">{question.question}</p>
                          <div className="space-y-1 text-sm">
                            <p>
                              <span className="text-muted-foreground">Your answer: </span>
                              <span className={userAnswer === -1 ? "text-muted-foreground" : (isCorrect ? "text-success" : "text-destructive")}>
                                {userAnswer === -1 ? "Not answered" : question.options[userAnswer]}
                              </span>
                            </p>
                            {!isCorrect && (
                              <p>
                                <span className="text-muted-foreground">Correct answer: </span>
                                <span className="text-success">{question.options[question.correctAnswer]}</span>
                              </p>
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground mt-2 italic">{question.explanation}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex gap-4 justify-center">
                <Button onClick={() => window.location.reload()} className="bg-gradient-primary">
                  Retake Quiz
                </Button>
                <Button variant="outline" onClick={() => navigate("/")}>
                  Back to Dashboard
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const currentQ = sampleQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / sampleQuestions.length) * 100;

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="container mx-auto max-w-4xl">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/")}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Dashboard
        </Button>

        <Card className="bg-gradient-card border-border/50">
          <CardHeader>
            <div className="flex items-center justify-between mb-4">
              <CardTitle>Adaptive Learning Quiz</CardTitle>
              <Badge variant="secondary">
                Question {currentQuestion + 1} of {sampleQuestions.length}
              </Badge>
            </div>
            <Progress value={progress} className="h-2" />
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">{currentQ.question}</h2>
              
              <div className="space-y-3">
                {currentQ.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    className={`w-full p-4 text-left rounded-lg border transition-all duration-200 hover:shadow-sm ${
                      selectedAnswers[currentQuestion] === index
                        ? "border-primary bg-primary/5 shadow-sm"
                        : "border-border/50 hover:border-primary/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                        selectedAnswers[currentQuestion] === index
                          ? "border-primary bg-primary"
                          : "border-muted-foreground"
                      }`}>
                        {selectedAnswers[currentQuestion] === index && (
                          <div className="w-2 h-2 bg-white rounded-full" />
                        )}
                      </div>
                      <span>{option}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-between">
              <Button 
                variant="outline" 
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button 
                onClick={handleNext}
                disabled={selectedAnswers[currentQuestion] === -1}
                className="bg-gradient-primary"
              >
                {currentQuestion === sampleQuestions.length - 1 ? "Finish Quiz" : "Next"}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};