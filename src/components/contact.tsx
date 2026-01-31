"use client";
import React, { FormEvent, useState } from "react";
import SocialMedia from "./socialMedia";
import Input from "./input";
import Button from "./button";
import { BiSolidPaperPlane } from "react-icons/bi";
// import { sendEmail } from "@/api/send/route";
import toast, { Toast } from "react-hot-toast";
import { customToast } from "./customToast";

export interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const form: FormData = {
    name: "",
    email: "",
    message: "",
  };
  const [isSubmit, setIsSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(form);

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    throw new Error("Function not implemented.");
  }

  // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   setIsSubmit(true);
  //   if (!formData.email || !formData.name || !formData.message) return;
  //   setLoading(true);
  //   const res: any = await sendEmail(formData);
  //   if (!res.id) {
  //     toast.error(res.message);
  //     setLoading(false);
  //     return;
  //   }
  //   setFormData(form);
  //   setIsSubmit(false);
  //   setLoading(false);
  //   toast.custom((t) => customToast(t));
  // };

  return (
    <div id="contact" className="my-8 lg:my-20 lg:grid grid-cols-2">
      <div data-aos="fade-up" className="mb-10 sm:mb-0">
        <div className="text-2xl font-bold text-sky-500">Connect with me :</div>
        <div className="dark:text-white text-xs lg:text-sm py-3">
          satisfied with me ? please contact me{" "}
        </div>
        <div className="flex gap-3">
          <SocialMedia size={25} />
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        className="mt-12 lg:mt-0"
      >
        <div className="text-2xl dark:text-white mb-5">
          Contact me, let&apos;s make magic together
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <Input
              type="text"
              name="name"
              placeholder="Name :"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              styles={isSubmit && !formData.name ? "border-red-500" : ""}
            />
            <Input
              type="email"
              name="email"
              placeholder="Email:"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              styles={isSubmit && !formData.email ? "border-red-500" : ""}
            />
            <textarea
              placeholder="Message :"
              name="message"
              className={`w-full h-32 rounded-md bg-transparent dark:bg-[#f5f5f51c] p-2 dark:text-white text-sky-500 placeholder:dark:text-white placeholder:dark:opacity-50 focus:outline-none border-primary border-2 ${
                isSubmit && !formData.message ? "border-red-500" : ""
              }`}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              value={formData.message}
            />
            <Button type="submit" styleClass="bg-sky-500 w-[150px]">
              {!loading ? (
                <span className=" flex items-center justify-center gap-2">
                  Submit
                  <BiSolidPaperPlane />
                </span>
              ) : (
                "Submiting..."
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
