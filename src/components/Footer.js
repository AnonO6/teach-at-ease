"use client";
import React from "react";
import Link from "next/link";
import footerContent from "@/data/footerContent";
function Footer() {
  return (
    <div className="bg-black ">
      <div className="flex justify-between py-20 px-16 ">
        <h1 className="text-white text-6xl">
          All-in-one platform to enhance teaching, Teach@Ease
        </h1>
        <div className="w-min">
          <button class="bg-white w-44 h-16 m-3 border border-white text-black hover:bg-black hover:text-white text-xl rounded-full">
            Try for free
          </button>
          <button class="bg-black w-44 h-16 m-3 border border-white text-white hover:bg-white hover:text-black text-xl rounded-full">
            Watch a demo
          </button>
        </div>
      </div>
      <div className="flex justify-between px-12">
        {footerContent.map((item, index) => {
          return (
            <ul className="flex flex-col">
              <li className="text-white font-bold pb-4">{item.title}</li>
              {item.content.map(({ text, href }, index) => {
                return (
                  <li className="text-[#B1B1B1] pb-3 hover:text-white  hover:underline">
                    <Link href={href}>{text}</Link>
                  </li>
                );
              })}
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default Footer;
