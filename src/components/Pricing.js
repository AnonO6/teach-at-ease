"use client";
import React from "react";
import pricingContent from "@/data/PricingContent";
import { useState } from "react";
function Pricing() {
  const [time, setTime] = useState(0);
  return (
    <div className="flex flex-col justify-center items-center my-10">
      <h1 className="text-5xl mb-5 mt-16 ">Pricing</h1>
      <p className="text-lg">
        Empower your tutoring sessions with our platform
      </p>
      <div className="flex shrink-0 my-12">
        <label className="inline-flex items-center p-2 rounded-md cursor-pointer dark:text-gray-100">
          <input type="checkbox" className="hidden peer" />
          <span
            onClick={() => {
              setTime(1);
            }}
            className="px-4 py-2 rounded-s-full bg-[#F9F1FE] border border-black text-black  hover:bg-pink-100 peer-checked:bg-black peer-checked:text-white text-sm "
          >
            Pay monthly
          </span>
          <span
            onClick={() => {
              setTime(0);
            }}
            className="px-4 py-2 rounded-e-full bg-black border border-black text-white  hover:bg-slate-700 peer-checked:bg-[#F9F1FE] peer-checked:text-black text-sm "
          >
            Pay annually
          </span>
        </label>
      </div>
      <div id="PaymentDetails" className="flex flex-wrap justify-evenly mx-20 ">
        {pricingContent[time].data.map((item, index) => {
          return (
            <div
              key={index}
              className="border border-black w-80 mx-6 p-8 my-5 relative"
              style={{ backgroundColor: item.color }}
            >
              <h2 className="text-2xl mb-7">{item.type}</h2>
              <div className="flex justify-between">
                <span>
                  <h2 className="text-2xl">{item.price}</h2>
                  <h2 className="text-md mb-7 text-gray-600">/month</h2>
                </span>
                <span className="border border-gray-800 h-fit px-1 mt-1 mr-10 rounded-full">
                  -{item.discount}
                </span>
              </div>
              <ul className="list-disc mb-16">
                {item.features.map((feature, index) => {
                  return (
                    <li key={index} className="text-sm py-2">
                      {feature}
                    </li>
                  );
                })}
              </ul>
              <button class="bg-black px-14 py-1 border-2 absolute left-14 bottom-9 shrink-0 border-black text-white hover:bg-white hover:text-black text-lg rounded-full">
                Subscribe
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Pricing;
