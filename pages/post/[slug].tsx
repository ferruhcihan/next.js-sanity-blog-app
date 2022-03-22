interface IPost {
  title: string;
  body: any;
  image: any;
}

export const Post = ({ title, body, image }: IPost) => {
  console.log("body", body);
  return (
    <>
      <div>{title}</div>
    </>
  );
};

export const getServerSideProps = async (pageContext: any) => {
  const pageSlug = pageContext.query.slug;

  if (!pageSlug) {
    return {
      notFound: true,
    };
  }

  const query = encodeURIComponent(
    `*[ _type == "post" && slug.current == "${pageSlug}" ]`
  );
  const url = `https://mnlo2t4u.api.sanity.io/v1/data/query/production?query=${query}`;

  const result = await fetch(url).then((res) => res.json());
  const post = result.result[0];

  if (!post) {
    return {
      notFound: true,
    };
  } else {
    return {
      props: {
        title: post.title,
        body: post.body,
        image: post.mainImage,
      },
    };
  }
};

export default Post;
