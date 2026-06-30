"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, WifiOff, Users, ClipboardCheck, CheckCircle2 } from "lucide-react";

const HIGHLIGHTS = [
    {
        title: "GPS Capture & Geotagging",
        description: "Accurate field data collection with automatic GPS coordinate capture and geotagged photo uploads for every borewell survey.",
        icon: MapPin,
        color: "text-rose-600",
        bg: "bg-rose-50",
    },
    {
        title: "Offline Sync Capabilities",
        description: "Surveyors can save drafts locally without internet access. Data securely syncs to the central database once back online.",
        icon: WifiOff,
        color: "text-amber-600",
        bg: "bg-amber-50",
    },
    {
        title: "Role-Based Access Control",
        description: "Distinct workflows for Surveyors and Administrators, ensuring secure data handling, approvals, and targeted information access.",
        icon: Users,
        color: "text-violet-600",
        bg: "bg-violet-50",
    },
    {
        title: "Mandal-Based Assignments",
        description: "Efficiently distribute and track survey workloads across different Mandals with automated assignment handling and reporting.",
        icon: ClipboardCheck,
        color: "text-emerald-600",
        bg: "bg-emerald-50",
    },
];

export default function HighlightsSection() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#f8f9fa] to-transparent pointer-events-none" />
            
            <div className="container-custom relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    {/* Left Column: Text & Context */}
                    <div className="lg:w-1/3 relative z-20">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true }}
                            className="pr-8"
                        >
                            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">System Architecture</h2>
                            <h3 className="text-4xl lg:text-5xl font-extrabold text-gray-900 font-serif mb-6 leading-[1.1] tracking-tight">
                                Integrated <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                                    Project Highlights
                                </span>
                            </h3>
                            <p className="text-gray-500 text-lg mb-10 leading-relaxed font-light">
                                Our bespoke platform provides state-of-the-art tools for field surveyors and administrators, blending offline data collection with powerful analytics.
                            </p>
                            <ul className="space-y-5">
                                {["End-to-end data encryption", "Automated anomaly detection", "Cross-platform consistency"].map((item, i) => (
                                    <motion.li 
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 + (i * 0.1), duration: 0.5 }}
                                        viewport={{ once: true }}
                                        className="flex items-center gap-4 text-base font-medium text-gray-700"
                                    >
                                        <div className="p-1 rounded-full bg-blue-50">
                                            <CheckCircle2 className="w-5 h-5 text-blue-600" />
                                        </div>
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* Right Column: Grid of Highlights */}
                    <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                        {HIGHLIGHTS.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                viewport={{ once: true }}
                                className={`group relative bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 overflow-hidden ${index % 2 !== 0 ? 'md:mt-12' : ''}`}
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gray-50 to-transparent rounded-bl-full opacity-50 transition-transform duration-500 group-hover:scale-110" />
                                <div className={`relative z-10 p-4 rounded-2xl ${item.bg} w-fit mb-6 group-hover:scale-110 transition-transform duration-500 ease-out`}>
                                    <item.icon className={`w-7 h-7 ${item.color}`} />
                                </div>
                                <h4 className="relative z-10 text-xl font-bold text-gray-900 mb-3 tracking-tight group-hover:text-blue-600 transition-colors duration-300">
                                    {item.title}
                                </h4>
                                <p className="relative z-10 text-gray-500 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
