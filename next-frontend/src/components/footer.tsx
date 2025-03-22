"use client"

import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
import { motion } from "framer-motion"

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="container px-4 py-12 md:px-6">
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold text-white mb-4">Foodwal</h3>
            <p className="max-w-xs">Powering Butwal's Restaurants with reliable B2B food delivery services.</p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FontAwesomeIcon icon={faPhone} className="mr-2 h-4 w-4" />
                <span>+977 9846187550</span>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faWhatsapp} className="mr-2 h-4 w-4 text-whatsapp" />
                <span>WhatsApp: +977 9846187550</span>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 h-4 w-4 mt-1" />
                <span>Butwal, Nepal</span>
              </li>
            </ul>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#how-it-works" className="hover:text-primary transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#categories" className="hover:text-primary transition-colors">
                  Food Categories
                </Link>
              </li>
              <li>
                <Link href="#why-us" className="hover:text-primary transition-colors">
                  Why Choose Us
                </Link>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <Link href="https://wa.me/9779846187550" target="_blank" className="text-whatsapp hover:text-whatsapp/80">
                <FontAwesomeIcon icon={faWhatsapp} className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-blue-400 hover:text-blue-300">
                <FontAwesomeIcon icon={faFacebook} className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-pink-400 hover:text-pink-300">
                <FontAwesomeIcon icon={faInstagram} className="h-6 w-6" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          className="mt-12 border-t border-gray-800 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p>© {new Date().getFullYear()} Foodwal</p>
        </motion.div>
      </div>
    </footer>
  )
}

