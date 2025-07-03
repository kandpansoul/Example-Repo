import Link from "next/link";
import Layout from "../../components/Layout";
import { getSortedPostsData } from "../../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Blog({ allPostsData }) {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-6">Blog</h1>
      <ul>
        {allPostsData.map(({ id, title, date }) => (
          <li key={id} className="mb-4">
            <Link href={`/blog/${id}`} className="text-blue-600 hover:underline">
              {title}
            </Link>
            <br />
            <small>{date}</small>
          </li>
        ))}
      </ul>
    </Layout>
  );
}