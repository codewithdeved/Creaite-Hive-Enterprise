"use client";

import { motion } from "framer-motion";
import { 
  ArrowRight,
  Zap,
  Shield,
  Users,
  Star,
  MessageCircle
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
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function CallToAction() {
  const stats = [
    { icon: Users, number: "10K+", label: "Active Users" },
    { icon: Star, number: "4.9", label: "Rating" },
    { icon: Zap, number: "99%", label: "Uptime" },
    { icon: Shield, number: "24/7", label: "Support" }
  ];

  return (
    <section id="cta" className="relative py-24 bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-600 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black/20"></div>
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 -right-20 w-96 h-96 bg-white rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-300 rounded-full blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-6xl font-bold text-white leading-tight"
          >
            Ready to Transform Your
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Digital Experience?
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mt-6 text-xl text-purple-100 max-w-3xl mx-auto"
          >
            Join thousands of developers, gamers, and businesses who trust Creaite Hive Enterprise 
            for their technology needs. Start your journey with us today.
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4"
              >
                <stat.icon className="w-8 h-8 text-white" />
              </motion.div>
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-purple-200 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            variants={fadeInUp}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-4 bg-white text-gray-900 font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3"
          >
            Get Started Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>

          <motion.button
            variants={fadeInUp}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-white/50 text-white font-semibold text-lg rounded-xl hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm flex items-center gap-3"
          >
            <MessageCircle className="w-5 h-5" />
            Contact Sales
          </motion.button>
        </motion.div>

        <motion.p
          variants={fadeInUp}
          className="text-center mt-8 text-purple-200 text-sm"
        >
          No setup fees • Cancel anytime • 30-day money-back guarantee
        </motion.p>
      </div>
    </section>
  );
}