import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Clock, Leaf, BookOpen, Flame, Wind, Droplets, Sparkles, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

// ─── Articles Data ─────────────────────────────────────────────────────────────
const ARTICLES = [
  {
    id: 'understanding-cycle',
    title: 'Understanding Your Menstrual Cycle Phases',
    excerpt: 'Discover the four distinct phases of your cycle. Learn how hormonal shifts impact your energy, mood, and how to support your body through each stage.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=900&auto=format&fit=crop',
    category: "Women's Health 101",
    categoryColor: 'bg-soft-pink text-dusty-rose border-dusty-rose/20',
    categoryIcon: Wind,
    readTime: '5 min read',
    date: 'Oct 12, 2023',
    author: 'Dr. Sarah Mitchell',
    authorImg: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=100&auto=format&fit=crop',
    featured: true,
  },
  {
    id: 'prenatal-nutrition',
    title: 'The Essential Guide to Prenatal Nutrition',
    excerpt: 'What to eat when you are expecting. A comprehensive breakdown of folic acid, iron, and DHA requirements for optimal fetal development.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=700&auto=format&fit=crop',
    category: 'Pregnancy',
    categoryColor: 'bg-sage-calm text-forest-text border-sage-calm/50',
    categoryIcon: Sparkles,
    readTime: '7 min read',
    date: 'Nov 03, 2023',
    author: 'Dr. Emily Chen',
    authorImg: 'https://images.unsplash.com/photo-1594824436951-7f12bc4175de?q=80&w=100&auto=format&fit=crop',
    featured: false,
  },
  {
    id: 'pcos-diet',
    title: 'Managing PCOS Through Diet and Lifestyle',
    excerpt: 'Insulin resistance is a key factor in PCOS. Learn how balancing blood sugar and reducing inflammation can help regulate your cycle.',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=700&auto=format&fit=crop',
    category: 'Nutrition',
    categoryColor: 'bg-gold-warm/20 text-gold-warm border-gold-warm/30',
    categoryIcon: Leaf,
    readTime: '6 min read',
    date: 'Sep 28, 2023',
    author: 'Dr. Olivia Martinez',
    authorImg: 'https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?q=80&w=100&auto=format&fit=crop',
    featured: false,
  },
  {
    id: 'menopause-relief',
    title: 'Navigating Menopause: Relief from Hot Flashes',
    excerpt: 'Practical strategies and evidence-based treatments for managing vasomotor symptoms and maintaining bone health during the menopausal transition.',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=700&auto=format&fit=crop',
    category: 'Menopause',
    categoryColor: 'bg-dusty-rose/20 text-dusty-rose border-dusty-rose/30',
    categoryIcon: Flame,
    readTime: '8 min read',
    date: 'Dec 01, 2023',
    author: 'Dr. Sarah Mitchell',
    authorImg: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=100&auto=format&fit=crop',
    featured: false,
  },
  {
    id: 'fertility-basics',
    title: 'Fertility Basics: Knowing Your Ovulation Window',
    excerpt: 'Tracking basal body temperature and cervical mucus can significantly increase your chances of conception. Here is exactly how to do it.',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=700&auto=format&fit=crop',
    category: 'Fertility',
    categoryColor: 'bg-sage-calm/30 text-forest-text border-sage-calm/50',
    categoryIcon: Droplets,
    readTime: '10 min read',
    date: 'Jan 15, 2024',
    author: 'Dr. Emily Chen',
    authorImg: 'https://images.unsplash.com/photo-1594824436951-7f12bc4175de?q=80&w=100&auto=format&fit=crop',
    featured: false,
  },
];

const FILTER_TAGS = ['All', "Women's Health 101", 'Pregnancy', 'Nutrition', 'Menopause', 'Fertility'];

