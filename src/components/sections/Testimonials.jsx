import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, Play, Heart } from 'lucide-react';

// ─── Story Data ────────────────────────────────────────────────────────────────
const STORIES = [
  {
    id: 1,
    name: 'Priya Menon',
    age: 32,
    location: 'Bengaluru, India',
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=600&h=600&auto=format&fit=crop',
    focus: 'Endometriosis',
    focusColor: 'text-sky-600 bg-sky-50 border-sky-200',
    condition: 'Chronic Pelvic Pain',
    duration: '4 months',
    treatment: 'Minimally Invasive Care',
    rating: 5,
    headline: '"I finally found relief after 6 years of suffering."',
    story:
      'I had been dealing with severe pelvic pain and fatigue for over 6 years. After just 4 months of personalized guidance from Dr. Sarah, my symptoms completely transformed. I feel energetic and finally at peace in my own body.',
    beforeAfter: { before: 'Daily pain, no energy', after: 'Pain-free, vibrant' },
    tags: ['Pelvic Health', 'Energy', 'Surgical Care'],
  },
  {
    id: 2,
    name: 'Aradhana Shah',
    age: 41,
    location: 'Mumbai, India',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&h=600&auto=format&fit=crop',
    focus: 'Perimenopause',
    focusColor: 'text-dusty-rose bg-soft-pink border-dusty-rose/20',
    condition: 'Hormonal Imbalance',
    duration: '6 weeks',
    treatment: 'HRT + Lifestyle',
    rating: 5,
    headline: '"The right treatment did what years of guessing couldn\'t."',
    story:
      'I was chronically irritable, experiencing hot flashes, and unable to sleep. Dr. Emily prescribed a tailored HRT protocol. Six weeks later, my sleep is deep, and I\'ve rediscovered my calm. This was life-changing.',
    beforeAfter: { before: 'Hot flashes, sleepless nights', after: 'Clear mind, restful sleep' },
    tags: ['Menopause', 'Sleep', 'Hormones'],
  },
  {
    id: 3,
    name: 'Sarah Lindström',
    age: 28,
    location: 'Stockholm, Sweden',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600&h=600&auto=format&fit=crop',
    focus: 'PCOS',
    focusColor: 'text-emerald-600 bg-emerald-50 border-emerald-200',
    condition: 'Irregular Cycles',
    duration: '3 months',
    treatment: 'Medical Management',
    rating: 5,
    headline: '"My cycles regulated in 6 weeks — I feel in control again."',
    story:
      'I had irregular cycles and significant hair fall. Every doctor told me to just lose weight. Dr. Olivia identified the specific PCOS presentation and prescribed targeted care. Within 6 weeks, things started clearing. At 3 months, I felt amazing.',
    beforeAfter: { before: 'Irregular cycles, hair fall', after: 'Regular cycles, healthy hair' },
    tags: ['PCOS', 'Hormones', 'Fertility'],
  },
];

const STATS = [
  { label: 'Lives Transformed', value: '12,000+', icon: '⚕️' },
  { label: 'Avg. Recovery Time', value: '8 Weeks', icon: '⏱️' },
  { label: 'Patient Satisfaction', value: '98.4%', icon: '⭐' },
  { label: 'Countries Served', value: '34', icon: '🌍' },
];

// ─── Star Rating ───────────────────────────────────────────────────────────────
function StarRow({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_, i) => (
        <Star key={i} size={13} className="text-gold-warm fill-gold-warm" />
      ))}
    </div>
  );
}

