import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';

const Post = (props) => {
  const { name, summary, image } = props.show;
  return <Layout>
    <h1>{name}</h1>
    <p>{summary.replace(/<[/]?p>/g, '')}</p>
    <img src={image.medium} alt={`${name} image`} />
  </Layout>;
};

Post.getInitialProps = async function (context) {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log(`Fetched show: ${show.name}`);

  return { show };
};

export default Post;
