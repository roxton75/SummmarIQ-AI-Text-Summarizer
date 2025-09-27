import { generateText } from "ai"
import { google } from "@ai-sdk/google"

export async function POST(request: Request) {
  try {
    const { text, style = "normal" } = await request.json()

    if (!text || text.trim().length === 0) {
      return Response.json({ error: "Text is required" }, { status: 400 })
    }

    const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY
    if (!apiKey) {
      return Response.json(
        {
          error:
            "Google Generative AI API key is not configured. Please add GOOGLE_GENERATIVE_AI_API_KEY to your environment variables.",
        },
        { status: 500 },
      )
    }

    let prompt = ""
    if (style === "abstracted") {
      prompt = `Please provide a comprehensive summary of the following text with this structure:

**HEADLINE:** A compelling title that captures the main theme

**ABSTRACT:** A brief 2-3 sentence overview of the key message

**KEY POINTS:**
• Main point 1 with supporting details
• Main point 2 with supporting details  
• Main point 3 with supporting details
• Additional important points as needed

Text to summarize:
${text}`
    } else {
      prompt = `Please provide a concise and comprehensive summary of the following text. Focus on the main points and key information:

${text}`
    }

    const { text: summary } = await generateText({
      model: google("gemini-2.5-flash"),
      prompt,
    })

    return Response.json({ summary })
  } catch (error) {
    console.error("Summarization error:", error)
    return Response.json({ error: "Failed to generate summary" }, { status: 500 })
  }
}
