import { motion } from 'framer-motion'
import { useState } from 'react'
import { Sparkles, Layers, Zap, Eye } from 'lucide-react'
import { GlassShowcase } from './components/showcase'
import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui'

export default function App() {
  const [activeSection, setActiveSection] = useState('showcase')

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-400/20 to-indigo-400/20 rounded-full blur-3xl"
        />
      </div>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 p-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="glass-card rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3"
              >
                <div className="p-2 glass-card rounded-xl">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">Glassmorphism Showcase</h1>
                  <p className="text-white/70">Modern UI with shadcn components</p>
                </div>
              </motion.div>
              
              <nav className="flex gap-2">
                {[
                  { id: 'showcase', label: 'Showcase', icon: Eye },
                  { id: 'components', label: 'Components', icon: Layers },
                  { id: 'effects', label: 'Effects', icon: Zap }
                ].map(({ id, label, icon: Icon }) => (
                  <Button
                    key={id}
                    variant={activeSection === id ? "default" : "ghost"}
                    onClick={() => setActiveSection(id)}
                    className={`glass-button ${activeSection === id ? 'glass-button-active' : ''}`}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {label}
                  </Button>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto">
          {activeSection === 'showcase' && <GlassShowcase />}
          
          {activeSection === 'components' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {[
                {
                  title: "Glass Cards",
                  description: "Beautiful translucent cards with backdrop blur",
                  content: "Perfect for modern interfaces"
                },
                {
                  title: "Frosted Buttons",
                  description: "Interactive buttons with glass morphism effects",
                  content: "Hover and click animations included"
                },
                {
                  title: "Gradient Overlays",
                  description: "Stunning gradient combinations with transparency",
                  content: "Customizable color schemes"
                },
                {
                  title: "Blur Effects",
                  description: "Advanced backdrop filtering techniques",
                  content: "Performance optimized implementations"
                },
                {
                  title: "Motion Design",
                  description: "Smooth animations with Framer Motion",
                  content: "Micro-interactions and transitions"
                },
                {
                  title: "Responsive Layout",
                  description: "Mobile-first design approach",
                  content: "Works perfectly on all devices"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <Card className="glass-card border-0 h-full">
                    <CardHeader>
                      <CardTitle className="text-white">{item.title}</CardTitle>
                      <CardDescription className="text-white/70">
                        {item.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-white/80">{item.content}</p>
                      <Button className="glass-button mt-4 w-full">
                        Explore
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeSection === 'effects' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">Glass Effects Gallery</h2>
                <p className="text-white/70 text-lg">Explore different glassmorphism variations</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { name: "Light Glass", class: "glass-light" },
                  { name: "Dark Glass", class: "glass-dark" },
                  { name: "Colored Glass", class: "glass-colored" },
                  { name: "Frosted Glass", class: "glass-frosted" }
                ].map((effect, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    className={`${effect.class} rounded-2xl p-8 text-center cursor-pointer`}
                  >
                    <h3 className="text-2xl font-bold text-white mb-4">{effect.name}</h3>
                    <p className="text-white/80 mb-6">
                      A beautiful glass effect with unique styling and transparency levels.
                    </p>
                    <div className="flex justify-center gap-3">
                      <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center">
                        <Sparkles className="w-6 h-6 text-white" />
                      </div>
                      <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center">
                        <Layers className="w-6 h-6 text-white" />
                      </div>
                      <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center">
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="relative z-10 p-6 mt-12"
      >
        <div className="max-w-7xl mx-auto">
          <div className="glass-card rounded-2xl p-6 text-center">
            <p className="text-white/70">
              Built with React, Vite, Tailwind CSS, shadcn/ui, and Framer Motion
            </p>
            <div className="flex justify-center gap-4 mt-4">
              <Button variant="ghost" className="glass-button text-white/80">
                Documentation
              </Button>
              <Button variant="ghost" className="glass-button text-white/80">
                GitHub
              </Button>
              <Button variant="ghost" className="glass-button text-white/80">
                Examples
              </Button>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  )
}