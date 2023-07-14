'use client'
import { motion } from "framer-motion"
import Image from 'next/image'
import palmLeaf from "../../public/palm-leaf.png"

export default function About() {
  return (
    <motion.div 
      className="overlay flex m-5 max-w-3xl bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "easeIn", duration: .4, delay: 0.3}}
    >
      <div class="w-1/2 h-12">
      <motion.div
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1, transition: { delay: 1.5, duration: 1.5 } }}
        >
            <Image 
              src={palmLeaf} 
              alt="Palm leaf"
              style={{
                display: 'flex',
                alignItems: 'center',
                width: '80%',
                height: 'auto',
                // rotate: '10deg',
                // translate: '15%',
              }}
            />
          </motion.div>
      </div>
      <div class="w-1/2 bg-gray-500 h-12">
        Aloha!
      </div>
    </motion.div>
  );
}