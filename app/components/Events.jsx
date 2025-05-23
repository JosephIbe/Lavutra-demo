'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const events = [
  {
    id: 1,
    title: "HAUSA TRADITIONAL WEDDING",
    description: "Experience the rich colors and traditions of a classic Hausa wedding ceremony",
    type: "Wedding",
    location: "Abuja, Nigeria",
    date: "June 15, 2025",
    image: "/images/hausa_wedding.jpg",
    alt: "Colorful Hausa bride at her wedding ceremony in traditional attire with beautiful mehendi patterns to match",
    cta: "RSVP"
  },
  {
    id: 2,
    title: "AFROBEAT MUSIC FESTIVAL",
    description: "Three days of the best Afrobeat artists from across the continent and diaspora",
    type: "Festival",
    location: "Accra, Ghana",
    date: "July 22-24, 2025",
    image: "https://musicorigins.org/wp-content/uploads/2023/10/Fela-Album-cover.jpeg",
    alt: "Energetic Afrobeat concert with dancing crowd",
    cta: "GET TICKETS"
  },
  {
    id: 3,
    title: "EAST AFRICAN TEXTILE ART",
    description: "Showcasing the vibrant textile traditions of East Africa with live demonstrations",
    type: "Exhibition",
    location: "Nairobi, Kenya",
    date: "August 5-30, 2026",
    image: "/images/east_africa_textile_art.jpg",
    alt: "Traditional East African fabrics and textile patterns on display",
    cta: "LEARN MORE"
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
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
}

export default function EventsSection() {
  return (
    <section id="events" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-mono tracking-widest text-gold-500 uppercase mb-2">
            EVENTS
          </h2>
          <h3 className="text-3xl md:text-4xl font-mono tracking-widest text-white">
            DISCOVER AFRICAN CELEBRATIONS
          </h3>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {events.map((event) => (
            <motion.div
              key={event.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-gold-500 transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-mono tracking-widest ${
                    event.type === "Wedding" ? "bg-gold-500/20 text-gold-500" :
                    event.type === "Festival" ? "bg-purple-500/20 text-purple-300" :
                    "bg-green-500/20 text-green-300"
                  }`}>
                    {event.type}
                  </span>
                  <span className="ml-2 text-xs text-gray-400">{event.location}</span>
                </div>
                <h3 className="text-xl font-mono tracking-widest text-white mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {event.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">{event.date}</span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-xs font-mono tracking-widest px-4 py-2 bg-gold-500 hover:bg-gold-600 text-black rounded"
                  >
                    {event.cta}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 py-3 border border-gold-500 text-sm font-mono tracking-widest text-gold-500 hover:bg-gold-500/10 rounded"
          >
            VIEW ALL EVENTS
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}