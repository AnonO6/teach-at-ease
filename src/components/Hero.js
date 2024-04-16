import React from "react";
import Image from "next/image";
import Link from "next/link";
import heroDemo from "../../public/heroDemo.png";
import whiteboardIcon from "../../public/icons/whiteboardIcon.svg";
import doubtIcon from "../../public/icons/doubtIcon.svg";
import quizIcon from "../../public/icons/quizIcon.svg";
import codeEditorIcon from "../../public/icons/codeEditorIcon.svg";
function Hero() {
  return (
    <div className="flex justify-center my-10 mx-5">
      <div>
        <div className="flex flex-wrap">
          <h1 className="text-5xl  max-w-[985px]">
            <span className="font-bold">All-in-one platform</span> to enhance
            teaching. Empower your usual classes with
          </h1>
          <button class="bg-black w-44 h-16 mt-7 border-2 shrink-0 border-black text-white hover:bg-white hover:text-black font-medium text-2xl rounded-full">
            Start Class
          </button>
        </div>
        <div className="flex flex-wrap mt-4">
          <Link
            href="/"
            className="flex border hover:border-2 w-fit bg-[#F3C6E2] border-black text-black px-2 m-1 rounded-full font-light text-4xl"
          >
            <Image src={whiteboardIcon} alt="whiteboard" width={30} />
            Whiteboard
          </Link>
          <Link
            href="/"
            className="flex border hover:border-2 w-fit bg-[#B4DFC4] border-black text-black px-2 m-1 rounded-full font-light text-4xl"
          >
            <Image src={codeEditorIcon} alt="Code Editor" width={30} /> Code
            Editor
          </Link>
          <Link
            href="/"
            className="flex border hover:border-2 w-fit border-black bg-[#FFCCA7] text-black px-2 pb-1 m-1 rounded-full font-light text-4xl"
          >
            <Image src={doubtIcon} alt="AI Doubt Solving" width={30} /> AI doubt
            solving
          </Link>
          <Link
            href="/"
            className="flex border hover:border-2 w-fit border-black bg-[#C6D4F9] text-black px-2 m-1 rounded-full font-light text-4xl"
          >
            <Image src={quizIcon} alt="In class Quizzes" width={30} /> In-class
            Quizzes
          </Link>
        </div>
        <div>
          <Image
            src={heroDemo}
            sizes="153vw"
            alt="Demo of website"
            className="w-min mt-10 mb-6 rounded-lg drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
