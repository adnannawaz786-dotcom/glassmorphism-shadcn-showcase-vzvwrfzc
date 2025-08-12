import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Eye, 
  MousePointer, 
  Layers, 
  Zap, 
  Heart,
  Star,
  Play,
  Pause,
  Volume2,
  Download,
  Share,
  Settings,
  User,
  Mail,
  Lock,
  Search,
  Filter,
  ChevronRight,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui';
import { Button } from './ui';
import { Input } from './ui';
import { Badge } from './ui';

const GlassCard = ({ children, className = "", delay = 0, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className={`glass-card ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

const InteractiveGlassButton = ({ children, variant = "primary", size = "md", ...props }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const baseClasses = "glass-button relative overflow-hidden transition-all duration-300";
  const variants = {
    primary: "glass-primary",
    secondary: "glass-secondary", 
    ghost: "glass-ghost"
  };
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
  };

  return (
    <motion.button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      {...props}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"
        initial={{ x: "-100%" }}
        animate={{ x: isHovered ? "100%" : "-100%" }}
        transition={{ duration: 0.6 }}
      />
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </motion.button>
  );
};

const GlassMorphismDemo = () => {
  const [activeDemo, setActiveDemo] = useState('cards');
  const [isPlaying, setIsPlaying] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [notifications, setNotifications] = useState([]);

  const addNotification = (message, type = 'info') => {
    const id = Date.now();
    setNotifications(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 3000);
  };

  const demoSections = [
    { id: 'cards', label: 'Glass Cards', icon: Layers },
    { id: 'buttons', label: 'Interactive Buttons', icon: MousePointer },
    { id: 'forms', label: 'Frosted Forms', icon: User },
    { id: 'media', label: 'Media Players', icon: Play },
    { id: 'navigation', label: 'Glass Navigation', icon: ChevronRight }
  ];

  const glassCards = [
    {
      title: "Premium Features",
      description: "Unlock advanced capabilities with our premium tier",
      icon: Star,
      gradient: "from-purple-500/20 to-pink-500/20",
      stats: { users: "10K+", rating: "4.9" }
    },
    {
      title: "Lightning Fast",
      description: "Experience blazing fast performance across all devices",
      icon: Zap,
      gradient: "from-blue-500/20 to-cyan-500/20",
      stats: { speed: "99.9%", uptime: "24/7" }
    },
    {
      title: "Loved by Users",
      description: "Join thousands of satisfied customers worldwide",
      icon: Heart,
      gradient: "from-rose-500/20 to-orange-500/20",
      stats: { reviews: "5K+", satisfaction: "98%" }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{ 
              y: [null, -20, 20, -20],
              x: [null, Math.random() * 50 - 25],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{ 
              duration: Math.random() * 4 + 4,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* Notifications */}
      <AnimatePresence>
        {notifications.map((notification) => (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, x: 300, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 300, scale: 0.8 }}
            className="fixed top-4 right-4 z-50 glass-card p-4 max-w-sm"
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-white/90">{notification.message}</span>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            Glassmorphism Showcase
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Experience the future of UI design with beautiful glass morphism effects
          </p>
        </motion.div>

        {/* Navigation */}
        <GlassCard className="mb-8" delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 p-4">
            {demoSections.map((section) => {
              const Icon = section.icon;
              return (
                <InteractiveGlassButton
                  key={section.id}
                  variant={activeDemo === section.id ? "primary" : "ghost"}
                  onClick={() => setActiveDemo(section.id)}
                >
                  <Icon className="w-4 h-4" />
                  {section.label}
                </InteractiveGlassButton>
              );
            })}
          </div>
        </GlassCard>

        {/* Demo Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDemo}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeDemo === 'cards' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {glassCards.map((card, index) => {
                  const Icon = card.icon;
                  return (
                    <GlassCard key={index} delay={index * 0.1}>
                      <div className={`p-6 rounded-2xl bg-gradient-to-br ${card.gradient} border border-white/20`}>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 rounded-lg bg-white/10">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                        </div>
                        <p className="text-white/70 mb-6">{card.description}</p>
                        <div className="flex justify-between items-center">
                          {Object.entries(card.stats).map(([key, value]) => (
                            <div key={key} className="text-center">
                              <div className="text-2xl font-bold text-white">{value}</div>
                              <div className="text-sm text-white/60 capitalize">{key}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </GlassCard>
                  );
                })}
              </div>
            )}

            {activeDemo === 'buttons' && (
              <GlassCard>
                <div className="p-8 space-y-8">
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-4">Button Variations</h3>
                    <div className="flex flex-wrap gap-4">
                      <InteractiveGlassButton 
                        variant="primary" 
                        size="lg"
                        onClick={() => addNotification("Primary action triggered!")}
                      >
                        <Sparkles className="w-5 h-5" />
                        Primary Action
                      </InteractiveGlassButton>
                      <InteractiveGlassButton 
                        variant="secondary"
                        onClick={() => addNotification("Secondary action triggered!")}
                      >
                        <Eye className="w-4 h-4" />
                        Secondary
                      </InteractiveGlassButton>
                      <InteractiveGlassButton 
                        variant="ghost" 
                        size="sm"
                        onClick={() => addNotification("Ghost button clicked!")}
                      >
                        Ghost Button
                      </InteractiveGlassButton>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-4">Icon Buttons</h3>
                    <div className="flex gap-3">
                      {[Download, Share, Settings, Heart].map((Icon, index) => (
                        <InteractiveGlassButton
                          key={index}
                          variant="ghost"
                          onClick={() => addNotification(`${Icon.name} clicked!`)}
                          className="!p-3"
                        >
                          <Icon className="w-5 h-5" />
                        </InteractiveGlassButton>
                      ))}
                    </div>
                  </div>
                </div>
              </GlassCard>
            )}

            {activeDemo === 'forms' && (
              <GlassCard>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-white mb-6">Contact Form</h3>
                  <form className="space-y-6" onSubmit={(e) => {
                    e.preventDefault();
                    addNotification("Form submitted successfully!");
                  }}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white/80 mb-2">Name</label>
                        <Input
                          type="text"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="glass-input"
                        />
                      </div>
                      <div>
                        <label className="block text-white/80 mb-2">Email</label>
                        <Input
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="glass-input"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-white/80 mb-2">Message</label>
                      <textarea
                        className="glass-input w-full h-32 resize-none"
                        placeholder="Your message here..."
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                      />
                    </div>
                    <InteractiveGlassButton type="submit" variant="primary" size="lg">
                      <Mail className="w-5 h-5" />
                      Send Message
                    </InteractiveGlassButton>
                  </form>
                </div>
              </GlassCard>
            )}

            {activeDemo === 'media' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <GlassCard>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Music Player</h3>
                    <div className="aspect-square bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl mb-4 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-3">
                          <Volume2 className="w-8 h-8 text-white" />
                        </div>
                        <p className="text-white font-medium">Now Playing</p>
                        <p className="text-white/60 text-sm">Ambient Sounds</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                      <InteractiveGlassButton
                        variant="ghost"
                        onClick={() => {
                          setIsPlaying(!isPlaying);
                          addNotification(isPlaying ? "Paused" : "Playing");
                        }}
                        className="!p-3"
                      >
                        {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                      </InteractiveGlassButton>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Search & Filter</h3>
                    <div className="space-y-4">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
                        <Input
                          placeholder="Search content..."
                          className="glass-input pl-10"
                        />
                      </div>
                      <div className="flex gap-2 flex-wrap">
                        {['All', 'Music', 'Videos', 'Photos'].map((filter) => (
                          <Badge key={filter} variant="secondary" className="glass-badge cursor-pointer">
                            {filter}
                          </Badge>
                        ))}
                      </div>
                      <InteractiveGlassButton variant="secondary" className="w-full">
                        <Filter className="w-4 h-4" />
                        Apply Filters
                      </InteractiveGlassButton>
                    </div>
                  </div>
                </GlassCard>
              </div>
            )}

            {activeDemo === 'navigation' && (
              <GlassCard>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-white mb-6">Glass Navigation</h3>
                  <div className="space-y-4">
                    {[
                      { label: 'Dashboard', icon: Layers, badge: 'New' },
                      { label: 'Analytics', icon: Eye, badge: '5' },
                      { label: 'Settings', icon: Settings },
                      { label: 'Profile', icon: User },
                      { label: 'Security', icon: Lock, badge: '!' }
                    ].map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <motion.div
                          key={index}
                          className="glass-nav-item group cursor-pointer"
                          whileHover={{ x: 5 }}
                          onClick={() => addNotification(`Navigated to ${item.label}`)}
                        >
                          <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                            <div className="flex items-center gap-3">
                              <Icon className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                              <span className="text-white/80 group-hover:text-white transition-colors">{item.label}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              {item.badge && (
                                <Badge variant="secondary" className="glass-badge">
                                  {item.badge}
                                </Badge>
                              )}
                              <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-white/70 transition-colors" />
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </GlassCard>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16 text-white/60"
        >
          <p>Built with React, Tailwind CSS, and Framer Motion</p>
        </motion.div>
      </div>
    </div>
  );
};

export default GlassMorphismDemo;