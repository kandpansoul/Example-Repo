import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white">
      <nav className="container mx-auto px-4 py-4 flex justify-between">
        <Link href="/" className="font-bold text-xl">
          ArmanElegance
        </Link>
        <div>
          <Link href="/blog" className="mr-4 hover:underline">
            Blog
          </Link>
          <Link href="/" className="hover:underline">
            Home
          </Link>
        </div>
      </nav>
    </header>
  );
}