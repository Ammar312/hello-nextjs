import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className=" max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto gap-8 p-2 px-6 ">
        <div>
          <h2 className="text-white text-lg mb-4 font-semibold">About</h2>
          <p>
            {" "}
            Music School is a premier institution dedicated to teaching the art
            and science of music. We nurture talent from the ground up,
            fostering a vibrant community of musicians.
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg mb-4 font-semibold">Quick Links</h2>
          <ul className="flex flex-col justify-center items-start gap-2 text-lg">
            <li className="hover:text-teal-100">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="hover:text-teal-100">
              <Link href={"/courses"}>Courses</Link>
            </li>
            <li className="hover:text-teal-100">
              <Link href={"/contact"}>Contact Us</Link>
            </li>
            <li className="hover:text-teal-100">
              <Link href={"/"}>About</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg mb-4 font-semibold">Follow Us</h2>
          <div className="flex flex-col justify-center items-start gap-2 text-lg ">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Facebook
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Twitter
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Instagram
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Snapchat
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg mb-4 font-semibold">Contact Us</h2>
          <p>Amsterdam, Netherland</p>
          <p>Amster 10001</p>
          <p>Email: info@musicschool.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
      <p className="text-center text-xs pt-8">
        © 2024 Music School. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
