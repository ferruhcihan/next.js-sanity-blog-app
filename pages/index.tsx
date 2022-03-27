import { Toolbar } from "../components/toolbar";
import { useRouter } from "next/router";
import imageUrlBuilder from "@sanity/image-url";
import { useState, useEffect } from "react";

interface IHome {
  posts: any[];
}

export default function Home({ posts }: IHome) {
  const router = useRouter();
  const [mappedPosts, setMappedPosts] = useState([]) as any;

  useEffect(() => {
    if (posts.length) {
      const imgBuilder = imageUrlBuilder({
        projectId: "mnlo2t4u",
        dataset: "production",
      });

      setMappedPosts(
        posts.map((p) => {
          return {
            ...p,
            mainImage: imgBuilder.image(p.mainImage).width(500).height(250),
          };
        })
      );
    } else {
      setMappedPosts([]);
    }
  }, [posts]);

  return (
    <div>
      <Toolbar />
      <div className="text-center">
        <div className="flex flex-col items-center">
          {mappedPosts.length ? (
            mappedPosts.map((p: any, index: number) => (
              <div
                key={index}
                className="flex flex-col m-6 w-[500px] h-[316px] cursor-pointer text-center items-center "
                onClick={() => router.push(`/post/${p.slug.current}`)}
              >
                <h3 className="mb-2 text-2xl">{p.title}</h3>
                <img
                  src={p.mainImage}
                  alt="post-image"
                  className="w-[500px] transition rounded hover:w-[490px] hover:transition shadow-md shadow-gray-500 hover:shadow-lg hover:shadow-gray-400"
                />
              </div>
            ))
          ) : (
            <>No Posts Yet</>
          )}
        </div>
      </div>
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
