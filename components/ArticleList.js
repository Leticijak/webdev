import articleStyles from "../styles/Articles.module.css";
import ArticleItem from "./ArticleItem";

const ArticleList = ({ articles }) => {
  return (
    <div className={articleStyles.grid}>
      {articles.map((art) => (
        <ArticleItem art={art} key={art.id} />
      ))}
    </div>
  );
};

export default ArticleList;
