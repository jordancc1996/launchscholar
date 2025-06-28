import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import ContactForm from '@/components/ContactForm'
import { NavigationState, ServiceCardProps } from '@/types'
import { scrollToElement, fadeInUp, slideInLeft, slideInRight, staggerChildren } from '@/lib/utils'

const serviceCards: ServiceCardProps[] = [
  {
    title: 'Elite School Advisory',
    description: 'Matching exceptional students to U.S. private boarding schools through strategic placement and comprehensive application support.',
    details: 'Comprehensive assessment, school mapping, application strategy, and ongoing mentorship throughout the process.',
    delay: 0.1
  },
  {
    title: 'Visa & Residency Planning',
    description: 'Golden Visas and educational immigration pathways that create long-term advantages for international families.',
    details: 'Strategic residency planning, investment guidance, and coordination with legal and financial advisors.',
    delay: 0.2
  },
  {
    title: 'Academic & Business Mentorship',
    description: 'Ongoing support for future global leaders through academic excellence and strategic business development.',
    details: 'Personal development coaching, network building, and strategic guidance for academic and professional success.',
    delay: 0.3
  }
]

const Home: React.FC = () => {
  const [navigationState, setNavigationState] = useState<NavigationState>({
    isScrolled: false,
    showContactForm: false
  })

  useEffect(() => {
    const handleScroll = (): void => {
      setNavigationState(prev => ({
        ...prev,
        isScrolled: window.scrollY > 50
      }))
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToContact = (): void => {
    scrollToElement('contact')
    setTimeout(() => {
      setNavigationState(prev => ({
        ...prev,
        showContactForm: true
      }))
    }, 500)
  }

  const handleShowContactForm = (): void => {
    setNavigationState(prev => ({
      ...prev,
      showContactForm: true
    }))
  }

  return (
    <>
      <Head>
        <title>Launch Scholar - Elite Educational Advisory</title>
        <meta name="description" content="Launch Scholar - An educational advisory for globally minded families. Elite school advisory, visa planning, and academic mentorship services." />
        <meta name="keywords" content="education advisory, elite schools, international education, visa planning, academic mentorship, boarding schools" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Launch Scholar - Elite Educational Advisory" />
        <meta property="og:description" content="An educational advisory for globally minded families" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-domain.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Launch Scholar - Elite Educational Advisory" />
        <meta name="twitter:description" content="An educational advisory for globally minded families" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>

      <div className="min-h-screen">
        {/* Navigation */}
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          navigationState.isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
        }`}>
          <div className="section-container">
            <div className="flex justify-between items-center py-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="serif-heading text-2xl font-medium charcoal"
              >
                launch scholar
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="hidden md:flex space-x-8"
              >
                <a href="#about" className="text-sm font-medium hover:text-gray-600 transition-colors">About</a>
                <a href="#services" className="text-sm font-medium hover:text-gray-600 transition-colors">Services</a>
                <a href="#philosophy" className="text-sm font-medium hover:text-gray-600 transition-colors">Philosophy</a>
                <a href="#contact" className="text-sm font-medium hover:text-gray-600 transition-colors">Contact</a>
              </motion.div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="hero-section min-h-screen flex items-center justify-center text-white relative"
                 style={{
                   backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url(/images/hero-background.jpg)`,
                   backgroundSize: 'cover',
                   backgroundPosition: 'center',
                   backgroundAttachment: 'fixed'
                 }}>
          <div className="section-container text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="serif-heading text-5xl md:text-7xl mb-6 font-light"
            >
              launch scholar
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto leading-relaxed"
            >
              An educational advisory for globally minded families
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Button 
                onClick={scrollToContact}
                variant="outline" 
                size="lg"
                className="bg-transparent border-white text-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-3 text-lg font-light"
              >
                Begin the Conversation
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section id="about" className="py-24 off-white">
          <div className="section-container">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div 
                {...slideInLeft}
                className="text-container"
              >
                <h2 className="serif-heading text-4xl md:text-5xl mb-8 charcoal">
                  A Place of Strategic Learning
                </h2>
                <p className="text-lg mb-6 slate leading-relaxed">
                  Centered in New York and Miami, and integrated into the global education network, we work tirelessly with families around the world to guide them on their educational and mobility journeys.
                </p>
                <p className="text-lg mb-6 slate leading-relaxed">
                  Through personalized consultations and strategic planning sessions, we mentor our clients, striving to instill confidence and foster long-term success.
                </p>
                <p className="text-lg slate leading-relaxed">
                  Whether their goals are academic excellence, international mobility, or building generational advantage, we provide them with expert guidance, as well as the families that surround and enrich them.
                </p>
                <div className="mt-8 space-y-2">
                  {[
                    'Elite school advisory and placement',
                    'Golden Visa and residency planning',
                    'Legacy and mentorship as a family journey'
                  ].map((item, index) => (
                    <motion.div 
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-2"
                    >
                      <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                      <span className="text-sm font-medium slate">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <motion.div 
                {...slideInRight}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-[4/5] rounded-sm overflow-hidden">
                  <Image 
                    src="/images/professional-portrait.jpg" 
                    alt="Professional educational consultant" 
                    width={600}
                    height={750}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Philosophy Section */}
        <section id="philosophy" className="py-24">
          <div className="section-container">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div 
                {...slideInLeft}
                className="relative order-2 md:order-1"
              >
                <div className="aspect-[4/3] rounded-sm overflow-hidden">
                  <Image 
                    src="/images/artistic-scene.jpg" 
                    alt="Elegant library study space" 
                    width={600}
                    height={450}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
              <motion.div 
                {...slideInRight}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-container order-1 md:order-2"
              >
                <h2 className="serif-heading text-4xl md:text-5xl mb-8 charcoal">
                  Our Philosophy
                </h2>
                <p className="text-lg mb-6 slate leading-relaxed">
                  Launch Scholar was founded on the principle that education and mobility are the twin pillars of generational advantage. These foundations of learning and global access create opportunities that transcend borders and generations.
                </p>
                <p className="text-lg mb-6 slate leading-relaxed">
                  At Launch Scholar, the highest levels of educational consultancy combine with strategic mobility planning and intuitive family guidance.
                </p>
                <p className="text-lg slate leading-relaxed">
                  We believe that, in adventures of the mind and strategic positioning, families fulfill their potential and secure their legacy.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 off-white">
          <div className="section-container">
            <motion.div 
              {...staggerChildren}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="serif-heading text-4xl md:text-5xl mb-8 charcoal">
                What We Do
              </h2>
              <p className="text-lg slate max-w-3xl mx-auto leading-relaxed">
                We advise globally minded families on how to leverage mobility and education to expand their children's future.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-12">
              {serviceCards.map((service, index) => (
                <motion.div 
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: service.delay }}
                  viewport={{ once: true }}
                  className="hover-lift cursor-pointer group"
                >
                  <h3 className="serif-heading text-2xl mb-4 charcoal group-hover:text-gray-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-base slate leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <p className="text-sm text-gray-500">
                    {service.details}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-gray-900 text-white">
          <div className="section-container">
            <motion.div 
              {...staggerChildren}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="serif-heading text-4xl md:text-5xl mb-8">
                Talk to Us
              </h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed opacity-90">
                Launch Scholar connects ambition with access — from Ivy League applications to European residency pathways.
              </p>
            </motion.div>
            
            {navigationState.showContactForm ? (
              <ContactForm />
            ) : (
              <motion.div 
                {...staggerChildren}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <Button 
                  onClick={handleShowContactForm}
                  size="lg"
                  className="bg-white text-black hover:bg-gray-100 transition-all duration-300 px-8 py-3 text-lg font-light"
                >
                  Begin the Conversation
                </Button>
              </motion.div>
            )}
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 bg-black text-white/60">
          <div className="section-container">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="serif-heading text-xl mb-4 md:mb-0 text-white">
                launch scholar
              </div>
              <div className="text-sm">
                New York • Miami • Global Advisory
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Home

