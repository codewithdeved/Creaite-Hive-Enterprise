"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

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
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      question: "What services does Creaite Hive Enterprise offer?",
      answer: "We specialize in AI-driven innovation, custom PC builds, premium gaming peripherals, SaaS solutions, and cloud services. Our comprehensive platform empowers developers, gamers, and businesses with cutting-edge technology solutions."
    },
    {
      question: "How do your subscription plans work?",
      answer: "Our flexible subscription plans provide access to premium services, exclusive products, and ongoing support. Choose from monthly or annual plans with different tiers based on your needs, from individual developers to enterprise solutions."
    },
    {
      question: "Do you provide technical support for your products?",
      answer: "Yes! We offer comprehensive 24/7 technical support, including installation guidance, troubleshooting assistance, and ongoing maintenance. Our expert team ensures you get the most out of your Creaite Hive Enterprise experience."
    },
    {
      question: "Can I customize my PC build requirements?",
      answer: "Absolutely! We specialize in custom PC builds tailored to your specific needs - whether for gaming, development, content creation, or business applications. Our team works with you to design the perfect system within your budget."
    },
    {
      question: "What is your warranty and return policy?",
      answer: "We offer a comprehensive 2-year warranty on all custom builds and premium products. Our 30-day return policy ensures your satisfaction. All products undergo rigorous quality testing before delivery."
    },
    {
      question: "How do I get started with Creaite Hive Enterprise?",
      answer: "Getting started is easy! Browse our services, choose a subscription plan that fits your needs, or contact our team for a personalized consultation. We'll guide you through the entire process from selection to setup."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          {/* <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/30 rounded-full mb-6"
          >
            <HelpCircle className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <span className="text-indigo-600 dark:text-indigo-400 font-medium">FAQ</span>
          </motion.div> */}

          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent relative inline-block"
          >
            Frequently Asked Questions
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"
            />
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Get answers to common questions about our services and platform
          </motion.p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-4"
        >
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              className="bg-gray-50 dark:bg-gray-700 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              <motion.button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <span className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-gray-600 dark:text-gray-300 leading-relaxed border-t border-gray-200 dark:border-gray-600 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}