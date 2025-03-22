"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faStar, faTruck, faChevronRight } from "@fortawesome/free-solid-svg-icons"

import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export default function LandingPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-white to-gray-50 py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <motion.div
              className="flex flex-col justify-center space-y-4"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Reliable B2B Food Delivery in Butwal
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Delivering fresh and frozen food to restaurants, caterers, and retailers.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/order">
                    <Button className="bg-primary hover:bg-primary/90">
                      Order Now
                      <FontAwesomeIcon icon={faChevronRight} className="ml-2 h-3 w-3" />
                    </Button>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="https://wa.me/9779846187550" target="_blank">
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                      <FontAwesomeIcon icon={faWhatsapp} className="mr-2 h-4 w-4" />
                      Order via WhatsApp
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              className="flex items-center justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Image
                src="/placeholder.svg?height=400&width=500"
                width={500}
                height={400}
                alt="Food Delivery"
                className="rounded-lg object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="bg-white py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Simple three-step process to get fresh food delivered to your business
              </p>
            </div>
          </motion.div>
          <motion.div
            className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div className="flex flex-col items-center space-y-4 text-center" variants={cardVariants}>
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <FontAwesomeIcon icon={faWhatsapp} className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">1. Place an Order</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Contact us via WhatsApp with your requirements and delivery details.
              </p>
            </motion.div>
            <motion.div className="flex flex-col items-center space-y-4 text-center" variants={cardVariants}>
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <FontAwesomeIcon icon={faTruck} className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">2. We Source & Deliver</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We source the freshest ingredients and prepare your order for delivery.
              </p>
            </motion.div>
            <motion.div className="flex flex-col items-center space-y-4 text-center" variants={cardVariants}>
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <FontAwesomeIcon icon={faStar} className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">3. Receive Fresh Food</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Get your order delivered right to your doorstep, hassle-free.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Food Categories */}
      <section id="categories" className="bg-gray-50 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Food Categories</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Bulk food delivery options for your business needs
              </p>
            </div>
          </motion.div>
          <motion.div
            className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              { name: "Frozen Momos", image: "/placeholder.svg?height=200&width=300" },
              { name: "Chowmein", image: "/placeholder.svg?height=200&width=300" },
              { name: "Vegetables", image: "/placeholder.svg?height=200&width=300" },
              { name: "Meat Products", image: "/placeholder.svg?height=200&width=300" },
            ].map((category, index) => (
              <motion.div key={index} variants={cardVariants}>
                <Card className="overflow-hidden">
                  <div className="aspect-video relative">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-xl font-bold">{category.name}</h3>
                    <p className="text-sm text-gray-500">Available for bulk orders</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="bg-white py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose Us</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Benefits that make Foodwal the preferred choice for businesses
              </p>
            </div>
          </motion.div>
          <motion.div
            className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={cardVariants}>
              <Card>
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-3">
                    <FontAwesomeIcon icon={faTruck} className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Fast Delivery</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    We ensure timely delivery to keep your business running smoothly.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={cardVariants}>
              <Card>
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-3">
                    <FontAwesomeIcon icon={faStar} className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Trusted Suppliers</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    We partner with the best suppliers to ensure quality products.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={cardVariants}>
              <Card>
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-3">
                    <FontAwesomeIcon icon={faWhatsapp} className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">No Storage Hassle</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Order only what you need, when you need it, reducing storage costs.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}

