import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

// Placeholder data - Replace with real projects later
const projects = [
    {
        title: "E-Commerce B2B",
        description: "Plataforma de pedidos al por mayor con integración de ERP en tiempo real.",
        tags: ["React", "Node.js", "ERP Integration"],
        color: "from-blue-600 to-cyan-600"
    },
    {
        title: "Dashboard Analítico",
        description: "Panel de control para visualización de KPIs industriales y gestión de producción.",
        tags: ["Vue.js", "D3.js", "Real-time"],
        color: "from-purple-600 to-pink-600"
    },
    {
        title: "App de Gestión de Flotas",
        description: "Sistema de seguimiento GPS y optimización de rutas para logística.",
        tags: ["React Native", "Maps API", "SaaS"],
        color: "from-amber-500 to-orange-600"
    }
]

export default function PortfolioSection() {
    return (
        <section id="portfolio" className="relative py-24 px-6 bg-zinc-900/50">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                            Proyectos <span className="text-gradient">Destacados</span>
                        </h2>
                        <p className="text-zinc-400 text-lg max-w-xl">
                            Una imagen vale más que mil palabras. Aquí tienes algunos ejemplos de lo que podemos construir juntos.
                        </p>
                    </div>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="group relative rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-zinc-600 transition-all duration-300"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -5 }}
                        >
                            {/* Image Placeholder */}
                            <div className={`h-48 w-full bg-gradient-to-br ${project.color} group-hover:scale-105 transition-transform duration-500 flex items-center justify-center`}>
                                <span className="text-white/20 font-bold text-4xl uppercase tracking-widest">
                                    Proyecto {index + 1}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-zinc-400 text-sm mb-4 line-clamp-2">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-zinc-800 text-zinc-300 border border-zinc-700">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Link (Mock) */}
                                <button className="flex items-center gap-2 text-sm font-medium text-white group-hover:text-indigo-400 transition-colors">
                                    Ver Detalle <ExternalLink className="w-4 h-4" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Note */}
                <div className="mt-12 text-center">
                    <p className="text-zinc-600 text-sm italic">
                        * Estos son ejemplos demostrativos. Tus proyectos serán confidenciales si así lo requieres.
                    </p>
                </div>
            </div>
        </section>
    )
}
