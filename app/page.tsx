'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRightIcon, ClockIcon, MoonIcon, SunIcon } from '@heroicons/react/24/outline'

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Hero Section */}
      <section className="px-4 pt-24 pb-16 md:pt-32 md:pb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto text-center"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full">
            Coming Soon
          </span>
          <h1 className="text-4xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">
            Prayer Times, Reimagined
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
            Experience the perfect blend of tradition and technology. Our digital prayer clock brings precision, beauty, and smart features to your daily prayers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.form 
              className="flex-1 max-w-md flex gap-2"
              whileHover={{ scale: 1.01 }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg font-semibold hover:opacity-90 transition-all flex items-center gap-2"
              >
                Join <ArrowRightIcon className="w-4 h-4" />
              </button>
            </motion.form>
          </div>
          <p className="mt-4 text-sm text-gray-400">Join 2,000+ others on the waitlist</p>
        </motion.div>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 md:mt-24 max-w-6xl mx-auto px-4"
        >
          <div className="relative h-[300px] md:h-[500px] rounded-xl overflow-hidden border border-white/10 shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1584636778193-ab37de4a4c1f?w=1400&q=80"
              alt="Modern Digital Prayer Clock"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Precision Meets Beauty</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Every feature is thoughtfully designed to enhance your prayer experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
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
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all"
              >
                <div className="p-3 rounded-lg bg-gradient-to-r from-emerald-500/20 to-teal-500/20 inline-block mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Be the First to Experience It</h2>
          <p className="text-xl text-gray-300 mb-12">
            Join our exclusive waitlist and receive early-bird pricing when we launch.
          </p>
          <motion.form 
            className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
            whileHover={{ scale: 1.01 }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg font-semibold hover:opacity-90 transition-all"
            >
              Join Waitlist
            </button>
          </motion.form>
        </motion.div>
      </section>
    </main>
  )
}