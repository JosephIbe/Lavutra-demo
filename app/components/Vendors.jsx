'use client'

import { motion } from 'framer-motion'

import { StarIcon, CakeIcon, CameraIcon, MusicNoteIcon } from './ui/icons'

const vendorCategories = [
    {
      id: 1,
      title: "DECORATORS",
      description: "Transform any space with stunning African-inspired decor",
      icon: <StarIcon className="h-8 w-8" />,
      cta: "BROWSE DECORATORS",
      color: "text-gold-500"
    },
    {
      id: 2,
      title: "CATERERS",
      description: "Authentic African cuisine for any occasion",
      icon: <CakeIcon className="h-8 w-8" />,
      cta: "BROWSE CATERERS",
      color: "text-purple-400"
    },
    {
      id: 3,
      title: "PHOTOGRAPHERS",
      description: "Capture your special moments beautifully",
      icon: <CameraIcon className="h-8 w-8" />,
      cta: "BROWSE PHOTOGRAPHERS",
      color: "text-blue-400"
    },
    {
      id: 4,
      title: "DJS & MUSICIANS",
      description: "Set the perfect mood with African beats",
      icon: <MusicNoteIcon className="h-8 w-8" />,
      cta: "BROWSE ENTERTAINERS",
      color: "text-green-400"
    }
  ]
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

export default function Vendors() {

    return (
        <section id='vendors' className='py-20 bg-black'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center mb-16"
                >
                <h2 className="text-sm font-mono tracking-widest text-gold-500 uppercase mb-2">
                    VENDORS
                </h2>
                <h3 className="text-3xl md:text-4xl font-mono tracking-widest text-white mb-4">
                    CONNECT WITH TOP PROFESSIONALS
                </h3>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    From decor to catering, find everything you need to make your event unforgettable
                </p>
                </motion.div>

                <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                {vendorCategories.map((vendor) => (
                    <motion.div
                        key={vendor.id}
                        variants={itemVariants}
                        whileHover={{ y: -10 }}
                        className="bg-gray-900 rounded-lg p-8 border border-gray-800 hover:border-gold-500 transition-all"
                    >
                        <div className={`w-16 h-16 mx-auto flex items-center justify-center rounded-full ${vendor.color.replace('text', 'bg')}/10 mb-6`}>
                            {vendor.icon}
                        </div>
                        <h3 className="text-xl font-mono tracking-widest text-white text-center mb-3">
                            {vendor.title}
                        </h3>
                        <p className="text-gray-400 text-sm text-center mb-6">
                            {vendor.description}
                        </p>
                        <motion.a
                            href="#"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`block text-center text-xs font-mono tracking-widest ${vendor.color} hover:underline`}
                        >
                            {vendor.cta} →
                        </motion.a>
                    </motion.div>
                ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-gold-500 hover:bg-gold-600 text-black font-mono tracking-widest text-sm uppercase rounded"
                    >
                    Become a Vendor
                    </motion.button>
                </motion.div>
            </div>
        </section>
    )

}