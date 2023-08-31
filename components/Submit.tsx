const SubmitButton = (props: { value: string }) => {
  return (
    <input
      type="submit"
      value={props.value}
      className="border border-slate-400 hover:border-sky-500 
      bg-slate-50 hover:bg-white 
      dark:bg-slate-900 dark:hover:bg-slate-700
      shadow-sm hover:shadow-none 
      rounded-md 
      px-3.5 py-2.5 
      text-sm font-light text-slate-600 dark:text-slate-400 dark:hover:text-sky-400 hover:text-sky-500
      focus:outline-none focus:ring-2 focus:ring-lime-600 dark:focus:ring-lime-400 focus:ring-offset-2
      transition"
    />
  );
};

export default SubmitButton;
