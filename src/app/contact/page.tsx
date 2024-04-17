"use client";
import React, { FormEvent } from "react";
import { Meteors } from "@/components/ui/meteors";

const page = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <div className="min-h-screen dark:bg-gray-900 py-12 pt-28 antialiased">
      <div className="relative z-20 max-w-2xl mx-auto">
        <h1 className="text-center font-bold text-6xl mb-5 text-white ">
          Contact Us
        </h1>
        <p className="text-center text-base text-neutral-500 my-3 ">
          {" "}
          We&apos;re here to help with any questions about our courses,
          programs, or events. Reach out and let us know how we can assist you
          in your musical journey.
        </p>
        <form
          className="flex flex-col w-full gap-3 my-4"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-500"
            placeholder="Your email address"
            required
          />
          <textarea
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-500"
            name=""
            id=""
            cols={10}
            rows={6}
            placeholder="Your message"
            required
          ></textarea>
          <button className="border px-4 py-3 rounded-lg  border-gray-500 text-gray-300 w-32 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 outline-none">
            Submit
          </button>
        </form>
      </div>
      <Meteors number={30} />
    </div>
  );
};

export default page;
