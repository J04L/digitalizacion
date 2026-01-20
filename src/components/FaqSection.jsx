import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
    {
        question: "¿El código será mío?",
        answer: "Sí, 100%. No hay alquileres de por vida. Una vez pagado el proyecto, te entrego todos los archivos y la propiedad intelectual es tuya. Tú tienes el control."
    },
    {
        question: "¿Tengo que pagar una cuota mensual?",
        answer: "No obligatoriamente. El desarrollo tiene un precio único. Solo pagarás mensualmente si decides contratar un servicio de mantenimiento opcional para actualizaciones y copias de seguridad."
    },
    {
        question: "¿Cuánto tardas en terminar un proyecto?",
        answer: "Depende de la complejidad. Una web corporativa puede estar en 2-3 semanas, mientras que una plataforma de gestión a medida puede llevar 4-8 semanas. Te daré un plazo fijo en la propuesta."
    },
    {
        question: "¿Qué pasa si algo falla después de entregar?",
        answer: "Todos mis proyectos incluyen un periodo de garantía post-entrega (habitualmente 4 semanas) donde corrijo cualquier error técnico sin coste adicional."
    }
]

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState(null)

    return (
        <section className="relative py-24 px-6 bg-zinc-900/30">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm mb-4">
                        <HelpCircle className="w-4 h-4" />
                        <span>Dudas Resueltas</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Preguntas <span className="text-gradient">Frecuentes</span>
                    </h2>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="border border-zinc-800 rounded-2xl bg-zinc-900/50 overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left cursor-pointer hover:bg-zinc-800/50 transition-colors"
                            >
                                <span className="text-lg font-semibold text-white pr-8">{faq.question}</span>
                                <motion.div
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <ChevronDown className={`w-5 h-5 ${openIndex === index ? 'text-indigo-400' : 'text-zinc-500'}`} />
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-zinc-400 leading-relaxed border-t border-zinc-800/50 pt-4 bg-zinc-900/30">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
