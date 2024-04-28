"use client";
import React from "react";
import Link from "next/link";
import footerContent from "@/data/footerContent";
import Image from "next/image";
import footerBase from "../../public/footerBase.svg";
function Footer() {
  return (
    <div class="bg-black ">
      <div class="flex justify-between py-20 px-16 w- ">
        <h1 class="text-white text-6xl">
          All-in-one platform to enhance teaching, Teach@Ease
        </h1>
        <div class="w-min">
          <button class="bg-white w-44 h-16 m-3 border border-white text-black hover:bg-black hover:text-white text-xl rounded-full">
            Try for free
          </button>
          <button class="bg-black w-44 h-16 m-3 border border-white text-white hover:bg-white hover:text-black text-xl rounded-full">
            Watch a demo
          </button>
        </div>
      </div>
      <div class="flex justify-between px-12">
        {footerContent.map((item, index) => {
          return (
            <ul class="flex flex-col">
              <li class="text-white font-bold pb-4">{item.title}</li>
              {item.content.map(({ text, href }, index) => {
                return (
                  <li class="text-[#B1B1B1] pb-3 hover:text-white  hover:underline">
                    <Link href={href}>{text}</Link>
                  </li>
                );
              })}
            </ul>
          );
        })}
      </div>
      <div>
        <Image src={footerBase} alt="Footer base" />
      </div>
    </div>
  );
}

export default Footer;
