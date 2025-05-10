"use client";

import type { Class, Lecture } from '@/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2, Wand2, ListChecks, Lightbulb } from 'lucide-react';
import * as React from 'react';
import { getStudyPlanAction } from '@/app/actions'; // Server Action
import { useToast } from '@/hooks/use-toast';

interface StudyToolProps {
  selectedLecture: Lecture | null;
  selectedClass: Class | null;
}

interface StudyPlanOutput {
  studyPlan: string;
  keyTopics: string;
}

export function StudyTool({ selectedLecture, selectedClass }: StudyToolProps) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [studyPlanOutput, setStudyPlanOutput] = React.useState<StudyPlanOutput | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const { toast } = useToast();

  const handleGenerateStudyPlan = async () => {
    if (!selectedLecture || !selectedClass) {
      toast({
        title: "Selection Missing",
        description: "Please select a class and a lecture first.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setError(null);
    setStudyPlanOutput(null);

    try {
      const result = await getStudyPlanAction({
        lectureNotes: selectedLecture.notes,
        videoTranscript: selectedLecture.transcript,
        className: selectedClass.name,
        lectureName: selectedLecture.name,
      });

      if ('error' in result) {
        throw new Error(result.error);
      }
      
      setStudyPlanOutput(result);
      toast({
        title: "Study Plan Generated!",
        description: "Your personalized study plan is ready.",
      });
    } catch (e: any) {
      console.error("Failed to generate study plan:", e);
      const errorMessage = e.message || "An unexpected error occurred.";
      setError(errorMessage);
      toast({
        title: "Error Generating Plan",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  // Reset when lecture changes
  React.useEffect(() => {
    setStudyPlanOutput(null);
    setError(null);
  }, [selectedLecture]);


  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="study-tool">
        <AccordionTrigger className="text-lg hover:no-underline">
          <div className="flex items-center gap-2">
            <Wand2 className="h-5 w-5 text-primary" />
            AI Study Assistant
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Personalized Study Plan</CardTitle>
              <CardDescription>
                {selectedLecture ? `Generate a study plan for "${selectedLecture.name}".` : "Select a lecture to generate a study plan."}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                onClick={handleGenerateStudyPlan}
                disabled={isLoading || !selectedLecture}
                className="w-full mb-4 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                {isLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Wand2 className="mr-2 h-4 w-4" />
                )}
                Generate Study Plan
              </Button>

              {error && (
                <Alert variant="destructive" className="mb-4">
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              {studyPlanOutput && (
                <div className="space-y-6 mt-6">
                  <Card>
                    <CardHeader className="flex flex-row items-center gap-2 pb-2">
                      <ListChecks className="h-5 w-5 text-primary" />
                      <CardTitle className="text-xl">Your Study Plan</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="whitespace-pre-wrap p-4 bg-muted/50 rounded-md text-sm leading-relaxed">
                        {studyPlanOutput.studyPlan}
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="flex flex-row items-center gap-2 pb-2">
                      <Lightbulb className="h-5 w-5 text-primary" />
                      <CardTitle className="text-xl">Key Topics for Review</CardTitle>
                    </CardHeader>
                    <CardContent>
                       <div className="whitespace-pre-wrap p-4 bg-muted/50 rounded-md text-sm leading-relaxed">
                        {studyPlanOutput.keyTopics}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </CardContent>
          </Card>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
