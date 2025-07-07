import Layout from "../../components/Layout";
import Head from "next/head";
import { getPostData } from "../../lib/posts";
import fs from "fs";
import path from "path";

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const fileNames = fs.readdirSync(postsDirectory);
  const paths = fileNames.map((name) => ({
    params: { id: name.replace(/\.md$/, "") },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return { props: { postData } };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className="text-4xl font-bold mb-2">{postData.title}</h1>
        <div className="text-gray-500 mb-4">{postData.date}</div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}