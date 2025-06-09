import { useEffect } from 'react'

/**
 * Custom hook to set the document properties.
 * @param {string} title - The title to set for the document.
 * @param {string} description - The description to set for the document.
 */
export default function useDocumentProps({ title, description }) {
  useEffect(() => {
    const previousTitle = document.title
    const previousDescription = document.description

    document.title = title
    document.description = description

    return () => {
      document.title = previousTitle
      document.description = previousDescription
    }
  }, [title, description])
}
