import { useRouter } from "next/router";

export const Toolbar = () => {
  const router = useRouter();

  return (
    <div className="m-auto w-[750px] flex bg-[#2c2c2c] text-[#d7d7d7] justify-center rounded-b">
      <div
        className="m-6 cursor-pointer hover:text-[rgb(168,168,168)]"
        onClick={() => router.push("/")}
      >
        Home
      </div>
      <div
        className="m-6 cursor-pointer hover:text-[rgb(168,168,168)]"
        onClick={() =>
          (window.location.href = "https://twitter.com/ferruhcihan")
        }
      >
        Twitter
      </div>
      <div
        className="m-6 cursor-pointer hover:text-[rgb(168,168,168)]"
        onClick={() =>
          (window.location.href = "https://github.com/ferruhcihan")
        }
      >
        GitHub
      </div>
    </div>
  );
};
