const TextArea = (props: {
  id: string;
  label: string;
  name: string;
  placeholder: string;
}) => {
  return (
    <div
      className="relative 
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
      <textarea
        rows={4}
        name={props.name}
        id={props.id}
        className="block w-full border-0 p-1.5 text-stone-900 placeholder-stone-500 focus:ring-0 sm:text-sm"
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default TextArea;
