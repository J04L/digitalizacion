import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { User, Clock, Code, ChevronDown, X, Calendar, Briefcase } from 'lucide-react'

export default function CreatorProfile() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            {/* Profile Button - Fixed Position */}
            <motion.button
                className="fixed bottom-6 right-6 z-40 flex items-center gap-3 px-4 py-3 glass rounded-full cursor-pointer hover:bg-white/10 transition-colors group"
                onClick={() => setIsOpen(true)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                {/* Avatar */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                    JR
                </div>

                <div className="text-left hidden sm:block">
                    <p className="text-white text-sm font-medium">Joel Romero</p>
                    <p className="text-zinc-400 text-xs">¿Quién soy?</p>
                </div>

                <ChevronDown className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
            </motion.button>

            {/* Profile Modal */}
            <AnimatePresence>
                {isOpen && (
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
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Modal Content */}
                        <motion.div
                            className="relative w-full max-w-md glass rounded-3xl glow-border overflow-hidden"
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            {/* Close Button */}
                            <button
                                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-zinc-800/80 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors cursor-pointer"
                                onClick={() => setIsOpen(false)}
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Header with gradient */}
                            <div className="relative h-24 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 animate-gradient">
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent" />
                            </div>

                            {/* Avatar */}
                            <div className="relative -mt-12 px-6">
                                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 p-1 shadow-xl">
                                    <div className="w-full h-full rounded-xl bg-zinc-900 flex items-center justify-center">
                                        <span className="text-3xl font-bold text-white">JR</span>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 pt-4">
                                <h3 className="text-2xl font-bold text-white mb-1">Joel Romero Tavarez</h3>
                                <p className="text-indigo-400 font-medium mb-4">Tu desarrollador</p>

                                {/* Info Cards */}
                                <div className="space-y-3 mb-6">
                                    {/* Experience */}
                                    <div className="flex items-start gap-3 p-3 rounded-xl bg-zinc-800/50">
                                        <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center shrink-0">
                                            <Briefcase className="w-5 h-5 text-indigo-400" />
                                        </div>
                                        <div>
                                            <p className="text-white text-sm font-medium">Experiencia</p>
                                            <p className="text-zinc-400 text-sm">Casi 2 años creando webs y herramientas a medida</p>
                                        </div>
                                    </div>

                                    {/* Availability */}
                                    <div className="flex items-start gap-3 p-3 rounded-xl bg-zinc-800/50">
                                        <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center shrink-0">
                                            <Clock className="w-5 h-5 text-purple-400" />
                                        </div>
                                        <div>
                                            <p className="text-white text-sm font-medium">Cuándo me encuentras</p>
                                            <p className="text-zinc-400 text-sm">De 17:30 a 22:00 (horario flexible)</p>
                                        </div>
                                    </div>

                                    {/* Approach */}
                                    <div className="flex items-start gap-3 p-3 rounded-xl bg-zinc-800/50">
                                        <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center shrink-0">
                                            <Code className="w-5 h-5 text-emerald-400" />
                                        </div>
                                        <div>
                                            <p className="text-white text-sm font-medium">Cómo trabajo</p>
                                            <p className="text-zinc-400 text-sm">Código limpio. Sin rodeos. Comunicación directa contigo.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Note */}
                                <div className="p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
                                    <p className="text-zinc-300 text-sm leading-relaxed">
                                        Trabajo solo, así que hablarás siempre conmigo. Sin intermediarios,
                                        sin comerciales. Tú me cuentas lo que necesitas y yo te lo construyo.
                                    </p>
                                </div>

                                {/* Footer */}
                                <p className="text-center text-zinc-500 text-xs mt-6">
                                    Soy el único desarrollador de este proyecto
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
