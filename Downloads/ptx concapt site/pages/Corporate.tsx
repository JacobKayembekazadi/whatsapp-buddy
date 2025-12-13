import React from 'react';
import { motion } from 'framer-motion';
import { PageType, TeamMemberProps } from '../types';

interface CorporateProps {
  page: PageType;
}

const Banner: React.FC<{ title: string; image: string }> = ({ title, image }) => (
  <div className="relative h-[40vh] md:h-[50vh] w-full overflow-hidden flex items-end pb-8 md:pb-16">
    <div 
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
       <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
    </div>
    <div className="container mx-auto px-6 relative z-10">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        className="border-l-4 border-brand-orange pl-6 md:pl-8"
      >
        <span className="text-gold-500 font-bold uppercase tracking-widest text-xs md:text-sm mb-2 block">Corporate</span>
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white">{title}</h1>
      </motion.div>
    </div>
  </div>
);

const BioCard: React.FC<TeamMemberProps> = ({ name, title, bio }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow rounded-sm"
  >
    <h3 className="text-xl md:text-2xl font-serif font-bold text-brand-dark mb-1">{name}</h3>
    <p className="text-brand-orange font-medium text-xs md:text-sm uppercase tracking-wide mb-6">{title}</p>
    <p className="text-gray-600 leading-relaxed text-sm">{bio}</p>
  </motion.div>
);

export const CorporatePage: React.FC<CorporateProps> = ({ page }) => {
  if (page === 'about-us') {
    return (
      <>
        <Banner title="About Us" image="https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2024/03/08103835/IMG_0219-scaled.jpg" />
        <div className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6 max-w-4xl">
            <p className="text-xl md:text-2xl font-serif text-brand-dark mb-8 leading-normal">
              PTX is a mineral exploration company focused on high-quality critical minerals projects, situated in northern Ontario, a world-class mining jurisdiction.
            </p>
            <div className="prose prose-lg text-gray-600">
              <p>
                Our corporate objective is to advance exploration programs towards proving the potential of each asset, which includes the W2 Cu-Ni-PGE and Gold Project and South Timmins Gold Joint Venture Project.
              </p>
              <p>
                PTX’s portfolio offers investors exposure to some of the world’s most valuable metals including gold, as well as essential critical minerals for the clean energy transition: copper, nickel, PGE, and uranium. PTX’s assets were strategically acquired for their geologically favorable attributes and proximity to established mining companies.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }

  const managementTeam: TeamMemberProps[] = [
    { 
        name: "Greg Ferron", 
        title: "President & CEO", 
        bio: "Mr. Ferron has 20 years of mining industry, capital markets and corporate development experience. Previously CEO of Treasury Metals (NexGold), leading the Goldlund project acquisition. Diverse M&A experience and strong track record of shareholder value creation." 
    },
    { 
        name: "Cindy Davis", 
        title: "Chief Financial Officer", 
        bio: "Over 15 years of experience providing accounting, financial reporting, regulatory compliance, and management advisory services to publicly listed companies. Canadian Chartered Professional Accountant." 
    },
    { 
        name: "Erika Dohring", 
        title: "Head of Technical Development", 
        bio: "Holds a M.Sc. in geology and mining engineering. More than 10 years of experience in leading and strategically managing exploration projects with a primary focus in precious and base metals across three continents." 
    },
    { 
        name: "Joerg Kleinboeck", 
        title: "Exploration Manager, P.Geo", 
        bio: "Professional geoscientist with 24 years of experience primarily in Ontario. Extensive experience working in the Shining Tree area and previously managed exploration programs at Heenan Mallard." 
    },
  ];

  if (page === 'management') {
    return (
      <>
        <Banner title="Management Team" image="https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2024/03/08103739/Ronda-Stripping-5.jpg" />
        <div className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {managementTeam.map((member, i) => <BioCard key={i} {...member} />)}
            </div>
          </div>
        </div>
      </>
    );
  }

  // Board Content (Simplified for brevity)
  return (
    <>
       <Banner title="Board of Directors" image="https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2023/01/16170408/projects-bg.jpg" />
       <div className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               <BioCard name="Christophe Vereecke" title="Chairman" bio="Entrepreneur based in Paris, background in finance, oil & gas, and mining royalties. Director of Treasury Metals since 2015." />
               <BioCard name="Greg Ferron" title="President, CEO & Director" bio="20 years of mining industry and capital markets experience." />
               <BioCard name="Frederico Marques" title="Director" bio="25 years experience in mining, M&A, legal and corporate. Former partner of major Canadian law firms and in-house counsel at Vale S.A." />
               <BioCard name="Sam Kiri" title="Director" bio="Over 20 years of capital markets and asset management experience in North America, Europe, and the Pacific Rim." />
            </div>
          </div>
       </div>
    </>
  );
};
