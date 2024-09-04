"use client";  // Add this directive to mark the component as a Client Component

import Link from "next/link";
import { usePathname } from "next/navigation";  // Use usePathname from next/navigation
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./Searchbar";
import dynamic from "next/dynamic";

// import NavIcons from "./NavIcons";
const NavIcons = dynamic(() => import("./Navicons"), { ssr: false });

const Navbar = () => {
  const pathname = usePathname();  // Use usePathname to get the current path
  
  // Function to check if the link is active
  const isActive = (path: string) => pathname === path;

  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative bg-black text-white">
      {/* MOBILE */}
      <div className="h-full flex items-center justify-between md:hidden">
        <Link href="/" className="w-1/3 xl:w-1/2 flex items-center gap-5">
          <Image src="/logo.png" alt="logo" width={24} height={24} />
          <div className="text-2xl tracking-wide">BOIC</div>
        </Link>
        <Menu />
      </div>
      {/* BIGGER SCREENS */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        {/* LEFT */}
        <div className="w-3/5 flex items-center gap-12">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="logo" width={24} height={24} />
            <div className="text-2xl tracking-wide">BOIC</div>
          </Link>
          <div className="hidden md:flex gap-4">
            <Link href="/" className={isActive("/") ? "text-red-500" : ""}>Home</Link>
            <Link href="/list" className={isActive("/list") ? "text-red-500" : ""}>Shop</Link>
            <Link href="/sale" className={isActive("/sale") ? "text-red-500" : ""}>Sale</Link>
            <Link href="/about" className={isActive("/about") ? "text-red-500" : ""}>About</Link>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-2/5 flex items-center justify-between gap-3 bg-black text-white">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
