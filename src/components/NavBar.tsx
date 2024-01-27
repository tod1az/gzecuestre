import Link from "next/link";
import Logo from "./logos/Logo";
import FiltersSheet from "./filters/FiltersSheet";
import SheetContent from "./filters/SheetContent";
import HomeNavigation from "./HomeNavigation";

export default function NavBar() {
  return (
    <nav
      className={`top-0 bg-blanco flex  justify-between  gap-[3rem]  m items-center
         fixed  h-[4.5rem] text-2xl shadow-xl  w-screen z-[10]`}>
      <HomeNavigation />
      <Link
        href={'/'}>
        <div className="w-[10rem] h-auto md:w-[16rem]">
          <Logo />
        </div>
      </Link>
      <FiltersSheet>
        <SheetContent />
      </FiltersSheet>
    </nav>
  );
}
