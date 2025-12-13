import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Facebook, Linkedin, Twitter, ArrowRight, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageType, NavItem } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: PageType;
  navigateTo: (page: PageType) => void;
}

const navItems: NavItem[] = [
  {
    label: 'Corporate',
    submenu: [
      { label: 'About Us', page: 'about-us' },
      { label: 'Management', page: 'management' },
      { label: 'Board of Directors', page: 'board' },
      { label: 'Technical Advisors', page: 'advisors' },
    ],
  },
  {
    label: 'Projects',
    submenu: [
      { label: 'W2 Cu-Ni-PGE', page: 'projects-w2' },
      { label: 'South Timmins Mining', page: 'projects-shining' },
      { label: 'Royalty Portfolio', page: 'projects-royalty' },
    ],
  },
  {
    label: 'Investors',
    submenu: [
      { label: 'Stock Information', page: 'investors' },
      { label: 'Corporate Presentation', page: 'investors' },
      { label: 'Financial Statements', page: 'investors' },
    ],
  },
  { label: 'News', page: 'news' },
  { label: 'Contact', page: 'contact' },
];

export const Layout: React.FC<LayoutProps> = ({ children, currentPage, navigateTo }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  // Separate state for mobile accordion to avoid conflicts with desktop hover
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [mobileMenuOpen]);

  const handleNavClick = (page?: PageType) => {
    if (page) {
      navigateTo(page);
      setMobileMenuOpen(false);
      setMobileExpanded(null);
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-brand-charcoal overflow-x-hidden">
      {/* Ticker */}
      <div className="bg-brand-dark text-white text-xs py-2 overflow-hidden relative z-50">
        <motion.div 
          className="whitespace-nowrap flex space-x-12"
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        >
          {[1, 2, 3, 4].map((i) => (
            <React.Fragment key={i}>
              <span className="font-bold text-gold-500">TSXV: PTX</span>
              <span>$0.045 <span className="text-green-400">▲ 2.1%</span></span>
              <span className="font-bold text-gold-500">Frankfurt: 9PX</span>
              <span>€0.03 <span className="text-gray-400">-</span></span>
              <span className="font-bold text-gold-500">OTCQB: PANXF</span>
              <span>$0.032 <span className="text-green-400">▲ 0.5%</span></span>
              <span className="opacity-50 mx-4">|</span>
            </React.Fragment>
          ))}
        </motion.div>
      </div>

      {/* Header */}
      <header 
        className={`fixed top-8 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled ? 'py-2 glass-nav shadow-lg' : 'py-6 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <button onClick={() => navigateTo('home')} className="relative z-50 group">
             <div className="flex items-center space-x-2">
                <div className={`h-10 w-10 bg-brand-orange transform rotate-45 group-hover:rotate-0 transition-transform duration-500`}></div>
                <div className={`text-2xl font-serif font-bold tracking-tighter ${isScrolled ? 'text-brand-dark' : 'text-white'}`}>
                  PTX<span className="text-brand-orange">METALS</span>
                </div>
             </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div 
                key={item.label} 
                className="relative"
                onMouseEnter={() => setHoveredNav(item.label)}
                onMouseLeave={() => setHoveredNav(null)}
              >
                <button
                  onClick={() => handleNavClick(item.page)}
                  className={`flex items-center text-sm font-semibold tracking-wide uppercase transition-colors py-4 ${
                    isScrolled ? 'text-gray-800 hover:text-brand-orange' : 'text-white hover:text-gold-400'
                  }`}
                >
                  {item.label}
                  {item.submenu && <ChevronDown size={14} className="ml-1 opacity-70" />}
                </button>

                {/* Dropdown */}
                <AnimatePresence>
                  {item.submenu && hoveredNav === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-0 mt-0 w-64 bg-white shadow-2xl rounded-sm border-t-2 border-brand-orange overflow-hidden"
                    >
                      {item.submenu.map((sub) => (
                        <button
                          key={sub.label}
                          onClick={() => handleNavClick(sub.page)}
                          className="block w-full text-left px-6 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-brand-orange transition-colors border-b border-gray-100 last:border-0"
                        >
                          {sub.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            <button 
              onClick={() => navigateTo('investors')}
              className={`px-6 py-2 rounded-none uppercase font-bold text-xs tracking-widest transition-all ${
                isScrolled 
                  ? 'bg-brand-orange text-white hover:bg-gray-900' 
                  : 'bg-white text-brand-dark hover:bg-gold-500 hover:text-white'
              }`}
            >
              Invest
            </button>
          </nav>

          {/* Mobile Toggle Button (Visible only when menu is closed) */}
          {!mobileMenuOpen && (
            <button 
              className={`lg:hidden p-2 z-50 ${isScrolled ? 'text-brand-dark' : 'text-white'}`}
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={28} />
            </button>
          )}
        </div>
      </header>

      {/* Full Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-brand-dark text-white flex flex-col"
          >
            {/* Mobile Menu Header */}
            <div className="flex justify-between items-center p-6 border-b border-white/10 bg-brand-dark">
               <div className="flex items-center space-x-2">
                  <div className="h-8 w-8 bg-brand-orange transform rotate-45"></div>
                  <div className="text-xl font-serif font-bold tracking-tighter text-white">
                    PTX<span className="text-brand-orange">METALS</span>
                  </div>
               </div>
               <button 
                 onClick={() => setMobileMenuOpen(false)}
                 className="p-2 text-white/80 hover:text-brand-orange transition-colors"
               >
                 <X size={32} />
               </button>
            </div>

            {/* Scrollable Menu Content */}
            <div className="flex-1 overflow-y-auto px-6 py-8">
              <div className="space-y-6">
                {navItems.map((item) => (
                  <div key={item.label} className="border-b border-white/5 pb-4 last:border-0">
                    <button
                      onClick={() => {
                        if (item.submenu) {
                          setMobileExpanded(mobileExpanded === item.label ? null : item.label);
                        } else {
                          handleNavClick(item.page);
                        }
                      }}
                      className="w-full flex justify-between items-center text-left group"
                    >
                      <span className={`text-2xl font-serif font-bold transition-colors ${mobileExpanded === item.label ? 'text-brand-orange' : 'text-white'}`}>
                        {item.label}
                      </span>
                      {item.submenu && (
                        <ChevronDown 
                          size={24} 
                          className={`transition-transform duration-300 ${mobileExpanded === item.label ? 'rotate-180 text-brand-orange' : 'text-gray-500'}`} 
                        />
                      )}
                    </button>
                    
                    <AnimatePresence>
                      {item.submenu && mobileExpanded === item.label && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 pl-4 space-y-4 flex flex-col border-l border-brand-orange/30 ml-1 mt-2">
                            {item.submenu.map((sub) => (
                              <button
                                key={sub.label}
                                onClick={() => handleNavClick(sub.page)}
                                className="text-left text-gray-400 hover:text-white text-lg font-light transition-colors"
                              >
                                {sub.label}
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* Mobile Footer Actions */}
              <div className="mt-12 space-y-6">
                 <button 
                   onClick={() => handleNavClick('investors')}
                   className="w-full bg-brand-orange text-white font-bold uppercase tracking-widest py-4 text-sm hover:bg-white hover:text-brand-orange transition-colors rounded-sm"
                 >
                   Investor Presentation
                 </button>
                 
                 <div className="flex flex-col items-center space-y-4 pt-4">
                   <p className="text-gray-500 text-xs uppercase tracking-widest">Follow Us</p>
                   <div className="flex space-x-8">
                     <a href="#" className="text-white/60 hover:text-brand-orange"><Twitter size={24} /></a>
                     <a href="#" className="text-white/60 hover:text-brand-orange"><Linkedin size={24} /></a>
                     <a href="#" className="text-white/60 hover:text-brand-orange"><Facebook size={24} /></a>
                   </div>
                 </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-brand-dark text-white pt-24 pb-12 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 bg-brand-orange"></div>
                <div className="text-xl font-serif font-bold tracking-tighter">
                  PTX<span className="text-brand-orange">METALS</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Advancing high-quality critical minerals projects in world-class mining camps of Northern Ontario.
              </p>
              <div className="flex space-x-4">
                {[Twitter, Facebook, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="h-10 w-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-orange transition-colors">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-gold-500 font-bold uppercase tracking-widest text-sm mb-6">Contact</h4>
              <div className="space-y-4 text-sm text-gray-300">
                <p>The Exchange Tower<br/>130 King St W, Suite 3680<br/>Toronto, ON M5X 1B1</p>
                <p><span className="text-white font-semibold">CEO:</span> Greg Ferron</p>
                <p><a href="mailto:gferron@ptxmetals.com" className="hover:text-brand-orange">gferron@ptxmetals.com</a></p>
                <p>+1-416-270-5042</p>
              </div>
            </div>

            <div>
              <h4 className="text-gold-500 font-bold uppercase tracking-widest text-sm mb-6">Investors</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                {['Stock Information', 'Presentations', 'Financials', 'Events'].map(link => (
                  <li key={link}><button onClick={() => navigateTo('investors')} className="hover:text-white hover:translate-x-1 transition-all">{link}</button></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-gold-500 font-bold uppercase tracking-widest text-sm mb-6">Stay Updated</h4>
              <form className="space-y-4">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-brand-orange transition-colors"
                />
                <button className="w-full bg-white text-brand-dark font-bold uppercase text-xs py-3 hover:bg-brand-orange hover:text-white transition-colors">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>&copy; 2025 PTX Metals Inc. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
