import { GlobeIcon } from "@heroicons/react/solid";
import React from "react";

const Footer = () => {
  return (
    <footer className="grid w-full text-sm divide-y-[1px] divide-gray-300 bg-gray-100">
      <div className="px-8 py-3">
        <p>United Kingdom</p>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-2
         grid-flow-row-dense"
      >
        <div
          className="flex space-x-1 items-center p-1 justify-center md:col-span-2 lg:col-span-1
            lg:col-start-2"
        >
          <GlobeIcon className="h-5 text-green-700" />
          <p>Carbon neutral since 2007</p>
        </div>

        <div className="flex p-2 space-x-8 justify-center white-space-nowrap md:justify-self-start">
          <p>Advertising</p>
          <p>Business</p>
          <p>How Search works</p>
        </div>

        <div className="flex p-2 space-x-8 justify-center md:ml-auto">
          <p>Privacy</p>
          <p>Terms</p>
          <p>Settings</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
