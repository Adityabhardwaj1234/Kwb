"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import MagneticButton from "@/components/MagneticButton";

export default function HomePage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <Layout>
      {/* Simple Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative">
        <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
          <motion.h1
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-kawachi-primary to-kawachi-accent bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Kawachi Infratech
          </motion.h1>

          <motion.p
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Engineering Infrastructure for the Future
          </motion.p>

          <motion.div
            className="flex gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <MagneticButton href="#about" variant="primary">
              Learn More
            </MagneticButton>
            <MagneticButton href="#contact" variant="secondary">
              Contact Us
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* Simple About Section */}
      <section id="about" className="py-24 bg-kawachi-dark">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            About Kawachi Infratech
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            We are a leading infrastructure development company delivering
            innovative and sustainable engineering solutions across India.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-kawachi-primary/10 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-kawachi-primary mb-4">
                100+
              </h3>
              <p className="text-gray-400">Projects Completed</p>
            </div>
            <div className="bg-kawachi-secondary/10 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-kawachi-secondary mb-4">
                ₹1000Cr+
              </h3>
              <p className="text-gray-400">Project Value</p>
            </div>
            <div className="bg-kawachi-accent/10 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-kawachi-accent mb-4">
                99%
              </h3>
              <p className="text-gray-400">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Contact Section */}
      <section id="contact" className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Ready to start your next infrastructure project? Let's discuss your
            requirements.
          </p>
          <MagneticButton variant="primary">Contact Us Today</MagneticButton>
        </div>
      </section>
    </Layout>
  );
}
