import React from "react";
import { Spotlight } from "./ui/Spotlight";
import Link from "next/link";
import { Button } from "./ui/moving-border";

const HeroSection = () => {
  return (
    <div className="h-auto md:h-[40rem] w-full flex flex-col justify-center items-center relative overflow-hidden mx-auto py-10 md:py-0 ">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="yellow"
      />
      <div className="relative p-4 text-center z-10 w-full">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Master the art of music
        </h1>
        <p className="mt-4 max-w-lg font-normal text-base text-neutral-300 md:text-lg mx-auto">
          Dive into our comprehensive music courses and transform your musical
          journey today. Whether you're a beginner or looking to refine your
          skills, join us to unlock your true potential
        </p>
        <div className="mt-4">
          <Link href={"/courses"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-gray-950 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Explore Courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
