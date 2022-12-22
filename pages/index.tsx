import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import JobBlock from "../components/JobBlock";
import Jobs from "../content/jobs.json";
import profileImage from "../public/avitar.jpg";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  console.log(Jobs);
  return (
    <>
      <Head>
        <title>Dan Klotz | R&eacute;sum&eacute;</title>
        <meta name="description" content="Dan Klotz Resume" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* main div */}
        <div className="w-full mx-auto flex flex-col lg:flex-row align-center justify-center pt-16 pb-20 px-4 sm:px-8 md:px-16 lg:w-full lg:px-0 xl:w-1/2">
          {/* image */}
          <div className="mb-10 lg:mb-0 lg:w-4/12 lg:pt-20 lg:border-r-2 border-dashed border-stone-100">
            <Image
              alt="Profile Image"
              src={profileImage}
              width={150}
              height={150}
              className="rounded-full mx-auto shadow-md ring-4 ring-stone-200"
            />
          </div>

          {/* body of resume */}
          <div className="lg:w-8/12 lg:px-12">
            {/* head */}
            <div className="text-center">
              <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl">
                Dan Klotz
              </h1>
              <h2 className="italic font-light text-xs md:text-sm lg:text-base text-stone-400">
                ( aka Danferth)
              </h2>
            </div>
            {/* description */}
            <div className="mt-4 mb-8 border-l-0 border-r-0 border-2 border-stone-300 py-2">
              <p className="text-stone-700 text-base text-center leading-relaxed">
                Having worked in content creation, design, and development
                throughout my career and tackling the creative challenges posed
                across various industries, I am confident in overseeing and
                contributing to any project from concept to launch. If you feel
                these qualities are desirable within your team, I am available
                to discuss a position helping to move your organization into the
                future you envision.
              </p>
            </div>
            {/* employment */}
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
          </div>
        </div>
      </main>
    </>
  );
}
