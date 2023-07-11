'use client'
import Image from 'next/image'
import { motion } from "framer-motion"

export default function Card(props) {

  return (
    <motion.div 
      className="overlay m-5 max-w-4xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "easeIn", duration: .5, delay: 0.5}}
      
      // exit={{
      //   opacity: 1,
      //   backgroundColor: "#dadada",
      //   transition: { backgroundColor: { delay: 0 }, opacity: { delay: 0.1 } }
      // }}
      // transition={{
      //   duration: 0.25,
      //   delay: 0.5
      // }}
    >
      <div className="flex flex-col items-center mt-4">
        <Image 
          src={props.imgSrc} 
          alt={props.imgAlt}
          style={{
            width: '95%',
            height: 'auto',
          }}
        />
      </div>
      <div className="p-8">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.body}</p>
        <p className="mb-3 font-normal text-gray-400 dark:text-gray-200">Technologies: {props.technologies}</p>
        <div className="flex mt-4 space-x-3 md:mt-6">
            <motion.a 
              href={props.liveLink} 
              className="button-link inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{ scale: 0.8 }}
              >
                Live Site
            </motion.a>
            <motion.a 
              href={props.repoLink} 
              className="button-link inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{ scale: 0.8 }}
              >
                Project Repo
            </motion.a>
        </div>
      </div>
    </motion.div>
  );
}