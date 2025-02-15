'use client'

import { motion } from 'framer-motion'
import { ClockIcon, MoonIcon, SunIcon, CheckIcon } from '@heroicons/react/24/outline'
import { useRef } from 'react'
import { CustomCursor } from './components/ui/custom-cursor'
import { Gradient } from './components/ui/gradient'
import { ScrollIndicator } from './components/ui/scroll-indicator'
import { ParticleField } from './components/ui/particle-field'
import { WaitlistForm } from './components/ui/waitlist-form'
import { ParallaxSection } from './components/ui/parallax-section'
import { HoverCard } from './components/ui/hover-card'
import { FloatingImage } from './components/ui/floating-image'
import { Feature3DShowcase } from './components/ui/feature-3d-showcase'
import { PerspectiveContainer } from './components/ui/perspective-container'

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground" ref={containerRef}>
      <CustomCursor />
      <ScrollIndicator />
      <ParticleField />
      
      {/* Navigation */}
      <motion.header 
        className="fixed top-0 left-0 right-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <nav className="container h-16 flex items-center justify-between glass-effect">
          <motion.span 
            className="text-xl font-semibold text-gradient"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            PrayerClock
          </motion.span>
          <motion.button 
            className="btn-primary text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join Waitlist
          </motion.button>
        </nav>
      </motion.header>

      {/* Background Effects */}
      <div className="fixed inset-0 bg-grid-dark opacity-20" />
      <div className="noise fixed inset-0" />
      <Gradient.RadialGreen className="fixed top-[-20%] left-0 right-0 h-[500px] opacity-20" />
      <Gradient.RadialBlue className="fixed bottom-0 left-[-20%] w-[500px] h-[500px] opacity-10" />
      
      <main className="pt-16">
        {/* Hero Section */}
        <ParallaxSection>
          <section className="relative py-32 lg:py-36 overflow-hidden">
            <div className="hero-glow" />
            <div className="container px-4 mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 max-w-4xl mx-auto text-center"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-8"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  <span className="text-primary">Coming Soon</span>
                </motion.div>

                <h1 className="text-6xl lg:text-8xl font-bold tracking-tight text-gradient mb-8 text-balance text-glow">
                  Prayer Times, Reimagined
                </h1>
                
                <p className="text-xl lg:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto text-balance">
                  Experience the perfect blend of tradition and technology. Our digital prayer clock brings precision, beauty, and smart features to your daily prayers.
                </p>

                <div className="max-w-md mx-auto mb-8">
                  <WaitlistForm />
                </div>
                
                <p className="text-sm text-muted-foreground">
                  Join 2,000+ others on the waitlist • No spam, ever.
                </p>
              </motion.div>

              {/* Hero Image */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="relative mt-20 mx-auto"
              >
                <div className="relative max-w-6xl mx-auto">
                  <FloatingImage
                    src="https://images.unsplash.com/photo-1578337834280-0cbc7fcec092?w=1400&q=80"
                    alt="Modern Digital Prayer Clock"
                    priority
                  />
                  {/* Ambient glow effects */}
                  <div className="absolute -left-4 top-1/4 w-28 h-28 bg-primary/30 rounded-full blur-3xl" />
                  <div className="absolute -right-4 bottom-1/4 w-28 h-28 bg-primary/20 rounded-full blur-3xl" />
                </div>
              </motion.div>
            </div>
          </section>
        </ParallaxSection>

        {/* 3D Product Showcase Section */}
        <section className="py-32 relative overflow-hidden">
          <PerspectiveContainer depth={50} className="w-full">
            <div className="container px-4 max-w-7xl mx-auto space-y-24">
              <Feature3DShowcase
                image="https://images.unsplash.com/photo-1646724684583-764bb3f47c1f?w=800&q=80"
                title="Precision Engineering"
                description="Experience unparalleled accuracy in prayer timing with our advanced calculation algorithms."
                features={[
                  "Location-based prayer time calculations",
                  "Automatic daylight savings adjustment",
                  "Customizable calculation methods",
                  "High-precision time synchronization"
                ]}
                direction="left"
              />

              <Feature3DShowcase
                image="https://images.unsplash.com/photo-1646724684583-764bb3f47c1f"
                title="Smart Display Technology"
                description="Clarity meets beauty with our adaptive display technology."
                features={[
                  "Auto-brightness adjustment",
                  "Anti-glare coating",
                  "Wide viewing angle",
                  "Energy-efficient LED display"
                ]}
                direction="right"
              />

              <Feature3DShowcase
                image="https://images.unsplash.com/photo-1646724684583-764bb3f47c1f"
                title="Seamless Integration"
                description="Connect your prayer clock to your digital ecosystem."
                features={[
                  "Mobile app connectivity",
                  "Smart home integration",
                  "Cloud-based settings backup",
                  "Over-the-air updates"
                ]}
                direction="left"
              />
            </div>
          </PerspectiveContainer>
        </section>

        {/* Product Gallery Section (New) */}
        <section className="py-32 relative overflow-hidden">
          <div className="container px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <FloatingImage
                  src="https://images.unsplash.com/photo-1557913107-5b0c393835bc?w=800&q=80"
                  alt="Digital Clock Interface"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <FloatingImage
                  src="https://images.unsplash.com/photo-1602847213180-50e43a80bfdf?w=800&q=80"
                  alt="Digital Clock in Modern Interior"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="container px-4">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex gap-8 justify-center items-center flex-wrap"
              >
                {['⭐️⭐️⭐️⭐️⭐️', '500+ Pre-orders', '10+ Countries'].map((item, i) => (
                  <span key={i} className="text-muted-foreground px-4 py-2 bg-secondary/30 rounded-full text-sm">
                    {item}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-32 relative">
          <div className="container px-4 mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl lg:text-6xl font-bold text-gradient mb-6 text-balance">
                Precision Meets Beauty
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
                Every feature is thoughtfully designed to enhance your prayer experience
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 relative">
              <div className="absolute inset-0 bg-primary/5 mask-radial -z-10" />
              {[
                {
                  icon: <ClockIcon className="w-8 h-8" />,
                  title: "Precise Prayer Times",
                  description: "Advanced calculations ensure accurate prayer times for your exact location."
                },
                {
                  icon: <SunIcon className="w-8 h-8" />,
                  title: "Smart Display",
                  description: "Auto-adjusting brightness and multiple display modes for any time of day."
                },
                {
                  icon: <MoonIcon className="w-8 h-8" />,
                  title: "Night Mode",
                  description: "Gentle illumination perfect for night prayers and tahajjud."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <HoverCard>
                    <div className="p-3 rounded-lg bg-primary/10 inline-flex mb-4 group-hover:bg-primary/20 transition-colors">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </HoverCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="container px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-6xl font-bold text-gradient mb-6">
                Loved by the Community
              </h2>
              <p className="text-xl text-muted-foreground">
                {`Here's what early testers are saying about PrayerClock`}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote: "Finally, a prayer clock that looks as good as it functions. The auto-brightness feature is amazing!",
                  author: "Ahmed K.",
                  title: "Early Tester"
                },
                {
                  quote: "The most accurate prayer times I've seen. The interface is beautiful and the build quality is exceptional.",
                  author: "Fatima S.",
                  title: "Mosque Committee Member"
                },
                {
                  quote: "Perfect blend of technology and tradition. The night mode is perfect for tahajjud prayers.",
                  author: "Omar M.",
                  title: "Islamic Center Director"
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <HoverCard>
                    <div className="mb-4 text-primary">★★★★★</div>
                    <p className="mb-6 text-foreground">{testimonial.quote}</p>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    </div>
                  </HoverCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-32 relative">
          <div className="container px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-6xl font-bold text-gradient mb-6">
                Why Choose PrayerClock?
              </h2>
              <p className="text-xl text-muted-foreground">
                See how we compare to traditional prayer time displays
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-3 gap-4 p-4 rounded-lg bg-secondary/50 border border-border mb-8">
                <div className="text-muted-foreground">Features</div>
                <div className="font-semibold">PrayerClock</div>
                <div className="text-muted-foreground">Others</div>
              </div>
              
              {[
                ["Accurate Prayer Times", true, true],
                ["Auto-Brightness", true, false],
                ["Night Mode", true, false],
                ["Modern Design", true, false],
                ["Mobile App Integration", true, false],
                ["Location-Based Updates", true, false]
              ].map(([feature, hasPrayerClock, hasOthers], index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.2, delay: index * 0.1 }}
                  className="grid grid-cols-3 gap-4 p-4 border-b border-border last:border
-b-0"
                >
                  <div>{feature}</div>
                  <div>{hasPrayerClock ? <CheckIcon className="w-5 h-5 text-primary" /> : "-"}</div>
                  <div>{hasOthers ? <CheckIcon className="w-5 h-5 text-muted-foreground" /> : "-"}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 relative">
          <div className="glow opacity-50" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="container px-4 mx-auto max-w-4xl text-center"
          >
            <h2 className="text-4xl lg:text-6xl font-bold text-gradient mb-8 text-balance">
              Be the First to Experience It
            </h2>
            <p className="text-xl text-muted-foreground mb-12 text-balance">
              Join our exclusive waitlist and receive early-bird pricing when we launch.
            </p>
            <div className="max-w-md mx-auto">
              <WaitlistForm />
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-sm text-muted-foreground">
              © 2025 PrayerClock. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}