import Link from "next/link";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="h-24 flex items-center justify-between">
      {/* LEFT */}
      <div className="md:hidden lg:block w-[20%] mt-3">
        {/* <Link href="/" className="font-bold text-xl text-indigo-600">
          S͛OͦCͨIͥAͣLiͥzeͤ
        </Link> */}
        <Link href="/" className="font-bold text-2xl text-amber-500">
          S͛OͦCͨIͥAͣLiͥzeͤ
        </Link>
        {/* <Link href="/" className="font-bold text-2xl text-amber-500">
          SOCIALize
        </Link> */}
      </div>
      {/* CENTER */}
      <div className="hidden md:flex w-[50%] text-sm items-center justify-between">
        {/* LINKS */}
        <div className="flex gap-6 text-gray-600">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/home.png"
              alt="Homepage"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span className="">Homepage</span>
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/friends.png"
              alt="Homepage"
              width={16}
              height={16}
              className="w-4 h-5"
            />
            <span className="">Friends</span>
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <Image src="/stories.png" alt="Homepage" width={16} height={16} />
            <span className="">Stories</span>
          </Link>
        </div>
        <div className="hidden xl:flex p-2 bg-slate-100 items-center rounded-xl">
          <input
            type="text"
            placeholder="search..."
            className="bg-transparent outline-none"
          />
          <Image src="/search.png" alt="" width={14} height={14} />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
        <ClerkLoading>
          <div className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-gray-500 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <div className="cursor-pointer">
              <Image
                src="/people.png"
                alt=""
                width={24}
                height={24}
                className=""
              />
            </div>
            <div className="cursor-pointer">
              <Image
                src="/messages.png"
                alt=""
                width={20}
                height={20}
                className=""
              />
            </div>
            <div className="cursor-pointer">
              <Image
                src="/notifications.png"
                alt=""
                width={20}
                height={20}
                className=""
              />
            </div>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className="flex items-center gap-2 text-sm">
              <Image
                src="/login.png"
                alt=""
                width={20}
                height={20}
                className=""
              />
              <Link href="/sign-in">Login/Register</Link>
            </div>
          </SignedOut>
        </ClerkLoaded>
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
