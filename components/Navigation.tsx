import Link from "next/link";
import { HomeModernIcon } from "@heroicons/react/24/outline";
import { MegaphoneIcon } from "@heroicons/react/24/outline";
const Navigation = () => {
  return (
    <div className="py-4 mb-16 bg-gradient-to-b from-stone-100 to-white text-center text-stone-600 ">
      <div className="flex items-center justify-center gap-24 lg:justify-start lg:w-10/12 lg:px-0 xl:w-8/12 2xl:w-6/12 lg:mx-auto">
        <Link href="/">
          <HomeModernIcon className="w-6 h-6 outline-current" />
        </Link>
        <Link href="/contact">
          <MegaphoneIcon className="w-6 h-6 outline-current" />
        </Link>
      </div>
    </div>
  );
};
export default Navigation;
