import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import ContextPage from './simulator/ContextPage'
import NotebookPage from './simulator/NotebookPage'
import TransitionPage from './simulator/TransitionPage'
import DigitalSimulatorPage from './simulator/DigitalSimulatorPage'

const pages = [
    { id: 'context', component: ContextPage },
    { id: 'notebook', component: NotebookPage },
    { id: 'transition', component: TransitionPage },
    { id: 'digital', component: DigitalSimulatorPage }
]

export default function PropertySimulator({ onClose }) {
    const [currentPage, setCurrentPage] = useState(0)

    const goNext = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(prev => prev + 1)
        }
    }

    const goPrev = () => {
        if (currentPage > 0) {
            setCurrentPage(prev => prev - 1)
        }
    }

    const CurrentPageComponent = pages[currentPage].component

    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {/* Backdrop */}
            <motion.div
                className="absolute inset-0 bg-black/90 backdrop-blur-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            />

            {/* Content Container */}
            <div className="relative w-full h-full max-w-7xl mx-auto flex items-center justify-center p-4 md:p-8">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 md:top-8 md:right-8 z-50 p-3 rounded-full bg-zinc-800/80 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors cursor-pointer"
                >
                    <X className="w-6 h-6" />
                </button>

                {/* Left Arrow */}
                <button
                    onClick={goPrev}
                    disabled={currentPage === 0}
                    className={`absolute left-2 md:left-4 z-40 p-3 rounded-full transition-all cursor-pointer ${currentPage === 0
                            ? 'bg-zinc-800/30 text-zinc-600 cursor-not-allowed'
                            : 'bg-zinc-800/80 text-white hover:bg-indigo-600'
                        }`}
                >
                    <ChevronLeft className="w-8 h-8" />
                </button>

                {/* Page Content */}
                <div className="w-full h-full max-h-[90vh] overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentPage}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.3 }}
                            className="w-full h-full overflow-y-auto"
                        >
                            <CurrentPageComponent onNext={goNext} />
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Right Arrow */}
                <button
                    onClick={goNext}
                    disabled={currentPage === pages.length - 1}
                    className={`absolute right-2 md:right-4 z-40 p-3 rounded-full transition-all cursor-pointer ${currentPage === pages.length - 1
                            ? 'bg-zinc-800/30 text-zinc-600 cursor-not-allowed'
                            : 'bg-zinc-800/80 text-white hover:bg-indigo-600'
                        }`}
                >
                    <ChevronRight className="w-8 h-8" />
                </button>

                {/* Progress Dots */}
                <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                    {pages.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentPage(index)}
                            className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${index === currentPage
                                    ? 'bg-indigo-500 w-8'
                                    : 'bg-zinc-600 hover:bg-zinc-500'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </motion.div>
    )
}
