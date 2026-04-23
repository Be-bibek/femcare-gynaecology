import { motion } from 'framer-motion';
import { Search, Filter, ArrowUpRight, BookOpen, Clock, Heart } from 'lucide-react';
import { useState } from 'react';

const HealthHub = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Menstrual Wellness', 'PCOS / PCOD', 'Sexual Health', 'Menopause'];

  const articles = [
    {
      title: 'Understanding PCOS: Symptoms and Management',
      category: 'PCOS / PCOD',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800',
      description: 'Polycystic Ovary Syndrome affects 1 in 10 women. Learn how to navigate the diagnosis.'
    },
    {
      title: 'The Phases of Your Cycle',
      category: 'Menstrual Wellness',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800',
      description: 'Follicular, Ovulatory, and Luteal — understanding what happens in your body each week.'
    },
    {
      title: 'Sexual Health: Routine Screenings You Need',
      category: 'Sexual Health',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1631217818242-27ae17ff5858?auto=format&fit=crop&q=80&w=800',
      description: 'Why regular checkups are the foundation of sexual well-being and confidence.'
    },
    {
      title: 'Navigating Perimenopause',
      category: 'Menopause',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1516549221187-fb9d47d4076e?auto=format&fit=crop&q=80&w=800',
      description: 'Recognizing the early signs and lifestyle adjustments for a smoother transition.'
    },
    {
      title: 'Endometriosis: Beyond the Pain',
      category: 'Menstrual Wellness',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=800',
      description: 'Advocating for your health and finding the right treatment path for chronic pelvic pain.'
    },
    {
      title: 'Fertility Awareness Methods',
      category: 'Sexual Health',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800',
      description: 'A guide to natural family planning and understanding your fertile window.'
    }
  ];

  const filteredArticles = activeFilter === 'All' 
    ? articles 
    : articles.filter(a => a.category === activeFilter);

  return (
    <div className="pt-32 pb-20 bg-cream-base min-h-screen px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="font-display text-5xl md:text-6xl font-bold text-forest-text mb-6"
              >
                Health <span className="text-dusty-rose">Hub</span>
              </motion.h1>
              <p className="text-lg text-forest-text/60 font-body leading-relaxed">
                Your clinical sanctuary for information. Explore articles, research, and guides curated by our medical experts to empower your wellness journey.
              </p>
            </div>
            <div className="flex items-center space-x-4 bg-white p-2 rounded-2xl shadow-sm border border-cream-base">
              <div className="flex items-center px-4 space-x-2 text-forest-text/40">
                <Search size={20} />
                <input 
                  type="text" 
                  placeholder="Search concerns..." 
                  className="bg-transparent border-none focus:outline-none text-forest-text py-2"
                />
              </div>
              <button className="bg-sage-calm text-forest-text p-3 rounded-xl hover:bg-sage-calm/80 transition-colors">
                <Filter size={20} />
              </button>
            </div>
          </div>

          <div className="flex overflow-x-auto space-x-4 mt-12 pb-4 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`whitespace-nowrap px-8 py-3 rounded-full font-accent text-sm font-semibold transition-all ${
                  activeFilter === cat 
                    ? 'bg-forest-text text-white shadow-lg' 
                    : 'bg-white text-forest-text/60 hover:bg-white/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredArticles.map((article, i) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white rounded-[32px] overflow-hidden border border-cream-base shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-6 right-6">
                  <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-forest-text group-hover:bg-dusty-rose group-hover:text-white transition-colors duration-300 shadow-lg">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
                <div className="absolute bottom-6 left-6">
                  <span className="px-4 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-accent font-bold text-forest-text uppercase tracking-wider shadow-sm">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-4 text-xs font-accent text-forest-text/40">
                  <span className="flex items-center space-x-1">
                    <Clock size={14} />
                    <span>{article.readTime}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <BookOpen size={14} />
                    <span>Expert Review</span>
                  </span>
                </div>
                <h3 className="font-display text-2xl font-bold text-forest-text mb-4 group-hover:text-dusty-rose transition-colors leading-tight">
                  {article.title}
                </h3>
                <p className="text-forest-text/60 font-body text-sm leading-relaxed mb-6">
                  {article.description}
                </p>
                <button className="flex items-center space-x-2 text-sm font-accent font-bold text-forest-text hover:text-dusty-rose transition-colors">
                  <span>Read Article</span>
                  <div className="w-1 h-1 rounded-full bg-dusty-rose"></div>
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-sage-calm/30 rounded-full flex items-center justify-center mx-auto mb-6 text-forest-text/40">
              <Heart size={32} />
            </div>
            <h3 className="font-display text-2xl font-bold text-forest-text mb-2">No articles found</h3>
            <p className="text-forest-text/60">Try adjusting your filters or search terms.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HealthHub;
