import { motion } from 'framer-motion'
import { Building2, Users, FileText } from 'lucide-react'

export default function ContextPage({ onNext }) {
    return (
        <div className="min-h-full flex flex-col items-center justify-center p-8 md:p-16 text-center">
            {/* Icon */}
            <motion.div
                className="w-24 h-24 rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-8"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.2 }}
            >
                <Building2 className="w-12 h-12 text-white" />
            </motion.div>

            {/* Title */}
            <motion.h1
                className="text-3xl md:text-5xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
            >
                Imagina que eres una <span className="text-gradient">inmobiliaria</span>
            </motion.h1>

            {/* Description */}
            <motion.div
                className="max-w-2xl space-y-6 text-zinc-400 text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
            >
                <p>
                    Tienes <span className="text-white font-semibold">20 pisos en cartera</span>.
                    Cada día recibes llamadas de clientes preguntando por características específicas:
                    zona, precio, número de habitaciones...
                </p>

                <div className="grid md:grid-cols-3 gap-4 mt-8">
                    <div className="p-4 rounded-xl bg-zinc-800/50 border border-zinc-700">
                        <Users className="w-8 h-8 text-indigo-400 mx-auto mb-2" />
                        <p className="text-sm text-zinc-300">Clientes que llaman constantemente</p>
                    </div>
                    <div className="p-4 rounded-xl bg-zinc-800/50 border border-zinc-700">
                        <FileText className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                        <p className="text-sm text-zinc-300">Datos apuntados en libretas</p>
                    </div>
                    <div className="p-4 rounded-xl bg-zinc-800/50 border border-zinc-700">
                        <Building2 className="w-8 h-8 text-pink-400 mx-auto mb-2" />
                        <p className="text-sm text-zinc-300">Pisos que recordar de memoria</p>
                    </div>
                </div>
            </motion.div>

            {/* CTA */}
            <motion.p
                className="mt-12 text-zinc-500 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            >
                Pulsa la flecha derecha para ver cómo es tu día a día →
            </motion.p>
        </div>
    )
}
