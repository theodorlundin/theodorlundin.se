import { ToastContainer } from '../components/ui/toasts/ToastContainer'

const toast = {
  toast: ({ message, type, autoClose }) => {
    const event = new CustomEvent('toast', {
      detail: { message, type, autoClose }
    })
    window.dispatchEvent(event)
  },
  success: (message, autoClose = 7500) =>
    toast.toast({ message, type: 'success', autoClose }),
  error: (message, autoClose = 7500) =>
    toast.toast({ message, type: 'error', autoClose }),
  warning: (message, autoClose = 7500) =>
    toast.toast({ message, type: 'warning', autoClose }),
  info: (message, autoClose = 7500) =>
    toast.toast({ message, type: 'info', autoClose })
}

export { toast, ToastContainer }
