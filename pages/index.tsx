import Image from "next/image";
import JobBlock from "../components/JobBlock";
import Jobs from "../content/jobs.json";
import profileImage from "../public/avitar.jpg";
import Layout from "../components/Layout";
export default function Home() {
  return (
    <Layout title="Dan Klotz | R&eacute;sum&eacute;">
      {/* main div */}
      <div className="">
        {/* image & header */}
        <div className="flex flex-col justify-center lg:flex-row lg:justify-start lg:content-center lg:items-center lg:mb-10">
          <Image
            alt="Profile Image"
            src={profileImage}
            width={150}
            height={150}
            className="rounded-full mx-auto shadow-md ring-4 lg:ring-2 ring-sky-600 dark:ring-sky-400 mb-10 lg:mb-0 lg:mx-0 lg:w-20 lg:h-20 lg:ml-4 lg:mr-8"
          />
          {/* head */}
          <div className="text-center lg:text-left">
            <h1 className="text-slate-800 dark:text-slate-100 font-semibold text-2xl md:text-3xl lg:text-4xl">
              Dan Klotz
            </h1>
            <h2 className="italic font-light text-xs md:text-sm text-slate-400 lg:font-extralight lg:text-sm">
              ( aka Danferth )
            </h2>
          </div>
          <a
            href="./dan_klotz_resume.pdf"
            download={true}
            className="ring-2 
            ring-sky-300 bg-lime-300 
             hover:bg-sky-200 hover:ring-lime-600
             text-sky-700 
             dark:ring-sky-500 dark:bg-lime-500 
             dark:hover:bg-sky-500 dark:hover:ring-lime-500
             dark:text-sky-900
             mt-4 w-8 h-8 lg:w-auto lg:h-auto lg:mt-0 mx-auto lg:mr-0 lg:ml-auto rounded-full lg:p-3 flex items-center justify-center transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
          </a>
        </div>

        {/* body of resume */}
        <div className="">
          {/* description */}
          <div className="mt-4 mb-8 border-l-0 border-r-0 border-2 border-lime-500 dark:border-lime-400 py-2 lg:border-b-0 lg:pt-10">
            <p
              className="text-base text-center leading-relaxed text-slate-600 dark:text-slate-200 lg:text-left 
            lg:max-w-2xl
            lg:px-6 lg:py-4 
            lg:border lg:border-lime-500 
            lg:dark:border-lime-400
            lg:bg-sky-50
            lg:dark:bg-slate-900 
            lg:rounded-lg 
            lg:shadow"
            >
              Having worked in content creation, design, and development
              throughout my career and tackling the creative challenges posed
              across various industries, I am confident in overseeing and
              contributing to any project from concept to launch. If you feel
              these qualities are desirable within your team, I am available to
              discuss a position helping to move your organization into the
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
                  stack={job.stack}
                  description={job.description}
                  bullets={job.bullets}
                />
              );
            })}
          </section>
        </div>
      </div>
    </Layout>
  );
}
