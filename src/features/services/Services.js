"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  Keyboard,
  Mouse,
  Laptop,
  Cpu,
  Headphones,
} from "lucide-react";

// Consistent animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Services() {
  const services = [
    {
      Icon: Laptop,
      title: "Custom PCs & Laptops",
      desc: "High-performance builds tailored for developers, gamers, and businesses.",
    },
    {
      Icon: Keyboard,
      title: "Mechanical Keyboards",
      desc: "Durable, ergonomic, and fully customizable keyboards for long coding hours.",
    },
    {
      Icon: Mouse,
      title: "Interactive Mice",
      desc: "Precision-engineered mice for productivity, design, and gaming.",
    },
    {
      Icon: Monitor,
      title: "Monitors & Displays",
      desc: "Ultra-clear monitors for coding, creative design, and immersive experiences.",
    },
    {
      Icon: Cpu,
      title: "Components & Accessories",
      desc: "Processors, GPUs, memory, and everything else you need to upgrade your setup.",
    },
    {
      Icon: Headphones,
      title: "Audio & Peripherals",
      desc: "Noise-cancelling headphones and premium audio gear for focus and clarity.",
    },
  ];

  return (
    <section
      id="services"
      className="relative py-24 bg-white dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Heading */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent relative inline-block"
          >
            Our Services
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute bottom-0 left-0 h-1 bg-indigo-600 rounded-full"
            />
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Empowering developers and creators with premium gear & solutions.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={scaleIn}
              whileHover={{
                scale: 1.05,
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 dark:border-gray-700 p-8 text-center transition-all duration-300 group"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-indigo-50 dark:bg-indigo-900/30 rounded-full mb-6 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/50 transition-colors duration-300"
              >
                <service.Icon className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
              </motion.div>

              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <motion.a
            href="/subscriptions"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-indigo-600 text-white font-medium text-lg rounded-xl shadow-lg hover:bg-indigo-700 hover:shadow-xl transition-all duration-300"
          >
            Explore Our Store
          </motion.a>

          <motion.p
            variants={fadeInUp}
            className="mt-4 text-gray-500 dark:text-gray-400 text-sm"
          >
            Discover premium tech gear tailored for your success.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}