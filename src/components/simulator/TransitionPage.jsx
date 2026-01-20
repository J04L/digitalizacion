import { motion } from 'framer-motion'
import { Lightbulb, ArrowRight, Sparkles } from 'lucide-react'

export default function TransitionPage() {
    return (
        <div className="min-h-full flex flex-col items-center justify-center p-8 md:p-16 text-center">
            {/* Icon */}
            <motion.div
                className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center mb-8 relative"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", delay: 0.2 }}
            >
                <Lightbulb className="w-12 h-12 text-white" />
                <motion.div
                    className="absolute -top-2 -right-2"
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <Sparkles className="w-8 h-8 text-yellow-400" />
                </motion.div>
            </motion.div>

            {/* Title */}
            <motion.h1
                className="text-3xl md:text-5xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
            >
                Un día decides que quieres <br />
                <span className="text-gradient">un cambio</span>
            </motion.h1>

            {/* Description */}
            <motion.div
                className="max-w-2xl space-y-6 text-zinc-400 text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
            >
                <p>
                    Estás cansado de buscar entre notas, de no encontrar datos,
                    de hacer esperar a los clientes mientras rebuscas en tu libreta.
                </p>

                <p className="text-white font-medium">
                    Decides dar el salto a lo digital.
                </p>

                <motion.div
                    className="flex items-center justify-center gap-4 pt-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    <div className="px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-sm">
                        📓 Libreta caótica
                    </div>
                    <ArrowRight className="w-6 h-6 text-zinc-500" />
                    <div className="px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-sm">
                        💻 Sistema digital
                    </div>
                </motion.div>
            </motion.div>

            {/* CTA */}
            <motion.p
                className="mt-12 text-zinc-500 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
            >
                Pulsa la flecha derecha para ver tu nueva herramienta →
            </motion.p>
        </div>
    )
}
