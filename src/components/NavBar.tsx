import Link from "next/link";
import Logo from "./logos/Logo";
import { Suspense } from "react";
import NavLogoSkeleton from "./skeletons/NavLogoSkeleton";
import FiltersSheet from "./filters/FiltersSheet";

export default function NavBar() {
  return (
    <nav
      className={`top-0 bg-blanco flex justify-between items-center
         fixed  h-[4.5rem] text-2xl shadow-xl  w-screen z-[10]`}>
      <FiltersSheet />
      <Link
        href={'/'}>
        <Suspense fallback={<NavLogoSkeleton />}>
          <Logo />
        </Suspense>
      </Link>
      <div />
    </nav>
  );
}
