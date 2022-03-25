import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Toolbar } from "../components/toolbar";

const Home: NextPage = () => {
  return (
    <div>
      <Toolbar />
      <h1 className="text-3xl font-bold underline bg-red">Hello world!</h1>
    </div>
  );
};

export default Home;
