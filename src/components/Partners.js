import React from "react";
import Image from "next/image";
import Link from "next/link";
import partners from "../../public/partners.svg";
function Partners() {
  return (
    <div className="flex flex-col justify-center items-center my-16">
      <p className="text-[#808080] text-xl">Integrations</p>
      <h1 className="z-10 text-5xl mt-3 -mb-10 max-w-md text-center">
        Enterprises using Teach@Ease
      </h1>
      <Image
        src={partners}
        alt="Partners"
        width={960}
        height={420}
        className="z-0"
      />
      <Link
        href="/"
        class="z-10 border -mt-5 border-black rounded-full w-fit p-2 px-10 hover:bg-black hover:text-white"
      >
        Partner with us
      </Link>
    </div>
  );
}

export default Partners;
