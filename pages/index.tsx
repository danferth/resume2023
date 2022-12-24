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
            className="rounded-full mx-auto shadow-md ring-4 ring-stone-200 mb-10 lg:mb-0 lg:mx-0 lg:w-20 lg:h-20 lg:ml-4 lg:mr-8"
          />
          {/* head */}
          <div className="text-center lg:text-left">
            <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl">
              Dan Klotz
            </h1>
            <h2 className="italic font-light text-xs md:text-sm text-stone-400 lg:font-extralight lg:text-sm">
              ( aka Danferth )
            </h2>
          </div>
        </div>

        {/* body of resume */}
        <div className="">
          {/* description */}
          <div className="mt-4 mb-8 border-l-0 border-r-0 border-2 border-stone-300 py-2 lg:border-b-0 lg:pt-10">
            <p className="text-stone-700 text-base text-center leading-relaxed lg:text-stone-500 lg:text-left lg:max-w-2xl">
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
