import { Configuration, OpenAIApi } from "openai";

export default async function handler(req, res) {
  const { OPENAI_API_KEY } = process.env;

  if (!OPENAI_API_KEY) {
    // Fallback quotes if no API key provided
    const quotes = [
      "Believe you can and you're halfway there.",
      "The only limit to our realization of tomorrow is our doubts of today.",
      "Act as if what you do makes a difference. It does.",
    ];
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    return res.status(200).json({ quote });
  }

  try {
    const configuration = new Configuration({ apiKey: OPENAI_API_KEY });
    const openai = new OpenAIApi(configuration);

    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "Provide a short motivational quote.",
      max_tokens: 60,
    });

    const quote = completion.data.choices[0].text.trim();
    return res.status(200).json({ quote });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Unable to generate quote" });
  }
}