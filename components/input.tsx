const Input = (props: { id: string; label: string; children: any }) => {
  return (
    <div
      className="mb-8 xl:mb-10
    relative 
    rounded-md 
    border border-stone-300 
    px-3 py-2 
    shadow-sm 
    focus-within:border-amber-600 focus-within:ring-1 focus-within:ring-amber-600"
    >
      <label
        htmlFor={props.id}
        className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-stone-900"
      >
        {props.label}
      </label>
      {props.children}
    </div>
  );
};

export default Input;
