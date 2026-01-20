import { motion } from 'framer-motion'
import { Play, Notebook, Laptop } from 'lucide-react'

export default function SimulatorSection({ onOpenSimulator }) {
    return (
        <section id="simulator" className="relative py-24 px-6 overflow-hidden">
            {/* Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/20 to-zinc-950 pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto text-center">

                {/* Title */}
                <motion.h2
                    className="text-3xl md:text-5xl font-bold text-white mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                >
                    ¿Cómo sería pasar de <span className="text-gradient">libreta a digital</span>?
                </motion.h2>

                {/* Description */}
                <motion.p
                    className="text-zinc-400 text-lg max-w-2xl mx-auto mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    No te lo cuento, te lo enseño. Prueba este mini-simulador y siente la diferencia
                    entre gestionar información a mano y con una herramienta digital.
                </motion.p>

                {/* Visual Comparison */}
                <motion.div
                    className="flex items-center justify-center gap-4 md:gap-8 mb-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-zinc-800/30 border border-zinc-700">
                        <div className="w-16 h-16 rounded-xl bg-amber-500/20 flex items-center justify-center">
                            <Notebook className="w-8 h-8 text-amber-400" />
                        </div>
                        <span className="text-zinc-400 text-sm">Libreta</span>
                    </div>

                    <div className="text-zinc-600 text-2xl font-bold">→</div>

                    <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-indigo-500/10 border border-indigo-500/30">
                        <div className="w-16 h-16 rounded-xl bg-indigo-500/20 flex items-center justify-center">
                            <Laptop className="w-8 h-8 text-indigo-400" />
                        </div>
                        <span className="text-indigo-300 text-sm">Digital</span>
                    </div>
                </motion.div>

                {/* CTA Button */}
                <motion.button
                    onClick={onOpenSimulator}
                    className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full text-white font-semibold text-lg shadow-lg hover:shadow-indigo-500/30 transition-all cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <Play className="w-5 h-5" />
                    <span>Probar el Simulador</span>
                </motion.button>

                {/* Note */}
                <motion.p
                    className="text-zinc-600 text-sm mt-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                >
                    Solo te llevará 2 minutos. Sin registros.
                </motion.p>
            </div>
        </section>
    )
}
