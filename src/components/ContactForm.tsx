import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ContactFormData, ServiceOption } from '@/types'
import { validateEmail, validateRequired, delay } from '@/lib/utils'

const serviceOptions: ServiceOption[] = [
  { value: 'school-advisory', label: 'Elite School Advisory' },
  { value: 'visa-planning', label: 'Visa & Residency Planning' },
  { value: 'mentorship', label: 'Academic & Business Mentorship' },
  { value: 'comprehensive', label: 'Comprehensive Family Strategy' },
  { value: 'other', label: 'Other' },
]

interface ContactFormProps {
  className?: string
}

const ContactForm: React.FC<ContactFormProps> = ({ className }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
  const [errors, setErrors] = useState<Partial<ContactFormData>>({})

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
  }

  const handleServiceChange = (value: string): void => {
    setFormData(prev => ({
      ...prev,
      service: value
    }))
    
    if (errors.service) {
      setErrors(prev => ({
        ...prev,
        service: undefined
      }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {}

    if (!validateRequired(formData.name)) {
      newErrors.name = 'Name is required'
    }

    if (!validateRequired(formData.email)) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!validateRequired(formData.service)) {
      newErrors.service = 'Please select a service'
    }

    if (!validateRequired(formData.message)) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    
    try {
      // Simulate form submission
      await delay(1500)
      
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', formData)
      
      setIsSubmitted(true)
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: '',
          email: '',
          service: '',
          message: ''
        })
      }, 3000)
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-12"
      >
        <h3 className="serif-heading text-2xl mb-4 text-white">Thank You</h3>
        <p className="text-white/80">We will be in touch shortly to begin the conversation.</p>
      </motion.div>
    )
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className={`max-w-2xl mx-auto space-y-6 ${className || ''}`}
    >
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
            Name *
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleInputChange}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40"
            placeholder="Your full name"
          />
          {errors.name && (
            <p className="text-red-400 text-sm mt-1">{errors.name}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
            Email *
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40"
            placeholder="your@email.com"
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email}</p>
          )}
        </div>
      </div>
      
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-white/80 mb-2">
          What are you seeking help with? *
        </label>
        <Select onValueChange={handleServiceChange} value={formData.service}>
          <SelectTrigger className="bg-white/10 border-white/20 text-white">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            {serviceOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.service && (
          <p className="text-red-400 text-sm mt-1">{errors.service}</p>
        )}
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
          Message *
        </label>
        <Textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleInputChange}
          rows={5}
          className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40 resize-none"
          placeholder="Tell us about your family's goals and how we can help..."
        />
        {errors.message && (
          <p className="text-red-400 text-sm mt-1">{errors.message}</p>
        )}
      </div>
      
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-white text-black hover:bg-gray-100 transition-all duration-300 py-3 text-lg font-light"
      >
        {isSubmitting ? 'Sending...' : 'Begin the Conversation'}
      </Button>
    </motion.form>
  )
}

export default ContactForm