// ─── Featured Card ─────────────────────────────────────────────────────────────
function FeaturedCard({ article }) {
  const IconComp = article.categoryIcon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65 }}
      className="lg:col-span-7 group"
    >
      <Link to={`/blog/${article.id}`} className="block relative rounded-3xl overflow-hidden shadow-sm mb-6 h-[360px] lg:h-[440px]">
        {/* Image */}
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
        />
        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-text/85 via-forest-text/20 to-transparent" />

        {/* Category */}
        <div className="absolute top-5 left-5">
          <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border ${article.categoryColor} backdrop-blur-sm bg-white/80`}>
            <IconComp size={10} /> {article.category}
          </span>
        </div>

        {/* Featured badge */}
        <div className="absolute top-5 right-5">
          <span className="text-[9px] font-bold font-accent uppercase tracking-widest bg-gold-warm text-white px-3 py-1.5 rounded-full shadow-sm">
            Featured
          </span>
        </div>

        {/* Bottom overlay content */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex items-center gap-3 mb-3">
            <img src={article.authorImg} alt={article.author} className="w-8 h-8 rounded-full object-cover border-2 border-white/40" />
            <span className="text-white/80 text-xs font-accent">{article.author}</span>
            <span className="text-white/30">·</span>
            <span className="text-white/60 text-xs font-accent flex items-center gap-1"><Clock size={10} /> {article.readTime}</span>
          </div>
          <h3 className="font-display font-bold text-2xl md:text-3xl text-white leading-snug group-hover:text-cream-base transition-colors">
            {article.title}
          </h3>
        </div>
      </Link>

      {/* Excerpt below image */}
      <p className="text-forest-text/70 text-base font-body leading-relaxed mb-5 pr-4">{article.excerpt}</p>
      <Link
        to={`/blog/${article.id}`}
        className="inline-flex items-center gap-2 text-dusty-rose font-accent font-bold text-xs tracking-widest uppercase hover:gap-4 transition-all duration-300"
      >
        Read Article <ArrowRight size={14} />
      </Link>
    </motion.div>
  );
}

// ─── Small Article Card ────────────────────────────────────────────────────────
function ArticleCard({ article, index }) {
  const IconComp = article.categoryIcon;
  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.15 + index * 0.12, duration: 0.5 }}
      className="group flex gap-4 items-start"
    >
      {/* Thumbnail */}
      <Link
        to={`/blog/${article.id}`}
        className="relative shrink-0 w-28 h-24 rounded-2xl overflow-hidden shadow-sm border border-cream-base"
      >
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-forest-text/10 group-hover:bg-transparent transition-colors duration-300" />
      </Link>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <span className={`inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border mb-2 ${article.categoryColor}`}>
          <IconComp size={8} /> {article.category}
        </span>
        <Link to={`/blog/${article.id}`}>
          <h3 className="font-display text-sm font-bold text-forest-text leading-snug group-hover:text-dusty-rose transition-colors duration-300 line-clamp-2 mb-1.5">
            {article.title}
          </h3>
        </Link>
        <div className="flex items-center gap-2 text-[10px] text-forest-text/50 font-accent">
          <Clock size={10} />{article.readTime}
          <span>·</span>
          <span>{article.date}</span>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main Section ──────────────────────────────────────────────────────────────
export default function BlogPreview() {
  const [activeTag, setActiveTag] = useState('All');

  const featured = ARTICLES[0];
  const secondary = activeTag === 'All'
    ? ARTICLES.slice(1)
    : ARTICLES.slice(1).filter(a => a.category === activeTag);

  return (
    <section className="py-24 bg-white relative overflow-hidden">

      {/* Ambient blobs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-sage-calm/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-soft-pink/30 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 pb-8 border-b border-cream-base">
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-accent font-bold text-dusty-rose tracking-[0.2em] text-xs uppercase mb-3 flex items-center gap-2"
            >
              <BookOpen size={12} /> Journal
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display font-bold text-5xl md:text-6xl text-forest-text mb-3"
            >
              Women's Health Insights
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-forest-text/70 text-lg leading-relaxed font-body"
            >
              Expert-curated articles from our specialists — deepen your understanding of your body.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
          >
            <Link
              to="/blog"
              className="hidden md:inline-flex items-center gap-2 text-xs font-accent font-bold tracking-widest uppercase text-dusty-rose hover:text-forest-text hover:gap-4 transition-all duration-300 mt-4 md:mt-0"
            >
              Explore All Articles <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>

        {/* Filter Tags */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {FILTER_TAGS.map(tag => (
            <motion.button
              key={tag}
              onClick={() => setActiveTag(tag)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className={`flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-bold font-accent tracking-wide uppercase transition-all duration-300 border
                ${activeTag === tag
                  ? 'bg-forest-text text-white border-forest-text shadow-sm'
                  : 'bg-white border-cream-base text-forest-text/60 hover:border-dusty-rose hover:text-forest-text'
                }`}
            >
              {tag !== 'All' && <Tag size={9} />} {tag}
            </motion.button>
          ))}
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">

          {/* Featured — left 7 cols */}
          <FeaturedCard article={featured} />

          {/* Side articles — right 5 cols */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTag}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-6"
              >
                {secondary.length > 0 ? secondary.map((article, i) => (
                  <ArticleCard key={article.id} article={article} index={i} />
                )) : (
                  <p className="text-forest-text/40 text-sm italic pt-4">No articles in this category yet.</p>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Newsletter mini CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8 bg-cream-base/50 border border-cream-base rounded-2xl p-6 shadow-sm"
            >
              <p className="font-display font-bold text-lg text-forest-text mb-1">Weekly Wellness</p>
              <p className="text-xs text-forest-text/60 mb-4 leading-relaxed font-body">
                One health insight every Sunday morning. No spam — ever.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 text-sm px-4 py-2.5 rounded-full border border-dusty-rose/30 focus:outline-none focus:border-forest-text/40 bg-white placeholder-forest-text/30"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-forest-text text-white px-6 py-2.5 rounded-full text-xs font-accent font-bold tracking-wider whitespace-nowrap hover:bg-dusty-rose transition-colors"
                >
                  Subscribe
                </motion.button>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Topics strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-14 pt-8 border-t border-cream-base flex flex-wrap items-center gap-3"
        >
          <span className="text-xs text-forest-text/40 font-accent uppercase tracking-wider font-bold">Popular topics:</span>
          {['PCOS Management', 'Fertility', 'Menopause', 'Prenatal Care', 'Hormone Balance', 'Pelvic Floor'].map(topic => (
            <Link
              key={topic}
              to="/blog"
              className="text-xs text-forest-text/60 border border-cream-base rounded-full px-3 py-1.5 font-accent hover:border-dusty-rose hover:text-forest-text transition-colors"
            >
              {topic}
            </Link>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
