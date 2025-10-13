"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import Lenis from 'lenis';

interface ServiceImages {
    [key: string]: string[];
}

function Services() {
    const services: string[] = ["UX Research", "UI Design", "Website Development", "Apps Development"];
    const [currentView, setCurrentView] = useState<number>(0);
    const containerRef = useRef<HTMLDivElement>(null);
    
    const serviceImages: ServiceImages = {
        "UX Research": [
            "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=400&h=400&fit=crop",
            "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=400&fit=crop",
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop"
        ],
        "UI Design": [
            "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=400&fit=crop",
            "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=400&fit=crop",
            "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=400&h=400&fit=crop"
        ],
        "Website Development": [
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=400&fit=crop",
            "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=400&fit=crop",
            "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=400&fit=crop"
        ],
        "Apps Development": [
            "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=400&fit=crop",
            "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=400&fit=crop",
            "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=400&h=400&fit=crop"
        ]
    };

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (latest: number) => {
            const section = Math.min(
                Math.floor(latest * services.length),
                services.length - 1
            );
            setCurrentView(section);
        });

        return () => unsubscribe();
    }, [scrollYProgress, services.length]);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            smoothWheel: true,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    const getRandomPosition = (index: number): { x: string; y: string } => {
        const seed = index * 1234;
        const positions = [
            { x: '10%', y: '15%' },
            { x: '80%', y: '20%' },
            { x: '15%', y: '70%' },
            { x: '75%', y: '65%' },
            { x: '85%', y: '40%' },
            { x: '20%', y: '80%' }
        ];
        return positions[seed % positions.length];
    };

    return (
        <div ref={containerRef} className="relative" style={{ height: `${services.length * 100}vh` }}>
            <div className="sticky top-0 w-screen h-screen flex flex-col gap-8 justify-center items-center overflow-hidden">
                <div className="absolute top-0 w-full h-1/2 bg-gradient-to-b from-black to-transparent pointer-events-none z-10"></div>
                <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent pointer-events-none z-10"></div>

                {services[currentView] && serviceImages[services[currentView]].map((img: string, idx: number) => {
                    const position = getRandomPosition(currentView * 3 + idx);
                    return (
                        <motion.div
                            key={`${services[currentView]}-${idx}`}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="absolute w-32 h-32 md:w-40 md:h-40 border-4 border-white rounded-xl rotate-12 overflow-hidden shadow-2xl"
                            style={{
                                left: position.x,
                                top: position.y,
                            }}
                        >
                            <img src={img} alt="" className="w-full h-full object-cover" />
                        </motion.div>
                    );
                })}

                <div className="relative z-20 flex flex-col gap-0 mt-28 items-center">
                    {services.map((item: string, index: number) => {
                        const opacity = currentView === index ? 1 : 0.3;
                        const scale = currentView === index ? 1 : 0.8;
                        const yOffset = (index - currentView) * 100;

                        return (
                            <motion.h1
                                key={item}
                                animate={{
                                    opacity,
                                    scale,
                                    y: yOffset,
                                }}
                                transition={{
                                    duration: 0.5,
                                    ease: "easeInOut"
                                }}
                                className={`uppercase font-semibold font-unbounded -mt-14 ${
                                    currentView === index ? "text-white" : "text-neutral-500"
                                } text-5xl md:text-7xl text-center px-4`}
                               
                            >
                                {item}
                            </motion.h1>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Services;