import { motion, AnimatePresence } from 'framer-motion'
import { X, Check, AlertTriangle, Sparkles, Star } from 'lucide-react'

export default function ModelModal({ model, onClose }) {
    if (!model) return null

    const Icon = model.icon

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                {/* Backdrop */}
                <motion.div
                    className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                />

                {/* Modal */}
                <motion.div
                    layoutId={`card-${model.id}`}
                    className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl ${model.isRecommended ? 'glow-border-recommended' : 'glow-border'
                        } glass`}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                    {/* Background Gradient */}
                    <div
                        className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${model.color} opacity-10`}
                    />

                    {/* Close Button */}
                    <motion.button
                        className="absolute top-4 right-4 z-20 p-2 rounded-full bg-zinc-800/80 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors cursor-pointer"
                        onClick={onClose}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <X className="w-5 h-5" />
                    </motion.button>

                    {/* Content */}
                    <div className="relative z-10 p-8">
                        {/* Header */}
                        <div className="flex items-start gap-6 mb-8">
                            {/* Icon */}
                            <motion.div
                                className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${model.color} p-0.5 shrink-0`}
                                initial={{ rotate: -10 }}
                                animate={{ rotate: 0 }}
                                transition={{ type: "spring", stiffness: 200 }}
                            >
                                <div className="w-full h-full rounded-2xl bg-zinc-900/80 flex items-center justify-center">
                                    <Icon className={`w-10 h-10 ${model.iconColor}`} />
                                </div>
                            </motion.div>

                            <div className="flex-1 min-w-0">
                                {/* Recommended Badge */}
                                {model.isRecommended && (
                                    <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full text-white text-xs font-semibold">
                                        <Star className="w-3 h-3 fill-current" />
                                        La Opción Inteligente
                                    </div>
                                )}

                                <h2 className="text-3xl font-bold text-white mb-1">{model.title}</h2>
                                <p className={`font-medium ${model.iconColor}`}>{model.concept}</p>
                            </div>
                        </div>

                        {/* Description */}
                        <motion.p
                            className="text-lg text-zinc-300 mb-8 leading-relaxed"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                        >
                            {model.description}
                        </motion.p>

                        {/* Killer Argument */}
                        {model.killerArgument && (
                            <motion.div
                                className="p-6 mb-8 rounded-2xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <div className="flex items-start gap-3">
                                    <Sparkles className="w-6 h-6 text-indigo-400 shrink-0 mt-0.5" />
                                    <p className="text-indigo-200 font-medium text-lg">
                                        "{model.killerArgument}"
                                    </p>
                                </div>
                            </motion.div>
                        )}

                        {/* Pros & Cons */}
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            {/* Pros */}
                            <motion.div
                                className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <h3 className="flex items-center gap-2 text-emerald-400 font-semibold mb-4">
                                    <Check className="w-5 h-5" />
                                    Ventajas
                                </h3>
                                <ul className="space-y-3">
                                    {model.pros.map((pro, index) => (
                                        <motion.li
                                            key={index}
                                            className="flex items-start gap-2 text-zinc-300"
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.3 + index * 0.05 }}
                                        >
                                            <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                                            <span>{pro}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* Cons */}
                            <motion.div
                                className={`p-6 rounded-2xl ${model.isRecommended
                                        ? 'bg-zinc-800/30 border border-zinc-700/30'
                                        : 'bg-red-500/5 border border-red-500/20'
                                    }`}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <h3 className={`flex items-center gap-2 font-semibold mb-4 ${model.isRecommended ? 'text-zinc-400' : 'text-red-400'
                                    }`}>
                                    <AlertTriangle className="w-5 h-5" />
                                    Consideraciones
                                </h3>
                                <ul className="space-y-3">
                                    {model.cons.map((con, index) => (
                                        <motion.li
                                            key={index}
                                            className="flex items-start gap-2 text-zinc-400"
                                            initial={{ opacity: 0, x: 10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.3 + index * 0.05 }}
                                        >
                                            <span className={`w-4 h-4 shrink-0 mt-1 flex items-center justify-center ${model.isRecommended ? 'text-zinc-500' : 'text-red-500'
                                                }`}>
                                                •
                                            </span>
                                            <span>{con}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>

                        {/* Vibe */}
                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${model.isRecommended
                                    ? 'bg-indigo-500/20 text-indigo-300'
                                    : 'bg-zinc-800 text-zinc-400'
                                }`}>
                                {model.vibe}
                            </span>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}
