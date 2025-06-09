import { useRef, useState, useEffect } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { AnimatePresence, motion } from 'motion/react'
import Container from '../../../layouts/Container'
import BoxyLink from '../links/BoxyLink'
import { ListIcon, XIcon } from '@phosphor-icons/react'

export default function Navbar() {
  const [dialogOpen, setDialogOpen] = useState(false)
  const menu = useRef(null)
  const dialogContentRef = useRef(null)
  const hoverSound = useRef(new Audio('/assets/sounds/hover.wav'))
  const dialogAnimationDuration = 0.25

  // --- Handlers ---
  const playHoverSound = () => {
    hoverSound.current.currentTime = 0
    hoverSound.current.play().catch(() => {})
  }

  const handleDialogClick = (e) => {
    if (!dialogContentRef.current) return
    const rect = dialogContentRef.current.getBoundingClientRect()
    const x = e.clientX
    const y = e.clientY
    if (x < rect.left || x > rect.right || y < rect.top || y > rect.bottom) {
      setDialogOpen(false)
    }
  }

  // --- Dialog animation logic ---
  useEffect(() => {
    if (!menu.current) return
    if (dialogOpen) {
      menu.current.showModal()
    } else {
      setTimeout(() => {
        menu.current.close()
      }, dialogAnimationDuration * 1000)
    }
  }, [dialogOpen])

  // --- Renderers ---
  const navLinks = () => (
    <>
      <li onMouseEnter={playHoverSound}>
        <BoxyLink href="/om-mig">Om mig</BoxyLink>
      </li>
      <li onMouseEnter={playHoverSound}>
        <BoxyLink href="/hemsidor">Köp en hemsida</BoxyLink>
      </li>
      <li onMouseEnter={playHoverSound}>
        <BoxyLink href="/kontakt">Kontakt</BoxyLink>
      </li>
    </>
  )

  // --- JSX ---
  return (
    <>
      <nav className="fixed z-10 w-full pt-4">
        <Container>
          <div
            className="flex items-center justify-between rounded-2xl bg-[#e2e2e275] px-6 py-4
              backdrop-blur-xs"
          >
            <a href="/" className="leading-0" aria-label="Startsida">
              <LazyLoadImage
                src="/assets/images/signatur.png"
                className="w-22"
                alt=""
                effect="blur"
              />
            </a>
            <ul className="font-display hidden gap-8 lg:flex">{navLinks()}</ul>
            {dialogOpen ? (
              <XIcon size={24} className="cursor-pointer lg:hidden" />
            ) : (
              <ListIcon
                size={24}
                className="cursor-pointer lg:hidden"
                onClick={() => setDialogOpen(true)}
              />
            )}
          </div>
        </Container>
      </nav>
      <dialog
        ref={menu}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-transparent
          backdrop:pointer-events-auto backdrop:bg-transparent"
        onClick={handleDialogClick}
      >
        <AnimatePresence>
          {dialogOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: dialogAnimationDuration,
                ease: 'easeOut'
              }}
              ref={dialogContentRef}
              className="rounded-2xl bg-[#e2e2e2d5] px-8 py-12 backdrop-blur-xs"
            >
              <ul className="font-display flex flex-col gap-6">{navLinks()}</ul>
            </motion.div>
          )}
        </AnimatePresence>
      </dialog>
    </>
  )
}
