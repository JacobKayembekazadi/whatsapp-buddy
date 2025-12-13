import React, { useEffect } from 'react';
import { NavigationProvider, useNavigation } from './context/NavigationContext'; // We'll mock this for the single-file output structure
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { ProjectPage } from './pages/Projects';
import { CorporatePage } from './pages/Corporate';
import { NewsArticleW2Drill } from './pages/NewsArticle'; // We need to create this or include it in pages
import { PageType } from './types';

// --- Context Mock since we are in a generator ---
// In a real app, this would be in context/NavigationContext.tsx
const NavigationContext = React.createContext<{
  currentPage: PageType;
  navigateTo: (page: PageType) => void;
} | undefined>(undefined);

const NavProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = React.useState<PageType>('home');

  const navigateTo = (page: PageType) => {
    // Basic transition effect
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(page);
  };

  return (
    <NavigationContext.Provider value={{ currentPage, navigateTo }}>
      {children}
    </NavigationContext.Provider>
  );
};

// --- Missing Component Definitions for the Full App ---

// Simple placeholder for News Article to make it compile
const NewsArticleW2DrillComponent: React.FC<{navigateTo: any}> = ({navigateTo}) => (
  <div className="pt-24 md:pt-32 pb-16 md:pb-24 bg-white container mx-auto px-6 max-w-4xl">
    <button onClick={() => navigateTo('home')} className="mb-6 md:mb-8 text-brand-orange text-sm font-bold uppercase">← Back Home</button>
    <h1 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-4">PTX Metals Launches 5,000m Drill Program at W2</h1>
    <p className="text-gray-500 mb-8 font-bold">December 1, 2025</p>
    <div className="prose prose-lg text-gray-700">
      <p className="lead text-lg md:text-xl">PTX Metals Inc. is pleased to announce commencement of a 5,000m diamond drilling program at its W2 Copper-Nickel and Platinum-Palladium-Gold (PGE) Project in Ontario, Canada.</p>
      <p>Drilling is focused on the Central Target with the initial holes targeting the CA1 and AP zones. The objectives of the first phase are to test and delineate known exploratory targets with the goal of enhancing the resource estimate.</p>
    </div>
  </div>
);

// Simple Investors Page
const InvestorsPage: React.FC = () => (
  <div className="pt-24 md:pt-32 pb-16 md:pb-24 bg-white container mx-auto px-6">
    <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-8 md:mb-12">Investor Relations</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
      <div className="bg-gray-50 p-6 md:p-8">
        <h3 className="text-2xl font-bold mb-4">Financial Reports</h3>
        <p className="text-gray-600 mb-6">Access our latest quarterly and annual reports.</p>
        <button className="text-brand-orange font-bold uppercase text-sm border-b border-brand-orange pb-1">View Archive</button>
      </div>
      <div className="bg-brand-charcoal text-white p-6 md:p-8">
        <h3 className="text-2xl font-bold mb-4">Corporate Presentation</h3>
        <p className="text-gray-400 mb-6">Download our latest investor deck.</p>
        <button className="bg-brand-orange px-6 py-2 font-bold uppercase text-sm">Download PDF</button>
      </div>
    </div>
  </div>
);

const AppContent: React.FC = () => {
  const { currentPage, navigateTo } = React.useContext(NavigationContext)!;

  let content;
  switch (currentPage) {
    case 'home':
      content = <Home navigateTo={navigateTo} />;
      break;
    case 'projects-w2':
      content = <ProjectPage type="w2" navigateTo={navigateTo} />;
      break;
    case 'projects-shining':
      content = <ProjectPage type="shining" navigateTo={navigateTo} />;
      break;
    case 'about-us':
    case 'management':
    case 'board':
      content = <CorporatePage page={currentPage} />;
      break;
    case 'news-article-w2-drill':
      content = <NewsArticleW2DrillComponent navigateTo={navigateTo} />;
      break;
    case 'investors':
      content = <InvestorsPage />;
      break;
    default:
      content = <Home navigateTo={navigateTo} />; // Default fallback
  }

  return (
    <Layout currentPage={currentPage} navigateTo={navigateTo}>
      {content}
    </Layout>
  );
};

const App: React.FC = () => {
  return (
    <NavProvider>
      <AppContent />
    </NavProvider>
  );
};

export default App;
