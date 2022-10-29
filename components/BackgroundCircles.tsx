import React from 'react'
import { motion } from "framer-motion";


type Props = {}

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div initial={{
      opacity: 1,
    }} 
    animate={{
      scale:[1,2,3,1]
    }}
    transition={{
      duration: 2.5,
    }} 
    className='relative flex justify-center items-center'>
      <div className='absolute border border-[border-blue-500] rounded-full h-[200px] w-[200px] mt-52 animate-ping' />
      <div className='border border-blue-500 rounded-full h-[300px] w-[300px] absolute mt-52' />
      <div className='border border-blue-500 rounded-full h-[500px] w-[500px] absolute mt-52 ' />
      <div className='rounded-full border-[#a690e0] opacity-20 h-[650px] w-[650px] mt-52 animate-pulse' />
      <div className='rounded-full border border-blue-500 h-[800px] w-[800px] mt-52 absolute'/>
    </motion.div>
  )
}