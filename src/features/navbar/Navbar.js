"use client";

import Link from "next/link";
import { useState } from "react";
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Consistent animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
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
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoaded } = useUser();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "#about" },
    { name: "Features", href: "#features" },
    { name: "Subscriptions", href: "/subscriptions" },
    { name: "Contact Us", href: "#contact" },
  ];

  const AuthSection = () => {
    const { isSignedIn } = useUser();
    return (
      <div className="flex items-center gap-4">
        {!isSignedIn ? (
          <>
            <SignInButton mode="modal">
              <button className="px-4 py-2 text-sm font-medium rounded-lg border border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition-all duration-300">
                Sign In
              </button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className="px-4 py-2 text-sm font-medium rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-all duration-300">
                Sign Up
              </button>
            </SignUpButton>
          </>
        ) : (
          <UserButton afterSignOutUrl="/" />
        )}
      </div>
    );
  };

  const MobileAuthSection = () => {
    const { isSignedIn } = useUser();
    return (
      <div className="space-y-2">
        {!isSignedIn ? (
          <>
            <SignInButton mode="modal">
              <button className="w-full px-4 py-2 text-sm font-medium rounded-lg border border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition-all duration-300">
                Sign In
              </button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className="w-full px-4 py-2 text-sm font-medium rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-all duration-300">
                Sign Up
              </button>
            </SignUpButton>
          </>
        ) : (
          <UserButton afterSignOutUrl="/" />
        )}
      </div>
    );
  };

  // Don't render anything until Clerk is loaded
  if (!isLoaded) return null;

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div variants={fadeInUp}>
            <Link
              href="/"
              className="text-xl sm:text-2xl font-bold text-indigo-600 hover:text-indigo-700 transition-colors duration-300"
            >
              Creaite Hive Enterprise
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <motion.div
            className="hidden md:flex items-center gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {navLinks.map((link) => (
              <motion.div key={link.name} variants={fadeInUp}>
                <Link
                  href={link.href}
                  className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 font-medium relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}

            {/* Auth Section */}
            <motion.div variants={fadeInUp}>
              <AuthSection />
            </motion.div>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.div className="md:hidden" variants={fadeInUp}>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 rounded-md hover:bg-gray-100 transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg overflow-hidden"
          >
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="flex flex-col px-4 py-4 space-y-3"
            >
              {navLinks.map((link) => (
                <motion.div key={link.name} variants={fadeInUp}>
                  <Link
                    href={link.href}
                    className="block text-gray-700 hover:text-indigo-600 transition-colors duration-300 font-medium py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              {/* Auth Section for Mobile */}
              <motion.div variants={fadeInUp} className="pt-2 border-t border-gray-200">
                <MobileAuthSection />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}