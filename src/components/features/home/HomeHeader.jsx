import Container from '../../../layouts/Container'
import BoxyButton from '../../ui/buttons/BoxyButton'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'

export default function HomeHeader() {
  const buttons = [
    {
      href: '/om-mig',
      text: 'Om mig'
    },
    {
      href: '/hemsidor',
      text: 'Köp en hemsida'
    },
    {
      href: '/kontakt',
      text: 'Kontakt'
    }
  ]

  return (
    <header
      className="relative bg-[url('/assets/images/pages/home/HomeHeader.webp')] bg-cover
        bg-[60%_0%] before:absolute before:top-0 before:h-full before:w-full
        before:bg-[#ffffffad] before:content-['']"
    >
      <div className="relative z-1">
        <Container className="pt-[25dvh] pb-20 md:pt-[20dvh] lg:pt-[30dvh]">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: 'easeOut'
            }}
            className="mb-10 font-black md:mb-15 2xl:mb-20 2xl:max-w-1/2"
            viewport={{ once: true }}
          >
            Hej, mitt namn är Theodor Lundin
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: 'easeOut',
              delay: 0.25
            }}
            viewport={{ once: true }}
          >
            Jag håller på med webbutveckling, skådespeleri och entreprenörskap.
          </motion.h2>
          <div
            className="mt-15 grid grid-cols-1 gap-4 md:mt-20 lg:grid-cols-3 xl:gap-8 2xl:mt-35
              2xl:gap-16"
          >
            {buttons.map((button, index) => (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: 'easeOut',
                  delay: 0.75 + index * 0.2
                }}
                viewport={{ once: true }}
                key={index}
                className="w-full"
              >
                <Link to={button.href}>
                  <BoxyButton key={index} className="w-full">
                    {button.text}
                  </BoxyButton>
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </div>
    </header>
  )
}
