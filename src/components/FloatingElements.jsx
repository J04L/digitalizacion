import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function FloatingElements() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 2,
                y: (e.clientY / window.innerHeight - 0.5) * 2
            })
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    const elements = [
        {
            size: 'w-64 h-64',
            color: 'bg-indigo-500/8',
            position: 'top-1/4 left-1/6',
            parallaxStrength: 30
        },
        {
            size: 'w-96 h-96',
            color: 'bg-purple-500/6',
            position: 'top-1/3 right-1/4',
            parallaxStrength: 20
        },
        {
            size: 'w-48 h-48',
            color: 'bg-pink-500/8',
            position: 'bottom-1/4 left-1/3',
            parallaxStrength: 40
        },
        {
            size: 'w-72 h-72',
            color: 'bg-blue-500/6',
            position: 'bottom-1/3 right-1/6',
            parallaxStrength: 25
        },
        {
            size: 'w-32 h-32',
            color: 'bg-cyan-500/10',
            position: 'top-1/2 left-1/2',
            parallaxStrength: 50
        },
    ]

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {elements.map((element, index) => (
                <motion.div
                    key={index}
                    className={`absolute ${element.size} ${element.color} ${element.position} rounded-full blur-3xl`}
                    animate={{
                        x: mousePosition.x * element.parallaxStrength,
                        y: mousePosition.y * element.parallaxStrength,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 50,
                        damping: 30
                    }}
                />
            ))}

            {/* Grid Pattern */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
                    backgroundSize: '100px 100px'
                }}
            />

            {/* Animated Orbs */}
            <motion.div
                className="absolute top-20 right-20 w-4 h-4 bg-indigo-400/30 rounded-full"
                animate={{
                    y: [0, -30, 0],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute bottom-40 left-32 w-3 h-3 bg-purple-400/40 rounded-full"
                animate={{
                    y: [0, 20, 0],
                    x: [0, -10, 0],
                    opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute top-1/2 right-40 w-2 h-2 bg-pink-400/50 rounded-full"
                animate={{
                    y: [0, -20, 0],
                    x: [0, 15, 0],
                    opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
        </div>
    )
}
