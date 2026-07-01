"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Droplets, CloudRain, Database, Waves, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const INDICATORS = [
    { label: "Recharge-worthy Area", value: "71,790", unit: "Ha", icon: Droplets },
    { label: "Normal Rainfall", value: "827", unit: "mm", icon: CloudRain },
    { label: "Groundwater Avail.", value: "12.8", unit: "TMC", icon: Database },
    { label: "MI Tanks Analyzed", value: "1,247", unit: "No.", icon: Waves },
];

export default function HeroSection() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
    const opacity = useTransform(scrollY, [0, 400], [1, 0]);

    return (
        <section className="relative w-full min-h-[90vh] overflow-hidden bg-[#f8f9fa] flex items-center justify-center">
            {/* Background Parallax Video */}
            <motion.div style={{ y: y1 }} className="absolute inset-0 z-0 w-full h-[120%] -top-[10%] bg-[#0A1128]">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/images/banner.jpg"
                    className="absolute inset-0 w-full h-full object-cover scale-105 saturate-50 contrast-125 brightness-75"
                >
                    <source src="/videos/charan.mp4" type="video/mp4" />
                </video>
                
                {/* Cinematic Dot Matrix / Scanline Overlay */}
                <div 
                    className="absolute inset-0 z-10 pointer-events-none" 
                    style={{
                        backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: '4px 4px'
                    }}
                />
                
                {/* Deep Gradient Overlay */}
                <div className="absolute inset-0 z-20 bg-gradient-to-b from-blue-900/60 via-[#0A1128]/70 to-[#f8f9fa] mix-blend-multiply backdrop-blur-[2px]" />
            </motion.div>

            <div className="container-custom relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-32 w-full">
                <motion.div style={{ opacity }} className="flex flex-col items-center text-center gap-10">
                    
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md shadow-[0_4px_24px_-8px_rgba(0,0,0,0.5)]"
                    >
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                        </span>
                        <span className="text-white font-medium text-xs tracking-[0.2em] uppercase">
                            Scientific Analysis Portal
                        </span>
                    </motion.div>

                    {/* Main Title Area */}
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-14 w-full">
                        {/* Desktop Left Logo */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="hidden lg:block"
                        >
                            <Link href="/website-design-team" className="group flex flex-col items-center">
                                <div className="p-1 rounded-full bg-gradient-to-tr from-blue-400 to-emerald-400 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-500">
                                    <Image
                                        src="/images/about-kada/iit.jpg"
                                        alt="IIT Kanpur"
                                        width={120} height={120} unoptimized
                                        className="w-24 h-24 lg:w-32 lg:h-32 rounded-full border-4 border-white object-cover"
                                    />
                                </div>
                                <span className="mt-4 text-white/90 text-sm font-semibold tracking-wide uppercase">IIT Kanpur</span>
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="flex-1 max-w-3xl"
                        >
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 leading-[1.1] tracking-tight mb-6 filter drop-shadow-lg">
                                Groundwater Analysis <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-300">
                                    & Hydrology Observatory
                                </span>
                            </h1>
                            <p className="text-base md:text-lg lg:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
                                A scientific, spatial, and temporal analysis of groundwater levels, aquifer storage, surface water interaction, and recharge dynamics.
                            </p>
                        </motion.div>

                        {/* Desktop Right Logo */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="hidden lg:block"
                        >
                            <Link href="/website-design-team" className="group flex flex-col items-center">
                                <div className="p-1 rounded-full bg-gradient-to-tl from-teal-400 to-blue-400 group-hover:shadow-[0_0_30px_rgba(45,212,191,0.5)] transition-all duration-500">
                                    <Image
                                        src="/images/about-kada/kpm.jpg"
                                        alt="KEC"
                                        width={120} height={120} unoptimized
                                        className="w-24 h-24 lg:w-32 lg:h-32 rounded-full border-4 border-white object-cover"
                                    />
                                </div>
                                <span className="mt-4 text-white/90 text-sm font-semibold tracking-wide uppercase">KEC Kuppam</span>
                            </Link>
                        </motion.div>

                        {/* Mobile Logos (Visible only on small screens) */}
                        <div className="flex lg:hidden flex-row gap-10 justify-center items-center w-full mt-4">
                            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.2 }}>
                                <Link href="/website-design-team" className="group flex flex-col items-center">
                                    <div className="p-1 rounded-full bg-gradient-to-tr from-blue-400 to-emerald-400">
                                        <Image src="/images/about-kada/iit.jpg" alt="IIT Kanpur" width={80} height={80} unoptimized className="w-16 h-16 rounded-full border-2 border-white object-cover" />
                                    </div>
                                    <span className="mt-3 text-white/90 text-[11px] font-semibold tracking-wide uppercase">IIT Kanpur</span>
                                </Link>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.2 }}>
                                <Link href="/website-design-team" className="group flex flex-col items-center">
                                    <div className="p-1 rounded-full bg-gradient-to-tl from-teal-400 to-blue-400">
                                        <Image src="/images/about-kada/kpm.jpg" alt="KEC" width={80} height={80} unoptimized className="w-16 h-16 rounded-full border-2 border-white object-cover" />
                                    </div>
                                    <span className="mt-3 text-white/90 text-[11px] font-semibold tracking-wide uppercase">KEC Kuppam</span>
                                </Link>
                            </motion.div>
                        </div>
                    </div>

                    {/* Glassmorphism Indicators */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 w-full max-w-5xl mt-6 lg:mt-8"
                    >
                        {INDICATORS.map((indicator, idx) => (
                            <div
                                key={indicator.label}
                                className="relative group overflow-hidden rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-4 sm:p-5 lg:p-6 hover:bg-white/20 transition-all duration-500 cursor-default"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative z-10 flex flex-col gap-4">
                                    <indicator.icon className="w-8 h-8 text-blue-300 group-hover:text-white transition-colors duration-300" />
                                    <div>
                                        <div className="flex items-baseline gap-1.5 text-white">
                                            <span className="text-3xl font-bold tracking-tight">{indicator.value}</span>
                                            <span className="text-sm font-medium text-white/70">{indicator.unit}</span>
                                        </div>
                                        <p className="text-xs text-white/60 font-semibold uppercase tracking-wider mt-1">
                                            {indicator.label}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/50"
            >
                <span className="text-xs uppercase tracking-[0.2em] font-medium">Scroll to explore</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                    <ChevronDown className="w-5 h-5" />
                </motion.div>
            </motion.div>
        </section>
    );
}
