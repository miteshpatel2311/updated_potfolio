import React from "react";
import SocialMedia from "./socialMedia";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="dark:border-t-0 border-t-1">
      <div className="h-20 flex items-center justify-between container mx-auto px-4 sm:px-8">
        <Link href="#portfolio" className="text-sky-500 font-bold">
          Mitesh Patel
        </Link>
        <div className="flex sm:gap-4 gap-2">
          <SocialMedia size={25} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
