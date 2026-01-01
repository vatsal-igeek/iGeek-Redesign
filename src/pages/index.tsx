import AiAnimate from "@/components/home/ai.animate";
import HomeLogoLoop from "@/components/home/logo.loop";
import Layout from "@/layout/common";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>IGeek- Home</title>
      </Head>
      <Layout>
        <HomeLogoLoop />
        <AiAnimate />
      </Layout>
    </>
  );
}
