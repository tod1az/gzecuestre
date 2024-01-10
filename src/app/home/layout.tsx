import NavBar from "@/components/NavBar";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: 'GZ ECUESTRE | Catálogo',
  description: 'Catálogo de nuestros caballos',
}

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <NavBar />
      {children}
    </main>
  )
}
