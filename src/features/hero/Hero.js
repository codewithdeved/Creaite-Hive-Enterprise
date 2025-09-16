"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Consistent animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-indigo-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* ==== LEFT SIDE: TEXT CONTENT ==== */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center md:text-left"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
          >
            Welcome to{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              Creaite Hive Enterprise
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-xl"
          >
            Powering the next generation of digital enterprises with AI-driven
            innovation, seamless subscriptions, and powerful cloud solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>

        {/* ==== RIGHT SIDE: HERO IMAGE ==== */}
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative flex justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <Image
              src="/assets/hero-img.png"
              alt="Creaite Hive Enterprise"
              width={500}
              height={500}
              className="object-contain drop-shadow-2xl"
              priority
            />
            
            {/* Floating elements for visual appeal */}
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-4 -right-4 w-20 h-20 bg-indigo-200 dark:bg-indigo-800 rounded-full opacity-60 blur-xl"
            />
            
            <motion.div
              animate={{ 
                y: [0, 15, 0],
                rotate: [0, -5, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute -bottom-6 -left-6 w-16 h-16 bg-purple-200 dark:bg-purple-800 rounded-full opacity-50 blur-lg"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}