// ─── Small Story Card ──────────────────────────────────────────────────────────
function StoryCard({ story, isActive, onClick }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`text-left w-full rounded-2xl border-2 overflow-hidden transition-all duration-300
        ${isActive ? 'border-dusty-rose shadow-md' : 'border-cream-base hover:border-dusty-rose/30 bg-white'}`}
    >
      <div className="flex gap-3 p-4">
        <div className="relative shrink-0">
          <img
            src={story.avatar}
            alt={story.name}
            className="w-16 h-16 rounded-full object-cover object-center ring-2 ring-cream-base"
          />
          {isActive && (
            <motion.div
              layoutId="active-dot"
              className="absolute -top-1 -right-1 w-4 h-4 bg-dusty-rose rounded-full border-2 border-white"
            />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-0.5">
            <p className="font-display font-bold text-sm text-forest-text truncate">{story.name}</p>
            <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border shrink-0 ml-2 ${story.focusColor}`}>
              {story.focus}
            </span>
          </div>
          <p className="text-xs text-forest-text/50 mb-1.5">{story.condition}</p>
          <StarRow />
        </div>
      </div>
      {isActive && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          className="overflow-hidden"
        >
          <div className="px-4 pb-4">
            <p className="text-xs text-forest-text/60 leading-relaxed line-clamp-2 font-body">{story.story}</p>
          </div>
        </motion.div>
      )}
    </motion.button>
  );
}

// ─── Main Section ──────────────────────────────────────────────────────────────
export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  useEffect(() => {
    if (!autoplay) return;
    const timer = setInterval(() => {
      setActiveIdx(i => (i + 1) % STORIES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [autoplay]);

  const activeStory = STORIES[activeIdx];

  const prev = () => { setAutoplay(false); setActiveIdx(i => (i - 1 + STORIES.length) % STORIES.length); };
  const next = () => { setAutoplay(false); setActiveIdx(i => (i + 1) % STORIES.length); };

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden bg-white">
      {/* Parallax strip */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-0 left-0 right-0 h-[50%] bg-gradient-to-b from-cream-base/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-cream-base/40 to-transparent" />
      </motion.div>

      {/* Subtle decor */}
      <div className="absolute top-10 right-10 opacity-5 pointer-events-none">
        <Heart size={200} strokeWidth={0.5} className="text-dusty-rose" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-10 lg:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-accent text-dusty-rose tracking-[0.3em] text-[10px] sm:text-xs uppercase mb-3 flex items-center justify-center gap-2 font-bold"
          >
            <Heart size={14} className="fill-dusty-rose" /> Real Results · Real People
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-forest-text mb-4"
          >
            Healing Stories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-forest-text/60 text-base sm:text-lg max-w-xl mx-auto leading-relaxed px-4 font-body"
          >
            Every journey is unique. These are the lives our specialists have quietly transformed — one patient at a time.
          </motion.p>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10 lg:mb-14"
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              className="bg-white rounded-2xl border border-cream-base p-4 sm:p-5 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <span className="text-xl sm:text-2xl block mb-1">{stat.icon}</span>
              <p className="font-display font-bold text-xl sm:text-2xl text-forest-text">{stat.value}</p>
              <p className="text-[10px] sm:text-xs font-accent text-forest-text/50 mt-0.5 uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Story Display */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">

          {/* Left: Story List */}
          <div className="lg:col-span-1 flex flex-col gap-3 order-2 lg:order-1 max-h-[400px] lg:max-h-none overflow-y-auto pr-1 no-scrollbar">
            {STORIES.map((story, i) => (
              <StoryCard
                key={story.id}
                story={story}
                isActive={i === activeIdx}
                onClick={() => { setAutoplay(false); setActiveIdx(i); }}
              />
            ))}
          </div>

          {/* Right: Active Story Detail */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStory.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="bg-cream-base rounded-[2rem] shadow-sm border border-dusty-rose/20 overflow-hidden h-full flex flex-col"
              >
                {/* Image hero */}
                <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden bg-cream-base">
                  <img
                    src={activeStory.avatar}
                    alt={activeStory.name}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-text/90 via-forest-text/30 to-transparent" />

                  {/* Overlaid name */}
                  <div className="absolute bottom-5 left-6 right-6">
                    <span className={`text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border mb-2 inline-block shadow-sm ${activeStory.focusColor}`}>
                      {activeStory.focus} · {activeStory.condition}
                    </span>
                    <p className="font-display font-bold text-2xl sm:text-3xl text-white mb-1">{activeStory.name}</p>
                    <p className="text-white/80 font-accent text-xs sm:text-sm tracking-wide">{activeStory.age} · {activeStory.location}</p>
                  </div>

                  {/* Nav arrows */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <button onClick={prev} className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-all border border-white/30">
                      <ChevronLeft size={18} />
                    </button>
                    <button onClick={next} className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-all border border-white/30">
                      <ChevronRight size={18} />
                    </button>
                  </div>

                  {/* Rating */}
                  <div className="absolute top-5 left-6 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    <StarRow />
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 sm:p-8 lg:p-10 flex-1 flex flex-col bg-white">
                  {/* Big headline */}
                  <div className="relative mb-6">
                    <Quote size={32} className="text-dusty-rose/20 absolute -top-2 -left-2 shrink-0" />
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-forest-text leading-snug pl-2">
                      {activeStory.headline}
                    </h3>
                  </div>

                  <p className="text-forest-text/70 leading-relaxed mb-8 text-base lg:text-lg italic font-body">
                    "{activeStory.story}"
                  </p>

                  <div className="mt-auto">
                    {/* Treatment + Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      <span className="text-[10px] sm:text-xs bg-sage-calm/30 border border-sage-calm/50 text-forest-text px-3.5 py-1.5 rounded-full flex items-center gap-1.5 font-bold font-accent">
                        <Heart size={11} className="text-dusty-rose fill-dusty-rose" /> {activeStory.treatment}
                      </span>
                      <span className="text-[10px] sm:text-xs bg-cream-base border border-cream-base text-forest-text/60 px-3.5 py-1.5 rounded-full font-medium font-accent">
                        {activeStory.duration} program
                      </span>
                      {activeStory.tags.map(tag => (
                        <span key={tag} className="text-[10px] sm:text-xs text-forest-text/50 border border-cream-base px-3.5 py-1.5 rounded-full font-medium font-accent">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Before / After */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-soft-pink/30 border border-dusty-rose/30 rounded-2xl p-4">
                        <p className="text-[9px] font-bold font-accent uppercase tracking-[0.15em] text-dusty-rose mb-1.5">Initial State</p>
                        <p className="text-xs sm:text-sm text-forest-text/80 font-medium">{activeStory.beforeAfter.before}</p>
                      </div>
                      <div className="bg-sage-calm/30 border border-sage-calm/50 rounded-2xl p-4">
                        <p className="text-[9px] font-bold font-accent uppercase tracking-[0.15em] text-forest-text mb-1.5">Outcome</p>
                        <p className="text-xs sm:text-sm text-forest-text/80 font-medium">{activeStory.beforeAfter.after}</p>
                      </div>
                    </div>

                    {/* Progress dots */}
                    <div className="flex items-center justify-between mt-4 border-t border-cream-base pt-4">
                      <div className="flex gap-2.5">
                        {STORIES.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => { setAutoplay(false); setActiveIdx(i); }}
                            className={`rounded-full transition-all duration-500 ${i === activeIdx ? 'w-8 h-1.5 bg-dusty-rose' : 'w-1.5 h-1.5 bg-dusty-rose/30 hover:bg-dusty-rose/60'}`}
                          />
                        ))}
                      </div>
                      {/* Autoplay toggle */}
                      <button
                        onClick={() => setAutoplay(p => !p)}
                        className={`text-[10px] font-bold font-accent uppercase tracking-widest flex items-center gap-2 px-4 py-1.5 rounded-full border transition-all duration-300 ${autoplay ? 'border-dusty-rose/30 text-dusty-rose bg-soft-pink/30' : 'border-cream-base text-forest-text/30'}`}
                      >
                        <Play size={10} className={autoplay ? 'fill-dusty-rose text-dusty-rose' : ''} />
                        {autoplay ? 'Live' : 'Pause'}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 text-center"
        >
          <blockquote className="font-display text-2xl md:text-3xl text-forest-text/70 italic max-w-2xl mx-auto leading-relaxed">
            "The greatest medicine of all is teaching people how not to need it."
          </blockquote>
          <p className="text-forest-text/40 text-sm mt-3 font-accent tracking-wider font-bold uppercase">— Hippocrates</p>
        </motion.div>

      </div>
    </section>
  );
}
