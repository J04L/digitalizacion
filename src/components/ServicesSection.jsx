import { motion } from 'framer-motion'
import { Server, Smartphone, Layout } from 'lucide-react'

const services = [
    {
        icon: Layout,
        title: "Desarrollo Web a Medida",
        description: "Más que una página bonita. Construyo herramientas que trabajan por ti. Dashboards, CRMs internos y plataformas de gestión únicas para tu negocio.",
        color: "from-blue-500 to-indigo-500"
    },
    {
        icon: Server,
        title: "Automatización de Procesos",
        description: "¿Sigues usando Excel para todo? Digitalizo tus flujos de trabajo manuales para que ahorres horas cada semana y evites errores humanos.",
        color: "from-purple-500 to-pink-500"
    },
    {
        icon: Smartphone,
        title: "Aplicaciones Web Progresivas",
        description: "La potencia de una app nativa pero accesible desde el navegador. Tus clientes o empleados podrán usarla en cualquier dispositivo sin instalaciones complejas.",
        color: "from-emerald-500 to-teal-500"
    }
]

export default function ServicesSection() {
    return (
        <section id="services" className="relative py-24 px-6 bg-zinc-950">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Lo que puedo hacer <span className="text-gradient">por vosotros</span>
                    </h2>
                    <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                        No vendo plantillas. Creo soluciones tecnológicas específicas para resolver los problemas reales de vuestro día a día.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="group relative p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-all duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            whileHover={{ y: -5 }}
                        >
                            {/* Icon Background */}
                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <div className="w-full h-full bg-zinc-900 rounded-xl flex items-center justify-center">
                                    <service.icon className="w-7 h-7 text-white" />
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-400 transition-all">
                                {service.title}
                            </h3>
                            <p className="text-zinc-400 leading-relaxed">
                                {service.description}
                            </p>

                            {/* Hover Gradient Effect */}
                            <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
