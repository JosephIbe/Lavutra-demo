'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function CTA() {
  return (
    <section className="bg-gold-500">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:flex lg:items-center lg:justify-between"
        >
          <div className="mb-8 lg:mb-0">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-mono tracking-widest text-black mb-2"
            >
              READY TO CELEBRATE AFRICAN CULTURE?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-black/80 font-mono tracking-widest text-lg"
            >
              Download our app today.
            </motion.p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              href="#"
              className="px-6 py-3 bg-black text-white font-mono tracking-widest text-sm rounded flex items-center justify-center"
            >
              {/* <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              APP STORE */}
              <Image 
                src='/images/apple_store.png'
                width={150}
                height={20}
                alt="Apple Store"
                className='rounded-4xl'
              />
            </motion.a>
            <motion.a
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              href="#"
              className="px-6 py-3 bg-black text-white font-mono tracking-widest text-sm rounded flex items-center justify-center"
            >
              {/* <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clipRule="evenodd" />
              </svg>
              GOOGLE PLAY */}
              <Image 
                src='/images/play_store.png'
                width={150}
                height={20}
                alt="Apple Store"
                className='rounded-4xl'
              />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}