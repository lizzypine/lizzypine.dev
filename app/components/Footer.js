import { AiFillGithub } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"
import { RiReactjsFill } from "react-icons/ri"
import { SiNextdotjs } from "react-icons/si"
import { SiTailwindcss } from "react-icons/si"

export default function Footer() {

  const currentYear = new Date().getFullYear();

  return(
    <footer className="font-light text-center m-2">
      <hr class="border-gray-500 sm:mx-auto dark:border-gray-700 my-4" />
      <div className="grid grid-cols-2 gap-6">
        <div className="text-left">
          Connect with me
        </div>
        <div className="text-right">
          Site built with
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6 mt-3">
        <div className="flex justify-center sm:justify-start gap-8 sm:gap-3 md:gap-4">
          <a href="https://github.com/lizzypine" className="social-link" target="_blank" rel="noopener noreferrer">
            <AiFillGithub size="2.5em" />
          </a>
          <a href="https://www.linkedin.com/in/lizzypine/" className="social-link" target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin size="2.5em" />
          </a>
        </div>
        <div className="flex justify-center sm:justify-end gap-8 sm:gap-3 md:gap-4">
          <RiReactjsFill size="1.4em" />
          <SiNextdotjs size="1.4em" />
          <SiTailwindcss size="1.4em" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6 mt-3">
        <div className="text-left">
        © {currentYear} Lizzy Pine
        </div>
        <div className="text-right">
          Illustrations by Krit Kongjundee from <a href="https://vecteezy.com" target="_blank" rel="noopener noreferrer" className="underline">vecteezy.com</a> 
        </div>
      </div>
    </footer>
  );
}