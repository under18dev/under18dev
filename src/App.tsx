import { useCallback, useState } from 'react'
import { motion } from 'framer-motion'
import { Route, Routes } from 'react-router-dom'
import { OpeningSequence } from './components/OpeningSequence'
import { HomePage } from './pages/HomePage'

function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export default function App() {
  const [showOpening, setShowOpening] = useState(
    () => !prefersReducedMotion(),
  )
  const [revealMain, setRevealMain] = useState(() => prefersReducedMotion())

  const handleBeginExit = useCallback(() => {
    setRevealMain(true)
  }, [])

  const handleOpeningComplete = useCallback(() => {
    setShowOpening(false)
  }, [])

  return (
    <div className="relative min-h-dvh bg-background text-foreground">
      <motion.div
        className="relative z-0"
        initial={false}
        animate={
          revealMain
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: 20 }
        }
        transition={{
          duration: 0.85,
          ease: [0.16, 1, 0.3, 1],
        }}
        aria-hidden={!revealMain}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </motion.div>

      {showOpening && (
        <OpeningSequence
          onBeginExit={handleBeginExit}
          onComplete={handleOpeningComplete}
        />
      )}
    </div>
  )
}
