import { server } from '../../../config';
import Meta from '../../../components/Meta';
import Link from 'next/link';

type ArticleProps = {
  article: Article;
};

type Article = {
  title: string;
  excerpt: string;
  id: number;
  body: string;
};

const article = ({ article }: ArticleProps) => {
  return (
    <>
      <Meta title={article.title} description={article.excerpt} />
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href="/">Go back</Link>
    </>
  );
};

export const getStaticProps = async (context: any) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`);

  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles`);

  const articles = await res.json();

  const ids = articles.map((article: Article) => article.id);

  const paths = ids.map((id: number) => ({ params: { id: id.toString() } }));

  return { paths, fallback: false };
};

export default article;
