'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrolled])

  const springTransition = {
    type: "spring",
    stiffness: 400,
    damping: 25,
    mass: 1
  }

  const buttonSpringTransition = {
    type: "spring",
    stiffness: 400,
    damping: 20,
    mass: 1.2
  }

  return (
    <nav 
      className={`fixed top-0 w-full z-50 py-4 transition-all duration-300 ${
        scrolled ? 'bg-[#03248b]/90 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto relative flex items-center justify-between">
          {/* Logo */}
          <div className="w-[119px] flex-shrink-0">
            <div className="w-10 h-10 relative bg-gradient-to-b from-white to-[#D0D5DD] rounded-lg border border-[#D0D5DD] grid place-items-center">
              <div className="w-7 h-7 bg-[#D0D5DD] rounded-full" />
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <motion.button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={springTransition}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex items-center gap-8">
              {['Models', 'Pricing', 'About Us', 'Contact Us', 'Custom Models'].map((item) => (
                <motion.a
                  key={item}
                  href="#"
                  className="text-white text-sm font-medium transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={springTransition}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Buttons - Desktop */}
          <div className="hidden md:flex w-[240px] flex-shrink-0 items-center gap-4 justify-end">
            <motion.button 
              className="text-white transition text-sm font-medium border border-white/30 px-4 py-1.5 rounded-md"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0px 5px 15px rgba(255, 255, 255, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={buttonSpringTransition}
            >
              Login
            </motion.button>
            <motion.button 
              className="whitespace-nowrap bg-white text-[#03248b] px-6 py-1.5 rounded-md text-sm font-medium"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0px 5px 15px rgba(255, 255, 255, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={buttonSpringTransition}
            >
              Get Started Now
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <div className={`
            md:hidden fixed inset-x-0 top-[72px] bg-[#03248b] transition-all duration-300
            ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
          `}>
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col gap-4">
                {['Models', 'Pricing', 'About Us', 'Contact Us', 'Custom Models'].map((item) => (
                  <motion.a
                    key={item}
                    href="#"
                    className="text-white text-sm font-medium transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={springTransition}
                  >
                    {item}
                  </motion.a>
                ))}
                <div className="flex flex-col items-center gap-3 pt-4 border-t border-white/10">
                  <motion.button 
                    className="w-[60%] text-white transition text-sm font-medium border border-white/30 px-4 py-2.5 rounded-md"
                    whileHover={{ 
                      scale: 1.02, 
                      boxShadow: "0px 5px 15px rgba(255, 255, 255, 0.2)"
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={buttonSpringTransition}
                  >
                    Login
                  </motion.button>
                  <motion.button 
                    className="w-[60%] whitespace-nowrap bg-white text-[#03248b] px-4 py-2.5 rounded-md text-sm font-medium"
                    whileHover={{ 
                      scale: 1.02, 
                      boxShadow: "0px 5px 15px rgba(255, 255, 255, 0.2)"
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={buttonSpringTransition}
                  >
                    Get Started Now
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
} 