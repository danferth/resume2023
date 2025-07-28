import Head from "next/head";
import Footer from "./Footer";

const Home = (props: any) => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content="Dan Klotz Resume" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="content">
        <div className="w-full mx-auto px-4 pt-12 sm:px-8 md:px-16 lg:w-10/12 lg:px-0 xl:w-8/12 2xl:w-6/12">
          <main>{props.children}</main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
