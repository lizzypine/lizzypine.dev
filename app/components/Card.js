'use client'
import Image from 'next/image'
import { motion } from "framer-motion"

export default function Card(props) {
  return (
    <motion.div 
      className="overlay m-5 max-w-3xl bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "easeIn", duration: .4, delay: .1}}
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
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{props.title}</h5>
        <p className="mb-3 font-normal dark:text-gray-900">{props.body}</p>
        <h6 className="mb-3 font-bold dark:text-gray-900">Technologies: {props.technologies}</h6>
        <div className="flex mt-4 space-x-3 md:mt-6">
          {props.liveLink ? (
            <motion.a 
              href={props.liveLink} 
              className="btn button-link inline-flex font-bold items-center px-3 py-2 text-sm text-center text-white bg-blue-700 rounded-lg focus:outline-none"
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{ scale: 0.8 }}
              aria-label="Visit Live Site"
            >
              Live Site
            </motion.a>
          ) : (
            <motion.button
              className="button-link inline-flex font-bold items-center px-3 py-2 text-sm text-center text-gray-500 bg-gray-400 disabled rounded-lg cursor-not-allowed"
              disabled
            >
              Live Site
            </motion.button>
          )}
          {props.repoLink && (
            <motion.a 
              href={props.repoLink} 
              className="btn button-link inline-flex font-bold items-center px-3 py-2 text-sm text-center text-white bg-blue-700 rounded-lg focus:outline-none"
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{ scale: 0.8 }}
              aria-label="View Project Repository"
            >
              Project Repo
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}