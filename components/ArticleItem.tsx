import Link from 'next/link';
import styles from '../styles/Article.module.css';

type ArticleItemProps = {
  article: Article;
};

type Article = {
  title: string;
  excerpt: string;
  id: number;
  body: string;
};

const ArticleItem = ({ article }: ArticleItemProps) => {
  return (
    <Link href="/article/[id]" as={`/article/${article.id}`}>
      <a className={styles.card}>
        <h3>{article.title} &rarr;</h3>
        <p>{article.excerpt}</p>
      </a>
    </Link>
  );
};

export default ArticleItem;
