'use server';
/**
 * @fileOverview An AI agent for generating personalized product recommendations.
 *
 * - aiPoweredProductRecommendations - A function that generates product recommendations.
 * - AIPoweredProductRecommendationsInput - The input type for the aiPoweredProductRecommendations function.
 * - AIPoweredProductRecommendationsOutput - The return type for the aiPoweredProductRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIPoweredProductRecommendationsInputSchema = z.object({
  browsingHistory: z
    .string()
    .describe('The customer browsing history on the website.'),
  preferences: z.string().describe('The customer preferences.'),
  currentTrends: z.string().describe('The current trends in jewelry and watches.'),
});
export type AIPoweredProductRecommendationsInput = z.infer<typeof AIPoweredProductRecommendationsInputSchema>;

const AIPoweredProductRecommendationsOutputSchema = z.object({
  recommendations: z.array(z.string()).describe('A list of recommended products.'),
});
export type AIPoweredProductRecommendationsOutput = z.infer<typeof AIPoweredProductRecommendationsOutputSchema>;

export async function aiPoweredProductRecommendations(
  input: AIPoweredProductRecommendationsInput
): Promise<AIPoweredProductRecommendationsOutput> {
  return aiPoweredProductRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiPoweredProductRecommendationsPrompt',
  input: {schema: AIPoweredProductRecommendationsInputSchema},
  output: {schema: AIPoweredProductRecommendationsOutputSchema},
  prompt: `You are an expert in jewelry and watches.

You will receive the customer browsing history, preferences, and current trends to provide personalized product recommendations to the user.

Consider the following information:

Browsing History: {{{browsingHistory}}}
Preferences: {{{preferences}}}
Current Trends: {{{currentTrends}}}

Based on the provided information, recommend a list of products that the customer would be interested in.`,
});

const aiPoweredProductRecommendationsFlow = ai.defineFlow(
  {
    name: 'aiPoweredProductRecommendationsFlow',
    inputSchema: AIPoweredProductRecommendationsInputSchema,
    outputSchema: AIPoweredProductRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
