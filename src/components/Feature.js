import React from "react";
import Image from "next/image";
import Link from "next/link";
import featureTabs from "../../public/featureTabs.svg";
import featureContent from "@/data/featureContent";
function Feature() {
  return (
    <div class="flex flex-col items-center shrink-0 overflow-clip justify-center my-10">
      <h1 class="text-5xl my-3">
        Teach independently, efficiently and effortlessly
      </h1>
      <Image
        src={featureTabs}
        width={1425}
        height={96}
        alt="Features"
        className="my-3"
      />
      {featureContent.map((item, index) => {
        return (
          <div
            class="px-20 py-14"
            style={{ backgroundColor: item.color }}
            id={index}
          >
            <h1 class="text-5xl my-3">{item.title}</h1>
            <div class="flex">
              <div class="p-3">
                <p class="max-w-80 pb-5">{item.desc}</p>
                <Link
                  href="/"
                  class="border border-black rounded-full w-fit p-2 hover:bg-black hover:text-white"
                >
                  Watch demo
                </Link>
              </div>
              <div>
                <Image
                  src={item.src}
                  width={835}
                  height={459}
                  alt="feature photo"
                  className="border border-black rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Feature;
