import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export function AboutMe() {
    const workExperience = [
        {
            title: "Associate Software Engineer",
            company: "Azodik Consulting Pvt. Ltd.",
            location: "Jaipur",
            period: "08/2023 - Present",
            description: "Actively involved in developing web applications and contributing to mobile application development with React Native, focusing on seamless user experiences."
        },
        {
            title: "Full Stack Developer (Intern)",
            company: "Bharti Airtel",
            location: "Gurugram",
            period: "08/2023 - 12/2023",
            description: "Engaged in extensive web development work utilizing HTML, CSS and JavaScript for front-end development, alongside Java (Beginner) and Spring Tool Suite (STS) for robust back-end solutions."
        },
        {
            title: "Quality Analyst",
            company: "Zimyo Consulting Pvt. Ltd",
            location: "Gurugram",
            period: "07/2020 - 02/2022",
            description: "Worked as QA with 1.8 years of experience in software testing and Quality Assurance. Worked on projects like HRMS, ATS (Applicant Tracking System), and PMS (Performance Management System)."
        },
    ];

    const stats = [
        { number: "2+", label: "Years Experience" },
        { number: "15+", label: "Projects Completed" },
        { number: "3", label: "Companies Worked" },
    ];

    return (
        <section id="about" className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <SectionHeading subtitle="My Story" title="About Me" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column - Story */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-xl md:text-2xl font-display font-bold mb-6">
                                Passionate <span className="text-primary">Frontend Developer</span>
                            </h3>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                Seeking a career opportunity with a reputable company where I can leverage my
                                strong IT skills and knowledge to attract new clients, drive revenue growth, and
                                contribute to organizational success.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                I have experience in web development utilizing modern technologies like React,
                                TypeScript, and Next.js. My journey includes working with companies like Azodik
                                Consulting and Bharti Airtel, where I've contributed to mobile application development
                                and robust back-end solutions. I also have a strong foundation in software testing
                                and quality assurance from my time at Zimyo Consulting.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 pt-8">
                            {stats.map((stat, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="border-l-4 border-primary pl-4"
                                >
                                    <h4 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-1">
                                        {stat.number}
                                    </h4>
                                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column - Work Experience */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        {workExperience.map((job, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.15 }}
                                className="flex gap-6 items-start"
                            >
                                <div className="flex-shrink-0 relative">
                                    {/* Vertical connecting line */}
                                    {idx < workExperience.length - 1 && (
                                        <div className="absolute left-1/2 top-14 -translate-x-1/2 w-0.5 h-[calc(100%+2.5rem)] bg-primary/30" />
                                    )}
                                    {/* Circle icon */}
                                    <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center text-primary bg-background relative z-10">
                                        <Briefcase size={20} />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-lg font-bold text-foreground">{job.title}</h4>
                                    <p className="text-primary font-medium text-sm mb-1">{job.company}</p>
                                    <p className="text-xs text-muted-foreground mb-3">{job.location} • {job.period}</p>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{job.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
