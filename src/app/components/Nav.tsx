"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
export default function Nav() {
  const { user, isLoaded } = useUser();
  return (
    <>
      <nav className="bg-blue-700 py-4 px-6 flex items-center justify-between mb-5">
        <div className="flex items-center">
          <Link href="/">
            <div className="text-lg uppercase font-bold text-white">Home</div>
          </Link>
        </div>
        {!isLoaded || user === null || user === undefined ? (
          <>
            <div className="text-white">
              <Link
                href="sign-in"
                className="text-gray-300 hover:text-white mr-4"
              >
                Sign In
              </Link>
              <Link
                href="sign-up"
                className="text-gray-300 hover:text-white mr-4"
              >
                Sign Up
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className="ml-auto">
              <Link
                href="profile"
                className="text-gray-300 hover:text-white mr-4"
              >
                Profile
              </Link>
              <UserButton afterSignOutUrl="/" />
            </div>
          </>
        )}
      </nav>
    </>
    // <header>
    //   <nav
    //     className="flex item-center justify-between p-6 lg:px-8 h-20 border border-t-0 border-l-0 border-r-0 border-b-gray-600"
    //     aria-label="gloabl"
    //   >
    //     <div className="flex lg:flex-1">
    //       <a href="/" className="m-1.5 p-1.5">
    //         Home
    //       </a>
    //     </div>
    //     {isLoaded && user && (
    //       <>
    //         <Link href="/dashboard">Dashboard</Link>
    //         <UserButton afterSignOutUrl="/" />
    //       </>
    //     )}
    //   </nav>
    // </header>
  );
}
