import Link from "next/link";
import Logo from "./logos/Logo";
import FiltersSheet from "./filters/FiltersSheet";
import SheetContent from "./filters/SheetContent";

export default function NavBar() {
  return (
    <nav
      className={`top-0 bg-blanco flex  justify-start  gap-[3rem]  md:justify-between items-center
         fixed  h-[4.5rem] text-2xl shadow-xl  w-screen z-[10]`}>
      <FiltersSheet>
        <SheetContent />
      </FiltersSheet>
      <Link
        href={'/'}>
        <div className="w-[10rem] h-auto md:w-[16rem]">
          <Logo />
        </div>
      </Link>
      <div className="hidden md:block" />
    </nav>
  );
}
