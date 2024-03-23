import OpenAI from "openai";
import { HttpsProxyAgent } from 'https-proxy-agent'

export function openaiClient(apiKey: string): OpenAI {
  return new OpenAI({
    // httpAgent: new HttpsProxyAgent('https://api.nextapi.fun'),
    apiKey: apiKey,
  });
}
