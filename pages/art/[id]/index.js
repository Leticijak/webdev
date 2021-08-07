import { useRouter } from "next/router";
Meta;
import Link from "next/link";
import { server } from "../../../config/index";
import Meta from "../../../components/Meta";

const art = ({ art }) => {
  //   const router = useRouter();
  //   const { id } = router.query;
  return (
    <>
      <Meta title={art.title} description={art.excerpt} />
      <h3> {art.title}</h3>
      <p>{art.body}</p>
      <br />
      <Link href="/">Go Back</Link>

      <style jsx>
        {`
          h3 {
            padding: 20px;
            text-transform: capitalize;
          }
          p {
            padding: 20px 220px;
          }
        `}
      </style>
    </>
  );
};
export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`);
  const art = await res.json();
  return {
    props: {
      art,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();

  const ids = articles.map((art) => art.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};
// export const getStaticProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );
//   const art = await res.json();
//   return {
//     props: {
//       art,
//     },
//   };
// };

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
//   const articles = await res.json();

//   const ids = articles.map((art) => art.id);
//   const paths = ids.map((id) => ({ params: { id: id.toString() } }));

//   return {
//     paths,
//     fallback: false,
//   };
// };

export default art;
