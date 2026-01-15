import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

export default function ModelCard({ model, onClick, index }) {
    const Icon = model.icon

    return (
        <motion.div
            layoutId={`card-${model.id}`}
            className={`relative cursor-pointer group ${model.isRecommended ? 'md:scale-105 md:-translate-y-2' : ''
                }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                delay: index * 0.15,
                duration: 0.6,
                type: "spring",
                stiffness: 100
            }}
            onClick={onClick}
            whileHover={{
                y: -8,
                transition: { type: "spring", stiffness: 400, damping: 17 }
            }}
            whileTap={{ scale: 0.98 }}
        >
            {/* Recommended Badge */}
            {model.isRecommended && (
                <motion.div
                    className="absolute -top-4 left-1/2 -translate-x-1/2 z-20"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    <div className="flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full text-white text-sm font-semibold shadow-lg">
                        <Star className="w-4 h-4 fill-current" />
                        Recomendado
                    </div>
                </motion.div>
            )}

            {/* Card */}
            <div
                className={`relative h-full p-8 rounded-3xl transition-all duration-500 ${model.isRecommended
                        ? 'glass glow-border-recommended animate-pulse-glow'
                        : 'glass glow-border hover:border-zinc-600/50'
                    }`}
            >
                {/* Background Gradient */}
                <div
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${model.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
                />

                {/* Content */}
                <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                        className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${model.color} p-0.5`}
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="w-full h-full rounded-2xl bg-zinc-900/80 flex items-center justify-center">
                            <Icon className={`w-8 h-8 ${model.iconColor}`} />
                        </div>
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-2">{model.title}</h3>

                    {/* Concept */}
                    <p className={`text-sm font-medium mb-3 ${model.iconColor}`}>{model.concept}</p>

                    {/* Subtitle */}
                    <p className="text-zinc-400 mb-4 leading-relaxed">{model.subtitle}</p>

                    {/* Vibe Tag */}
                    <div className="flex items-center gap-2 mb-6">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${model.isRecommended
                                ? 'bg-indigo-500/20 text-indigo-300'
                                : 'bg-zinc-800 text-zinc-400'
                            }`}>
                            {model.vibe}
                        </span>
                    </div>

                    {/* Short Description */}
                    <p className="text-zinc-500 text-sm mb-4">{model.shortDescription}</p>

                    {/* Risk Note or Killer Argument */}
                    {model.killerArgument ? (
                        <div className="p-4 rounded-xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20">
                            <p className="text-indigo-300 font-medium text-sm italic">
                                "{model.killerArgument}"
                            </p>
                        </div>
                    ) : model.riskNote ? (
                        <div className="p-3 rounded-xl bg-zinc-800/50 border border-zinc-700/50">
                            <p className="text-amber-400/80 text-sm">
                                ⚠️ {model.riskNote}
                            </p>
                        </div>
                    ) : null}

                    {/* CTA */}
                    <motion.div
                        className={`mt-6 text-center py-3 rounded-xl font-medium transition-all duration-300 ${model.isRecommended
                                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                                : 'bg-zinc-800 text-zinc-300 group-hover:bg-zinc-700'
                            }`}
                        whileHover={{ scale: 1.02 }}
                    >
                        Ver Detalles
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}
