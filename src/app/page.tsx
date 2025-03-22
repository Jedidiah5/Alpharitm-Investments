'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Figtree } from 'next/font/google'
import { motion } from 'framer-motion'
import BusinessModels from './components/BusinessModels'
import Navbar from './components/Navbar'
import CompanyLogos from './components/CompanyLogos'

const figtree = Figtree({ subsets: ['latin'] })

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(255, 255, 255, 0.2)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 8
      }
    },
    tap: { scale: 0.95 }
  }

  return (
    <main className={`min-h-screen text-white ${figtree.className}`}>
      <div className="bg-[#010b2b]">
        <Navbar />

        {/* Hero Section */}
        <section className="relative pt-24 md:pt-32 pb-16 md:pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#03248b]/20 to-[#010b2b] opacity-40" />
          <motion.div 
            className="container mx-auto px-4 text-center relative z-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p 
              className="text-[#4a63c7] text-base md:text-lg mb-3 md:mb-4"
              variants={itemVariants}
            >
              Leverage on Automation
            </motion.p>
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6"
              variants={itemVariants}
            >
              <motion.span
                className="inline-block"
                variants={itemVariants}
              >
                AI Models for
              </motion.span>
              <br />
              <motion.span
                className="inline-block"
                variants={itemVariants}
              >
                Business Solutions
              </motion.span>
            </motion.h1>
            <motion.p 
              className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto mb-6 md:mb-8 px-4"
              variants={itemVariants}
            >
              Leverage the power of AI to automate, analyze, and optimize your workflows. Our
              specialized models are designed to fit different business needs
            </motion.p>
            <motion.button 
              className="bg-white text-[#03248b] px-6 md:px-8 py-2.5 md:py-3 rounded-md hover:bg-gray-100 transition font-medium text-sm md:text-base"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Get Started Now
            </motion.button>
          </motion.div>
        </section>
      </div>

      {/* Partners Section */}
      <section className="py-8 md:py-12 bg-white text-black">
        <div className="container mx-auto">
          <p className="text-center text-gray-600 text-sm md:text-base mb-6 md:mb-8">Join 5,000+ companies already growing</p>
          <CompanyLogos />
        </div>
      </section>

      {/* Business Models Section */}
      <BusinessModels />
    </main>
  )
}
