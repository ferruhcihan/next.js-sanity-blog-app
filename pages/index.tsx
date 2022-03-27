import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Toolbar } from "../components/toolbar";
import { useRouter } from "next/router";

interface IHome {
  posts: any[];
}

export default function Home({ posts }: IHome) {
  const router = useRouter();
  console.log("posts", posts);

  return (
    <div>
      <Toolbar />
      <h1
        className="text-3xl font-bold text-center underline cursor-pointer"
        onClick={() => router.push(`/post/${posts[0].slug.current}`)}
      >
        {posts[0].title}
      </h1>
    </div>
  );
}

export const getServerSideProps = async (pageContext: any) => {
  const query = encodeURIComponent(`*[ _type == "post" ]`);
  const url = `https://mnlo2t4u.api.sanity.io/v1/data/query/production?query=${query}`;
  const result = await fetch(url).then((res) => res.json());

  if (!result.result || !result.result.length) {
    return {
      props: {
        posts: [],
      },
    };
  } else {
    return {
      props: {
        posts: result.result,
      },
    };
  }
};
