import { useEffect, useState, useCallback } from 'react'
import { useDebounce } from 'use-debounce'

/**
 * Custom hook for persistent form data with debounce and localStorage.
 * @param {string} storageKey - The localStorage key to use.
 * @param {object} defaultValues - The default form values.
 * @param {number} debounceMs - Debounce time in ms (default: 500)
 * @returns {[object, function, function]} [formData, setFormData, resetFormData]
 */
export default function usePersistentFormData(
  storageKey,
  defaultValues,
  debounceMs = 500
) {
  const getFormData = () => {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey))
      return saved ?? defaultValues
    } catch (e) {
      return defaultValues
    }
  }

  const [formData, setFormData] = useState(getFormData)
  const [debouncedData] = useDebounce(formData, debounceMs)

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(debouncedData))
  }, [debouncedData, storageKey])

  // Reset form data and remove from localStorage
  const resetFormData = useCallback(() => {
    setFormData(defaultValues)
    localStorage.removeItem(storageKey)
  }, [defaultValues, storageKey])

  return [formData, setFormData, resetFormData]
}
