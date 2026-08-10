import { useState } from 'react'

export function useContactForm(initialValues) {
  const [values, setValues] = useState(initialValues)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target
    setValues((v) => ({ ...v, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return { values, handleChange, handleSubmit, submitted }
}
