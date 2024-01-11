import Drawer from "./ui/Drawer";
import Link from "next/link";
import Logo from "./logos/Logo";
import { Suspense } from "react";
import NavLogoSkeleton from "./skeletons/NavLogoSkeleton";

export default function NavBar() {
  return (
    <nav
      className={`top-0 bg-blanco flex justify-center items-center
         fixed  h-[4.5rem] text-2xl shadow-xl  w-screen z-[10]
         
         `}>
      <Drawer />
      <Link
        href={'/home'}>
        <Suspense fallback={<NavLogoSkeleton />}>
          <Logo />
        </Suspense>
      </Link>
    </nav>
  );
}
