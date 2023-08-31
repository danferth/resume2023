const JobBlock = (props: any) => {
  return (
    <article className="mt-4 mb-6">
      <div className="bg-slate-50 dark:bg-slate-900 w-full h-full py-4 px-6 rounded-md shadow overflow-none lg:bg-white lg:dark:bg-slate-800 lg:shadow-none lg:rounded-none lg:border-b-2 lg:border-lime-100 lg:dark:border-lime-400 lg:px-0">
        <div className="text-center lg:text-left">
          <h2 className="text-base md:text-xl font-bold text-slate-800 dark:text-slate-100 leading-tight mb-1.5 underline underline-offset-2 decoration-sky-600 dark:decoration-sky-500 decoration-2">
            {props.jobTitle}
          </h2>
          <h3 className="mb-3.5 flex flex-col align-center justify-center text-sm md:text-lg">
            <span className=" font-semibold text-slate-600 dark:text-slate-200">
              {props.employer}
            </span>
            <span className="font-light text-slate-400 italic lg:text-sm">
              {props.datesWorked}
            </span>
          </h3>
        </div>
        <div className=" text-lime-800 dark:text-lime-400 mb-2.5 text-sm font-light rounded-md bg-sky-100 dark:bg-slate-800 lg:dark:bg-slate-900 px-2.5 py-1.5 lg:max-w-2xl">
          <span className="font-medium mr-2.5">Stack:</span>
          {props.stack}
        </div>
        <p
          className="text-sm md:text-base text-slate-600 dark:text-slate-200 text-center leading-relaxed 
        pb-4 
        border border-dotted border-lime-300 dark:border-lime-400 border-b-4 border-t-0 border-l-0 border-r-0 
        lg:max-w-2xl 
        lg:text-left"
        >
          {props.description}
        </p>
        <ul className="list-disc text-xs md:text-base text-sky-700 dark:text-sky-300 pl-4 pt-4">
          {props.bullets.map((b: [], index: number) => {
            return (
              <li key={index} className="leading-tight mb-1.5">
                {b}
              </li>
            );
          })}
        </ul>
      </div>
    </article>
  );
};

export default JobBlock;
