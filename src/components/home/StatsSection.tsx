"use client";

import React from "react";
import { motion, useMotionValue, useTransform, useInView, animate } from "framer-motion";

const STATS = [
    { label: "Observation Wells", value: "847", suffix: "" },
    { label: "Mandals Covered", value: "4", suffix: "" },
    { label: "Data Points Analyzed", value: "1.2", suffix: "M+" },
    { label: "Years of Data", value: "15", suffix: "+" },
];

const Counter = ({ value, suffix = "" }: { value: string, suffix?: string }) => {
    const numericValue = parseFloat(value.replace(/,/g, ""));
    const isDecimal = value.includes(".");
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => {
        if (isDecimal) return latest.toFixed(1);
        return Math.round(latest).toLocaleString();
    });

    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    React.useEffect(() => {
        if (isInView) {
            animate(count, numericValue, { duration: 2.5, ease: "circOut" });
        }
    }, [count, isInView, numericValue]);

    return <motion.span ref={ref}>{rounded}</motion.span>;
};

export default function StatsSection() {
    return (
        <section className="py-24 bg-[#f8f9fa] relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-50" />
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none" />
            
            <div className="container-custom relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-3">Scale & Impact</h2>
                        <h3 className="text-4xl lg:text-5xl font-extrabold text-gray-900 font-serif tracking-tight">
                            Observatory Coverage
                        </h3>
                    </motion.div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {STATS.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true }}
                            className="relative group bg-white p-5 md:p-8 rounded-2xl md:rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 hover:border-blue-100 transition-colors overflow-hidden"
                        >
                            {/* Hover Gradient Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            <div className="relative z-10 flex flex-col items-center text-center">
                                <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 tracking-tighter flex items-center gap-1 group-hover:text-blue-600 transition-colors duration-500">
                                    <Counter value={stat.value} />
                                    <span className="text-2xl md:text-3xl text-blue-500">{stat.suffix}</span>
                                </h3>
                                <div className="h-0.5 w-12 bg-gray-200 group-hover:bg-blue-400 transition-colors duration-500 mb-4" />
                                <p className="text-gray-500 font-medium tracking-wide text-sm uppercase group-hover:text-gray-900 transition-colors duration-500">
                                    {stat.label}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
