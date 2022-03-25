import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Toolbar } from "../components/toolbar";

interface IHome {
  posts: any[];
}

export default function Home({ posts }: IHome) {
  console.log("posts", posts);

  return (
    <div>
      <Toolbar />
      <h1 className="text-3xl font-bold underline bg-red">Hello world!</h1>
    </div>
  );
}

export const getServerSideProps = async (pageContext: any) => {
  const query = encodeURIComponent(`*[ _type == "post" ]`);
  const url = `https://mnlo2t4u.api.sanity.io/v1/data/query/production?query=${query}`;
  const result = await fetch(url).then((res) => res.json());

  if (!result.result || result.result.length) {
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
