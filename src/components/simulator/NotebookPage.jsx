import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, AlertTriangle } from 'lucide-react'

// Simulated messy notebook entries
const notebookEntries = [
    "Piso centro - 3 hab - 245.000€ - Juan llamó interesado",
    "Ático playa 320k - 2 baños - pendiente visita",
    "Estudio pequeño 125.000 - zona norte? no, centro creo",
    "Chalet afueras - el grande con jardín - 375.000",
    "Piso reformado parque - 189k - cliente María preguntó",
    "Apartamento estudiantes - barato - 110k centro",
    "Dúplex sur terraza - 298.000€ - 3 habitaciones",
    "Piso familiar norte - 210.000 - zona escolar",
    "Loft centro - industrial - 275k - 1 hab solo",
    "Bajo con patio - afueras - 175.000€",
    "Ático piscina norte - 285k - 3 hab 2 baños",
    "Piso histórico centro - muy caro 450k - 4 hab",
    "Primera línea playa!!!  410.000 - urgente",
    "Piso sur metro - 165k - recién pintado",
    "Apartamento balcón playa - 235.000 - soleado",
    "Casa grande norte - 340k - 5 habitaciones familia",
    "Estudio amueblado - 135k - listo para entrar centro",
    "Chalet independiente - el más caro - 520k afueras garaje",
    "Piso invertir sur - 95.000€ - el más barato",
    "Ático lujo playa jacuzzi - 580.000!!!",
    "--- LLAMAR A CARLOS POR LO DEL PISO ---",
    "Nota: subir precio ático centro un 5%",
    "Visita mañana 10:00 - ¿cuál era el piso?",
    "Cliente quiere 3 hab máx 200k zona norte - ¿cuál le mando?",
    "Recordar: fotos piso sur para portal",
]

export default function NotebookPage() {
    const [searchTerm, setSearchTerm] = useState('')
    const [hasSearched, setHasSearched] = useState(false)

    const handleSearch = (e) => {
        setSearchTerm(e.target.value)
        if (e.target.value.length > 0) {
            setHasSearched(true)
        }
    }

    const filteredEntries = searchTerm
        ? notebookEntries.filter(entry =>
            entry.toLowerCase().includes(searchTerm.toLowerCase())
        )
        : notebookEntries

    return (
        <div className="min-h-full p-6 md:p-12">
            {/* Header */}
            <motion.div
                className="text-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">
                    Tu libreta de <span className="text-amber-400">notas</span>
                </h2>
                <p className="text-zinc-400">
                    Un cliente llama: "Quiero un piso en el centro con 3 habitaciones por menos de 250.000€"
                </p>
                <p className="text-zinc-500 text-sm mt-2">
                    Busca entre tus notas... buena suerte 😅
                </p>
            </motion.div>

            {/* Search Bar (manual, frustrating) */}
            <motion.div
                className="max-w-md mx-auto mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                    <input
                        type="text"
                        placeholder="Buscar en tus notas..."
                        value={searchTerm}
                        onChange={handleSearch}
                        className="w-full pl-12 pr-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500 transition-colors"
                    />
                </div>
            </motion.div>

            {/* Warning Message */}
            {hasSearched && (
                <motion.div
                    className="max-w-md mx-auto mb-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                >
                    <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <p className="text-amber-200 text-sm">
                        ¿Y si el cliente pregunta por precio exacto? ¿Y los metros cuadrados?
                        ¿Cuántos baños tenía ese piso? 🤔
                    </p>
                </motion.div>
            )}

            {/* Notebook */}
            <motion.div
                className="max-w-2xl mx-auto bg-amber-50 rounded-2xl p-6 md:p-8 shadow-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                style={{
                    backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, #e5d5c5 31px, #e5d5c5 32px)'
                }}
            >
                {/* Notebook Lines */}
                <div className="space-y-2">
                    {filteredEntries.map((entry, index) => (
                        <motion.p
                            key={index}
                            className="text-zinc-800 leading-8 border-b border-amber-200/50"
                            style={{
                                fontFamily: "'Caveat', cursive",
                                fontSize: '1.25rem',
                                transform: `rotate(${Math.random() * 2 - 1}deg)`
                            }}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.03 }}
                        >
                            {entry}
                        </motion.p>
                    ))}
                </div>

                {filteredEntries.length === 0 && (
                    <p className="text-center text-zinc-500 py-8" style={{ fontFamily: "'Caveat', cursive", fontSize: '1.5rem' }}>
                        No encuentras nada... 😓
                    </p>
                )}
            </motion.div>

            {/* Bottom hint */}
            <motion.p
                className="text-center text-zinc-600 mt-8 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            >
                Mientras buscas, el cliente espera al teléfono...  → Pulsa la flecha para ver otra opción
            </motion.p>
        </div>
    )
}
