import { Navigation } from "@/components/Navigation";
import { SectionHeading } from "@/components/SectionHeading";

import { ContactForm } from "@/components/ContactForm";
import { AboutMe } from "@/components/AboutMe";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import {
  Code2,
  Layout,
  Smartphone,
  Linkedin,
  Mail,
  Download,
  Phone
} from "lucide-react";
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJavascript
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
                  href="/Bandna%20Paikaray_Resume.pdf"
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
      <section id="about">
        <AboutMe />
      </section>

      {/* SKILLS SECTION - Combined Tech Stack & Services */}
      <section id="skills" className="py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Skills & Expertise" subtitle="What I Bring to the Table" />

          {/* Tech Stack */}
          <div className="mb-16">
            {/* <h3 className="text-2xl font-display font-bold mb-8 text-center">Tech Stack</h3> */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {[
                { name: "React", icon: SiReact, color: "#61DAFB" },
                { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
                { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
                { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
                { name: "Tailwind", icon: SiTailwindcss, color: "#38B2AC" },
                { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
                { name: "CSS3", icon: SiCss3, color: "#1572B6" },
                { name: "Native", icon: SiReact, color: "#61DAFB" },
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

          {/* Services/What I Do */}
          <div>
            {/* <h3 className="text-2xl font-display font-bold mb-8 text-center">What I Do</h3> */}
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
        </div>
      </section>


      {/* PROJECTS SECTION */}
      <section id="projects" className="py-24 bg-background relative overflow-hidden">
        {/* Decorative background elements for Projects section */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Selected Projects" subtitle="A showcase of my recent engineering work" />

          {/* New Bento Grid Projects Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-auto md:auto-rows-[200px] gap-6 mt-12">

            {/* Project 1: Azodik Design System - Large Featured (Span 8x2) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-8 md:row-span-2 group relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 backdrop-blur-md hover:border-primary/40 transition-all duration-700 shadow-2xl flex flex-col"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/20 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="p-6 md:p-10 relative h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4 md:mb-6">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest border border-primary/20">
                      Core Infrastructure
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-display font-bold mb-4 md:mb-6 tracking-tight">
                    Azodik <span className="text-primary">Design System</span>
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl">
                    Built a CSS-first, monorepo-based design system to standardize UI across all Azodik products with reusable core, UI, and icon packages. Developed accessible, themeable React components using TypeScript.
                  </p>
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mt-8">
                  <div className="flex flex-wrap gap-2">
                    {["React", "TypeScript", "Vanilla CSS", "Vite", "Turbo", "pnpm"].map(tag => (
                      <span key={tag} className="px-3 py-1 text-xs font-medium rounded-lg bg-white/5 text-muted-foreground border border-white/5 transition-colors group-hover:border-primary/30">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Project 2: InvoiceFlow - Medium Rectangle (Span 4x2) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-4 md:row-span-2 group relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 backdrop-blur-md hover:border-orange-500/40 transition-all duration-700 shadow-2xl flex flex-col"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="p-6 md:p-10 relative h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500 mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-500">
                    <Layout size={28} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 tracking-tight">InvoiceFlow</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                    Multi-tenant billing platform with PDF generation, RBAC, and real-time dashboards.
                    Built on Cloudflare Workers for edge performance.
                  </p>
                </div>

                <div className="mt-8">
                  <div className="flex flex-wrap gap-2">
                    {["React", "TypeScript", "Cloudflare Workers", "Hono", "D1", "R2", "Queues", "Vite", "TanStack Query"].map(tag => (
                      <span key={tag} className="px-2 py-1 text-[9px] font-bold uppercase rounded-md bg-orange-500/10 text-orange-500/80 border border-orange-500/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Project 3: Azodik Editor - Long Horizontal (Span 7x2) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-7 md:row-span-2 group relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 backdrop-blur-md hover:border-blue-500/40 transition-all duration-700 shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="p-6 md:p-10 relative h-full flex flex-col justify-between">
                <div className="flex-1">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500 mb-4 block">Desktop App</span>
                  <h3 className="text-2xl md:text-3xl font-display font-bold mb-6 tracking-tight">Azodik Editor</h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl">
                    Developed a high-performance desktop media editor featuring video trim, crop, and timeline-based editing. Integrated FFmpeg and Sharp for native media processing within an Electron + React application.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-8">
                  {["Electron", "React", "TypeScript", "FFmpeg", "Sharp", "TailwindCSS", "Better-SQLite3", "Vite"].map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium rounded-lg bg-blue-500/5 text-blue-400 border border-blue-500/10 transition-colors group-hover:border-blue-400/30">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Project 4: Azodik Console - Square (Span 5x2) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="md:col-span-5 md:row-span-2 group relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 backdrop-blur-md hover:border-primary/40 transition-all duration-700 shadow-2xl"
            >
              <div className="p-6 md:p-10 relative h-full flex flex-col justify-between">
                <div>
                  <div className="flex gap-4 mb-8">
                    {["Management", "Admin"].map(label => (
                      <span key={label} className="text-[9px] uppercase font-bold tracking-widest text-muted-foreground/60">{label}</span>
                    ))}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold mb-6 tracking-tight">Azodik Console</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Developed a centralized admin console for multi-tenant app, billing, and configuration mgt. Built scalable, accessible UI using React 19.
                  </p>
                </div>
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {["React", "TypeScript", "Vite", "Radix UI", "Stitches", "Jotai", "TanStack Table", "Recharts", "i18next"].map(tag => (
                      <span key={tag} className="px-2 py-1 text-[9px] font-bold uppercase rounded-md bg-primary/10 text-primary border border-primary/20 transition-colors group-hover:border-primary/40">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Project 5: AuthZio Playground - Bottom Full Width (Span 12x1) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="md:col-span-12 md:row-span-1 group relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 backdrop-blur-md hover:border-orange-400/30 transition-all duration-700 shadow-2xl"
            >
              <div className="p-6 md:p-10 h-full flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div className="flex items-center gap-8">
                  <div className="w-16 h-16 rounded-2xl bg-orange-400/10 flex items-center justify-center text-orange-400 group-hover:rotate-[360deg] transition-transform duration-1000">
                    <Code2 size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold tracking-tight mb-2">AuthZio Playground</h3>
                    <p className="text-muted-foreground text-sm max-w-md block">
                      Client-side authentication and cryptography playground for modern developers.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex flex-wrap gap-2 max-w-xl md:justify-end">
                    {["Next.js", "React", "TypeScript", "Tailwind CSS", "jose", "pnpm"].map(tag => (
                      <span key={tag} className="px-3 py-1.5 rounded-xl bg-orange-400/5 text-orange-400 text-[10px] font-bold uppercase border border-orange-400/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Existing Projects Section - Commented Out (Preserved) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Mitra Healthcare",
                img: "/website-projects/mock-mitra-3.png",
                demo: "https://www.mitrahealthcare.com.au/"
              },
              {
                title: "AT Web Studios",
                img: "/website-projects/mock-at-web-2.png",
                demo: "https://www.atwebstudios.com.au/"
              },
              {
                title: "Fire & Feast",
                img: "/website-projects/mock-fire-feast.png",
                demo: "https://italian-restaurant-six.vercel.app/"
              },
              {
                title: "Clarity",
                img: "/website-projects/mock-consultancy-3.png",
                demo: "https://consultancy-project-hazel.vercel.app/"
              }
            ].map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group relative overflow-hidden rounded-2xl border border-white/10"
                >
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                    <span className="text-white font-medium px-6 py-3 rounded-full border border-white/30 bg-white/10 backdrop-blur-md transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      Visit Website
                    </span>
                  </div>
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full aspect-video object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                  />
                </a>
              </motion.div>
            ))}
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
                    <p className="font-medium">bandnapaikaray@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Contact</p>
                    <p className="font-medium">+91 7978144496</p>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <p className="text-sm text-muted-foreground mb-4">Follow me</p>
                <div className="flex gap-4">
                  <a href="https://www.linkedin.com/in/bandnapaikaray/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all">
                    <Linkedin size={18} />
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
