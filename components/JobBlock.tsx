const JobBlock = (props: any) => {
  return (
    <article className="mt-4 mb-6">
      <div className="bg-stone-100 w-full h-full py-4 px-6 rounded-md shadow overflow-none lg:bg-white lg:shadow-none lg:rounded-none lg:border-b-2 lg:border-stone-100 lg:px-0">
        <div className="text-center lg:text-left">
          <h2 className="text-base md:text-xl font-bold text-stone-900 leading-tight mb-1.5 underline underline-offset-2 decoration-amber-700 decoration-2">
            {props.jobTitle}
          </h2>
          <h3 className="mb-3.5 flex flex-col align-center justify-center text-sm md:text-lg">
            <span className=" font-semibold text-stone-600">
              {props.employer}
            </span>
            <span className="font-light text-stone-500 italic lg:text-sm lg:text-stone-400">
              {props.datesWorked}
            </span>
          </h3>
        </div>
        <p
          className="text-sm md:text-base text-stone-900 text-center leading-relaxed 
        pb-4 
        border border-dotted border-stone-300 border-b-4 border-t-0 border-l-0 border-r-0 lg:border-stone-200 
        lg:max-w-2xl 
        lg:text-left lg:text-stone-500"
        >
          {props.description}
        </p>
        <ul className="list-disc text-xs md:text-base text-amber-700 pl-4 pt-4">
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
