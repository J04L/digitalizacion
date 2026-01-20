import { motion } from 'framer-motion'
import { MessageSquare, FileText, Code2, Gift } from 'lucide-react'

const steps = [
    {
        icon: MessageSquare,
        title: "Hablamos",
        description: "Me cuentas tu problema o idea. Sin tecnicismos. Entiendo tu negocio y vemos si puedo ayudarte.",
        color: "text-blue-400",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20"
    },
    {
        icon: FileText,
        title: "Propuesta",
        description: "Te presento un plan claro con precio cerrado y plazos. Sin sorpresas ni letra pequeña.",
        color: "text-purple-400",
        bg: "bg-purple-500/10",
        border: "border-purple-500/20"
    },
    {
        icon: Code2,
        title: "Desarrollo",
        description: "Construyo tu solución. Te enseño avances cada semana para que veas cómo cobra vida.",
        color: "text-emerald-400",
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/20"
    },
    {
        icon: Gift,
        title: "Entrega",
        description: "Te entrego todo funcionando. Te enseño a usarlo y recibes el código fuente. Es 100% tuyo.",
        color: "text-amber-400",
        bg: "bg-amber-500/10",
        border: "border-amber-500/20"
    }
]

export default function ProcessSection() {
    return (
        <section className="relative py-24 px-6 bg-zinc-950/50">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    className="text-center max-w-2xl mx-auto mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        ¿Cómo <span className="text-gradient">trabajamos</span>?
                    </h2>
                    <p className="text-zinc-400 text-lg">
                        Sin misterios. Un proceso lineal y transparente desde el primer café hasta la entrega final.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-4 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-amber-500/20" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="relative"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                        >
                            {/* Icon Bubble */}
                            <div className={`w-24 h-24 mx-auto rounded-full ${step.bg} ${step.border} border-2 flex items-center justify-center mb-6 relative z-10 bg-zinc-950`}>
                                <step.icon className={`w-10 h-10 ${step.color}`} />
                            </div>

                            {/* Content */}
                            <div className="text-center px-2">
                                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                                <p className="text-zinc-400 text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
