"use client"

import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/9779846187550", "_blank")
  }

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <button
        onClick={handleWhatsAppClick}
        className="text-whatsapp hover:text-whatsapp/80 transition-colors"
        aria-label="Order via WhatsApp"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="h-[100px] w-[100px]" />
      </button>
    </motion.div>
  )
}

