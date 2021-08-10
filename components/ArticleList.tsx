import ArticleItem from './ArticleItem';
import styles from '../styles/Article.module.css';

type ArticleListProps = {
  articles: Array<Article>;
};

type Article = {
  title: string;
  excerpt: string;
  id: number;
  body: string;
};

const ArticleList = ({ articles }: ArticleListProps) => {
  return (
    <div className={styles.grid}>
      {articles.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
