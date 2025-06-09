import { motion } from 'motion/react'

export default function WebsitesHeader() {
  return (
    <header
      className="relative grid h-[75dvh] w-full place-items-center
        bg-[url('/assets/images/pages/websites/WebsitesHeader.jpg')] bg-cover bg-fixed
        bg-[70%_0%] before:absolute before:top-0 before:h-full before:w-full
        before:bg-linear-to-r before:from-slate-800 before:content-[''] lg:h-[90dvh]"
    >
      <div
        className="lg:10/12 font-display relative z-1 w-11/12 text-center text-4xl font-black
          text-balance text-cyan-100 md:text-left md:text-7xl xl:w-9/12 xl:text-8xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: 'easeOut', delay: 0.5 }}
        >
          Jag skapar din
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: 'easeOut', delay: 0.75 }}
        >
          drömhemsida.
        </motion.div>
      </div>
    </header>
  )
}
