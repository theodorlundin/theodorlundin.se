import {
  ButterflyIcon,
  CopyrightIcon,
  EnvelopeSimpleIcon,
  InstagramLogoIcon
} from '@phosphor-icons/react'
import ExternalLink from '../links/ExternalLink'
import Container from '../../../layouts/Container'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="relative bg-cyan-950 py-8 text-slate-100 backdrop-opacity-100">
      <Container className="relative z-1 px-4">
        <div
          className="grid gap-y-8 py-8 sm:grid-cols-2 [&_a]:w-max [&_a]:text-slate-100
            [&_a:hover]:underline [&>div]:flex [&>div]:flex-col [&>div]:gap-4
            [&>div]:text-sm sm:[&>div:last-child]:justify-self-center
            lg:[&>div:last-child]:justify-self-start"
        >
          <div>
            <Link to="/om-mig">Om mig</Link>
            <Link to="/hemsidor">Köp en hemsida</Link>
            <Link to="/kontakt">Kontakt</Link>
            <Link to="/integritet">Integritet</Link>
            <Link
              to="mailto:theodor.lundin@theodorlundin.se"
              className="flex items-center gap-1"
            >
              <EnvelopeSimpleIcon />
              theodor.lundin@theodorlundin.se
            </Link>
          </div>
          <div>
            <ExternalLink to="https://github.com/theodorlundin">
              GitHub
            </ExternalLink>
            <ExternalLink to="https://studian.se">Studian</ExternalLink>
            <div className="grid w-max grid-cols-2 gap-2">
              <Link to="https://instagram.com/theodor_lundin" target="_blank">
                <InstagramLogoIcon size={32} />
              </Link>
              <Link
                to="https://bsky.app/profile/theodorlundin.se"
                target="_blank"
              >
                <ButterflyIcon size={32} />
              </Link>
            </div>
          </div>
        </div>
        <img
          src="/assets/images/logos/Dreamable-Media-Logo-1500px.png"
          alt=""
          className="w-40"
        />
        <p className="mt-6 flex items-center gap-2">
          <CopyrightIcon size={24} className="fill-cyan-500" /> Dreamable Media, {new Date().getFullYear()}
        </p>
      </Container>
      <img
        src="/assets/images/theme/pattern.png"
        className="absolute top-0 left-0 z-0 h-full w-full object-cover opacity-30
          mix-blend-overlay"
        alt=""
        draggable="false"
      />
    </footer>
  )
}
