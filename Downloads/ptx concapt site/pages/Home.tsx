import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, BarChart2, Layers, Map, Globe, TrendingUp, ShieldCheck, Leaf, Handshake, Users, ArrowUpRight } from 'lucide-react';
import { PageType } from '../types';
import { ProjectMap } from '../components/ProjectMap';
import { StockChart } from '../components/StockChart';

interface HomeProps {
  navigateTo: (page: PageType) => void;
}

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1 }
};

export const Home: React.FC<HomeProps> = ({ navigateTo }) => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[90vh] md:h-screen w-full overflow-hidden">
        {/* Parallax Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed scale-110"
          style={{ backgroundImage: 'url("https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2025/10/08175718/Photo-2025-03-28-9-14-08-AM-scaled.jpg")' }}
        >
           <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-4xl border-l-4 border-brand-orange pl-6 md:pl-12"
          >
            <h2 className="text-gold-400 font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-4">Discovery & Development</h2>
            <h1 className="text-4xl md:text-7xl font-serif font-bold text-white leading-tight mb-6 md:mb-8">
              Unlocking Value in <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Critical Minerals</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 md:mb-10 max-w-2xl font-light leading-relaxed">
              Focused on high-quality Gold and Copper-Nickel-PGE assets in the world-acclaimed mining camps of Northern Ontario.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              <button 
                onClick={() => navigateTo('projects-w2')}
                className="group bg-brand-orange text-white px-8 md:px-10 py-3 md:py-4 uppercase font-bold text-xs md:text-sm tracking-wider hover:bg-white hover:text-brand-orange transition-all duration-300 flex items-center justify-center"
              >
                Explore Projects
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => navigateTo('investors')}
                className="group border border-white text-white px-8 md:px-10 py-3 md:py-4 uppercase font-bold text-xs md:text-sm tracking-wider hover:bg-white hover:text-brand-dark transition-all duration-300"
              >
                Investor Presentation
              </button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 text-white flex flex-col items-center hidden sm:flex"
        >
          <span className="text-[10px] uppercase tracking-widest mb-2">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
        </motion.div>
      </div>

      {/* Market Data Bar */}
      <div className="bg-brand-charcoal text-white py-8 md:py-12 border-b border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
             <div className="flex items-center space-x-4 w-full md:w-auto justify-center md:justify-start">
                <div className="p-3 bg-gray-800 rounded-full text-gold-500"><BarChart2 size={24} /></div>
                <div>
                  <h3 className="font-bold text-lg">TSXV: PTX</h3>
                  <p className="text-gray-400 text-sm">Real-time market data</p>
                </div>
             </div>
             <div className="flex space-x-8 text-center md:text-left">
                <div>
                   <span className="block text-2xl font-bold text-white">118M</span>
                   <span className="text-xs uppercase text-gray-500 tracking-wider">Shares Issued</span>
                </div>
                <div>
                   <span className="block text-2xl font-bold text-white">$5.2M</span>
                   <span className="text-xs uppercase text-gray-500 tracking-wider">Market Cap</span>
                </div>
             </div>
             <button onClick={() => navigateTo('investors')} className="text-gold-500 hover:text-white text-sm font-bold uppercase tracking-wider flex items-center">
                View Financials <ArrowRight size={16} className="ml-2" />
             </button>
          </div>
        </div>
      </div>

      {/* Strategy Section */}
      <div className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div {...fadeInUp}>
              <h4 className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-4">Our Strategy</h4>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-charcoal mb-6 md:mb-8 leading-tight">
                Premier Assets in <br/>Top-Tier Jurisdictions
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-base md:text-lg">
                PTX Metals (TSXV: PTX) is a mineral exploration company focused on high-quality critical minerals projects, including two flagship projects situated in northern Ontario.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our portfolio offers investors exposure to some of the world’s most valuable metals including gold, as well as essential critical minerals for the clean energy transition: copper, nickel, PGE, and uranium.
              </p>
              <button 
                onClick={() => navigateTo('about-us')}
                className="text-brand-dark font-bold border-b-2 border-brand-orange pb-1 hover:text-brand-orange transition-colors"
              >
                Read Our Story
              </button>
            </motion.div>
            
            <motion.div 
              {...fadeInUp} 
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <ProjectMap />
            </motion.div>
          </div>
        </div>
      </div>

      {/* NEW SECTION 1: Investment Highlights (Bento Grid) */}
      <div className="py-20 md:py-32 bg-brand-dark text-white relative overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-orange/5 rounded-full blur-[100px] transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] transform -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
        
        <div className="container mx-auto px-6 relative z-10">
           <motion.div 
             className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-6"
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
           >
              <div>
                <span className="text-brand-orange font-bold uppercase tracking-widest text-sm">Why Invest</span>
                <h2 className="text-3xl md:text-5xl font-serif font-bold mt-4 leading-tight">The PTX Advantage</h2>
              </div>
              <p className="text-gray-400 max-w-md text-sm md:text-base leading-relaxed">
                A unique combination of high-potential assets, strategic location, and disciplined management.
              </p>
           </motion.div>

           <motion.div 
             variants={staggerContainer}
             initial="hidden"
             whileInView="show"
             viewport={{ once: true }}
             className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
           >
              {/* Card 1: Jurisdiction - Large Span */}
              <motion.div 
                variants={staggerItem}
                className="md:col-span-2 relative bg-gradient-to-br from-white/10 to-transparent border border-white/10 p-8 md:p-10 rounded-3xl overflow-hidden group hover:border-brand-orange/30 transition-all duration-500"
              >
                 <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                    <Globe size={120} className="text-white" />
                 </div>
                 <div className="relative z-10 h-full flex flex-col justify-between">
                    <div className="mb-8">
                       <div className="w-12 h-12 bg-brand-orange/20 rounded-xl flex items-center justify-center mb-6 text-brand-orange backdrop-blur-sm">
                          <Globe size={24} />
                       </div>
                       <h3 className="text-2xl md:text-4xl font-serif font-bold mb-4">Tier-1 Mining Jurisdiction</h3>
                       <p className="text-gray-300 text-lg max-w-lg leading-relaxed">
                         Located in Northern Ontario, consistently ranked as one of the world's most stable and mineral-rich mining regions.
                       </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-wider">
                       <span>Ontario, Canada</span>
                       <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
                       <span>World Class</span>
                    </div>
                 </div>
              </motion.div>

              {/* Card 2: High Upside - Commodities */}
              <motion.div 
                variants={staggerItem}
                className="bg-brand-orange text-white p-8 md:p-10 rounded-3xl flex flex-col justify-between group relative overflow-hidden shadow-2xl shadow-brand-orange/20"
              >
                 <div className="absolute -right-4 -bottom-4 opacity-10 transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
                    <TrendingUp size={140} className="text-white" />
                 </div>
                 <div>
                   <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6 text-white backdrop-blur-sm">
                      <TrendingUp size={24} />
                   </div>
                   <h3 className="text-2xl font-serif font-bold mb-2">High Upside</h3>
                   <p className="text-white/80 text-sm leading-relaxed mb-6">Exposure to critical minerals driving the green energy transition.</p>
                 </div>
                 <div className="flex flex-wrap gap-2 relative z-10">
                    {['Au', 'Cu', 'Ni', 'PGE'].map((el, idx) => (
                      <span key={idx} className="bg-white/20 hover:bg-white hover:text-brand-orange transition-colors px-3 py-1.5 rounded-lg text-sm font-bold backdrop-blur-sm">
                        {el}
                      </span>
                    ))}
                 </div>
              </motion.div>

              {/* Card 3: District Scale */}
              <motion.div 
                variants={staggerItem}
                className="bg-gray-800/50 border border-white/5 p-8 md:p-10 rounded-3xl group hover:bg-gray-800/80 transition-colors backdrop-blur-sm"
              >
                 <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 text-blue-400 backdrop-blur-sm">
                    <Layers size={24} />
                 </div>
                 <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">220<span className="text-xl text-gold-500 ml-1 font-serif">km²</span></h3>
                 <p className="text-white font-bold mb-2 text-lg">District Scale Land Package</p>
                 <p className="text-gray-400 text-sm leading-relaxed">
                   Dominant land position in the Ring of Fire and Shining Tree camps.
                 </p>
              </motion.div>

              {/* Card 4: De-Risked - Wide Span */}
              <motion.div 
                variants={staggerItem}
                className="md:col-span-2 bg-gradient-to-br from-gray-900 to-black border border-white/10 p-8 md:p-10 rounded-3xl flex flex-col md:flex-row items-center gap-8 group hover:border-gold-500/30 transition-colors"
              >
                 <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                       <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center text-green-400 backdrop-blur-sm">
                          <ShieldCheck size={24} />
                       </div>
                       <h3 className="text-2xl md:text-3xl font-serif font-bold text-white">De-Risked Strategy</h3>
                    </div>
                    <p className="text-gray-400 text-base leading-relaxed mb-6">
                       Supported by strategic partnerships and a strong balance sheet, ensuring funded exploration programs without excessive dilution.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm font-bold text-gray-300">
                       <span className="flex items-center"><span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>Strong Treasury</span>
                       <span className="flex items-center"><span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>Experienced Team</span>
                    </div>
                 </div>
                 <div className="w-full md:w-auto flex justify-center">
                    <button 
                      onClick={() => navigateTo('investors')}
                      className="group/btn flex items-center justify-center w-16 h-16 rounded-full bg-white/5 border border-white/20 hover:bg-brand-orange hover:border-brand-orange transition-all duration-300"
                    >
                       <ArrowUpRight size={24} className="text-white group-hover/btn:scale-110 transition-transform" />
                    </button>
                 </div>
              </motion.div>

           </motion.div>
        </div>
      </div>

      {/* Featured Projects */}
      <div className="py-0">
        <div className="grid grid-cols-1 md:grid-cols-2">
           {/* W2 Project */}
           <motion.div 
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="relative h-[400px] md:h-[600px] group overflow-hidden cursor-pointer"
             onClick={() => navigateTo('projects-w2')}
           >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                style={{ backgroundImage: 'url("https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2024/05/07152333/project1-bg.jpg")' }}
              ></div>
              <div className="absolute inset-0 bg-brand-orange/90 group-hover:bg-brand-orange/80 transition-all duration-500 flex flex-col justify-center items-center text-center p-8 md:p-12">
                <Layers size={48} className="text-white mb-6 opacity-80" />
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">W2 Cu-Ni-PGE</h3>
                <p className="text-white/80 max-w-md mb-8 text-sm md:text-base">
                  A large-scale system covering 220 km² in the Ring of Fire. High potential for Copper, Nickel, and PGEs.
                </p>
                <span className="inline-block border border-white text-white px-6 py-2 md:px-8 md:py-3 uppercase text-xs font-bold tracking-widest hover:bg-white hover:text-brand-orange transition-colors">
                  View Project
                </span>
              </div>
           </motion.div>

           {/* South Timmins */}
           <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="relative h-[400px] md:h-[600px] group overflow-hidden cursor-pointer"
             onClick={() => navigateTo('projects-shining')}
           >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                style={{ backgroundImage: 'url("https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2024/05/07152333/project2-bg.jpg")' }}
              ></div>
              <div className="absolute inset-0 bg-brand-charcoal/90 group-hover:bg-brand-charcoal/80 transition-all duration-500 flex flex-col justify-center items-center text-center p-8 md:p-12">
                <Map size={48} className="text-gold-500 mb-6 opacity-80" />
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">South Timmins Gold</h3>
                <p className="text-white/80 max-w-md mb-8 text-sm md:text-base">
                  District-scale gold property bordering IAMGOLD's Côté Gold Mine. 100% owned Shining Tree project.
                </p>
                <span className="inline-block border border-gold-500 text-gold-500 px-6 py-2 md:px-8 md:py-3 uppercase text-xs font-bold tracking-widest hover:bg-gold-500 hover:text-white transition-colors">
                  View Project
                </span>
              </div>
           </motion.div>
        </div>
      </div>

      {/* NEW SECTION 2: Sustainability / ESG */}
      <div className="py-16 md:py-24 bg-gray-50">
         <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
               <motion.div 
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 className="relative h-[300px] md:h-[500px] rounded-lg overflow-hidden shadow-2xl order-2 lg:order-1"
               >
                  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2023/01/16170415/esg-bg.jpg")' }}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 text-white">
                     <p className="font-serif text-xl md:text-2xl italic">"Respecting the land, partnering with communities."</p>
                  </div>
               </motion.div>
               
               <motion.div {...fadeInUp} className="order-1 lg:order-2">
                  <div className="flex items-center space-x-2 mb-4">
                     <Leaf className="text-green-600" size={20} />
                     <span className="text-green-600 font-bold uppercase tracking-widest text-sm">Responsibility</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-6">Sustainable Exploration</h2>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                     We believe that successful mining exploration begins with a commitment to environmental stewardship and strong, transparent relationships with First Nations and local communities.
                  </p>
                  <ul className="space-y-4 mb-8">
                     <li className="flex items-start">
                        <Handshake className="text-brand-orange mt-1 mr-4 flex-shrink-0" size={20} />
                        <span className="text-gray-700 font-medium">Early and continuous engagement with Indigenous communities.</span>
                     </li>
                     <li className="flex items-start">
                        <ShieldCheck className="text-brand-orange mt-1 mr-4 flex-shrink-0" size={20} />
                        <span className="text-gray-700 font-medium">Adherence to highest environmental standards in exploration.</span>
                     </li>
                  </ul>
                  <button className="text-brand-dark font-bold border-b-2 border-brand-orange pb-1 hover:text-brand-orange transition-colors">
                     View ESG Framework
                  </button>
               </motion.div>
            </div>
         </div>
      </div>

      {/* NEW SECTION 3: Leadership Teaser */}
      <div className="py-16 md:py-24 bg-white">
         <div className="container mx-auto px-6 text-center">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="mb-12 md:mb-16"
            >
               <span className="text-brand-orange font-bold uppercase tracking-widest text-sm">Our Team</span>
               <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-charcoal mt-4">Guided by Experience</h2>
            </motion.div>

            <motion.div 
               variants={staggerContainer}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }}
               className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            >
               {[
                  { name: "Greg Ferron", role: "President & CEO", img: "https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2023/01/16170412/team-1.jpg" },
                  { name: "Cindy Davis", role: "CFO", img: "https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2023/01/16170412/team-2.jpg" },
                  { name: "Joerg Kleinboeck", role: "Exploration Manager", img: "https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2023/01/16170412/team-3.jpg" }
               ].map((leader, i) => (
                  <motion.div key={i} variants={staggerItem} className="group cursor-pointer" onClick={() => navigateTo('management')}>
                     <div className="relative overflow-hidden rounded-lg mb-6 aspect-[3/4]">
                        <div className="absolute inset-0 bg-gray-200"></div> {/* Fallback color */}
                        <div className="absolute inset-0 bg-brand-charcoal/5 group-hover:bg-brand-orange/10 transition-colors duration-500"></div>
                        <img src={leader.img} alt={leader.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                     </div>
                     <h3 className="text-xl font-serif font-bold text-brand-dark">{leader.name}</h3>
                     <p className="text-brand-orange text-sm font-medium uppercase tracking-wide">{leader.role}</p>
                  </motion.div>
               ))}
            </motion.div>
            
            <div className="mt-12">
               <button 
                 onClick={() => navigateTo('management')}
                 className="inline-flex items-center text-brand-dark font-bold uppercase tracking-widest text-xs hover:text-brand-orange transition-colors"
               >
                 Meet the Management Team <ArrowRight size={16} className="ml-2" />
               </button>
            </div>
         </div>
      </div>

      {/* Latest News & Stock */}
      <div className="py-16 md:py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* News Column */}
            <div className="lg:col-span-2">
              <div className="flex justify-between items-end mb-8 md:mb-12">
                <div>
                  <h4 className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-2">Updates</h4>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-charcoal">Latest News</h2>
                </div>
                <button onClick={() => navigateTo('news')} className="hidden md:flex items-center text-sm font-bold uppercase hover:text-brand-orange">
                  View Archive <ArrowRight size={16} className="ml-2" />
                </button>
              </div>

              <div className="space-y-8">
                {[
                  { date: 'Dec 01, 2025', title: 'PTX Launches 5,000m Drill Program at W2', page: 'news-article-w2-drill' },
                  { date: 'Nov 24, 2025', title: 'Green Canada Corp Announces Proposed Going Public Transaction' },
                  { date: 'Nov 07, 2025', title: 'PTX Reports Compilation of Geophysical Data at W2' },
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ x: 10 }}
                    className="group border-l-2 border-gray-200 hover:border-brand-orange pl-6 transition-all cursor-pointer"
                    onClick={() => item.page && navigateTo(item.page as PageType)}
                  >
                    <span className="text-sm text-gray-500 font-medium mb-1 block">{item.date}</span>
                    <h3 className="text-lg md:text-xl font-bold text-brand-dark group-hover:text-brand-orange transition-colors">
                      {item.title}
                    </h3>
                  </motion.div>
                ))}
              </div>
              <button onClick={() => navigateTo('news')} className="mt-8 md:hidden flex items-center text-sm font-bold uppercase text-brand-dark">
                  View News Archive <ArrowRight size={16} className="ml-2" />
              </button>
            </div>

            {/* Stock Column */}
            <div className="lg:col-span-1">
               <StockChart />
               
               <div className="mt-8 bg-brand-dark text-white p-8 rounded-lg shadow-xl relative overflow-hidden">
                  <div className="relative z-10">
                    <h3 className="font-serif font-bold text-2xl mb-4">Stay Informed</h3>
                    <p className="text-gray-400 mb-6 text-sm">Join our mailing list for immediate updates on drill results and corporate news.</p>
                    <button className="w-full bg-brand-orange text-white py-3 font-bold uppercase text-xs tracking-wider hover:bg-white hover:text-brand-orange transition-colors">
                      Subscribe Now
                    </button>
                  </div>
                  {/* Abstract bg element */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl transform translate-x-10 -translate-y-10"></div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};
