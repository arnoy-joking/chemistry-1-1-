// src/ai/flows/generate-study-plan.ts
'use server';
/**
 * @fileOverview An AI agent for generating personalized study plans based on lecture notes and videos.
 *
 * - generateStudyPlan - A function that handles the generation of the study plan.
 * - GenerateStudyPlanInput - The input type for the generateStudyPlan function.
 * - GenerateStudyPlanOutput - The return type for the generateStudyPlan function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateStudyPlanInputSchema = z.object({
  lectureNotes: z
    .string()
    .describe('The lecture notes for the class.'),
  videoTranscript: z.string().describe('The video transcript of the lecture.'),
  className: z.string().describe('The name of the class.'),
  lectureName: z.string().describe('The name of the lecture.'),
});
export type GenerateStudyPlanInput = z.infer<typeof GenerateStudyPlanInputSchema>;

const GenerateStudyPlanOutputSchema = z.object({
  studyPlan: z.string().describe('A personalized study plan that highlights the key topics.'),
  keyTopics: z.string().describe('The key topics for review.'),
});
export type GenerateStudyPlanOutput = z.infer<typeof GenerateStudyPlanOutputSchema>;

export async function generateStudyPlan(input: GenerateStudyPlanInput): Promise<GenerateStudyPlanOutput> {
  return generateStudyPlanFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateStudyPlanPrompt',
  input: {schema: GenerateStudyPlanInputSchema},
  output: {schema: GenerateStudyPlanOutputSchema},
  prompt: `You are an AI study tool that generates personalized study plans for students.

  Based on the class name, lecture name, lecture notes, and video transcript, you will generate a study plan that highlights the key topics for review. Make sure the study plan is easy to follow and includes specific steps the student can take to prepare for the exam.

  Class Name: {{{className}}}
  Lecture Name: {{{lectureName}}}
  Lecture Notes: {{{lectureNotes}}}
  Video Transcript: {{{videoTranscript}}}
  `,
});

const generateStudyPlanFlow = ai.defineFlow(
  {
    name: 'generateStudyPlanFlow',
    inputSchema: GenerateStudyPlanInputSchema,
    outputSchema: GenerateStudyPlanOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
