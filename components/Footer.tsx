import Image from "next/image";
import LinkedIn from "../components/linkedin";
import GitHub from "../components/github";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  const svgStyles = "w-5 h-5 fill-lime-700 hover:fill-sky-600 transition";

  return (
    <div
      className="footer 
    bg-sky-100 lg:bg-gradient-to-t lg:from-sky-200 lg:to-white 
    rounded-tl-lg rounded-tr-lg lg:rounded-none
     text-center 
     py-5 md:pb-8
     mx-4 sm:mx-8 md:mx-16 lg:mx-0
     flex flex-col justify-center align-center"
    >
      <p className="text-sm text-slate-500 font-light mb-3">
        &copy; {year}{" "}
        <a
          className="hover:text-sky-600"
          href="https://danferth.dev"
          target="_blank"
        >
          Danferth
        </a>
      </p>
      <div className="flex items-center justify-center space-x-8">
        <a href="https://github.com/danferth" target="_blank">
          <GitHub className={svgStyles} />
        </a>

        <a href="https://www.linkedin.com/in/danferth/" target="_blank">
          <LinkedIn className={svgStyles} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
