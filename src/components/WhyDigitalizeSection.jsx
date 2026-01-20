import { motion } from 'framer-motion'
import { TrendingUp, Clock, ShieldCheck, Zap } from 'lucide-react'

const benefits = [
    {
        icon: TrendingUp,
        title: "Escalabilidad",
        text: "Tu negocio crece, tus sistemas aguantan. Deja de depender de procesos manuales que se rompen cuando aumentan los clientes."
    },
    {
        icon: Clock,
        title: "Ahorro de Tiempo",
        text: "Automatiza tareas repetitivas. Dedica tu tiempo y el de tu equipo a lo que realmente aporta valor: vender y atender a tus clientes."
    },
    {
        icon: ShieldCheck,
        title: "Control Total",
        text: "Datos en tiempo real, no suposiciones. Toma decisiones basadas en métricas exactas, no en sensaciones."
    },
    {
        icon: Zap,
        title: "Ventaja Competitiva",
        text: "Mientras tu competencia sigue con papel y boli o Excels interminables, tú operas con la velocidad de una startup tecnológica."
    }
]

export default function WhyDigitalizeSection() {
    return (
        <section id="why-digitalize" className="relative py-24 px-6 overflow-hidden">
            {/* Background Gradient Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                            ¿Por qué dar el salto <br />
                            <span className="text-gradient">a lo digital?</span>
                        </h2>
                        <div className="space-y-6">
                            <p className="text-zinc-400 text-lg leading-relaxed">
                                La digitalización no es tener una web bonita. Es transformar la operativa de tu empresa para que funcione como un reloj suizo.
                            </p>
                            <p className="text-zinc-400 text-lg leading-relaxed">
                                Muchos negocios tocan techo porque su gestión interna no da para más. Digitalizarse es romper ese techo de cristal.
                            </p>
                        </div>

                        {/* Stats or trust indicator (Optional, keeping it simple for now) */}
                        <div className="mt-12 flex gap-8 border-t border-zinc-800 pt-8">
                            <div>
                                <h4 className="text-3xl font-bold text-white mb-1">+40%</h4>
                                <p className="text-zinc-500 text-sm">Eficiencia Operativa</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-white mb-1">24/7</h4>
                                <p className="text-zinc-500 text-sm">Disponibilidad</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Benefits Grid */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-indigo-500/30 transition-colors"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                <div className="w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center mb-4 text-indigo-400">
                                    <benefit.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                                <p className="text-zinc-400 text-sm leading-relaxed">
                                    {benefit.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}
