import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

type OpeningSequenceProps = {
  onBeginExit: () => void
  onComplete: () => void
}

const ease = [0.16, 1, 0.3, 1] as const

export function OpeningSequence({
  onBeginExit,
  onComplete,
}: OpeningSequenceProps) {
  const [exitOverlay, setExitOverlay] = useState(false)

  useEffect(() => {
    let cancelled = false
    const beginExit = window.setTimeout(() => {
      if (cancelled) return
      onBeginExit()
      setExitOverlay(true)
    }, 5600)

    const finish = window.setTimeout(() => {
      if (cancelled) return
      onComplete()
    }, 5600 + 880)

    return () => {
      cancelled = true
      window.clearTimeout(beginExit)
      window.clearTimeout(finish)
    }
  }, [onBeginExit, onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background px-6"
      initial={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
      animate={
        exitOverlay
          ? { opacity: 0, filter: 'blur(10px)', scale: 1.015 }
          : { opacity: 1, filter: 'blur(0px)', scale: 1 }
      }
      transition={{ duration: 0.85, ease }}
    >
      <div className="flex max-w-lg flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, filter: 'blur(12px)', scale: 0.98 }}
          animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
          transition={{ duration: 1.05, ease }}
          className="font-display text-[clamp(2rem,6vw,3.25rem)] font-semibold tracking-tight text-foreground"
        >
          U18 Dev
        </motion.div>

        <motion.p
          initial={{ opacity: 0, filter: 'blur(8px)', y: 6 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{ duration: 0.75, delay: 0.35, ease }}
          className="mt-3 font-mono text-xs font-medium uppercase tracking-[0.22em] text-muted"
        >
          Under18 Developers
        </motion.p>

        <motion.p
          initial={{ opacity: 0, filter: 'blur(10px)', scale: 0.99 }}
          animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
          transition={{ duration: 0.9, delay: 2.25, ease }}
          className="mt-10 text-sm font-medium leading-relaxed text-muted sm:text-base"
        >
          もっと挑戦できる場所へ。
        </motion.p>
      </div>
    </motion.div>
  )
}
