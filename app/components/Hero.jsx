'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-black z-10"
      />
      
      <Image
        src={'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80'}
        // src='/images/hero.jpg'
        alt="Group of African women in vibrant traditional attire celebrating at a festival"
        fill
        className="object-cover"
        priority
        quality={100}
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="relative z-20 text-center px-4"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gold-500">
          CELEBRATE AFRICAN ELEGANCE
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Where tradition meets contemporary luxury
        </p>
        <div className="flex gap-4 justify-center">
          <AnimatedButton primary>
            EXPLORE EVENTS
          </AnimatedButton>
          <AnimatedButton>
            JOIN AS VENDOR
          </AnimatedButton>
        </div>
      </motion.div>
    </section>
  )
}

function AnimatedButton({ children, primary = false }) {
  return (
    <motion.button
      whileHover={{ y: -3, scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`px-8 py-3 font-mono tracking-widest text-sm uppercase ${
        primary 
          ? 'bg-gold-500 hover:bg-gold-600 text-black' 
          : 'border border-gold-500 hover:bg-gold-500/10 text-gold-500'
      }`}
    >
      {children}
    </motion.button>
  )
}