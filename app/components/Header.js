'use client'
import { motion } from "framer-motion"
import { AiFillGithub } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"
import Image from 'next/image'
import montserrat from "../../public/montserrat.png"

export default function Header() {
  const line1 = "Lizzy Pine"
  const line2 = "Software Developer"

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1, 
      transition: {
        delay: 0.4,
        staggerChildren: 0.07,
      },
    },
  }

  const sentence2 = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1, 
      transition: {
        delay: 0.5,
        staggerChildren: 0.05,
      },
    },
  }

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  const letter2 = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return(
    <header className="banner h-screen flex items-center justify-center">
      <motion.div className="flex flex-col items-center "
        initial={{ y: -90 }}
        animate={{ y: 0, transition: { delay: 1.3, duration: .4 } }}
      >
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 1.5, duration: 1.5 } }}
        >
            <Image 
              src={montserrat} 
              alt="Montserrat leaf"
              style={{
                display: 'flex',
                alignItems: 'center',
                width: '55%',
                height: 'auto',
                rotate: '30deg',
                translate: '40% -15%',
              }}
            />
          </motion.div>
          <motion.h1 
            className="text-4xl tracking-tight sm:text-6xl load-screen--message"
            variants={sentence}
            initial="hidden"
            animate="visible"
          >
            {line1.split("").map((char, index) => {
              return (
                <motion.span key={char + "-" + index} variants={letter}>
                  {char}
                </motion.span>
              )
            })} 
          </motion.h1>
          <motion.p 
            className="mt-6 text-lg leading-8"
            variants={sentence2}
            transition={{ delay: 1.5 }}
            initial="hidden"
            animate="visible"
          >
            {line2.split("").map((char, index) => {
                return (
                  <motion.span key={char + "-" + index} variants={letter2}>
                    {char}
                  </motion.span>
                )
              })} 
          </motion.p>
         <div className="mt-6 flex items-center justify-center gap-x-6">
          <motion.div
            initial={{ x: -500, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { delay: 1.8 } }}
            whileHover={{
              scale: 1.2,
              transition: 0.2
            }}
            whileTap={{ scale: 0.8 }}
          >
            <a href="https://github.com/lizzypine" className="social-link" target="_blank" rel="noopener noreferrer">
              <AiFillGithub size="2.5em" />
            </a>
          </motion.div>
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { delay: 1.8 } }}
            whileHover={{
              scale: 1.2,
              transition: 0.2
            }}
            whileTap={{ scale: 0.8 }}
          >
            <a href="https://www.linkedin.com/in/lizzypine/" className="social-link" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin size="2.5em" />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </header>
  );
}