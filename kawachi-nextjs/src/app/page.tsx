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

// Temporarily disabled AlienPlanet due to React Three Fiber issues
// const AlienPlanet = dynamic(() => import("@/components/AlienPlanet"), {
//   ssr: false,
//   loading: () => <div className="fixed inset-0 -z-10 bg-black" />,
// });

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

  const portfolioProjects = [
    {
      title: "Delhi Metro Extension Phase 4",
      category: "Transportation Infrastructure",
      location: "New Delhi",
      value: "₹850 Cr",
      duration: "48 months",
      status: "Completed",
      image: "https://images.pexels.com/photos/681347/pexels-photo-681347.jpeg",
      description:
        "Underground metro line extension with 15 stations covering 28.5 km route.",
      technologies: [
        "TBM Construction",
        "Advanced Signaling",
        "Smart Stations",
      ],
    },
    {
      title: "Smart City Gurgaon Infrastructure",
      category: "Urban Development",
      location: "Gurgaon, Haryana",
      value: "₹1200 Cr",
      duration: "60 months",
      status: "In Progress",
      image:
        "https://images.pexels.com/photos/11505610/pexels-photo-11505610.jpeg",
      description:
        "Comprehensive smart city development including roads, utilities, and digital infrastructure.",
      technologies: ["IoT Integration", "Smart Grid", "Sustainable Design"],
    },
    {
      title: "Yamuna Water Treatment Plant",
      category: "Water Management",
      location: "Delhi",
      value: "₹450 Cr",
      duration: "36 months",
      status: "Completed",
      image:
        "https://images.pexels.com/photos/1259924/pexels-photo-1259924.jpeg",
      description:
        "State-of-the-art water treatment facility serving 1.5 million residents.",
      technologies: [
        "Advanced Filtration",
        "Automated Systems",
        "Environmental Protection",
      ],
    },
    {
      title: "National Highway 48 Expansion",
      category: "Highway Construction",
      location: "Delhi-Mumbai Corridor",
      value: "₹2200 Cr",
      duration: "72 months",
      status: "In Progress",
      image:
        "https://images.pexels.com/photos/32889240/pexels-photo-32889240.jpeg",
      description:
        "6-lane highway expansion with smart traffic management systems.",
      technologies: [
        "Smart Traffic Systems",
        "Weather Monitoring",
        "Automated Toll",
      ],
    },
    {
      title: "AIIMS Expansion Project",
      category: "Healthcare Infrastructure",
      location: "New Delhi",
      value: "₹680 Cr",
      duration: "42 months",
      status: "Completed",
      image:
        "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg",
      description:
        "Modern healthcare facility with 500 beds and advanced medical equipment.",
      technologies: [
        "Green Building",
        "Advanced HVAC",
        "Smart Building Systems",
      ],
    },
    {
      title: "Renewable Energy Grid Integration",
      category: "Power Infrastructure",
      location: "Rajasthan",
      value: "₹950 Cr",
      duration: "30 months",
      status: "In Progress",
      image:
        "https://images.pexels.com/photos/8488029/pexels-photo-8488029.jpeg",
      description:
        "Smart grid infrastructure for solar and wind energy integration.",
      technologies: ["Smart Grid", "Energy Storage", "Grid Automation"],
    },
    {
      title: "Bengaluru International Airport Terminal 3",
      category: "Airport Infrastructure",
      location: "Bengaluru, Karnataka",
      value: "₹1800 Cr",
      duration: "54 months",
      status: "In Progress",
      image:
        "https://images.pexels.com/photos/32889240/pexels-photo-32889240.jpeg",
      description:
        "Modern airport terminal with capacity for 50 million passengers annually.",
      technologies: [
        "Smart Terminal",
        "Automated Systems",
        "Sustainable Design",
      ],
    },
    {
      title: "Mumbai Coastal Road Project",
      category: "Coastal Infrastructure",
      location: "Mumbai, Maharashtra",
      value: "₹2400 Cr",
      duration: "66 months",
      status: "Completed",
      image: "https://images.pexels.com/photos/681347/pexels-photo-681347.jpeg",
      description:
        "8-lane coastal expressway connecting South Mumbai to Western suburbs.",
      technologies: [
        "Coastal Engineering",
        "Marine Construction",
        "Environmental Protection",
      ],
    },
    {
      title: "Noida-Greater Noida Metro Link",
      category: "Metro Infrastructure",
      location: "Uttar Pradesh",
      value: "₹1350 Cr",
      duration: "45 months",
      status: "Completed",
      image: "https://images.pexels.com/photos/681347/pexels-photo-681347.jpeg",
      description:
        "29.7 km metro line connecting Noida to Greater Noida with 21 stations.",
      technologies: [
        "Elevated Construction",
        "Automated Train Control",
        "Modern Stations",
      ],
    },
    {
      title: "Gandhinagar Smart Water Management",
      category: "Smart Infrastructure",
      location: "Gandhinagar, Gujarat",
      value: "₹780 Cr",
      duration: "36 months",
      status: "In Progress",
      image:
        "https://images.pexels.com/photos/1259924/pexels-photo-1259924.jpeg",
      description: "IoT-enabled water distribution system for the entire city.",
      technologies: [
        "IoT Sensors",
        "Smart Meters",
        "Data Analytics",
        "Mobile Apps",
      ],
    },
    {
      title: "Chandigarh Solar Power Plant",
      category: "Renewable Energy",
      location: "Chandigarh",
      value: "₹420 Cr",
      duration: "24 months",
      status: "Completed",
      image:
        "https://images.pexels.com/photos/8488029/pexels-photo-8488029.jpeg",
      description: "100 MW solar power plant with battery storage system.",
      technologies: [
        "Solar PV",
        "Battery Storage",
        "Grid Integration",
        "Monitoring Systems",
      ],
    },
    {
      title: "Kochi Metro Rail Extension",
      category: "Urban Transport",
      location: "Kochi, Kerala",
      value: "₹1100 Cr",
      duration: "48 months",
      status: "In Progress",
      image: "https://images.pexels.com/photos/681347/pexels-photo-681347.jpeg",
      description:
        "Extension of Kochi Metro to connect airport and major IT hubs.",
      technologies: ["Metro Systems", "Elevated Tracks", "Smart Ticketing"],
    },
    {
      title: "Jaipur Convention Center Complex",
      category: "Commercial Infrastructure",
      location: "Jaipur, Rajasthan",
      value: "₹890 Cr",
      duration: "42 months",
      status: "Completed",
      image:
        "https://images.pexels.com/photos/11505610/pexels-photo-11505610.jpeg",
      description:
        "World-class convention center with hotel and exhibition facilities.",
      technologies: [
        "Modern Architecture",
        "Smart Building",
        "Conference Technology",
      ],
    },
    {
      title: "Bhubaneswar Smart Stadium",
      category: "Sports Infrastructure",
      location: "Bhubaneswar, Odisha",
      value: "₹650 Cr",
      duration: "30 months",
      status: "Completed",
      image:
        "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg",
      description:
        "Multi-purpose stadium with 60,000 capacity and modern amenities.",
      technologies: [
        "Smart Lighting",
        "Digital Scoreboards",
        "Retractable Roof",
      ],
    },
    {
      title: "Hyderabad IT Corridor Phase 2",
      category: "IT Infrastructure",
      location: "Hyderabad, Telangana",
      value: "₹1600 Cr",
      duration: "60 months",
      status: "In Progress",
      image:
        "https://images.pexels.com/photos/11505610/pexels-photo-11505610.jpeg",
      description:
        "Expansion of HITEC City with modern office complexes and infrastructure.",
      technologies: ["Fiber Optic", "Smart Buildings", "Green Technology"],
    },
    {
      title: "Lucknow Waste Management Plant",
      category: "Environmental Infrastructure",
      location: "Lucknow, Uttar Pradesh",
      value: "₹540 Cr",
      duration: "36 months",
      status: "In Progress",
      image:
        "https://images.pexels.com/photos/1259924/pexels-photo-1259924.jpeg",
      description:
        "Advanced waste-to-energy plant processing 2000 tons of waste daily.",
      technologies: [
        "Waste-to-Energy",
        "Emission Control",
        "Automated Sorting",
      ],
    },
    {
      title: "Agra Tourism Infrastructure Upgrade",
      category: "Tourism Infrastructure",
      location: "Agra, Uttar Pradesh",
      value: "₹720 Cr",
      duration: "40 months",
      status: "Completed",
      image:
        "https://images.pexels.com/photos/32889240/pexels-photo-32889240.jpeg",
      description:
        "Comprehensive infrastructure upgrade around Taj Mahal including roads and facilities.",
      technologies: [
        "Heritage Conservation",
        "Smart Tourism",
        "Sustainable Development",
      ],
    },
  ];

  const newsItems = [
    {
      title: "Kawachi Infratech Wins ₹1500 Cr Smart City Project in Pune",
      date: "December 15, 2024",
      category: "Project Award",
      excerpt:
        "Our company has been selected as the primary contractor for Pune's comprehensive smart city infrastructure development, marking our largest single project to date.",
      image:
        "https://images.pexels.com/photos/11505610/pexels-photo-11505610.jpeg",
      tags: ["Smart City", "Urban Development", "Technology Integration"],
    },
    {
      title: "Completion of Delhi Metro Phase 4 Extension Ahead of Schedule",
      date: "November 28, 2024",
      category: "Project Completion",
      excerpt:
        "Successfully completed the 28.5 km metro extension 6 months ahead of schedule, demonstrating our commitment to timely delivery and quality execution.",
      image: "https://images.pexels.com/photos/681347/pexels-photo-681347.jpeg",
      tags: ["Metro Construction", "Public Transport", "Infrastructure"],
    },
    {
      title:
        "Kawachi Infratech Adopts Advanced BIM Technology for All Projects",
      date: "November 10, 2024",
      category: "Technology",
      excerpt:
        "Implementation of Building Information Modeling across all projects enhances precision, reduces costs, and improves project delivery timelines.",
      image:
        "https://images.pexels.com/photos/6615237/pexels-photo-6615237.jpeg",
      tags: ["BIM", "Technology", "Innovation", "Digital Transformation"],
    },
    {
      title: "Partnership with IIT Delhi for Sustainable Construction Research",
      date: "October 22, 2024",
      category: "Partnership",
      excerpt:
        "Collaboration with IIT Delhi's Civil Engineering department to develop eco-friendly construction materials and sustainable building practices.",
      image:
        "https://images.pexels.com/photos/32866728/pexels-photo-32866728.jpeg",
      tags: ["Research", "Sustainability", "Innovation", "Academia"],
    },
    {
      title: "ISO 45001:2018 Certification for Occupational Health & Safety",
      date: "October 5, 2024",
      category: "Certification",
      excerpt:
        "Achieved ISO 45001:2018 certification, reinforcing our commitment to maintaining the highest standards of workplace safety across all projects.",
      image:
        "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg",
      tags: ["Safety", "Certification", "Standards", "Workplace"],
    },
    {
      title:
        "Green Building Initiative: 50% Projects to be LEED Certified by 2025",
      date: "September 18, 2024",
      category: "Sustainability",
      excerpt:
        "Announcing our commitment to environmental sustainability with a target of 50% LEED certified projects by 2025, supporting India's green building mission.",
      image:
        "https://images.pexels.com/photos/1259924/pexels-photo-1259924.jpeg",
      tags: ["LEED", "Green Building", "Sustainability", "Environment"],
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
      {/* Animated background instead of AlienPlanet */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-kawachi-space via-kawachi-darker to-kawachi-dark" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,255,255,0.1)_0%,_transparent_50%)]" />
      </div>

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

        {/* Portfolio Section */}
        <section
          id="portfolio"
          className="py-16 md:py-24 bg-gradient-to-r from-kawachi-darker to-kawachi-dark relative"
        >
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <ScrollReveal>
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-kawachi-primary to-kawachi-accent bg-clip-text text-transparent mb-4 md:mb-6">
                  Our Portfolio
                </h2>
                <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
                  Showcasing landmark infrastructure projects that demonstrate
                  our expertise and commitment to excellence
                </p>
              </div>
            </ScrollReveal>

            <StaggeredReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {portfolioProjects.map((project, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="bg-kawachi-dark/60 backdrop-blur-intense border border-kawachi-primary/20 rounded-2xl overflow-hidden h-full transition-all duration-300 hover:border-kawachi-primary/40 hover:shadow-epic group"
                    whileHover={{ y: -8, scale: 1.02 }}
                  >
                    <div className="relative h-48 md:h-56 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-kawachi-dark via-transparent to-transparent" />
                      <div className="absolute top-4 left-4 right-4 flex justify-between">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            project.status === "Completed"
                              ? "bg-green-500/20 text-green-400 border border-green-500/30"
                              : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                          }`}
                        >
                          {project.status}
                        </span>
                        <span className="px-3 py-1 bg-kawachi-primary/20 text-kawachi-primary text-xs font-semibold rounded-full border border-kawachi-primary/30">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-lg md:text-xl font-semibold text-white mb-2 group-hover:text-kawachi-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-kawachi-secondary text-sm mb-3">
                        📍 {project.location}
                      </p>
                      <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>

                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide">
                            Value
                          </p>
                          <p className="text-kawachi-primary font-semibold text-sm">
                            {project.value}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide">
                            Duration
                          </p>
                          <p className="text-kawachi-secondary font-semibold text-sm">
                            {project.duration}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">
                          Technologies
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 py-1 bg-kawachi-accent/10 text-kawachi-accent text-xs rounded-md"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
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

        {/* News Section */}
        <section id="news" className="py-16 md:py-24 relative">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <ScrollReveal>
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-kawachi-primary to-kawachi-accent bg-clip-text text-transparent mb-4 md:mb-6">
                  Latest News & Updates
                </h2>
                <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
                  Stay updated with our latest projects, achievements, and
                  industry developments
                </p>
              </div>
            </ScrollReveal>

            <StaggeredReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {newsItems.map((news, index) => (
                <StaggerItem key={index}>
                  <motion.article
                    className="bg-kawachi-dark/50 backdrop-blur-intense border border-kawachi-primary/20 rounded-2xl overflow-hidden h-full transition-all duration-300 hover:border-kawachi-primary/40 hover:shadow-glow group"
                    whileHover={{ y: -5 }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={news.image}
                        alt={news.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-kawachi-dark via-transparent to-transparent" />
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-kawachi-secondary/20 text-kawachi-secondary text-xs font-semibold rounded-full border border-kawachi-secondary/30">
                          {news.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-kawachi-primary text-sm">📅</span>
                        <time className="text-gray-500 text-sm">
                          {news.date}
                        </time>
                      </div>

                      <h3 className="text-lg font-semibold text-white mb-3 leading-tight group-hover:text-kawachi-primary transition-colors">
                        {news.title}
                      </h3>

                      <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        {news.excerpt}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {news.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-kawachi-primary/10 text-kawachi-primary text-xs rounded-md border border-kawachi-primary/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <motion.button
                        className="mt-4 text-kawachi-accent text-sm font-medium hover:text-kawachi-primary transition-colors inline-flex items-center gap-1"
                        whileHover={{ x: 5 }}
                      >
                        Read More →
                      </motion.button>
                    </div>
                  </motion.article>
                </StaggerItem>
              ))}
            </StaggeredReveal>

            {/* Newsletter Signup */}
            <ScrollReveal>
              <div className="mt-16 bg-kawachi-dark/30 backdrop-blur border border-kawachi-primary/20 rounded-2xl p-8 text-center">
                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                  Stay Updated
                </h3>
                <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                  Subscribe to our newsletter for the latest project updates,
                  industry insights, and company news.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 bg-kawachi-dark/50 border border-kawachi-primary/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-kawachi-primary focus:shadow-glow transition-all duration-300"
                  />
                  <MagneticButton variant="primary" className="px-6">
                    Subscribe
                  </MagneticButton>
                </div>
              </div>
            </ScrollReveal>
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
