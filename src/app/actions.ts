"use server";

import { generateStudyPlan, type GenerateStudyPlanInput, type GenerateStudyPlanOutput } from "@/ai/flows/generate-study-plan";

export async function getStudyPlanAction(input: GenerateStudyPlanInput): Promise<GenerateStudyPlanOutput | { error: string }> {
  try {
    console.log("Calling generateStudyPlan with input:", input);
    const result = await generateStudyPlan(input);
    console.log("Received result from generateStudyPlan:", result);
    if (!result || !result.studyPlan || !result.keyTopics) {
        // This case might indicate an issue with the AI model's response format
        console.error("AI response is missing expected fields:", result);
        return { error: "AI response was incomplete. Please try again." };
    }
    return result;
  } catch (error) {
    console.error("Error in getStudyPlanAction:", error);
    // It's good practice to not expose raw error messages to the client
    // if they might contain sensitive information.
    let errorMessage = "Failed to generate study plan due to an unexpected error.";
    if (error instanceof Error) {
        // Log the specific error message for server-side debugging
        console.error("Specific error message:", error.message);
    }
    // For client, provide a generic error message.
    return { error: errorMessage };
  }
}
