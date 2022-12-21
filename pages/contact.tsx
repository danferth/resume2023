import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Dan Klotz | Resume</title>
        <meta name="description" content="Dan Klotz Resume" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-yellow-500 w-full h-screen">
        <div>
          <h1>Contact</h1>
          <Link href="/">Home</Link>
        </div>
      </main>
    </>
  );
}
