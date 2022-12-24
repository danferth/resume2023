import Link from "next/link";
import Layout from "../components/Layout";

const Contact = () => {
  return (
    <Layout title="Contact">
      <div className="h-screen flex flex-col align-center justify-center text-center">
        <h1 className="text-2xl text-stone-700 font-black">
          Contact page comeing soon!
        </h1>
        <p className="text-xs font-light italic text-slate-400">
          Probably in the first week of 2023.
        </p>
        <Link
          href="/"
          className="mt-2 text-xs font-light italic text-slate-400 underline hover:no-underline hover:text-slate-500 transition"
        >
          Back to r&eacute;sum&eacute;
        </Link>
      </div>
    </Layout>
  );
};

export default Contact;
