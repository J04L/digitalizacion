import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import HeroSection from './components/HeroSection'
import ModelCard from './components/ModelCard'
import ModelModal from './components/ModelModal'
import FloatingElements from './components/FloatingElements'
import CreatorProfile from './components/CreatorProfile'
import { modelsData } from './data/models'

function App() {
  const [selectedModel, setSelectedModel] = useState(null)

  return (
    <div className="relative min-h-screen">
      {/* Floating Background Elements */}
      <FloatingElements />

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <HeroSection />

        {/* Models Section */}
        <section
          id="models-section"
          className="relative py-24 px-6"
        >
          {/* Section Header */}
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Elige tu <span className="text-gradient">Modelo</span>
            </h2>
            <p className="text-zinc-400 text-lg">
              Os presento tres opciones. Eligid la que mejor se adapte a lo que necesitáis.
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 md:gap-8 items-stretch">
            {modelsData.map((model, index) => (
              <ModelCard
                key={model.id}
                model={model}
                index={index}
                onClick={() => setSelectedModel(model)}
              />
            ))}
          </div>

          {/* Bottom Note */}
          <motion.p
            className="text-center text-zinc-500 mt-12 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            Pulsa en cualquier opción para ver todos los detalles
          </motion.p>
        </section>

        {/* Footer */}
        <footer className="relative py-12 px-6 border-t border-zinc-800/50">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-zinc-500 text-sm">
              © {new Date().getFullYear()} · Desarrollado por <span className="text-zinc-400">Joel Romero Tavarez</span>
            </p>
          </div>
        </footer>
      </main>

      {/* Creator Profile Button */}
      <CreatorProfile />

      {/* Modal */}
      <AnimatePresence>
        {selectedModel && (
          <ModelModal
            model={selectedModel}
            onClose={() => setSelectedModel(null)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default App

