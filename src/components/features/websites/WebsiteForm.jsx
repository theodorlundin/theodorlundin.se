import { useState } from 'react'
import Input from '../../ui/inputs/Input'
import Textarea from '../../ui/inputs/Textarea'
import Checkbox from '../../ui/inputs/Checkbox'
import PrimaryButton from '../../ui/buttons/PrimaryButton'
import usePersistentFormData from '../../../hooks/usePersistentFormData'
import { toast, ToastContainer } from '../../../lib/toast'
import axios from 'axios'
import { Link } from 'react-router-dom'

const submitForm = async (name, email, message) => {
  const res = await axios.post('https://api.theodorlundin.se/form/submit.php', {
    name,
    email,
    message
  })
  return res
}

export default function WebsiteForm() {
  const [loading, setLoading] = useState(false)

  // Organize form data, and save it to local storage
  const [formData, setFormData, resetFormData] = usePersistentFormData(
    'website_form_data',
    {
      name: '',
      email: '',
      message: '',
      readIntegrity: false
    }
  )

  // Handle form submit
  const handleFormSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await submitForm(formData.name, formData.email, formData.message)
      setLoading(false)
      toast.success('Ditt meddelande har skickats')
      resetFormData() // Clear form and forget form data
    } catch (e) {
      console.error(e)
      setLoading(false)
      toast.error(e.response?.data?.error ?? 'Något gick fel!')
    }
  }

  return (
    <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
      <Input
        type="text"
        placeholder="Skriv för- och efternamn"
        label="Namn"
        onChange={(e) =>
          setFormData((current) => {
            return { ...current, name: e.target.value }
          })
        }
        value={formData?.name ?? ''}
      />
      <Input
        type="email"
        placeholder="Skriv din e-postadress"
        label="E-postadress"
        onChange={(e) =>
          setFormData((current) => {
            return { ...current, email: e.target.value }
          })
        }
        value={formData?.email ?? ''}
      />
      <Textarea
        placeholder="Skriv ditt meddelande"
        label="Meddelande"
        rows={5}
        onChange={(e) =>
          setFormData((current) => {
            return { ...current, message: e.target.value }
          })
        }
        value={formData?.message ?? ''}
      />
      <Checkbox
        onInput={(checked) =>
          setFormData((current) => {
            return { ...current, readIntegrity: checked }
          })
        }
        required
      >
        Jag accepterar <Link to="/integritet">integritetspolicyn</Link>
      </Checkbox>
      <PrimaryButton
        loading={loading}
        disabled={loading || !formData.readIntegrity}
        className="mx-auto"
      >
        Skicka
      </PrimaryButton>
      <ToastContainer />
    </form>
  )
}
