import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>ArmanElegance</title>
        <meta name="description" content="AI-powered motivational blog" />
      </Head>
      <Header />
      <main className="flex-grow container mx-auto px-4">{children}</main>
      <Footer />
    </div>
  );
}