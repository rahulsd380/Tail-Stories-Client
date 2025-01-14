"use client";
import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "../../../../public";
import Button from "@/components/Reusable/Button";
import Container from "@/components/Container/Container";
import UserDropdown from "./UserDropdown";
import HamburgerMenu from "./HamburgerMenu";
import { useAppSelector } from "@/redux/hooks";
import { useEffect, useState } from "react";
import { selectCurrentUser } from "@/redux/features/Auth/authSlice";
import { usePathname, useRouter } from "next/navigation";
import { FiSearch } from "react-icons/fi";
import { TbUsers } from "react-icons/tb";
import { AiOutlineProfile } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { HiOutlineUserGroup } from "react-icons/hi";
import { GoHome } from "react-icons/go";
import { IoBookOutline } from "react-icons/io5";

export type TLoggedInUser = {
  userId: string;
  email: string;
  role: string;
  iat: number;
  exp: number;
};



const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    router.push(`/all-posts?search=${encodeURIComponent(searchQuery)}`);
  };

  const [isMounted, setIsMounted] = useState(false);
  const user = useAppSelector(selectCurrentUser) as TLoggedInUser;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const navlinks = [
    {
      label: "Home",
      icon: <GoHome className="text-primary-20/80 text-2xl" />,
      path: "/"
    },
    {
      label: "Friends",
      icon: <TbUsers className="text-primary-20/80 text-2xl" />,
      path: "/friends"
    },
    {
      label: "Groups",
      icon: <HiOutlineUserGroup className="text-primary-20/80 text-2xl" />,
      path: "/groups"
    },
    {
      label: "Pages",
      icon: <AiOutlineProfile className="text-primary-20 text-2xl" />,
      path: "/pages"
    },
    {
      label: "All Posts",
      icon: <IoBookOutline className="text-primary-20 text-2xl" />,
      path: "/all-posts"
    },
  ];

  if (!isMounted) {
    return null;
  }


  return (
    <div className="bg-white py-3 shadow">
      <Container>
        <div className="font-Lato flex items-center justify-between">
          <Link href={"/"}
            className="flex items-center gap-2 text-2xl font-bold text-primary-20"
          >
            <Image
              src={IMAGES.tailStoriesLogo}
              height={35}
              width={35}
              alt="tailStoriesLogo"
            />
            Tail Stories
          </Link>

          <div className="flex items-center gap-6">
            <div className="hidden lg:block relative max-w-[400px]">
              <input
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Find post"
                type="text"
                className="bg-primary-70 px-3 py-[10px] rounded-lg border border-primary-20/70 focus:outline-none focus:border-primary-30 transition duration-300 focus:shadow w-[300px]"
              />
              <FiSearch
                onClick={handleSearch}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-primary-20 cursor-pointer"
                size={20}
              />
            </div>
            {
              user !== null &&
              <div className="hidden lg:flex items-center gap-8">
                <div className="flex items-center gap-3">
                  {
                    navlinks?.map((item, index) =>
                      <Link href={item?.path} key={index} className="relative group">
                        <div className={`${pathname === item?.path ? "bg-primary-30/30" : "bg-primary-70"} size-12 flex items-center justify-center rounded-full`}>
                        {item?.icon}
                      </div>
                      <div
                        className=" absolute -top-3 left-0 right-0 translate-y-[-20px] opacity-0 z-[-1] group-hover:translate-y-0 group-hover:opacity-100 group-hover:z-[1000] transition-all duration-500">
                        <p className="text-[9px] w-max bg-primary-20 text-white rounded-3xl px-3 py-1">
                            {item?.label}
                        </p>
                    </div>
                      </Link>
                    )
                  }
                </div>



              </div>
            }
          </div>

          {user === null ?
            <div className="flex items-center gap-4">
              <Link href={"/login"}>
                <Button variant="bordered">Login</Button>
              </Link>
              <Link href={"/signup"}>
                <Button variant="primary">Create Account</Button>
              </Link>
            </div>
            :
            <div className="flex items-center gap-6">
              <div className="relative">
                <IoMdNotificationsOutline className="text-primary-20/80 text-3xl" />
                <div className="size-4 rounded-full bg-primary-20 text-white text-xs flex items-center justify-center absolute -top-0.5 -right-0.5">
                  2
                </div>
              </div>

              <UserDropdown />
            </div>
          }

          <HamburgerMenu />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
