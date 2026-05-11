import { Github, Linkedin, Twitter, Heart, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="py-12 border-t border-dark-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-bold text-white">
              Magesh<span className="text-primary-500">waran</span>
            </a>
            <p className="text-dark-500 text-sm mt-2">
              Crafting digital experiences with passion.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/magesh1122"
              className="w-10 h-10 rounded-full bg-dark-900 border border-dark-800 flex items-center justify-center text-dark-400 hover:text-white hover:border-primary-500/50 transition-all"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/magesh-waran-1b6811312"
              className="w-10 h-10 rounded-full bg-dark-900 border border-dark-800 flex items-center justify-center text-dark-400 hover:text-white hover:border-primary-500/50 transition-all"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://x.com/magesx700"
              className="w-10 h-10 rounded-full bg-dark-900 border border-dark-800 flex items-center justify-center text-dark-400 hover:text-white hover:border-primary-500/50 transition-all"
            >
              <Twitter size={18} />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-primary-600 hover:bg-primary-500 flex items-center justify-center text-white transition-all hover:shadow-lg hover:shadow-primary-500/25"
          >
            <ArrowUp size={20} />
          </button>
        </div>

        <div className="mt-8 pt-8 border-t border-dark-800/50 text-center">
          <p className="text-dark-500 text-sm flex items-center justify-center gap-1">
            Made with <Heart className="text-red-500" size={14} /> by Mageshwaran
          </p>
          <p className="text-dark-600 text-xs mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}