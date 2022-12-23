const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="bg-stone-100 lg:bg-white rounded-tl-lg rounded-tr-lg lg:rounded-none text-center h-16 lg:h-32 flex flex-col justify-center align-center">
      <p className="text-sm text-stone-500 font-light mb-1.5">
        &copy; {year} Dan Klotz
      </p>
      {/* <p className="text-xs text-stone-300 font-light">
        To see more and visit my portfolio see what the console logged ;)
      </p> */}
    </div>
  );
};

export default Footer;
