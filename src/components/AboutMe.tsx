import { motion } from "framer-motion";
import { Code2, Smartphone, Palette } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export function AboutMe() {
    const services = [
        {
            icon: Code2,
            title: "Website Development",
            description: "Building fast, responsive, and SEO-friendly websites using modern frameworks.",
        },
        {
            icon: Smartphone,
            title: "App Development",
            description: "Creating cross-platform mobile experiences that feel native and performant.",
        },
        {
            icon: Palette,
            title: "UI/UX Design",
            description: "Designing intuitive interfaces that guide users and enhance engagement.",
        },
    ];

    const stats = [
        { number: "10+", label: "Years Experience" },
        { number: "120+", label: "Projects Completed" },
        { number: "95%", label: "Client Satisfaction" },
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
                                From Software Testing to <span className="text-primary">Programming</span>
                            </h3>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                I started my creative journey through manual testing. That passion for
                                composition and detail naturally evolved into a love for building digital
                                experiences from scratch.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                Today, software development fulfills my innate desire for continuous learning
                                and creation. I combine my artistic eye with technical precision to build
                                applications that are not just functional, but visually compelling.
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

                    {/* Right Column - Services */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-12"
                    >
                        {services.map((service, idx) => (
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
                                    {idx < services.length - 1 && (
                                        <div className="absolute left-1/2 top-14 -translate-x-1/2 w-0.5 h-[calc(100%+3rem)] bg-primary/30" />
                                    )}
                                    {/* Circle icon */}
                                    <div className="w-14 h-14 rounded-full border-2 border-primary flex items-center justify-center text-primary bg-background relative z-10">
                                        <service.icon size={24} />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-xl font-bold mb-3 text-foreground">{service.title}</h4>
                                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
