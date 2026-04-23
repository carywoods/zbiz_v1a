
import { GoogleGenAI } from "@google/genai";
import type { SearchResult, UserLocation } from '../types';

// This function assumes the API key is set in the environment variables.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export const searchZionsville = async (
  query: string,
  location: UserLocation | null
): Promise<SearchResult> => {
  if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set.");
  }

  const enhancedPrompt = `In the context of Zionsville, Indiana, ${query}`;

  const model = 'gemini-2.5-flash';

  const config: any = {
    tools: [{ googleSearch: {} }, { googleMaps: {} }],
  };

  if (location) {
    config.toolConfig = {
      retrievalConfig: {
        latLng: {
          latitude: location.latitude,
          longitude: location.longitude,
        }
      }
    };
  }

  try {
    const response = await ai.models.generateContent({
      model,
      contents: enhancedPrompt,
      config,
    });
    
    const text = response.text;
    const groundingMetadata = response.candidates?.[0]?.groundingMetadata;

    const sources = groundingMetadata?.groundingChunks || [];

    return { text, sources };

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Failed to get a response from the AI model.");
  }
};
