"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function ProfileCard() {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const x = (clientX / window.innerWidth) * 20 - 10
      const y = (clientY / window.innerHeight) * 20 - 10
      setMousePosition({ x, y })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <motion.div
      className="relative mx-auto md:ml-auto"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      animate={{
        rotateY: isHovered ? mousePosition.x * 0.5 : 0,
        rotateX: isHovered ? -mousePosition.y * 0.5 : 0,
      }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="relative w-72 h-96 md:w-80 md:h-[450px] rounded-2xl overflow-hidden shadow-2xl group">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-cyan-500/20 to-purple-500/20 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>

        {/* Glowing border */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 via-cyan-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-300"></div>

        {/* Card content */}
        <div className="relative h-full w-full rounded-2xl overflow-hidden bg-background/80 backdrop-blur-sm p-6 flex flex-col items-center justify-center">
          {/* Profile image container */}
          <div className="relative w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-gradient-to-r from-green-500 via-cyan-500 to-purple-500">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-cyan-500/20 to-purple-500/20 animate-pulse"></div>
            <Image src="/placeholder.svg?height=400&width=400" alt="Arjun U" fill className="object-cover" />
          </div>

          {/* Name and details */}
          <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-cyan-400 to-purple-400">
            Arjun U
          </h3>
          <p className="text-muted-foreground mt-2 text-center">Java & JavaScript Developer</p>
          <p className="text-muted-foreground mt-1 text-center text-sm">Currently pursuing MCA</p>

          {/* Decorative elements */}
          <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-green-500 opacity-50"></div>
          <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-purple-500 opacity-50"></div>
        </div>
      </div>
    </motion.div>
  )
}
