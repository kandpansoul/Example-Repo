import { useState } from "react";
import Layout from "../components/Layout";

export default function Home() {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchQuote() {
    setLoading(true);
    try {
      const res = await fetch("/api/quote");
      const data = await res.json();
      setQuote(data.quote);
    } catch (err) {
      console.error(err);
      setQuote("Failed to fetch quote.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Layout>
      <section className="text-center py-20">
        <h1 className="text-5xl font-extrabold">ArmanElegance</h1>
        <p className="mt-4 text-xl">
          Empowering your mind with AI-driven motivation.
        </p>
        <button
          onClick={fetchQuote}
          className="mt-6 px-6 py-2 bg-blue-600 text-white rounded"
        >
          {loading ? "Loading…" : "Inspire Me"}
        </button>
        {quote && <p className="mt-6 text-2xl italic">{quote}</p>}
      </section>
    </Layout>
  );
}