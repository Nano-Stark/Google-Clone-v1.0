import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/solid";

const PaginationButtons = () => {
  const router = useRouter();

  const startIndex = Number(router.query.start) || 0;
  return (
    <div className="flex max-w-lg justify-evenly mb-10">
      {startIndex >= 10 && (
        <Link href={`/search?q=${router.query.q}&start=${startIndex - 10}`}>
          <div
            className="flex flex-col items-center 
                hover:underline hover:text-blue-500 cursor-pointer"
          >
            <ChevronLeftIcon className="h-5" />
            <p>Previous</p>
          </div>
        </Link>
      )}
      <Link href={`/search?q=${router.query.q}&start=${startIndex + 10}`}>
        <div
          className="flex flex-col items-center 
            hover:underline hover:text-blue-500 cursor-pointer"
        >
          <ChevronRightIcon className="h-5" />
          <p>Next</p>
        </div>
      </Link>
    </div>
  );
};

export default PaginationButtons;
