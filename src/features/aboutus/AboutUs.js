"use client";

import { motion } from "framer-motion";
import { Lightbulb, ShieldCheck, TrendingUp } from "lucide-react";
import Image from "next/image";

// Consistent animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0, 
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
      delayChildren: 0.2
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function AboutUs() {
  const highlights = [
    {
      Icon: Lightbulb,
      title: "Innovation",
      desc: "Driving creativity and futuristic solutions.",
    },
    {
      Icon: ShieldCheck,
      title: "Reliability",
      desc: "Built with trust, transparency, and security.",
    },
    {
      Icon: TrendingUp,
      title: "Growth",
      desc: "Helping you scale without limits.",
    },
  ];

  return (
    <section id="about" className="relative py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* ===== Heading ===== */}
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
            About Us
            {/* Underline Animation */}
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
            Innovation meets trust at Creaite Hive Enterprise.
          </motion.p>
        </motion.div>

        {/* ===== Content Grid ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.p 
              variants={fadeInLeft}
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              At <span className="font-semibold text-indigo-600">Creaite Hive Enterprise</span>, we are redefining 
              the digital experience. Our mission is to empower businesses and 
              individuals with cutting-edge solutions in{" "}
              <span className="font-semibold">AI, SaaS, and cloud innovation</span>. 
              We believe technology should be powerful yet simple—driving growth 
              and creating meaningful impact worldwide.
            </motion.p>

            {/* Highlights */}
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            >
              {highlights.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={scaleIn}
                  whileHover={{ 
                    scale: 1.05,
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  className="flex flex-col items-center text-center space-y-3 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-xl border border-gray-100 dark:border-gray-700"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="p-3 bg-indigo-50 dark:bg-indigo-900/30 rounded-full"
                  >
                    <item.Icon className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInRight}
            className="flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <Image
                src="/assets/hero-img.png"
                alt="Creaite Hive Enterprise"
                width={500}
                height={500}
                className="object-contain drop-shadow-xl"
                priority
              />
              
              {/* Decorative elements */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-8 -right-8 w-24 h-24 bg-indigo-200 dark:bg-indigo-800 rounded-full opacity-30 blur-xl"
              />
              
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.5, 0.2]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5
                }}
                className="absolute -bottom-6 -left-6 w-20 h-20 bg-purple-200 dark:bg-purple-800 rounded-full opacity-20 blur-lg"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}