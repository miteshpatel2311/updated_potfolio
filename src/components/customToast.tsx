import { Toast } from "react-hot-toast";
import React from "react";
import Image from "next/image";
export const customToast = (t: Toast) => (
  <div
    className={`${
      t.visible ? "animate-enter" : "animate-leave"
    } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
  >
    <div className="flex-1 w-0 p-4">
      <div className="flex items-start">
        <div className="flex-shrink-0 pt-0.5">
          <Image
            className="h-10 w-10 rounded-full"
            src="/images/profile.png"
            alt="profile"
            height={100}
            width={100}
          />
        </div>
        <div className="ml-3 flex-1">
          <p className="text-sm font-bold text-gray-900">Mitesh Patel</p>
          <p className="mt-1 text-sm text-gray-500">
            Thank you <span className="text-red-600 text-xl">&hearts;</span>,
            for contact me i will reach you ASAP!
          </p>
        </div>
      </div>
    </div>
  </div>
);
