import { SearchIcon } from "@heroicons/react/outline";
import { MicrophoneIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useRef } from "react";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

const Header = () => {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;
    router.push(`/search/?q=${term}`);
  };

  return (
    <header className="sticky top-0">
      <div className="flex w-full p-4 items-center">
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCh11f4IpwBzmSlfogh82fev1-vfEsNq_ijaNn4mA8pnAr3nbcMqabUXLkfeTO_ejvgz0&usqp=CAU"
          width={100}
          height={40}
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />

        <form className="flex px-4 py-2 ml-6 mr-3 flex-grow border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
          <input
            type="text"
            ref={searchInputRef}
            className="flex-grow w-full focus:outline-none"
          />
          <XIcon
            className="h-5 sm:mr-3 text-gray-500 cursor-pointer 
                    transition duration-100 transform hover:scale-125"
            onClick={() => (searchInputRef.current.value = "")}
          />
          <MicrophoneIcon className="h-5 text-blue-500 hidden sm:inline-flex mx-1 border-l-2 pl-1 border-gray-200" />
          <SearchIcon className="h-5 text-blue-500 hidden sm:inline-flex pl-1 border-gray-200" />
          <button hidden type="submit" onClick={(e) => search(e)}>
            Search
          </button>
        </form>

        <Avatar
          url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNcb7kh_yHdrd-hXv1-bcwGtVku8QxLof-wPW9eBXnItrZyHCJ6i0t2vTil8_3SIUT7GA&usqp=CAU"
          alt=""
          imgContainer="ml-auto"
          className="h-10 cursor-pointer hover:scale-110 rounded-full  hover:shadow-lg ml-auto"
        />
      </div>
      <HeaderOptions />
    </header>
  );
};

export default Header;
