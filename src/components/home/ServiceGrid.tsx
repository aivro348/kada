"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    Droplets,
    Layers,
    Activity,
    Waves,
    Scale,
    Sprout,
    ArrowRight
} from "lucide-react";

const ANALYSIS_CATEGORIES = [
    {
        label: "Groundwater Level Analysis",
        description: "Spatial and temporal trends in groundwater levels across observation wells",
        icon: Droplets,
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        href: "/groundwater/current-status"
    },
    {
        label: "Conservation Planning",
        description: "Water conservation strategies, intervention plans, and impact assessment",
        icon: Layers,
        color: "text-cyan-500",
        bg: "bg-cyan-500/10",
        href: "/conservation/water-conservation-plan"
    },
    {
        label: "Hydrology & Flow Analysis",
        description: "Surface water runoff, drainage patterns, and flow dynamics",
        icon: Activity,
        color: "text-green-500",
        bg: "bg-green-500/10",
        href: "/hydrology/surface"
    },
    {
        label: "MI Tanks & Storage",
        description: "Minor irrigation tanks, HNSS canals, and surface water bodies",
        icon: Waves,
        color: "text-teal-500",
        bg: "bg-teal-500/10",
        href: "/mi-tanks/inventory"
    },
    {
        label: "Water Balance & Energy",
        description: "Recharge-discharge dynamics and groundwater-surface water interaction",
        icon: Scale,
        color: "text-indigo-500",
        bg: "bg-indigo-500/10",
        href: "/water-balance/groundwater-balance"
    },
    {
        label: "Agriculture & Wells",
        description: "Irrigation patterns, well density, and agricultural water demand",
        icon: Sprout,
        color: "text-emerald-500",
        bg: "bg-emerald-500/10",
        href: "/agriculture/well-inventory"
    },
];

export default function ServiceGrid() {
    return (
        <section className="py-24 relative overflow-hidden bg-[#0A1128]">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-[#0A1128] to-[#0A1128]" />
                <div className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-blue-600/10 blur-[120px]" />
                <div className="absolute -bottom-[30%] -left-[10%] w-[70%] h-[70%] rounded-full bg-cyan-600/10 blur-[120px]" />
            </div>

            <div className="container-custom relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-sm font-bold text-blue-400 uppercase tracking-[0.2em] mb-4">Core Modules</h2>
                        <h3 className="text-4xl lg:text-5xl font-extrabold text-white font-serif tracking-tight mb-4">
                            Analysis Categories
                        </h3>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                            Explore comprehensive groundwater and hydrology analysis modules engineered for precision monitoring.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {ANALYSIS_CATEGORIES.map((category, index) => (
                        <motion.div
                            key={category.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true }}
                            className="group h-full"
                        >
                            <Link href={category.href} className="block h-full outline-none">
                                <div className="relative h-full p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-md hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500 overflow-hidden flex flex-col">
                                    {/* Hover Glow Effect */}
                                    <div className="absolute -inset-px rounded-3xl bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                    
                                    <div className={`relative z-10 p-4 rounded-2xl ${category.bg} w-fit mb-6 group-hover:scale-110 transition-transform duration-500 ease-out border border-white/5`}>
                                        <category.icon className={`w-7 h-7 ${category.color}`} />
                                    </div>
                                    
                                    <h3 className="relative z-10 text-2xl font-bold text-white mb-3 font-serif group-hover:text-blue-300 transition-colors duration-300">
                                        {category.label}
                                    </h3>
                                    
                                    <p className="relative z-10 text-sm text-gray-400 font-light leading-relaxed mb-8 flex-grow group-hover:text-gray-300 transition-colors duration-300">
                                        {category.description}
                                    </p>
                                    
                                    <div className="relative z-10 flex items-center gap-2 text-sm font-semibold text-blue-400 group-hover:gap-4 transition-all duration-300 ease-out mt-auto">
                                        Access Module <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
