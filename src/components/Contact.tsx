"use client";
import { SendEmail } from "@/action/SendEmail";
import { useRef } from "react";

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  async function handleSubmit(formData: FormData) {
    const result = await SendEmail(formData);
    alert(result);
    if (result !== "Email sent successfully") {
      formRef.current?.reset();
    }
  }
  return (
    <form ref={formRef} className="form" action={handleSubmit}>
      <div className="flex flex-col md:flex-row justify-between gap-5">
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          className="bg-neutral-100 dark:bg-neutral-700 dark:text-white dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neutral-200 dark:focus:ring-neutral-600 px-2 py-2 rounded-md text-sm text-neutral-700 w-full transition-colors duration-300"
        />
        <input
          name="SenderEmail"
          type="email"
          placeholder="Your email address"
          className="bg-neutral-100 dark:bg-neutral-700 dark:text-white dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neutral-200 dark:focus:ring-neutral-600 px-2 py-2 rounded-md text-sm text-neutral-700 w-full transition-colors duration-300"
        />
      </div>
      <div>
        <textarea
          name="message"
          placeholder="Your Message"
          rows={10}
          className="bg-neutral-100 dark:bg-neutral-700 dark:text-white dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neutral-200 dark:focus:ring-neutral-600 px-2 mt-4 py-2 rounded-md text-sm text-neutral-700 w-full transition-colors duration-300"
        />
      </div>
      <button
        className="w-full px-2 py-2 mt-4 bg-neutral-100 dark:bg-neutral-700 rounded-md font-bold text-neutral-500 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors duration-300"
        type="submit"
      >
        Submit{" "}
      </button>
    </form>
  );
};
