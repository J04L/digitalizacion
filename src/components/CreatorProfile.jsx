import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    X, ChevronDown, Briefcase, Clock, Code, Mail, Phone,
    MessageCircle, ExternalLink, Check, Copy, Sparkles
} from 'lucide-react'

// Projects data (moved from PortfolioSection)
const projects = [
    {
        title: "E-Commerce B2B",
        description: "Plataforma de pedidos al por mayor con integración de ERP en tiempo real.",
        tags: ["React", "Node.js", "ERP"],
        color: "from-blue-600 to-cyan-600"
    },
    {
        title: "Dashboard Analítico",
        description: "Panel de control para KPIs industriales y gestión de producción.",
        tags: ["Vue.js", "D3.js", "Real-time"],
        color: "from-purple-600 to-pink-600"
    },
    {
        title: "App de Gestión de Flotas",
        description: "Seguimiento GPS y optimización de rutas para logística.",
        tags: ["React Native", "Maps API"],
        color: "from-amber-500 to-orange-600"
    }
]

// Tech stack
const techStack = [
    { name: "React", color: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30" },
    { name: "Laravel", color: "bg-red-500/20 text-red-300 border-red-500/30" },
    { name: "Node.js", color: "bg-green-500/20 text-green-300 border-green-500/30" },
    { name: "MySQL", color: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
    { name: "Tailwind", color: "bg-teal-500/20 text-teal-300 border-teal-500/30" },
    { name: "Git", color: "bg-orange-500/20 text-orange-300 border-orange-500/30" }
]

// Stats
const stats = [
    { label: "Proyectos", value: "3+" },
    { label: "Años", value: "~2" },
    { label: "Clientes", value: "5+" }
]

// Contact info
const contactInfo = {
    email: "joelrt1016@gmail.com",
    phone: "640285441",
    whatsapp: "34640285441"
}

export default function CreatorProfile() {
    const [isOpen, setIsOpen] = useState(false)
    const [activeTab, setActiveTab] = useState('about')
    const [copied, setCopied] = useState(null)

    const copyToClipboard = (text, type) => {
        navigator.clipboard.writeText(text)
        setCopied(type)
        setTimeout(() => setCopied(null), 2000)
    }

    const tabs = [
        { id: 'about', label: 'Sobre mí' },
        { id: 'projects', label: 'Proyectos' },
        { id: 'contact', label: 'Contacto' }
    ]

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
                {/* Availability Indicator */}
                <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                        JR
                    </div>
                    <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-zinc-900 animate-pulse" />
                </div>

                <div className="text-left hidden sm:block">
                    <p className="text-white text-sm font-medium">Joel Romero</p>
                    <p className="text-zinc-400 text-xs">Disponible</p>
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
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Modal Content */}
                        <motion.div
                            className="relative w-full max-w-2xl max-h-[90vh] bg-zinc-900 rounded-3xl border border-zinc-800 overflow-hidden flex flex-col"
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

                            {/* Header */}
                            <div className="relative h-28 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 shrink-0">
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 to-transparent" />
                            </div>

                            {/* Avatar + Name */}
                            <div className="relative -mt-14 px-6 pb-4 shrink-0">
                                <div className="flex items-end gap-4">
                                    <div className="relative">
                                        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 p-1 shadow-xl">
                                            <div className="w-full h-full rounded-xl bg-zinc-900 flex items-center justify-center">
                                                <span className="text-3xl font-bold text-white">JR</span>
                                            </div>
                                        </div>
                                        <span className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-zinc-900 animate-pulse" />
                                    </div>
                                    <div className="pb-2">
                                        <div className="flex items-center gap-2">
                                            <h3 className="text-2xl font-bold text-white">Joel Romero Tavarez</h3>
                                        </div>
                                        <div className="flex items-center gap-2 mt-1">
                                            <span className="text-emerald-400 text-sm font-medium flex items-center gap-1">
                                                <Sparkles className="w-3.5 h-3.5" />
                                                Disponible para proyectos
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Tabs */}
                            <div className="flex gap-1 px-6 border-b border-zinc-800 shrink-0">
                                {tabs.map(tab => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`px-4 py-3 text-sm font-medium transition-colors relative cursor-pointer ${activeTab === tab.id
                                                ? 'text-white'
                                                : 'text-zinc-500 hover:text-zinc-300'
                                            }`}
                                    >
                                        {tab.label}
                                        {activeTab === tab.id && (
                                            <motion.div
                                                layoutId="activeTab"
                                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-500"
                                            />
                                        )}
                                    </button>
                                ))}
                            </div>

                            {/* Tab Content */}
                            <div className="flex-1 overflow-y-auto p-6">
                                <AnimatePresence mode="wait">
                                    {/* About Tab */}
                                    {activeTab === 'about' && (
                                        <motion.div
                                            key="about"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="space-y-6"
                                        >
                                            {/* Stats */}
                                            <div className="grid grid-cols-3 gap-4">
                                                {stats.map((stat, i) => (
                                                    <div key={i} className="text-center p-4 rounded-xl bg-zinc-800/50 border border-zinc-700">
                                                        <p className="text-2xl font-bold text-white">{stat.value}</p>
                                                        <p className="text-zinc-400 text-sm">{stat.label}</p>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Info Cards */}
                                            <div className="space-y-3">
                                                <div className="flex items-start gap-3 p-4 rounded-xl bg-zinc-800/50">
                                                    <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center shrink-0">
                                                        <Briefcase className="w-5 h-5 text-indigo-400" />
                                                    </div>
                                                    <div>
                                                        <p className="text-white text-sm font-medium">Experiencia</p>
                                                        <p className="text-zinc-400 text-sm">Casi 2 años creando webs y herramientas a medida</p>
                                                    </div>
                                                </div>

                                                <div className="flex items-start gap-3 p-4 rounded-xl bg-zinc-800/50">
                                                    <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center shrink-0">
                                                        <Clock className="w-5 h-5 text-purple-400" />
                                                    </div>
                                                    <div>
                                                        <p className="text-white text-sm font-medium">Horario</p>
                                                        <p className="text-zinc-400 text-sm">De 17:30 a 22:00 (flexible según proyecto)</p>
                                                    </div>
                                                </div>

                                                <div className="flex items-start gap-3 p-4 rounded-xl bg-zinc-800/50">
                                                    <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center shrink-0">
                                                        <Code className="w-5 h-5 text-emerald-400" />
                                                    </div>
                                                    <div>
                                                        <p className="text-white text-sm font-medium">Cómo trabajo</p>
                                                        <p className="text-zinc-400 text-sm">Código limpio. Sin rodeos. Comunicación directa contigo.</p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Tech Stack */}
                                            <div>
                                                <p className="text-zinc-400 text-sm mb-3">Tecnologías que domino:</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {techStack.map((tech, i) => (
                                                        <span
                                                            key={i}
                                                            className={`px-3 py-1.5 rounded-full text-xs font-medium border ${tech.color}`}
                                                        >
                                                            {tech.name}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Note */}
                                            <div className="p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
                                                <p className="text-zinc-300 text-sm leading-relaxed">
                                                    Trabajo solo, así que hablarás siempre conmigo. Sin intermediarios,
                                                    sin comerciales. Tú me cuentas lo que necesitas y yo te lo construyo.
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* Projects Tab */}
                                    {activeTab === 'projects' && (
                                        <motion.div
                                            key="projects"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="space-y-4"
                                        >
                                            {projects.map((project, index) => (
                                                <div
                                                    key={index}
                                                    className="flex gap-4 p-4 rounded-xl bg-zinc-800/50 border border-zinc-700 hover:border-zinc-600 transition-colors"
                                                >
                                                    {/* Thumbnail */}
                                                    <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${project.color} shrink-0 flex items-center justify-center`}>
                                                        <span className="text-white/30 font-bold text-xs">{index + 1}</span>
                                                    </div>

                                                    {/* Content */}
                                                    <div className="flex-1 min-w-0">
                                                        <h4 className="text-white font-semibold mb-1">{project.title}</h4>
                                                        <p className="text-zinc-400 text-sm mb-3 line-clamp-2">{project.description}</p>
                                                        <div className="flex flex-wrap gap-1.5">
                                                            {project.tags.map(tag => (
                                                                <span key={tag} className="px-2 py-0.5 rounded-full text-xs bg-zinc-700 text-zinc-300">
                                                                    {tag}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}

                                            <p className="text-zinc-500 text-xs text-center pt-4">
                                                Estos son ejemplos representativos. Los proyectos de clientes son confidenciales.
                                            </p>
                                        </motion.div>
                                    )}

                                    {/* Contact Tab */}
                                    {activeTab === 'contact' && (
                                        <motion.div
                                            key="contact"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="space-y-4"
                                        >
                                            {/* Email */}
                                            <div className="flex items-center justify-between p-4 rounded-xl bg-zinc-800/50 border border-zinc-700">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                                                        <Mail className="w-5 h-5 text-red-400" />
                                                    </div>
                                                    <div>
                                                        <p className="text-zinc-400 text-xs">Email</p>
                                                        <p className="text-white text-sm font-medium">{contactInfo.email}</p>
                                                    </div>
                                                </div>
                                                <div className="flex gap-2">
                                                    <button
                                                        onClick={() => copyToClipboard(contactInfo.email, 'email')}
                                                        className="p-2 rounded-lg bg-zinc-700 hover:bg-zinc-600 transition-colors cursor-pointer"
                                                    >
                                                        {copied === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-zinc-400" />}
                                                    </button>
                                                    <a
                                                        href={`mailto:${contactInfo.email}`}
                                                        className="p-2 rounded-lg bg-zinc-700 hover:bg-zinc-600 transition-colors"
                                                    >
                                                        <ExternalLink className="w-4 h-4 text-zinc-400" />
                                                    </a>
                                                </div>
                                            </div>

                                            {/* Phone */}
                                            <div className="flex items-center justify-between p-4 rounded-xl bg-zinc-800/50 border border-zinc-700">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                                                        <Phone className="w-5 h-5 text-blue-400" />
                                                    </div>
                                                    <div>
                                                        <p className="text-zinc-400 text-xs">Teléfono</p>
                                                        <p className="text-white text-sm font-medium">{contactInfo.phone}</p>
                                                    </div>
                                                </div>
                                                <div className="flex gap-2">
                                                    <button
                                                        onClick={() => copyToClipboard(contactInfo.phone, 'phone')}
                                                        className="p-2 rounded-lg bg-zinc-700 hover:bg-zinc-600 transition-colors cursor-pointer"
                                                    >
                                                        {copied === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-zinc-400" />}
                                                    </button>
                                                    <a
                                                        href={`tel:${contactInfo.phone}`}
                                                        className="p-2 rounded-lg bg-zinc-700 hover:bg-zinc-600 transition-colors"
                                                    >
                                                        <ExternalLink className="w-4 h-4 text-zinc-400" />
                                                    </a>
                                                </div>
                                            </div>

                                            {/* WhatsApp CTA */}
                                            <a
                                                href={`https://wa.me/${contactInfo.whatsapp}?text=Hola%20Joel,%20me%20interesa%20hablar%20sobre%20un%20proyecto`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-3 w-full p-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 transition-colors text-white font-semibold"
                                            >
                                                <MessageCircle className="w-5 h-5" />
                                                Escríbeme por WhatsApp
                                            </a>

                                            <p className="text-zinc-500 text-xs text-center">
                                                Respondo en menos de 24h (normalmente antes)
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* CTA Footer */}
                            <div className="p-4 border-t border-zinc-800 shrink-0">
                                <a
                                    href={`https://wa.me/${contactInfo.whatsapp}?text=Hola%20Joel,%20me%20interesa%20hablar%20sobre%20un%20proyecto`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:shadow-lg hover:shadow-indigo-500/25 transition-all text-white font-semibold"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    Hablemos de tu proyecto
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
