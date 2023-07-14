'use client'
import { motion } from "framer-motion"
import Image from 'next/image'
import palmLeaf from "../../public/palm-leaf.png"
import { AiFillGithub } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"
import { RiReactjsFill } from "react-icons/ri"
import { SiNextdotjs } from "react-icons/si"
import { SiJavascript } from "react-icons/si"
import { SiDjango } from "react-icons/si"
import { BiLogoJava } from "react-icons/bi"
import { BiLogoAws } from "react-icons/bi"
import { SiMui } from "react-icons/si"
import { RiBootstrapFill } from "react-icons/ri"

export default function About() {
  return (
    <motion.div 
      className="overlay m-5 p-8 max-w-3xl bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "easeIn", duration: .4, delay: 0.3}}
    >
      <div class="w-1/2 flex-none">
        <div>
          <Image 
            src={palmLeaf} 
            alt="Palm leaf"
            style={{
              display: 'flex',
              alignItems: 'center',
              width: '70%',
              height: 'auto',
              translate: '10% 15%',
            }}
          />
        </div>
      </div>
      <div class="w-1/2 flex-none">
        <h5 className="mb-5 text-3xl font-bold tracking-tight text-gray-900">Hi! My name is Lizzy. I am a software developer based in Kona, Hawaiʻi.</h5> 
        <p className="mb-5 font-normal dark:text-gray-900">I love to build things that make life a little easier. I’m a former educator; I taught AP computer science with JavaScript and Java as well as cybersecurity. 
        Before that, I taught elementary school. </p>
        <p className="font-bold">These are some of my favorite tools:</p>
        <div className="flex justify-center mt-4 mb-8 sm:justify-center gap-8 sm:gap-3 md:gap-4">
            <SiJavascript size="2.5em" color="#F3D91A" />
            <RiReactjsFill size="2.5em" color="#5ED3F3" />
            <SiNextdotjs size="2.5em" />
            <SiDjango size="2.5em" color="#0C4A30" />
            <BiLogoJava size="2.5em" color="#E52024" />
            <BiLogoAws size="2.5em" color="#F79400" />
            <SiMui size="2.5em" color="#007BF7" />
            <RiBootstrapFill size="2.5em" color="#760FF0" />
        </div>
        <h5 className="text-2xl  tracking-tight sm:text-2xl">Give me a shout.</h5>
        <div className="flex justify-left mt-2 sm:justify-left gap-8 sm:gap-3 md:gap-4">
            <a href="https://github.com/lizzypine" className="social-link" target="_blank" rel="noopener noreferrer">
              <AiFillGithub size="3.5em" />
            </a>
            <a href="https://www.linkedin.com/in/lizzypine/" className="social-link" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin size="3.5em" />
            </a>
        </div>
      </div>
    </motion.div>
  );
}