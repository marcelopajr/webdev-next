import { server } from '../config';
import Meta from '../components/Meta';
import ArticleList from '../components/ArticleList';

type HomeProps = {
  articles: Article[];
};

type Article = {
  title: string;
  excerpt: string;
  id: number;
  body: string;
};

export default function Home({ articles }: HomeProps) {
  return (
    <div>
      <Meta title="Home | WebDev News" />
      <ArticleList articles={articles} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();

  return {
    props: { articles },
  };
};
