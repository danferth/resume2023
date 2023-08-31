const SubmitButton = (props: { value: string }) => {
  return (
    <input
      type="submit"
      value={props.value}
      className="border border-slate-300 hover:border-slate-200 
      bg-slate-50 hover:bg-white 
      shadow-sm hover:shadow-none 
      rounded-md 
      px-3.5 py-2.5 
      text-sm font-light text-slate-500 hover:text-slate-400
      focus:outline-none focus:ring-2 focus:ring-lime-600 focus:ring-offset-2
      transition"
    />
  );
};

export default SubmitButton;
