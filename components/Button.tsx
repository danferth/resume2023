const Button = (props: { children: any; onClick: any }) => {
  return (
    <button
      className="border border-stone-300 hover:border-stone-200 
      bg-stone-50 hover:bg-white 
      shadow-sm hover:shadow-none 
      rounded-md 
      px-3.5 py-2.5 
      text-sm font-light text-stone-500 hover:text-stone-400
      focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2
      transition"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
