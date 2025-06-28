// Global type definitions for Launch Scholar

export interface ContactFormData {
  name: string
  email: string
  service: string
  message: string
}

export interface ServiceOption {
  value: string
  label: string
}

export interface NavigationItem {
  href: string
  label: string
}

export interface SectionProps {
  id?: string
  className?: string
  children: React.ReactNode
}

export interface MotionProps {
  initial?: object
  animate?: object
  whileInView?: object
  transition?: object
  viewport?: object
  className?: string
  children?: React.ReactNode
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  asChild?: boolean
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // Additional input props if needed
}

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  // Additional textarea props if needed
}

export interface SelectProps {
  onValueChange: (value: string) => void
  value: string
  children: React.ReactNode
}

export interface ServiceCardProps {
  title: string
  description: string
  details: string
  delay?: number
}

export interface ImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
}

// Animation variants
export interface AnimationVariants {
  hidden: object
  visible: object
}

// Contact form state
export interface ContactFormState {
  formData: ContactFormData
  isSubmitting: boolean
  isSubmitted: boolean
}

// Navigation state
export interface NavigationState {
  isScrolled: boolean
  showContactForm: boolean
}

