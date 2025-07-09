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
      setIsMobile(
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent,
        ) || window.innerWidth <= 768,
      );
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const stats = [
    {
      number: "100+",
      label: "Projects Completed",
      description: "Successful infrastructure developments across India",
    },
    {
      number: "₹1000Cr+",
      label: "Project Value",
      description: "Total value of projects delivered",
    },
    {
      number: "99%",
      label: "Client Satisfaction",
      description: "Exceptional quality and service delivery",
    },
    {
      number: "5+",
      label: "Years Experience",
      description: "Proven track record in construction industry",
    },
  ];

  const services = [
    {
      icon: "🏗️",
      title: "Infrastructure Development",
      description:
        "Comprehensive infrastructure projects including roads, bridges, and urban development. We deliver scalable solutions that drive economic growth and connectivity.",
      image:
        "https://images.pexels.com/photos/32889240/pexels-photo-32889240.jpeg",
      features: [
        "Highway Construction",
        "Bridge Engineering",
        "Urban Planning",
        "Smart City Solutions",
      ],
    },
    {
      icon: "🏢",
      title: "Building Construction",
      description:
        "Commercial, residential, and industrial construction with modern building technologies. We ensure quality, safety, and timely delivery on all projects.",
      image:
        "https://images.pexels.com/photos/11505610/pexels-photo-11505610.jpeg",
      features: [
        "High-Rise Buildings",
        "Commercial Complexes",
        "Residential Projects",
        "Industrial Facilities",
      ],
    },
    {
      icon: "💧",
      title: "Water Management",
      description:
        "Advanced water supply systems, sewage treatment, and drainage solutions. Sustainable water infrastructure for growing urban communities.",
      image:
        "https://images.pexels.com/photos/1259924/pexels-photo-1259924.jpeg",
      features: [
        "Water Treatment Plants",
        "Pipeline Networks",
        "Drainage Systems",
        "Irrigation Projects",
      ],
    },
    {
      icon: "⚡",
      title: "Electrical Systems",
      description:
        "Complete electrical installations, power distribution, and smart grid solutions. Modern electrical infrastructure supporting digital transformation.",
      image:
        "https://images.pexels.com/photos/8488029/pexels-photo-8488029.jpeg",
      features: [
        "Power Distribution",
        "Smart Grid Systems",
        "Industrial Wiring",
        "Renewable Energy",
      ],
    },
    {
      icon: "🛣️",
      title: "Transportation Networks",
      description:
        "Highway construction, road maintenance, and transportation infrastructure. Connecting communities with reliable and durable transportation systems.",
      image: "https://images.pexels.com/photos/681347/pexels-photo-681347.jpeg",
      features: [
        "Highway Engineering",
        "Traffic Management",
        "Road Maintenance",
        "Transport Planning",
      ],
    },
    {
      icon: "📋",
      title: "Project Management",
      description:
        "End-to-end project management with advanced planning, execution, and quality control. Ensuring projects are delivered on time, within budget, and to specification.",
      image:
        "https://images.pexels.com/photos/32866728/pexels-photo-32866728.jpeg",
      features: [
        "Planning & Design",
        "Quality Control",
        "Risk Management",
        "Stakeholder Coordination",
      ],
    },
  ];

  const capabilities = [
    {
      icon: "🏗️",
      title: "Advanced Construction",
      description:
        "Modern construction techniques with BIM integration, prefabrication, and smart building technologies for enhanced efficiency and quality.",
      image:
        "https://images.pexels.com/photos/6615237/pexels-photo-6615237.jpeg",
      technologies: [
        "BIM Integration",
        "Prefabrication",
        "3D Modeling",
        "Smart Construction",
      ],
    },
    {
      icon: "🔧",
      title: "Engineering Excellence",
      description:
        "Comprehensive engineering services including structural, MEP, and civil engineering with state-of-the-art design and analysis capabilities.",
      image:
        "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg",
      technologies: [
        "Structural Analysis",
        "CAD Design",
        "Finite Element Analysis",
        "Quality Assurance",
      ],
    },
    {
      icon: "📊",
      title: "Digital Project Management",
      description:
        "Integrated project management systems with real-time monitoring, IoT sensors, and data analytics for optimized project execution and delivery.",
      image:
        "https://images.pexels.com/photos/32866728/pexels-photo-32866728.jpeg",
      technologies: [
        "IoT Monitoring",
        "Data Analytics",
        "Real-time Tracking",
        "Digital Workflows",
      ],
    },
  ];

  const projects = [
    {
      title: "Modern Commercial Complex",
      description:
        "30-story mixed-use development in Delhi featuring sustainable design and smart building systems.",
      value: "₹500 Cr",
      duration: "36 months",
      image:
        "https://images.pexels.com/photos/11505610/pexels-photo-11505610.jpeg",
      status: "Completed",
      features: ["LEED Certified", "Smart Building", "Mixed-use Development"],
    },
    {
      title: "Highway Infrastructure Project",
      description:
        "200km highway construction with advanced traffic management and environmental protection measures.",
      value: "₹800 Cr",
      duration: "48 months",
      image: "https://images.pexels.com/photos/681347/pexels-photo-681347.jpeg",
      status: "In Progress",
      features: [
        "Smart Traffic Systems",
        "Environmental Protection",
        "Quality Assurance",
      ],
    },
    {
      title: "Water Treatment Facility",
      description:
        "State-of-the-art water treatment plant serving 2 million residents with advanced purification technology.",
      value: "₹300 Cr",
      duration: "24 months",
      image:
        "https://images.pexels.com/photos/1259924/pexels-photo-1259924.jpeg",
      status: "Completed",
      features: [
        "Advanced Filtration",
        "IoT Monitoring",
        "Sustainable Operations",
      ],
    },
  ];

  const ecosystemDivisions = [
    {
      icon: "🏗️",
      title: "Civil Engineering",
      description:
        "Comprehensive civil engineering services including structural design, foundation engineering, and infrastructure development solutions.",
    },
    {
      icon: "⚡",
      title: "MEP Services",
      description:
        "Mechanical, Electrical, and Plumbing systems design and installation with smart building automation and energy-efficient solutions.",
    },
    {
      icon: "📋",
      title: "Project Consulting",
      description:
        "Strategic project consulting, feasibility studies, and engineering advisory services for optimal project planning and execution.",
    },
    {
      icon: "🛠️",
      title: "Maintenance Services",
      description:
        "Comprehensive maintenance and facility management services ensuring long-term asset performance and operational efficiency.",
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Project Director, Delhi Metro",
      quote:
        "Kawachi Infratech delivered exceptional results on our metro infrastructure project. Their attention to detail and innovative solutions exceeded our expectations.",
      image:
        "https://images.pexels.com/photos/32866728/pexels-photo-32866728.jpeg",
    },
    {
      name: "Priya Sharma",
      role: "Municipal Commissioner",
      quote:
        "The water management system implemented by Kawachi has significantly improved our city's infrastructure. Professional team with outstanding execution.",
      image:
        "https://images.pexels.com/photos/32866728/pexels-photo-32866728.jpeg",
    },
  ];

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
    {
      question:
        "What makes Kawachi Infratech different from other construction companies?",
      answer:
        "Our commitment to innovation, sustainability, and technology integration sets us apart. We combine traditional engineering excellence with modern digital solutions and smart building technologies for superior project outcomes.",
    },
    {
      question: "Do you provide maintenance services after project completion?",
      answer:
        "Yes, we offer comprehensive post-completion maintenance and facility management services to ensure long-term performance and operational efficiency of all our delivered projects.",
    },
  ];

  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

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
              style={{ textShadow: "0 0 30px rgba(0, 255, 255, 0.5)" }}
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
              integration, and proven expertise in public and private sector
              projects.
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

          {/* Enhanced floating elements */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
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
                  scale: [1, 1.2, 1],
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

        {/* Enhanced Stats Section */}
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
                  measurable results and proven track record
                </p>
              </div>
            </ScrollReveal>

            <StaggeredReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="text-center p-6 md:p-8 bg-kawachi-primary/5 backdrop-blur-intense border border-kawachi-primary/20 rounded-2xl hover:border-kawachi-primary/40 hover:shadow-glow transition-all duration-300 group"
                    whileHover={{ scale: 1.05, y: -5 }}
                    data-magnetic
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
                    <p className="text-gray-300 font-semibold uppercase tracking-wide text-sm md:text-base mb-2">
                      {stat.label}
                    </p>
                    <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                      {stat.description}
                    </p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggeredReveal>
          </div>
        </section>

        {/* Enhanced Services Section */}
        <section id="services" className="py-16 md:py-24 relative">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <ScrollReveal>
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-kawachi-primary via-kawachi-secondary to-kawachi-accent bg-clip-text text-transparent mb-4 md:mb-6">
                  Comprehensive Infrastructure Services
                </h2>
                <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
                  Delivering world-class construction and engineering solutions
                  across diverse sectors with proven expertise
                </p>
              </div>
            </ScrollReveal>

            <StaggeredReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services.map((service, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="bg-kawachi-dark/70 backdrop-blur-intense border border-kawachi-primary/20 rounded-2xl overflow-hidden h-full transition-all duration-300 hover:border-kawachi-primary/40 hover:shadow-glow group"
                    whileHover={{ y: -10 }}
                    data-magnetic
                  >
                    <div className="relative h-48 md:h-56 overflow-hidden">
                      <motion.img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        whileHover={{ scale: 1.1 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-kawachi-dark via-transparent to-transparent" />
                      <div className="absolute top-4 right-4 text-3xl md:text-4xl group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                    </div>

                    <div className="p-6 md:p-8">
                      <h3 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4 group-hover:text-kawachi-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed text-sm md:text-base mb-4 md:mb-6">
                        {service.description}
                      </p>

                      <div className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 text-sm text-gray-500"
                          >
                            <div className="w-1.5 h-1.5 bg-kawachi-primary rounded-full" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggeredReveal>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section
          id="projects"
          className="py-16 md:py-24 bg-gradient-to-r from-kawachi-darker to-kawachi-dark relative"
        >
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <ScrollReveal>
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-kawachi-primary to-kawachi-accent bg-clip-text text-transparent mb-4 md:mb-6">
                  Featured Projects
                </h2>
                <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
                  Showcasing our expertise through landmark infrastructure
                  projects that transform communities
                </p>
              </div>
            </ScrollReveal>

            <StaggeredReveal className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
              {projects.map((project, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="bg-kawachi-dark/60 backdrop-blur-intense border border-kawachi-primary/20 rounded-2xl overflow-hidden h-full transition-all duration-300 hover:border-kawachi-primary/40 hover:shadow-epic group"
                    whileHover={{ y: -8, scale: 1.02 }}
                    data-magnetic
                  >
                    <div className="relative h-48 md:h-56 overflow-hidden">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-kawachi-dark via-transparent to-transparent" />
                      <div className="absolute top-4 right-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            project.status === "Completed"
                              ? "bg-green-500/20 text-green-400 border border-green-500/30"
                              : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 md:p-8">
                      <h3 className="text-lg md:text-xl font-semibold text-white mb-3 group-hover:text-kawachi-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed text-sm md:text-base mb-4">
                        {project.description}
                      </p>

                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide">
                            Project Value
                          </p>
                          <p className="text-kawachi-primary font-semibold">
                            {project.value}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide">
                            Duration
                          </p>
                          <p className="text-kawachi-secondary font-semibold">
                            {project.duration}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        {project.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 text-xs text-gray-500"
                          >
                            <div className="w-1 h-1 bg-kawachi-accent rounded-full" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggeredReveal>
          </div>
        </section>

        {/* Enhanced Capabilities Section */}
        <section id="capabilities" className="py-16 md:py-24 relative">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <ScrollReveal>
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-kawachi-primary via-kawachi-secondary to-kawachi-accent bg-clip-text text-transparent mb-4 md:mb-6">
                  Core Engineering Capabilities
                </h2>
                <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
                  Advanced technical expertise and cutting-edge methodologies
                  for superior project delivery and innovation
                </p>
              </div>
            </ScrollReveal>

            <StaggeredReveal className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
              {capabilities.map((capability, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="bg-kawachi-dark/70 backdrop-blur-intense border border-kawachi-primary/20 rounded-2xl overflow-hidden h-full transition-all duration-300 hover:border-kawachi-primary/40 hover:shadow-epic group"
                    whileHover={{ y: -15, rotateY: 5 }}
                    data-magnetic
                  >
                    <div className="relative h-48 md:h-56 overflow-hidden">
                      <motion.img
                        src={capability.image}
                        alt={capability.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-kawachi-dark via-transparent to-transparent" />
                      <div className="absolute top-4 right-4 text-4xl md:text-5xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                        {capability.icon}
                      </div>
                    </div>

                    <div className="p-6 md:p-10">
                      <h3 className="text-lg md:text-2xl font-semibold text-white mb-4 md:mb-6 group-hover:text-kawachi-primary transition-colors">
                        {capability.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed text-sm md:text-lg mb-6">
                        {capability.description}
                      </p>

                      <div className="grid grid-cols-2 gap-2">
                        {capability.technologies.map((tech, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 text-xs text-gray-500"
                          >
                            <div className="w-1.5 h-1.5 bg-kawachi-accent rounded-full" />
                            {tech}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggeredReveal>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-kawachi-dark to-kawachi-darker relative">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <ScrollReveal>
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-kawachi-primary to-kawachi-accent bg-clip-text text-transparent mb-4 md:mb-6">
                  Client Testimonials
                </h2>
                <p className="text-lg md:text-xl text-gray-400">
                  What our clients say about our exceptional service and quality
                  delivery
                </p>
              </div>
            </ScrollReveal>

            <StaggeredReveal className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {testimonials.map((testimonial, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="bg-kawachi-dark/50 backdrop-blur-intense border border-kawachi-primary/20 rounded-2xl p-6 md:p-8 h-full hover:border-kawachi-primary/40 hover:shadow-glow transition-all duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-start gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border-2 border-kawachi-primary/30"
                      />
                      <div className="flex-1">
                        <h3 className="text-white font-semibold text-base md:text-lg mb-1">
                          {testimonial.name}
                        </h3>
                        <p className="text-kawachi-secondary text-sm mb-4">
                          {testimonial.role}
                        </p>
                        <p className="text-gray-400 leading-relaxed text-sm md:text-base italic">
                          "{testimonial.quote}"
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggeredReveal>
          </div>
        </section>

        {/* Company Divisions Section */}
        <section className="py-16 md:py-24 relative">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <ScrollReveal>
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-kawachi-primary to-kawachi-accent bg-clip-text text-transparent mb-4 md:mb-6">
                  Company Divisions
                </h2>
                <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
                  Specialized divisions delivering comprehensive infrastructure
                  solutions across multiple sectors and industries
                </p>
              </div>
            </ScrollReveal>

            <StaggeredReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {ecosystemDivisions.map((division, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="bg-kawachi-dark/60 backdrop-blur-intense border border-kawachi-primary/20 rounded-2xl p-4 md:p-6 h-full transition-all duration-300 hover:border-kawachi-primary/40 hover:shadow-glow group"
                    whileHover={{ y: -8, scale: 1.02 }}
                    data-magnetic
                  >
                    <div className="text-2xl md:text-3xl mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                      {division.icon}
                    </div>
                    <h3 className="text-base md:text-lg font-semibold text-white mb-2 md:mb-3 group-hover:text-kawachi-primary transition-colors">
                      {division.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-xs md:text-sm">
                      {division.description}
                    </p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggeredReveal>
          </div>
        </section>

        {/* Enhanced FAQ Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-kawachi-darker to-kawachi-dark relative">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <ScrollReveal>
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-kawachi-primary to-kawachi-accent bg-clip-text text-transparent mb-4 md:mb-6">
                  Frequently Asked Questions
                </h2>
                <p className="text-lg md:text-xl text-gray-400">
                  Get answers to common questions about Kawachi Infratech&apos;s
                  services, capabilities, and project delivery approach
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
                      className="w-full p-4 md:p-6 text-left flex justify-between items-center hover:bg-kawachi-primary/5 transition-colors min-h-[60px]"
                      onClick={() =>
                        setOpenFAQ(openFAQ === index ? null : index)
                      }
                      data-magnetic
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

        {/* Enhanced About Section */}
        <section id="about" className="py-16 md:py-24 relative">
          <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
            <ScrollReveal>
              <div className="mb-8 md:mb-12">
                <motion.div
                  className="w-20 h-20 md:w-24 md:h-24 mx-auto rounded-2xl mb-6 md:mb-8 border-2 border-kawachi-primary/30 shadow-glow bg-gradient-to-br from-kawachi-primary/20 to-kawachi-accent/20 flex items-center justify-center text-3xl md:text-4xl"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  ⚡
                </motion.div>

                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-kawachi-primary to-kawachi-accent bg-clip-text text-transparent mb-4 md:mb-6">
                  Kawachi Infratech Private Limited
                </h2>

                <p className="text-xl md:text-2xl text-kawachi-secondary font-medium mb-6 md:mb-8">
                  Engineering Infrastructure for the Future
                </p>

                <p className="text-sm md:text-lg text-gray-400 leading-relaxed mb-8 md:mb-12 max-w-3xl mx-auto">
                  We are a forward-thinking infrastructure company delivering
                  innovative, scalable, and sustainable engineering solutions
                  across India&apos;s public and private sectors. Since our
                  incorporation in 2021, we have been committed to transforming
                  the infrastructure landscape with cutting-edge technology, BIM
                  integration, and engineering excellence.
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
                <MagneticButton
                  href="https://adityabhardwaj1234.github.io/KawachiWeb/Kawachi%20Infratech%20private%20limited_Profile1.1.pdf"
                  variant="secondary"
                >
                  Download PDF
                </MagneticButton>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Enhanced Contact Section */}
        <section
          id="contact"
          className="py-16 md:py-24 bg-gradient-to-r from-kawachi-dark to-kawachi-darker relative"
        >
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <ScrollReveal>
              <div className="text-center mb-8 md:mb-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-kawachi-primary to-kawachi-accent bg-clip-text text-transparent mb-4 md:mb-6">
                  Let&apos;s Build Something Amazing Together
                </h2>
                <p className="text-lg md:text-xl text-gray-400 mb-8 md:mb-12 max-w-3xl mx-auto">
                  Ready to start your next infrastructure project? Get in touch
                  with our team for expert consultation and innovative
                  solutions.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              <ScrollReveal direction="left">
                <div className="space-y-6">
                  <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">
                    Contact Information
                  </h3>

                  <div className="space-y-4">
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
                      <div className="text-kawachi-primary text-xl">📞</div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">Phone</h4>
                        <p className="text-gray-400 text-sm md:text-base">
                          +91 (XXX) XXX-XXXX
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
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right">
                <form className="space-y-4 md:space-y-6">
                  <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">
                    Send us a Message
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 md:py-4 bg-kawachi-dark/50 border border-kawachi-primary/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-kawachi-primary focus:shadow-glow transition-all duration-300"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 md:py-4 bg-kawachi-dark/50 border border-kawachi-primary/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-kawachi-primary focus:shadow-glow transition-all duration-300"
                      required
                    />
                  </div>

                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full px-4 py-3 md:py-4 bg-kawachi-dark/50 border border-kawachi-primary/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-kawachi-primary focus:shadow-glow transition-all duration-300"
                    required
                  />

                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-3 md:py-4 bg-kawachi-dark/50 border border-kawachi-primary/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-kawachi-primary focus:shadow-glow transition-all duration-300 resize-none"
                    required
                  />

                  <MagneticButton
                    variant="primary"
                    className="w-full justify-center"
                  >
                    Send Message
                  </MagneticButton>
                </form>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </Layout>

      {/* Enhanced PDF Modal */}
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
                className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-red-500/20 hover:bg-red-500/30 text-red-400 hover:text-red-300 transition-all duration-300 flex items-center justify-center text-lg md:text-xl min-h-[44px] min-w-[44px]"
                data-magnetic
              >
                ×
              </button>
            </div>
            <div className="flex-1">
              <iframe
                src="/Kawachi%20Infratech%20private%20limited_Profile1.1.pdf"
                className="w-full h-full border-none"
                title="Kawachi Infratech Company Profile"
                onError={() => {
                  // Fallback to external URL if local file not found
                  window.open(
                    "https://adityabhardwaj1234.github.io/KawachiWeb/Kawachi%20Infratech%20private%20limited_Profile1.1.pdf",
                    "_blank",
                  );
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
