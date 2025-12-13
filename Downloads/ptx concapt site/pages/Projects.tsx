import React from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronRight, CheckCircle } from 'lucide-react';
import { PageType } from '../types';

interface ProjectProps {
  navigateTo: (page: PageType) => void;
  type: 'w2' | 'shining' | 'heenan' | 'royalty';
}

const ProjectHeader: React.FC<{ title: string; subtitle: string; image: string }> = ({ title, subtitle, image }) => (
  <div className="relative h-[50vh] md:h-[60vh] w-full flex items-center">
    <div 
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-brand-charcoal/60 mix-blend-multiply"></div>
    </div>
    <div className="relative container mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="block text-brand-orange font-bold uppercase tracking-widest text-xs md:text-sm mb-2 md:mb-4">Flagship Project</span>
        <h1 className="text-4xl md:text-7xl font-serif font-bold text-white mb-4 md:mb-6 max-w-4xl">{title}</h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl">{subtitle}</p>
      </motion.div>
    </div>
  </div>
);

const StatBox: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="bg-gray-50 p-4 md:p-6 border-l-4 border-brand-orange">
    <p className="text-gray-500 text-xs md:text-sm uppercase tracking-wide mb-1">{label}</p>
    <p className="text-xl md:text-2xl font-bold text-brand-dark">{value}</p>
  </div>
);

export const ProjectPage: React.FC<ProjectProps> = ({ type, navigateTo }) => {
  // W2 Content
  if (type === 'w2') {
    return (
      <>
        <ProjectHeader 
          title="W2 Cu-Ni-PGE" 
          subtitle="Drilling the next large scale Cu-Ni-PGE discovery in the Ring of Fire."
          image="https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2025/10/08180223/2025-03-11-12-15-46-831.png"
        />
        
        <div className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-16">
            <div className="lg:col-span-2 space-y-8 md:space-y-12">
              <div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-brand-dark mb-4 md:mb-6">Project Overview</h3>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-6">
                  The W2 Project covers the layered mafic-ultramafic Lansdowne House Igneous Complex which is highly prospective for copper-nickel and reef-type platinum group element deposits.
                </p>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  Located approximately 475 km northeast of Thunder Bay and 60 km southwest of Ring of Fire Metals’ Eagle’s Nest Mine. The widespread mineralization is delineated in at least seven significant zones within a 7.5 km long corridor.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <StatBox label="Land Package" value="22,094 ha" />
                <StatBox label="Ownership" value="100% PTX*" />
                <StatBox label="Commodities" value="Cu, Ni, PGE, Au" />
                <StatBox label="Location" value="Ring of Fire, ON" />
              </div>

              <div>
                <h3 className="text-2xl font-serif font-bold text-brand-dark mb-6">Key Highlights</h3>
                <ul className="space-y-4">
                  {[
                    'Adjacent to Barrick Gold, Northern Superior Resources, and Wyloo.',
                    'Historic spending of ~$5M with 12,265m of drilling.',
                    'High-grade zones identified for immediate follow-up.',
                    'Upcoming 5,000m drill program targeting Central Zone.'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="text-brand-orange mt-1 mr-4 flex-shrink-0" size={20} />
                      <span className="text-gray-700 text-sm md:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-brand-dark text-white p-6 md:p-8 rounded shadow-xl">
                 <h4 className="font-serif font-bold text-xl mb-6">Technical Reports</h4>
                 <button className="w-full flex items-center justify-between bg-white/10 hover:bg-white/20 p-4 rounded transition-colors mb-4 group">
                    <span className="text-sm font-medium">NI 43-101 Technical Report (2024)</span>
                    <Download size={18} className="text-brand-orange" />
                 </button>
                 <button className="w-full flex items-center justify-between bg-white/10 hover:bg-white/20 p-4 rounded transition-colors group">
                    <span className="text-sm font-medium">W2 Presentation Deck</span>
                    <Download size={18} className="text-brand-orange" />
                 </button>
              </div>

              <div className="bg-gray-100 p-6 md:p-8 rounded border border-gray-200">
                <h4 className="font-serif font-bold text-xl mb-4 text-brand-dark">Latest Updates</h4>
                <div className="space-y-4">
                  <div className="cursor-pointer hover:text-brand-orange transition-colors" onClick={() => navigateTo('news-article-w2-drill')}>
                    <span className="text-xs text-gray-500 block mb-1">Dec 01, 2025</span>
                    <p className="font-medium text-sm">PTX Launches 5,000m Drill Program at W2 Central Target</p>
                  </div>
                  <div className="h-px bg-gray-300"></div>
                  <div className="cursor-pointer hover:text-brand-orange transition-colors">
                    <span className="text-xs text-gray-500 block mb-1">Nov 07, 2025</span>
                    <p className="font-medium text-sm">Geophysical Compilation Identifies New Targets</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  // Shining Tree Content
  return (
    <>
      <ProjectHeader 
        title="Shining Tree Gold" 
        subtitle="District-scale gold property in the Abitibi Greenstone Belt."
        image="https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2024/04/05104654/STJV-PTX-FNC-Neighbours-265k-no-nameplate-legend-LS-010624-scaled.jpg"
      />
      <div className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
             <h3 className="text-2xl md:text-3xl font-serif font-bold text-brand-dark mb-6">Strategic Location</h3>
             <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-12">
               The Shining Tree Project covers a large section of the Ridout Tyrrell deformation zone (RTDZ) which trends as far west as Newmont’s Borden Mine, through the area of IAMGOLD’s Cote Gold deposit, and across Aris Gold’s Juby Project.
             </p>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
                <StatBox label="Land Package" value="23,242 ha" />
                <StatBox label="JV Structure" value="75% PTX / 25% Fancamp" />
             </div>

             <div className="bg-brand-charcoal text-white p-8 md:p-12 rounded-lg text-center">
               <h3 className="text-xl md:text-2xl font-serif font-bold mb-4">View South Timmins JV Details</h3>
               <p className="text-gray-400 mb-8 text-sm md:text-base">Comprehensive data on Shining Tree, Heenan, and Mallard properties.</p>
               <button className="bg-brand-orange px-8 py-3 font-bold uppercase tracking-widest hover:bg-white hover:text-brand-orange transition-colors w-full md:w-auto text-sm">
                 Download Presentation
               </button>
             </div>
          </div>
        </div>
      </div>
    </>
  );
};
