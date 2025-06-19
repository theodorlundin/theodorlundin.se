import { useEffect } from 'react'

/**
 * Custom hook to set the document properties.
 * @param {string} title - The title to set for the document.
 */
export default function useDocumentProps({ title }) {
  useEffect(() => {
    const previousTitle = document.title

    document.title = title

    return () => {
      document.title = previousTitle
    }
  }, [title])
}
