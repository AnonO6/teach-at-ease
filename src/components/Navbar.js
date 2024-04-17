"use client";
import React from "react";
import Image from "next/image";
import logo from "@/app/favicon.ico";
import downArrow from "../../public/icons/downArrow.svg";
const Navbar = () => {
  return (
    <div class="my-4 mx-2 flex ">
      <div class="flex ">
        <h1 class="w-24 font-bold mr-4">TEACH@EASE</h1>
        <Image
          src={logo}
          width={30}
          height={27}
          alt="Logo"
          className="ml-2 -mt-1"
        />
      </div>
      <div class="ml-4 flex justify-between w-full">
        <ul class="flex justify-evenly w-80">
          <li class="flex">
            Features
            <Image
              src={downArrow}
              alt="Downward arrow"
              width={12}
              height={5}
              className="m-1"
            />
          </li>
          <li>Subscription</li>
          <li>Contact us</li>
        </ul>
        <ul class="flex justify-between w-80">
          <li>Join Class</li>
          <li>Log in</li>
          <li>
            <button class="bg-black w-24 h-8 -mt-1 border border-black text-white hover:bg-white hover:text-black text-sm rounded-full">
              Start Class
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
