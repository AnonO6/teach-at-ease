import React from "react";
import Image from "next/image";
import testimonial from "../../public/testimonials.svg";
function Testimonial() {
  return (
    <div className="flex flex-col justify-center items-center my-10">
      <h1 className="text-5xl mt-5 mb-10">Testimonial</h1>
      <Image src={testimonial} width={1024} height={642} alt="Testimonial" />
    </div>
  );
}

export default Testimonial;
