import Link from "next/link";
import { HomeModernIcon } from "@heroicons/react/24/outline";
import { MegaphoneIcon } from "@heroicons/react/24/outline";
const Navigation = () => {
  const style = `w-6 h-6 outline-current text-slate-600 hover:text-lime-600 transition`;
  return (
    <div className="py-4 mb-12 bg-gradient-to-b from-sky-100 to-white text-center">
      <div className="flex items-center justify-center gap-24 lg:justify-start lg:w-10/12 lg:px-0 xl:w-8/12 2xl:w-6/12 lg:mx-auto">
        <Link href="/">
          <HomeModernIcon className={style} />
        </Link>
        <Link href="/contact">
          <MegaphoneIcon className={style} />
        </Link>
      </div>
    </div>
  );
};
export default Navigation;
