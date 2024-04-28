import Image from "next/image";
import logo from "@/app/favicon.ico";
const footerContent = [
  {
    title: <Image src={logo} alt="Logo" width={46} height={38} />,
    content: [
      { text: "LinkedIn", href: "/" },
      { text: "Twitter", href: "/" },
      { text: "Youtube", href: "/" },
    ],
  },
  {
    title: "Usecases",
    content: [
      { text: "T@E for Tuitors", href: "/" },
      { text: "T@E for Schools", href: "/" },
      { text: "T@E for Enterprise", href: "/" },
    ],
  },
  {
    title: "Resources",
    content: [
      { text: "Become an affliate", href: "/" },
      { text: "Tuitorials", href: "/" },
      { text: "Blog", href: "/" },
      { text: "Support", href: "/" },
      { text: "Famous lists", href: "/" },
      { text: "Explore investors lists", href: "/" },
      { text: "Explore funds lists", href: "/" },
      { text: "LinkedIn FAQ", href: "/" },
      { text: "Terms of use", href: "/" },
      { text: "Privacy policy", href: "/" },
    ],
  },
  {
    title: "Compare",
    content: [
      { text: "T@E vs GMeet", href: "/" },
      { text: "T@E vs Zoom", href: "/" },
      { text: "T@E vs CodeSandbox", href: "/" },
    ],
  },
  {
    title: "Company",
    content: [
      { text: "We're hiring", href: "/" },
      { text: "Pricing", href: "/" },
      { text: "Changelog", href: "/" },
      { text: "Contact us", href: "/" },
    ],
  },
];
export default footerContent;
