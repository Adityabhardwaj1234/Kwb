"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import CustomCursor from "@/components/CustomCursor";
import Layout from "@/components/Layout";
import MagneticButton from "@/components/MagneticButton";
import ScrollReveal, {
  StaggeredReveal,
  StaggerItem,
} from "@/components/ScrollReveal";

// Dynamic imports for performance
const AlienPlanet = dynamic(() => import("@/components/AlienPlanet"), {
  ssr: false,
  loading: () => <div className="fixed inset-0 -z-10 bg-black" />,
});

export default function HomePage() {
  const [isMobile, setIsMobile] = useState(false);
  const [isPDFModalOpen, setIsPDFModalOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const stats = [
    { number: "100+", label: "Projects Completed" },
    { number: "₹1000Cr+", label: "Project Value" },
    { number: "99%", label: "Client Satisfaction" },
    { number: "5+", label: "Years Experience" },
  ];

  const services = [
    {
      icon: "🏗️",
      title: "Infrastructure Development",
      description:
        "Comprehensive infrastructure projects including roads, bridges, and urban development.",
    },
    {
      icon: "🏢",
      title: "Building Construction",
      description:
        "Commercial, residential, and industrial construction with modern building technologies.",
    },
    {
      icon: "💧",
      title: "Water Management",
      description:
        "Advanced water supply systems, sewage treatment, and drainage solutions.",
    },
    {
      icon: "⚡",
      title: "Electrical Systems",
      description:
        "Complete electrical installations, power distribution, and smart grid solutions.",
    },
  ];

  const sponsors = [
    {
      name: "Ministry of Road Transport & Highways",
      category: "Government Partner",
      description: "Strategic partnership for highway infrastructure projects",
    },
    {
      name: "Indian Railways",
      category: "Infrastructure Partner",
      description: "Collaboration on railway infrastructure development",
    },
    {
      name: "Delhi Development Authority",
      category: "Urban Development",
      description: "Urban planning and development projects",
    },
    {
      name: "Central Public Works Department",
      category: "Public Works",
      description: "Government building and infrastructure projects",
    },
  ];

  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqItems = [
    {
      question: "What types of projects does Kawachi Infratech handle?",
      answer:
        "We specialize in comprehensive infrastructure projects including roads, bridges, building construction, water management systems, electrical installations, and transportation networks across public and private sectors.",
    },
    {
      question: "What is Kawachi Infratech's approach to quality and safety?",
      answer:
        "We implement rigorous quality control measures, follow international safety standards, and use advanced project management systems with real-time monitoring to ensure all projects meet the highest standards of excellence.",
    },
    {
      question: "How does Kawachi Infratech ensure timely project delivery?",
      answer:
        "We use digital project management tools, BIM integration, and advanced planning methodologies combined with experienced teams to ensure projects are delivered on time and within budget.",
    },
  ];

  return (
    <>
      <CustomCursor isMobile={isMobile} />
      <AlienPlanet isMobile={isMobile} />

      <Layout>
        {/* Hero Section */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center relative overflow-hidden"
        >
          <div className="max-w-6xl mx-auto text-center px-4 md:px-6 relative z-10">
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-kawachi-primary via-kawachi-secondary to-kawachi-accent bg-clip-text text-transparent leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Engineering Infrastructure for the Future
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Leading Construction & Infrastructure Development Across India
            </motion.p>

            <motion.p
              className="text-base md:text-lg text-gray-400 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              Kawachi Infratech delivers innovative, scalable, and sustainable
              engineering solutions with cutting-edge technology, BIM
              integration, and proven expertise.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <MagneticButton href="#projects" variant="primary">
                Explore Projects
              </MagneticButton>
              <MagneticButton href="#services" variant="secondary">
                Our Services
              </MagneticButton>
              <MagneticButton href="#contact" variant="secondary">
                Get Quote
              </MagneticButton>
            </motion.div>
          </div>

          {/* Floating elements */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 md:w-4 md:h-4 bg-kawachi-primary/20 rounded-full"
                style={{
                  left: `${8 + i * 12}%`,
                  top: `${15 + (i % 4) * 20}%`,
                }}
                animate={{
                  y: [0, -25, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section
          id="stats"
          className="py-16 md:py-24 bg-gradient-to-r from-kawachi-dark to-kawachi-darker relative"
        >
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <ScrollReveal>
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-kawachi-primary to-kawachi-accent bg-clip-text text-transparent mb-4 md:mb-6">
                  Our Impact & Achievements
                </h2>
                <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
                  Delivering excellence across infrastructure projects with
                  measurable results
                </p>
              </div>
            </ScrollReveal>

            <StaggeredReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="text-center p-6 md:p-8 bg-kawachi-primary/5 backdrop-blur-intense border border-kawachi-primary/20 rounded-2xl hover:border-kawachi-primary/40 hover:shadow-glow transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <motion.div
                      className="text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-kawachi-primary to-kawachi-accent bg-clip-text text-transparent mb-3 md:mb-4"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {stat.number}
                    </motion.div>
                    <p className="text-gray-300 font-semibold uppercase tracking-wide text-sm md:text-base">
                      {stat.label}
                    </p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggeredReveal>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24 relative">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <ScrollReveal>
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-kawachi-primary via-kawachi-secondary to-kawachi-accent bg-clip-text text-transparent mb-4 md:mb-6">
                  Comprehensive Infrastructure Services
                </h2>
                <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
                  Delivering world-class construction and engineering solutions
                  across diverse sectors
                </p>
              </div>
            </ScrollReveal>

            <StaggeredReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {services.map((service, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="bg-kawachi-dark/70 backdrop-blur-intense border border-kawachi-primary/20 rounded-2xl p-6 md:p-8 h-full transition-all duration-300 hover:border-kawachi-primary/40 hover:shadow-glow group"
                    whileHover={{ y: -10 }}
                  >
                    <div className="text-3xl md:text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4 group-hover:text-kawachi-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                      {service.description}
                    </p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggeredReveal>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="py-16 md:py-24 bg-gradient-to-r from-kawachi-darker to-kawachi-dark relative"
        >
          <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
            <ScrollReveal>
              <div className="mb-8 md:mb-12">
                <motion.img
                  src="/Kawachi_logo_design4.jpg"
                  alt="Kawachi Infratech Logo"
                  className="w-20 h-20 md:w-24 md:h-24 mx-auto rounded-2xl mb-6 md:mb-8 border-2 border-kawachi-primary/30 shadow-glow object-cover"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                />

                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-kawachi-primary to-kawachi-accent bg-clip-text text-transparent mb-4 md:mb-6">
                  Kawachi Infratech Private Limited
                </h2>

                <p className="text-xl md:text-2xl text-kawachi-secondary font-medium mb-6 md:mb-8">
                  Engineering Infrastructure for the Future
                </p>

                <p className="text-sm md:text-lg text-gray-400 leading-relaxed mb-8 md:mb-12 max-w-3xl mx-auto">
                  We are a forward-thinking infrastructure company delivering
                  innovative, scalable, and sustainable engineering solutions
                  across India's public and private sectors. Since our
                  incorporation in 2021, we have been committed to transforming
                  the infrastructure landscape with cutting-edge technology and
                  engineering excellence.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
                <MagneticButton
                  onClick={() => setIsPDFModalOpen(true)}
                  variant="primary"
                >
                  Company Profile
                </MagneticButton>
                <MagneticButton href="#contact" variant="secondary">
                  Get In Touch
                </MagneticButton>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Sponsors Section */}
        <section id="sponsors" className="py-16 md:py-24 relative">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <ScrollReveal>
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-kawachi-primary to-kawachi-accent bg-clip-text text-transparent mb-4 md:mb-6">
                  Our Partners & Sponsors
                </h2>
                <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
                  Trusted partnerships with government agencies and leading
                  organizations
                </p>
              </div>
            </ScrollReveal>

            <StaggeredReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {sponsors.map((sponsor, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="bg-kawachi-dark/60 backdrop-blur-intense border border-kawachi-primary/20 rounded-2xl p-6 h-full transition-all duration-300 hover:border-kawachi-primary/40 hover:shadow-glow group"
                    whileHover={{ y: -8 }}
                  >
                    <div className="mb-4">
                      <span className="px-3 py-1 bg-kawachi-primary/20 text-kawachi-primary text-xs font-semibold rounded-full border border-kawachi-primary/30">
                        {sponsor.category}
                      </span>
                    </div>
                    <h3 className="text-base md:text-lg font-semibold text-white mb-3 group-hover:text-kawachi-primary transition-colors">
                      {sponsor.name}
                    </h3>
                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                      {sponsor.description}
                    </p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggeredReveal>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-kawachi-darker to-kawachi-dark relative">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <ScrollReveal>
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-kawachi-primary to-kawachi-accent bg-clip-text text-transparent mb-4 md:mb-6">
                  Frequently Asked Questions
                </h2>
                <p className="text-lg md:text-xl text-gray-400">
                  Get answers to common questions about our services and
                  capabilities
                </p>
              </div>
            </ScrollReveal>

            <div className="space-y-3 md:space-y-4">
              {faqItems.map((item, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <motion.div
                    className="bg-kawachi-dark/50 backdrop-blur-intense border border-kawachi-primary/20 rounded-2xl overflow-hidden"
                    whileHover={{ borderColor: "rgba(0, 255, 255, 0.4)" }}
                  >
                    <button
                      className="w-full p-4 md:p-6 text-left flex justify-between items-center hover:bg-kawachi-primary/5 transition-colors"
                      onClick={() =>
                        setOpenFAQ(openFAQ === index ? null : index)
                      }
                    >
                      <span className="text-sm md:text-lg font-semibold text-white pr-4 md:pr-8">
                        {item.question}
                      </span>
                      <motion.span
                        className="text-kawachi-primary text-xl md:text-2xl flex-shrink-0"
                        animate={{ rotate: openFAQ === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        ▼
                      </motion.span>
                    </button>
                    <motion.div
                      initial={false}
                      animate={{
                        height: openFAQ === index ? "auto" : 0,
                        opacity: openFAQ === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 md:p-6 pt-0 text-gray-400 leading-relaxed text-sm md:text-base">
                        {item.answer}
                      </div>
                    </motion.div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 relative">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <ScrollReveal>
              <div className="text-center mb-8 md:mb-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-kawachi-primary to-kawachi-accent bg-clip-text text-transparent mb-4 md:mb-6">
                  Let's Build Something Amazing Together
                </h2>
                <p className="text-lg md:text-xl text-gray-400 mb-8 md:mb-12 max-w-3xl mx-auto">
                  Ready to start your next infrastructure project? Get in touch
                  with our team.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              <ScrollReveal direction="left">
                <div className="space-y-6">
                  <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">
                    Contact Information
                  </h3>

                  <motion.div
                    className="flex items-start gap-4 p-4 bg-kawachi-dark/50 backdrop-blur border border-kawachi-primary/20 rounded-xl hover:border-kawachi-primary/40 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <div className="text-kawachi-primary text-xl">📍</div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">
                        Head Office
                      </h4>
                      <p className="text-gray-400 text-sm md:text-base">
                        New Delhi, India
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start gap-4 p-4 bg-kawachi-dark/50 backdrop-blur border border-kawachi-primary/20 rounded-xl hover:border-kawachi-primary/40 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <div className="text-kawachi-primary text-xl">📧</div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Email</h4>
                      <p className="text-gray-400 text-sm md:text-base">
                        info@kawachiinfratech.com
                      </p>
                    </div>
                  </motion.div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right">
                <div className="space-y-4 md:space-y-6">
                  <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">
                    Send us a Message
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 md:py-4 bg-kawachi-dark/50 border border-kawachi-primary/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-kawachi-primary focus:shadow-glow transition-all duration-300"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 md:py-4 bg-kawachi-dark/50 border border-kawachi-primary/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-kawachi-primary focus:shadow-glow transition-all duration-300"
                    />
                  </div>

                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-3 md:py-4 bg-kawachi-dark/50 border border-kawachi-primary/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-kawachi-primary focus:shadow-glow transition-all duration-300 resize-none"
                  />

                  <MagneticButton
                    variant="primary"
                    className="w-full justify-center"
                  >
                    Send Message
                  </MagneticButton>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </Layout>

      {/* PDF Modal */}
      {isPDFModalOpen && (
        <motion.div
          className="fixed inset-0 z-[10000] bg-black/95 backdrop-blur-intense flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsPDFModalOpen(false)}
        >
          <motion.div
            className="bg-kawachi-dark border border-kawachi-primary/20 rounded-2xl w-full max-w-6xl h-[90vh] flex flex-col overflow-hidden shadow-epic"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 md:p-6 border-b border-kawachi-primary/20">
              <h3 className="text-lg md:text-2xl font-semibold text-white">
                Kawachi Infratech Company Profile
              </h3>
              <button
                onClick={() => setIsPDFModalOpen(false)}
                className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-red-500/20 hover:bg-red-500/30 text-red-400 hover:text-red-300 transition-all duration-300 flex items-center justify-center text-lg md:text-xl"
              >
                ×
              </button>
            </div>
            <div className="flex-1">
              <iframe
                src="/Kawachi%20Infratech%20private%20limited_Profile1.1.pdf"
                className="w-full h-full border-none"
                title="Kawachi Infratech Company Profile"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
