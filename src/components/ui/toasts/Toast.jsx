import {
  CheckCircleIcon,
  InfoIcon,
  WarningOctagonIcon,
  WarningIcon
} from '@phosphor-icons/react'
import { motion } from 'motion/react'

export const Toast = ({ message, type }) => {
  const presetColors = {
    success: 'bg-green-100 border-green-300 [&>svg]:text-green-400',
    error: 'bg-rose-100 border-rose-300 [&>svg]:text-rose-500',
    warning: 'bg-yellow-100 border-yellow-300 [&>svg]:text-yellow-400',
    info: 'bg-blue-100 border-blue-300 [&>svg]:text-blue-400'
  }

  const presetIcons = {
    success: <CheckCircleIcon size={24} />,
    error: <WarningOctagonIcon size={24} />,
    warning: <WarningIcon size={24} />,
    info: <InfoIcon size={24} />
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.75, type: 'spring' }}
      className={`animate-pop-in mx-auto mb-4 flex w-max items-center gap-2 rounded-md border-1
        ${presetColors[type]} px-4 py-3`}
    >
      {presetIcons[type]}
      <span>{message}</span>
    </motion.div>
  )
}
