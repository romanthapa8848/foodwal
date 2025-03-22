"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function OrderPage() {
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    phone: "",
    email: "",
    address: "",
    category: "",
    orderDetails: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, category: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Format the message for WhatsApp
    const message = `
*New Order from Foodwal Website*
Name: ${formData.name}
Business: ${formData.business}
Phone: ${formData.phone}
Email: ${formData.email}
Address: ${formData.address}
Category: ${formData.category}
Order Details: ${formData.orderDetails}
    `.trim()

    // Encode the message for WhatsApp URL
    const encodedMessage = encodeURIComponent(message)

    // Open WhatsApp with the pre-filled message
    window.open(`https://wa.me/9779846187550?text=${encodedMessage}`, "_blank")
  }

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
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <motion.div className="mx-auto max-w-2xl" initial="hidden" animate="visible" variants={containerVariants}>
            <Card>
              <CardHeader>
                <motion.div variants={itemVariants}>
                  <CardTitle className="text-2xl">Place Your Order</CardTitle>
                  <CardDescription>
                    Fill out the form below to place your bulk food order. We'll contact you to confirm the details.
                  </CardDescription>
                </motion.div>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div className="grid gap-4 md:grid-cols-2" variants={itemVariants}>
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="business">Business Name</Label>
                      <Input
                        id="business"
                        name="business"
                        placeholder="Enter your business name"
                        required
                        value={formData.business}
                        onChange={handleChange}
                      />
                    </div>
                  </motion.div>

                  <motion.div className="grid gap-4 md:grid-cols-2" variants={itemVariants}>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="Enter your phone number"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </motion.div>

                  <motion.div className="space-y-2" variants={itemVariants}>
                    <Label htmlFor="address">Delivery Address</Label>
                    <Input
                      id="address"
                      name="address"
                      placeholder="Enter your delivery address"
                      required
                      value={formData.address}
                      onChange={handleChange}
                    />
                  </motion.div>

                  <motion.div className="space-y-2" variants={itemVariants}>
                    <Label htmlFor="category">Food Category</Label>
                    <Select onValueChange={handleSelectChange} value={formData.category}>
                      <SelectTrigger id="category">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="frozen-momos">Frozen Momos</SelectItem>
                        <SelectItem value="chowmein">Chowmein</SelectItem>
                        <SelectItem value="vegetables">Vegetables</SelectItem>
                        <SelectItem value="meat-products">Meat Products</SelectItem>
                        <SelectItem value="multiple">Multiple Categories</SelectItem>
                      </SelectContent>
                    </Select>
                  </motion.div>

                  <motion.div className="space-y-2" variants={itemVariants}>
                    <Label htmlFor="orderDetails">Order Details</Label>
                    <Textarea
                      id="orderDetails"
                      name="orderDetails"
                      placeholder="Please provide details about your order (items, quantities, etc.)"
                      required
                      className="min-h-[120px]"
                      value={formData.orderDetails}
                      onChange={handleChange}
                    />
                  </motion.div>

                  <motion.div
                    className="flex flex-col gap-2 sm:flex-row"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Button type="submit" className="bg-primary hover:bg-primary/90">
                      Submit Order
                    </Button>
                    <Link href="https://wa.me/9779846187550" target="_blank">
                      <Button
                        type="button"
                        variant="outline"
                        className="border-whatsapp text-whatsapp hover:bg-whatsapp/10"
                      >
                        <FontAwesomeIcon icon={faWhatsapp} className="mr-2 h-4 w-4" />
                        Contact via WhatsApp
                      </Button>
                    </Link>
                  </motion.div>
                </form>
              </CardContent>
              <CardFooter className="flex flex-col items-start border-t px-6 py-4">
                <motion.p className="text-sm text-muted-foreground" variants={itemVariants}>
                  By submitting this form, your order details will be sent to our team via WhatsApp for faster
                  processing.
                </motion.p>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

