import { Navigation } from "@/components/Navigation";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { ContactForm } from "@/components/ContactForm";
import { AboutMe } from "@/components/AboutMe";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import {
  Code2,
  Layout,
  Smartphone,
  Github,
  Linkedin,
  Mail,
  MapPin,
  ArrowRight,
  Download
} from "lucide-react";
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiFigma
} from "react-icons/si";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <Navigation />

      {/* HERO SECTION */}
      <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        {/* Abstract Geometric Background Elements */}
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary font-medium text-sm tracking-wide">
                Welcome to my portfolio
              </span>
              <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
                Hello, I'm <br />
                <span className="text-gradient">Bandna Paikaray</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-muted-foreground font-light">
                Frontend Developer
              </h2>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                I build pixel-perfect, engaging, and accessible digital experiences.
                Passionate about cutting-edge technologies and creating seamless user interfaces.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <ScrollLink
                  to="projects"
                  smooth={true}
                  offset={-70}
                  className="px-8 py-4 rounded-full font-bold bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                >
                  View Projects
                </ScrollLink>
                <a
                  href="/Bandna%20Paikaray%20Resume.pdf"
                  target="_blank"
                  className="px-8 py-4 rounded-full font-bold border-2 border-primary text-primary hover:bg-primary/10 transition-all duration-300 flex items-center gap-2 cursor-pointer"
                >
                  <Download size={20} /> Resume
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center"
            >
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                {/* Orange circular ring border around the image */}
                <div className="absolute inset-0 rounded-full p-1.5 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600">
                  <div className="w-full h-full rounded-full bg-background" />
                </div>

                <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-[spin_10s_linear_infinite]" />
                <div className="absolute inset-4 rounded-full border-2 border-dashed border-primary/40 animate-[spin_15s_linear_infinite_reverse]" />
                <div className="absolute inset-2 rounded-full overflow-hidden shadow-2xl z-10">
                  {/* Professional Headshot */}
                  <img
                    src="/my-pic.png"
                    alt="Bandna Paikaray"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>


      </section>

      {/* ABOUT ME SECTION */}
      <AboutMe />

      {/* SKILLS SECTION */}
      <section id="skills" className="py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="My Tech Stack" subtitle="Skills & Tools" />

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {[
              { name: "React", icon: SiReact, color: "#61DAFB" },
              { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
              { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
              { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
              { name: "Tailwind", icon: SiTailwindcss, color: "#38B2AC" },
              { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
              { name: "CSS3", icon: SiCss3, color: "#1572B6" },
              { name: "Figma", icon: SiFigma, color: "#F24E1E" },
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center justify-center p-6 bg-card rounded-2xl border border-white/5 hover:border-primary/50 transition-colors group"
              >
                <skill.icon size={40} style={{ color: skill.color }} className="mb-4 transition-all duration-300" />
                <span className="font-medium text-muted-foreground group-hover:text-foreground transition-colors">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="What I Do" subtitle="Services" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Layout,
                title: "Website Development",
                desc: "Building fast, responsive, and SEO-friendly websites using modern frameworks like React and Next.js."
              },
              {
                icon: Smartphone,
                title: "App Development",
                desc: "Creating cross-platform mobile applications with seamless user experiences and native-like performance."
              },
              {
                icon: Code2,
                title: "Web Design",
                desc: "Translating design mockups into pixel-perfect code with attention to detail and interaction design."
              }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="p-8 rounded-3xl bg-card border border-white/5 hover:border-primary/30 transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon size={32} />
                </div>
                <h3 className="text-xl font-display font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-primary-foreground/10">
            {[
              { number: "10+", label: "Years Experience" },
              { number: "120+", label: "Projects Completed" },
              { number: "95%", label: "Client Satisfaction" },
              { number: "24/7", label: "Support" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-primary-foreground"
              >
                <h3 className="text-4xl md:text-5xl font-display font-bold mb-2">{stat.number}</h3>
                <p className="text-sm md:text-base font-medium opacity-80 uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Recent Work" subtitle="Portfolio" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-Commerce Dashboard",
                desc: "A comprehensive analytics dashboard for online retailers featuring real-time data visualization.",
                tags: ["React", "D3.js", "Tailwind"],
                img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
                demo: "#",
                github: "#"
              },
              {
                title: "Social Media App",
                desc: "A fully functional social platform with real-time messaging, feed updates, and user profiles.",
                tags: ["Next.js", "Socket.io", "Prisma"],
                img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
                demo: "#",
                github: "#"
              },
              {
                title: "Travel Booking Platform",
                desc: "Search and booking engine for flights and hotels with integrated payment processing.",
                tags: ["React", "Redux", "Stripe"],
                img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
                demo: "#",
                github: "#"
              },
              {
                title: "Fitness Tracker",
                desc: "Mobile-first web app for tracking workouts, nutrition, and progress over time.",
                tags: ["React Native", "Firebase", "Chart.js"],
                img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80",
                demo: "#",
                github: "#"
              },
              {
                title: "AI Content Generator",
                desc: "SaaS application leveraging OpenAI API to help marketers generate blog posts and ad copy.",
                tags: ["OpenAI API", "React", "Node.js"],
                img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
                demo: "#",
                github: "#"
              },
              {
                title: "Real Estate Portal",
                desc: "Property listing website with map integration, virtual tours, and agent scheduling.",
                tags: ["Vue.js", "Google Maps API", "Laravel"],
                img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
                demo: "#",
                github: "#"
              }
            ].map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.desc}
                  tags={project.tags}
                  imageUrl={project.img}
                  demoUrl={project.demo}
                  githubUrl={project.github}
                />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all font-medium">
              View All Projects <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 bg-card/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Get In Touch" subtitle="Contact Me" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h3 className="text-3xl font-display font-bold">Let's talk about your project</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              </p>

              <div className="space-y-6 pt-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">contact@bandnapaikaray.dev</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">Remote / Worldwide</p>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <p className="text-sm text-muted-foreground mb-4">Follow me</p>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all">
                    <Github size={18} />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 border-t border-white/5 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Bandna Paikaray. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Made with <span className="text-primary">♥</span> and React
          </p>
        </div>
      </footer>
    </div>
  );
}
