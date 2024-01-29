'use client'

import { useEffect, useState } from "react";
import AdCarousel from "./AdCarousel";

type AdProps = {
  location: number
  sponsors: {
    id: string;
    nombre: string;
    logo: string;
    url: string;
  }[]
}

export default function Ad({ location, sponsors }: AdProps) {

  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  const medium = location === 3 || location === 6
  const xl = location === 4 || location === 8
  const mediemWidth = windowWidth < 1025 && windowWidth > 767
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (medium && !mediemWidth || xl && mediemWidth) return null

  return (
    <div className="xl:m-2 h-[23rem] col-span-full">
      <AdCarousel sponsors={sponsors} />
    </div>
  )
}
