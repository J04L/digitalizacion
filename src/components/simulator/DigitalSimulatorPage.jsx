import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Plus, X, Filter, Home, MapPin, Bed, Bath, Maximize, Euro } from 'lucide-react'
import { initialProperties, zones, getRandomDefaultImage } from '../../data/propertyData'

const STORAGE_KEY = 'simulator_properties'

export default function DigitalSimulatorPage() {
    const [properties, setProperties] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [filters, setFilters] = useState({
        zone: '',
        minPrice: '',
        maxPrice: '',
        bedrooms: ''
    })
    const [showAddForm, setShowAddForm] = useState(false)
    const [newProperty, setNewProperty] = useState({
        title: '',
        zone: 'Centro',
        price: '',
        bedrooms: '',
        bathrooms: '',
        sqm: ''
    })

    // Load from localStorage on mount
    useEffect(() => {
        const stored = localStorage.getItem(STORAGE_KEY)
        if (stored) {
            const parsed = JSON.parse(stored)
            setProperties([...initialProperties, ...parsed])
        } else {
            setProperties(initialProperties)
        }
    }, [])

    // Save custom properties to localStorage
    const saveToStorage = (customProperties) => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(customProperties))
    }

    // Filter logic
    const filteredProperties = properties.filter(p => {
        const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesZone = !filters.zone || p.zone === filters.zone
        const matchesMinPrice = !filters.minPrice || p.price >= parseInt(filters.minPrice)
        const matchesMaxPrice = !filters.maxPrice || p.price <= parseInt(filters.maxPrice)
        const matchesBedrooms = !filters.bedrooms || p.bedrooms === parseInt(filters.bedrooms)

        return matchesSearch && matchesZone && matchesMinPrice && matchesMaxPrice && matchesBedrooms
    })

    // Add new property
    const handleAddProperty = (e) => {
        e.preventDefault()

        const property = {
            id: Date.now(),
            title: newProperty.title,
            zone: newProperty.zone,
            price: parseInt(newProperty.price),
            bedrooms: parseInt(newProperty.bedrooms),
            bathrooms: parseInt(newProperty.bathrooms),
            sqm: parseInt(newProperty.sqm),
            image: getRandomDefaultImage(),
            isCustom: true
        }

        const customProperties = properties.filter(p => p.isCustom)
        const updatedCustom = [...customProperties, property]
        saveToStorage(updatedCustom)

        setProperties([...initialProperties, ...updatedCustom])
        setNewProperty({ title: '', zone: 'Centro', price: '', bedrooms: '', bathrooms: '', sqm: '' })
        setShowAddForm(false)
    }

    // Clear filters
    const clearFilters = () => {
        setFilters({ zone: '', minPrice: '', maxPrice: '', bedrooms: '' })
        setSearchTerm('')
    }

    const hasActiveFilters = filters.zone || filters.minPrice || filters.maxPrice || filters.bedrooms || searchTerm

    return (
        <div className="min-h-full p-4 md:p-8">
            {/* Header */}
            <motion.div
                className="text-center mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">
                    Tu nuevo <span className="text-gradient">sistema digital</span>
                </h2>
                <p className="text-zinc-400 text-sm md:text-base">
                    El mismo cliente llama: "Quiero 3 hab, centro, máx 250k" — Responde en 2 segundos ⚡
                </p>
            </motion.div>

            {/* Controls Bar */}
            <motion.div
                className="flex flex-wrap gap-3 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                {/* Search */}
                <div className="relative flex-1 min-w-[200px]">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                    <input
                        type="text"
                        placeholder="Buscar propiedad..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 bg-zinc-800 border border-zinc-700 rounded-xl text-white text-sm placeholder-zinc-500 focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                </div>

                {/* Zone Filter */}
                <select
                    value={filters.zone}
                    onChange={(e) => setFilters({ ...filters, zone: e.target.value })}
                    className="px-4 py-2.5 bg-zinc-800 border border-zinc-700 rounded-xl text-white text-sm focus:outline-none focus:border-indigo-500 cursor-pointer"
                >
                    <option value="">Todas las zonas</option>
                    {zones.map(zone => (
                        <option key={zone} value={zone}>{zone}</option>
                    ))}
                </select>

                {/* Bedrooms Filter */}
                <select
                    value={filters.bedrooms}
                    onChange={(e) => setFilters({ ...filters, bedrooms: e.target.value })}
                    className="px-4 py-2.5 bg-zinc-800 border border-zinc-700 rounded-xl text-white text-sm focus:outline-none focus:border-indigo-500 cursor-pointer"
                >
                    <option value="">Habitaciones</option>
                    {[1, 2, 3, 4, 5].map(n => (
                        <option key={n} value={n}>{n} hab</option>
                    ))}
                </select>

                {/* Price Range */}
                <input
                    type="number"
                    placeholder="Precio mín"
                    value={filters.minPrice}
                    onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
                    className="w-28 px-3 py-2.5 bg-zinc-800 border border-zinc-700 rounded-xl text-white text-sm placeholder-zinc-500 focus:outline-none focus:border-indigo-500"
                />
                <input
                    type="number"
                    placeholder="Precio máx"
                    value={filters.maxPrice}
                    onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
                    className="w-28 px-3 py-2.5 bg-zinc-800 border border-zinc-700 rounded-xl text-white text-sm placeholder-zinc-500 focus:outline-none focus:border-indigo-500"
                />

                {/* Clear Filters */}
                {hasActiveFilters && (
                    <button
                        onClick={clearFilters}
                        className="px-4 py-2.5 bg-red-500/20 border border-red-500/30 rounded-xl text-red-300 text-sm hover:bg-red-500/30 transition-colors cursor-pointer"
                    >
                        Limpiar
                    </button>
                )}

                {/* Add Button */}
                <button
                    onClick={() => setShowAddForm(true)}
                    className="px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl text-white text-sm font-medium hover:shadow-lg hover:shadow-indigo-500/25 transition-all cursor-pointer flex items-center gap-2"
                >
                    <Plus className="w-4 h-4" />
                    Añadir
                </button>
            </motion.div>

            {/* Results Count */}
            <motion.p
                className="text-zinc-500 text-sm mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                Mostrando {filteredProperties.length} de {properties.length} propiedades
            </motion.p>

            {/* Property Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                <AnimatePresence>
                    {filteredProperties.map((property, index) => (
                        <motion.div
                            key={property.id}
                            className="bg-zinc-800/50 rounded-2xl overflow-hidden border border-zinc-700 hover:border-indigo-500/50 transition-all group"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ delay: index * 0.02 }}
                            whileHover={{ y: -3 }}
                        >
                            {/* Image */}
                            <div className="relative h-36 overflow-hidden">
                                <img
                                    src={property.image}
                                    alt={property.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-2 left-2 px-2 py-1 rounded-full bg-black/60 text-white text-xs font-medium">
                                    {property.zone}
                                </div>
                                {property.isCustom && (
                                    <div className="absolute top-2 right-2 px-2 py-1 rounded-full bg-emerald-500/80 text-white text-xs font-medium">
                                        Nuevo
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="p-4">
                                <h3 className="text-white font-semibold text-sm mb-2 line-clamp-1">
                                    {property.title}
                                </h3>

                                <p className="text-indigo-400 font-bold text-lg mb-3">
                                    {property.price.toLocaleString('es-ES')}€
                                </p>

                                <div className="flex items-center gap-3 text-zinc-400 text-xs">
                                    <span className="flex items-center gap-1">
                                        <Bed className="w-3.5 h-3.5" />
                                        {property.bedrooms}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Bath className="w-3.5 h-3.5" />
                                        {property.bathrooms}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Maximize className="w-3.5 h-3.5" />
                                        {property.sqm}m²
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {filteredProperties.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-zinc-500">No hay propiedades que coincidan con tu búsqueda</p>
                </div>
            )}

            {/* Add Property Modal */}
            <AnimatePresence>
                {showAddForm && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowAddForm(false)}
                    >
                        <motion.form
                            className="w-full max-w-md bg-zinc-900 rounded-2xl p-6 border border-zinc-700"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            onSubmit={handleAddProperty}
                        >
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-bold text-white">Añadir Propiedad</h3>
                                <button
                                    type="button"
                                    onClick={() => setShowAddForm(false)}
                                    className="p-2 rounded-full hover:bg-zinc-800 transition-colors cursor-pointer"
                                >
                                    <X className="w-5 h-5 text-zinc-400" />
                                </button>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-zinc-400 text-sm mb-1">Título</label>
                                    <input
                                        type="text"
                                        required
                                        value={newProperty.title}
                                        onChange={(e) => setNewProperty({ ...newProperty, title: e.target.value })}
                                        className="w-full px-4 py-2.5 bg-zinc-800 border border-zinc-700 rounded-xl text-white text-sm focus:outline-none focus:border-indigo-500"
                                        placeholder="Ej: Piso luminoso en el centro"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-zinc-400 text-sm mb-1">Zona</label>
                                        <select
                                            value={newProperty.zone}
                                            onChange={(e) => setNewProperty({ ...newProperty, zone: e.target.value })}
                                            className="w-full px-4 py-2.5 bg-zinc-800 border border-zinc-700 rounded-xl text-white text-sm focus:outline-none focus:border-indigo-500 cursor-pointer"
                                        >
                                            {zones.map(zone => (
                                                <option key={zone} value={zone}>{zone}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-zinc-400 text-sm mb-1">Precio (€)</label>
                                        <input
                                            type="number"
                                            required
                                            value={newProperty.price}
                                            onChange={(e) => setNewProperty({ ...newProperty, price: e.target.value })}
                                            className="w-full px-4 py-2.5 bg-zinc-800 border border-zinc-700 rounded-xl text-white text-sm focus:outline-none focus:border-indigo-500"
                                            placeholder="150000"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-3 gap-4">
                                    <div>
                                        <label className="block text-zinc-400 text-sm mb-1">Habitaciones</label>
                                        <input
                                            type="number"
                                            required
                                            min="1"
                                            value={newProperty.bedrooms}
                                            onChange={(e) => setNewProperty({ ...newProperty, bedrooms: e.target.value })}
                                            className="w-full px-4 py-2.5 bg-zinc-800 border border-zinc-700 rounded-xl text-white text-sm focus:outline-none focus:border-indigo-500"
                                            placeholder="2"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-zinc-400 text-sm mb-1">Baños</label>
                                        <input
                                            type="number"
                                            required
                                            min="1"
                                            value={newProperty.bathrooms}
                                            onChange={(e) => setNewProperty({ ...newProperty, bathrooms: e.target.value })}
                                            className="w-full px-4 py-2.5 bg-zinc-800 border border-zinc-700 rounded-xl text-white text-sm focus:outline-none focus:border-indigo-500"
                                            placeholder="1"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-zinc-400 text-sm mb-1">m²</label>
                                        <input
                                            type="number"
                                            required
                                            min="1"
                                            value={newProperty.sqm}
                                            onChange={(e) => setNewProperty({ ...newProperty, sqm: e.target.value })}
                                            className="w-full px-4 py-2.5 bg-zinc-800 border border-zinc-700 rounded-xl text-white text-sm focus:outline-none focus:border-indigo-500"
                                            placeholder="80"
                                        />
                                    </div>
                                </div>

                                <p className="text-zinc-500 text-xs">
                                    💡 La imagen se asignará automáticamente
                                </p>
                            </div>

                            <button
                                type="submit"
                                className="w-full mt-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl text-white font-medium hover:shadow-lg hover:shadow-indigo-500/25 transition-all cursor-pointer"
                            >
                                Añadir Propiedad
                            </button>
                        </motion.form>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
