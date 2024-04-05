import { cn } from "@/utilis/cn";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
const Navbar = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    ></div>
  );
};

export default Navbar;
