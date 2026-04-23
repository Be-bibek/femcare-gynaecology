import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star, Leaf, ArrowRight, Check, Sparkles } from 'lucide-react';

// ─── Rich Mock Products ────────────────────────────────────────────────────────
const PRODUCTS = [
  {
    _id: 'p1',
    name: 'Prenatal Multivitamins',
    subtitle: 'Comprehensive Support · 60 Capsules',
    category: 'Pregnancy',
    categoryColor: 'bg-soft-pink text-dusty-rose border-dusty-rose/20',
    price: 34,
    originalPrice: 42,
    rating: 4.9,
    reviews: 1284,
    focus: 'Pre & Post Natal',
    badge: 'Bestseller',
    badgeColor: 'bg-dusty-rose text-white',
    description: 'Essential nutrients including folic acid, iron, and DHA for healthy fetal development and maternal wellbeing.',
    benefits: ['Supports fetal growth', 'Boosts maternal energy', 'Gentle on stomach'],
    image: 'https://images.unsplash.com/photo-1550572017-edb3fb4f30e6?q=80&w=600&auto=format&fit=crop',
    colour: 'from-dusty-rose/80 to-soft-pink/40',
  },
  {
    _id: 'p2',
    name: 'Hormone Balance Tea',
    subtitle: 'Herbal Blend · 100g',
    category: 'Wellness',
    categoryColor: 'bg-sage-calm text-forest-text border-sage-calm/50',
    price: 28,
    originalPrice: null,
    rating: 4.8,
    reviews: 876,
    focus: 'Daily Use',
    badge: "Expert's Pick",
    badgeColor: 'bg-forest-text text-white',
    description: 'A soothing blend of spearmint, raspberry leaf, and chasteberry to support natural hormonal harmony.',
    benefits: ['Supports natural cycle', 'Reduces bloating', 'Calms anxiety'],
    image: 'https://images.unsplash.com/photo-1596541223130-5d564415f0d4?q=80&w=600&auto=format&fit=crop',
    colour: 'from-sage-calm/80 to-cream-base/40',
  },
  {
    _id: 'p3',
    name: 'Soothing Heat Patches',
    subtitle: 'Menstrual Relief · 10 Patches',
    category: 'Menstrual',
    categoryColor: 'bg-gold-warm/20 text-gold-warm border-gold-warm/30',
    price: 22,
    originalPrice: 28,
    rating: 4.9,
    reviews: 2140,
    focus: 'Pain Relief',
    badge: 'Essential',
    badgeColor: 'bg-gold-warm text-white',
    description: 'Natural, discreet heat therapy patches that provide up to 8 hours of targeted relief for menstrual cramps.',
    benefits: ['Fast acting', 'Discreet design', 'Up to 8hrs relief'],
    image: 'https://images.unsplash.com/photo-1583947581924-860bda6a5a83?q=80&w=600&auto=format&fit=crop',
    altImage: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop',
    colour: 'from-gold-warm/80 to-gold-warm/40',
  }
];

const FILTERS = ['All', 'Pregnancy', 'Wellness', 'Menstrual'];

