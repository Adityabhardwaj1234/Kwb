"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "./MagneticButton";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "About", href: "#about" },
    { label: "Sponsors", href: "#sponsors" },
    { label: "News", href: "#news" },
  ];

  return (
    <>
      {/* Navigation */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/95 backdrop-blur-intense border-b border-kawachi-primary/20 shadow-glow"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-kawachi-primary to-kawachi-accent rounded-lg flex items-center justify-center text-black font-bold text-xl animate-glow">
                ⚡
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-kawachi-primary via-kawachi-secondary to-kawachi-accent bg-clip-text text-transparent">
                Kawachi
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="text-gray-300 hover:text-kawachi-primary transition-colors duration-300 relative group whitespace-nowrap"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  data-magnetic
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-kawachi-primary to-kawachi-accent group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}

              <MagneticButton
                href="#contact"
                variant="primary"
                className="text-sm"
              >
                Contact
              </MagneticButton>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-magnetic
            >
              <motion.div
                animate={isMobileMenuOpen ? "open" : "closed"}
                className="flex flex-col gap-1"
              >
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 8 },
                  }}
                  className="w-6 h-0.5 bg-kawachi-primary block"
                />
                <motion.span
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                  }}
                  className="w-6 h-0.5 bg-kawachi-primary block"
                />
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -8 },
                  }}
                  className="w-6 h-0.5 bg-kawachi-primary block"
                />
              </motion.div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-black/98 backdrop-blur-intense border-t border-kawachi-primary/20"
            >
              <div className="px-4 py-6">
                {/* Horizontal scrollable navigation for mobile */}
                <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 -mx-2 px-2">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      className="flex-shrink-0 bg-kawachi-dark/60 backdrop-blur border border-kawachi-primary/20 rounded-xl px-4 py-3 text-sm text-gray-300 hover:text-kawachi-primary hover:border-kawachi-primary/40 transition-all duration-300 whitespace-nowrap"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </div>

                <div className="pt-4 mt-4 border-t border-kawachi-primary/20">
                  <MagneticButton
                    href="#contact"
                    variant="primary"
                    className="w-full justify-center text-sm py-3"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get In Touch
                  </MagneticButton>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-kawachi-darker border-t border-kawachi-primary/20">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Services
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-kawachi-primary transition-colors"
                  >
                    Infrastructure Development
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-kawachi-primary transition-colors"
                  >
                    Building Construction
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-kawachi-primary transition-colors"
                  >
                    Water Management
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-kawachi-primary transition-colors"
                  >
                    Electrical Systems
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-kawachi-primary transition-colors"
                  >
                    Civil Engineering
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-kawachi-primary transition-colors"
                  >
                    MEP Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-kawachi-primary transition-colors"
                  >
                    Project Consulting
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-kawachi-primary transition-colors"
                  >
                    Maintenance Services
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Resources
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-kawachi-primary transition-colors"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-kawachi-primary transition-colors"
                  >
                    Case Studies
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-kawachi-primary transition-colors"
                  >
                    Safety Guidelines
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-kawachi-primary transition-colors"
                  >
                    Quality Standards
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Connect</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-kawachi-primary transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-kawachi-primary transition-colors"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-kawachi-primary transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-kawachi-primary transition-colors"
                  >
                    Newsletter
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-kawachi-primary/20 pt-8 text-center text-gray-400">
            <p>
              &copy; 2024 Kawachi Infratech Private Limited. All rights
              reserved.
            </p>
            <div className="flex justify-center items-center gap-4 mt-4">
              {["🐦", "💬", "🔗", "📱"].map((icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-kawachi-primary/10 rounded-lg flex items-center justify-center text-kawachi-primary hover:bg-kawachi-primary hover:text-black transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  data-magnetic
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
