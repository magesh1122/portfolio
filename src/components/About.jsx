import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code2, Palette, Zap, Globe } from 'lucide-react'

// Import Your Image
import profileImg from '../assets/profile.png'

const features = [
  {
    icon: Code2,
    title: 'Clean Code',
    description:
      'Writing maintainable, scalable, and well-documented code that stands the test of time.',
  },
  {
    icon: Palette,
    title: 'Modern Design',
    description:
      'Creating visually stunning interfaces with attention to detail and user experience.',
  },
  {
    icon: Zap,
    title: 'Performance',
    description:
      'Optimizing every aspect for lightning-fast load times and smooth interactions.',
  },
  {
    icon: Globe,
    title: 'Responsive',
    description:
      'Building fluid layouts that look perfect on every device and screen size.',
  },
]

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Image Side */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-dark-900">

              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-purple-500/20" />

              {/* Glow Effect */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-72 h-72 rounded-full bg-primary-500/20 blur-[100px]" />
              </div>

              {/* Profile Image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.img
                  src={profileImg}
                  alt="Profile"
                  className="w-
                  64 h-64 object-cover rounded-full border-4 border-dark-700 shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            {/* Floating Card */}
            <motion.div
              className="absolute -bottom-6 -right-6 glass rounded-xl p-4"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary-500/20 flex items-center justify-center">
                  <Zap className="text-primary-400" size={20} />
                </div>

                <div>
                  <div className="text-white font-semibold">
                    Fast Delivery
                  </div>
                  <div className="text-dark-400 text-sm">
                    Always on time
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Content Side */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-primary-500 font-medium text-sm uppercase tracking-wider"
            >
              About Me
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6"
            >
              Passionate about creating{' '}
              <span className="text-gradient">
                digital experiences
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-dark-400 text-lg leading-relaxed mb-8"
            >
              I'm a full-stack developer and currently doing my internship at
              BRAINBRIC INNOVATIONS, building modern web applications. I
              specialize in React, Node.js,next.js and modern web technologies.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="text-dark-400 text-lg leading-relaxed mb-10"
            >
              When I'm not coding, you'll find me exploring new design trends,
              learning modern technologies, and building creative projects.
            </motion.p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="p-4 rounded-xl bg-dark-900/50 border border-dark-800 hover:border-primary-500/30 transition-colors"
                >
                  <feature.icon
                    className="text-primary-500 mb-3"
                    size={24}
                  />

                  <h3 className="text-white font-semibold mb-1">
                    {feature.title}
                  </h3>

                  <p className="text-dark-500 text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}