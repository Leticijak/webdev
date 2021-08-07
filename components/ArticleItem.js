import articleStyles from "../styles/Articles.module.css";
import Link from "next/link";

const ArticleItem = ({ art }) => {
  return (
    <Link href="/art/[id]" as={`/art/${art.id}`}>
      <a className={articleStyles.card}>
        <h3>{art.title} &rarr; </h3>
        <p>{art.body}</p>
      </a>
    </Link>
  );
};

export default ArticleItem;
