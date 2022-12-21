import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Link from "next/link";
import JobBlock from "../components/JobBlock";
import Jobs from "../content/jobs.json";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  console.log(Jobs);
  return (
    <>
      <Head>
        <title>Dan Klotz | Resume</title>
        <meta name="description" content="Dan Klotz Resume" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <div>
          <h1>Dan KLotz Resume</h1>
          <Link href="/contact">Contact me</Link>
        </div>

        <div>
          <p>
            Having worked in content creation, design, and development
            throughout my career and tackling the creative challenges posed
            across various industries, I am confident in overseeing and
            contributing to any project from concept to launch. If you feel
            these qualities are desirable within your team, I am available to
            discuss a position helping to move your organization into the future
            you envision.
          </p>
        </div>
        <section>
          {Jobs.map((job, index) => {
            return (
              <JobBlock
                key={index}
                jobTitle={job.jobTitle}
                employer={job.employer}
                datesWorked={job.datesWorked}
                description={job.description}
                bullets={job.bullets}
              />
            );
          })}
        </section>
      </main>
    </>
  );
}
