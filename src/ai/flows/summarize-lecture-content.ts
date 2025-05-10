// 'use server';
/**
 * @fileOverview Summarizes lecture content based on notes and video transcript.
 *
 * - summarizeLectureContent - A function that summarizes lecture content.
 * - SummarizeLectureContentInput - The input type for the summarizeLectureContent function.
 * - SummarizeLectureContentOutput - The return type for the summarizeLectureContent function.
 */

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeLectureContentInputSchema = z.object({
  lectureNotes: z
    .string()
    .describe('The notes taken during the lecture.'),
  videoTranscript: z.string().describe('The transcript of the lecture video.'),
});
export type SummarizeLectureContentInput = z.infer<
  typeof SummarizeLectureContentInputSchema
>;

const SummarizeLectureContentOutputSchema = z.object({
  summary: z.string().describe('A summary of the key concepts from the lecture.'),
  keyTopics: z.string().describe('Key topics covered in the lecture for review.'),
});
export type SummarizeLectureContentOutput = z.infer<
  typeof SummarizeLectureContentOutputSchema
>;

export async function summarizeLectureContent(
  input: SummarizeLectureContentInput
): Promise<SummarizeLectureContentOutput> {
  return summarizeLectureContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeLectureContentPrompt',
  input: {schema: SummarizeLectureContentInputSchema},
  output: {schema: SummarizeLectureContentOutputSchema},
  prompt: `You are an AI assistant designed to help students review lecture material.

  Summarize the key concepts and insights from the lecture notes and video transcript provided below.

  Lecture Notes: {{{lectureNotes}}}

  Video Transcript: {{{videoTranscript}}}

  Provide a concise summary and list the key topics for review.
  `,
});

const summarizeLectureContentFlow = ai.defineFlow(
  {
    name: 'summarizeLectureContentFlow',
    inputSchema: SummarizeLectureContentInputSchema,
    outputSchema: SummarizeLectureContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