// ─── Product Card ──────────────────────────────────────────────────────────────
function ProductCard({ product, index }) {
  const [added, setAdded] = useState(false);
  const [imgSrc, setImgSrc] = useState(product.altImage || product.image);
  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null;

  const handleAdd = (e) => {
    e.preventDefault();
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
      className="group relative bg-white rounded-3xl overflow-hidden border border-cream-base shadow-sm hover:shadow-lg transition-all duration-500 flex flex-col"
    >
      {/* Image area */}
      <Link to={`/products/${product._id}`} className="block relative h-56 overflow-hidden">
        {/* Gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${product.colour} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10`} />

        <img
          src={imgSrc}
          alt={product.name}
          onError={() => setImgSrc(product.image)}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Top badges row */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-20">
          <span className={`text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${product.badgeColor}`}>
            {product.badge}
          </span>
          {discount && (
            <span className="text-[9px] font-bold bg-white text-gold-warm border border-gold-warm/30 px-2.5 py-1 rounded-full shadow-sm">
              -{discount}% OFF
            </span>
          )}
        </div>

        {/* Category pill — bottom */}
        <div className="absolute bottom-3 left-3 z-20">
          <span className={`text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${product.categoryColor} backdrop-blur-sm bg-white/80`}>
            {product.category}
          </span>
        </div>
      </Link>

      {/* Card body */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Rating row */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={11}
                className={i < Math.floor(product.rating) ? 'text-gold-warm fill-gold-warm' : 'text-forest-text/20'}
              />
            ))}
          </div>
          <span className="text-[10px] text-forest-text/50 font-accent font-medium">{product.rating} · {product.reviews.toLocaleString()} reviews</span>
        </div>

        {/* Name + subtitle */}
        <Link to={`/products/${product._id}`}>
          <h3 className="font-display font-bold text-xl text-forest-text group-hover:text-dusty-rose transition-colors duration-300 leading-snug mb-0.5">
            {product.name}
          </h3>
        </Link>
        <p className="text-[11px] text-forest-text/50 font-accent mb-3 tracking-wide">{product.subtitle}</p>

        {/* Description */}
        <p className="text-forest-text/70 font-body text-xs leading-relaxed line-clamp-2 mb-4">{product.description}</p>

        {/* Benefits pills */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {product.benefits.map(b => (
            <span key={b} className="text-[9px] text-forest-text/70 font-accent bg-sage-calm/30 border border-sage-calm/50 px-2 py-0.5 rounded-full flex items-center gap-1">
              <Leaf size={8} className="text-sage-calm" /> {b}
            </span>
          ))}
        </div>

        {/* Focus */}
        <p className="text-[10px] text-forest-text/40 font-accent mb-4">Focus: {product.focus}</p>

        {/* Price + CTA */}
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-cream-base">
          <div>
            <p className="font-display font-bold text-2xl text-forest-text leading-none">₹{product.price * 90}</p>
            {product.originalPrice && (
              <p className="text-xs text-forest-text/40 line-through mt-0.5">₹{product.originalPrice * 90}</p>
            )}
          </div>

          <motion.button
            onClick={handleAdd}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold font-accent tracking-widest uppercase transition-all duration-300 shadow-sm
              ${added
                ? 'bg-sage-calm text-forest-text border-sage-calm'
                : 'bg-forest-text text-white hover:bg-dusty-rose hover:text-white'
              }`}
          >
            <AnimatePresence mode="wait">
              {added ? (
                <motion.span key="check" initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-1.5">
                  <Check size={14} /> Added
                </motion.span>
              ) : (
                <motion.span key="cart" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-1.5">
                  <ShoppingBag size={14} /> Add
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main Section ──────────────────────────────────────────────────────────────
export default function FeaturedProducts() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeFilter);

  return (
    <section className="py-24 relative overflow-hidden bg-cream-base">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-8 flex flex-col items-start justify-between gap-4 border-b border-dusty-rose/20 pb-8 sm:flex-row sm:items-end">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-accent font-bold text-dusty-rose tracking-[0.2em] text-xs uppercase mb-3 flex items-center gap-2"
            >
              <Sparkles size={14} /> Wellness Essentials
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display font-bold text-4xl text-forest-text sm:text-5xl"
            >
              Recommended Products
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              to="/products"
              className="hidden sm:flex items-center gap-2 text-xs font-accent font-bold tracking-widest uppercase text-dusty-rose hover:text-forest-text transition-all duration-300 mt-4 sm:mt-0"
            >
              Full Catalog <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mb-10"
        >
          <div className="flex flex-wrap gap-2 mb-2">
            {FILTERS.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`rounded-full border px-5 py-2.5 text-xs font-bold font-accent uppercase tracking-wider transition-all duration-300
                  ${activeFilter === f
                    ? 'border-forest-text bg-forest-text text-white shadow-md'
                    : 'border-dusty-rose/30 bg-white text-forest-text/60 hover:border-dusty-rose hover:text-forest-text'
                  }`}
              >
                {f}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Product Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {filtered.map((product, i) => (
              <ProductCard key={product._id} product={product} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Trust / sourcing strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-4 border-t border-cream-base pt-10 sm:grid-cols-2 md:grid-cols-4"
        >
          {[
            { icon: '🌿', label: 'Clinically Tested', sub: 'Safe & effective formulas' },
            { icon: '🧪', label: 'OB-GYN Approved', sub: 'Trusted by professionals' },
            { icon: '🚚', label: 'Free Shipping', sub: 'On orders above ₹4500' },
            { icon: '🔄', label: '30-Day Returns', sub: 'Satisfaction guaranteed' },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-4 rounded-2xl border border-dusty-rose/20 bg-white p-5 shadow-sm"
            >
              <span className="text-3xl">{item.icon}</span>
              <div>
                <p className="text-sm font-bold font-accent text-forest-text mb-0.5">{item.label}</p>
                <p className="text-[11px] font-body text-forest-text/60">{item.sub}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
