// "use server";
// import { FormData } from "@/components/contact";
// import ContactFormEmail from "@/components/emailTemplate";
// import React from "react";
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);
// const email = process.env.EMAIL as string;
// export const sendEmail = async (formData: FormData) => {
//   let data;
//   try {
//     data = await resend.emails.send({
//       from: `${formData.name} <onboarding@resend.dev>`,
//       to: email,
//       subject: "Message from portfolio site",
//       reply_to: formData.email,
//       react: React.createElement(ContactFormEmail, {
//         message: formData.message,
//         email: formData.email,
//         name: formData.name,
//       }),
//     });
//   } catch (error) {
//     return error;
//   }
//   return data;
// };
