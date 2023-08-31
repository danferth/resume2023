const TextArea = (props: { id: string; label: string; children: any }) => {
  return (
    <div
      className="relative 
    rounded-md 
    border border-slate-300 
    px-3 py-2 
    shadow-sm 
    focus-within:border-lime-600 focus-within:ring-1 focus-within:ring-lime-600"
    >
      <label
        htmlFor={props.id}
        className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-slate-900"
      >
        {props.label}
      </label>
      {props.children}
    </div>
  );
};

export default TextArea;
