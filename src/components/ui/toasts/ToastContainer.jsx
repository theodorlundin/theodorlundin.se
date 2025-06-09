import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Toast } from './Toast'

let toastId = 0

export const ToastContainer = () => {
  const [toasts, setToasts] = useState([])

  useEffect(() => {
    const handler = (e) => {
      const { message, type, autoClose } = e.detail
      const id = toastId++
      setToasts((prev) => [...prev, { id, message, type, autoClose }])
      setTimeout(
        () => setToasts((prev) => prev.filter((toast) => toast.id !== id)),
        autoClose
      )
    }

    window.addEventListener('toast', handler)
    return () => window.removeEventListener('toast', handler)
  }, [])

  return ReactDOM.createPortal(
    <div className="fixed bottom-0 z-9 flex w-full flex-col gap-2">
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} />
      ))}
    </div>,
    document.body
  )
}
