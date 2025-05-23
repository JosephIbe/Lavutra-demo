'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const cultureItems = [
  {
    title: "YORUBA WEDDINGS",
    description: "The vibrant colors, traditional attire, and ceremonial rites of Yoruba weddings",
    image: "/images/yoruba_wedding.jpg",
    alt: "Bride and groom in colorful Yoruba wedding attire with guests"
  },
  {
    title: "MAASAI COMING OF AGE",
    description: "The Eunoto ceremony and other Maasai rites of passage",
    image: "/images/maasai.jpg",
    alt: "Maasai warriors performing traditional coming-of-age rituals"
  },
  {
    title: "KENTE CLOTH",
    description: "The history, patterns, and significance of Ghana's iconic textile",
    image: "/images/kente_cloth.jpg",
    alt: "Close-up of traditional Ghanaian Kente cloth patterns"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

export default function Explore() {
  return (
    <section id="explore" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-mono tracking-widest text-gold-500 uppercase mb-2">
            EXPLORE
          </h2>
          <h3 className="text-3xl md:text-4xl font-mono tracking-widest text-white mb-4">
            AFRICAN TRADITIONS & CULTURE
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Dive deep into the rich diversity of African celebrations across regions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 md:grid-cols-3"
        >
          {cultureItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-lg border border-gray-800 hover:border-gold-500 transition-all"
            >
              <div className="relative h-64">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 bg-gray-900">
                <h3 className="text-xl font-mono tracking-widest text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {item.description}
                </p>
                <motion.a
                  href="#"
                  whileHover={{ x: 5 }}
                  className="text-xs font-mono tracking-widest text-gold-500 hover:underline inline-flex items-center"
                >
                  EXPLORE TRADITIONS →
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}