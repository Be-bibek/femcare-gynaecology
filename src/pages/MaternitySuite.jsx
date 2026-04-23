import { motion } from 'framer-motion';
import { Baby, Sparkles, Heart, Footprints, ShieldCheck, Sun } from 'lucide-react';

const TimelineStep = ({ step, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className="relative flex flex-col md:flex-row items-center mb-24 last:mb-0">
      {/* Timeline Line (Desktop) */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-sage-calm -translate-x-1/2 z-0"></div>

      {/* Content */}
      <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-20 md:text-right' : 'md:pl-20 md:order-last'}`}>
        <motion.div
          initial={{ opacity: 0, x: isEven ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white p-8 md:p-12 rounded-[40px] shadow-sm border border-cream-base relative group hover:shadow-xl transition-all duration-500"
        >
          <div className={`w-14 h-14 rounded-2xl ${step.color} flex items-center justify-center mb-6 text-white ${isEven ? 'md:ml-auto' : ''}`}>
            {step.icon}
          </div>
          <span className="text-xs font-accent font-bold uppercase tracking-widest text-dusty-rose mb-2 block">
            {step.phase}
          </span>
          <h3 className="font-display text-3xl font-bold text-forest-text mb-4 leading-tight">
            {step.title}
          </h3>
          <p className="text-forest-text/60 font-body leading-relaxed mb-6">
            {step.description}
          </p>
          <ul className={`space-y-3 ${isEven ? 'md:flex md:flex-col md:items-end' : ''}`}>
            {step.highlights.map((h, i) => (
              <li key={i} className="flex items-center space-x-2 text-sm font-accent text-forest-text/80">
                {!isEven && <div className="w-1.5 h-1.5 rounded-full bg-sage-calm"></div>}
                <span>{h}</span>
                {isEven && <div className="w-1.5 h-1.5 rounded-full bg-sage-calm"></div>}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Timeline Node */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 hidden md:flex w-12 h-12 rounded-full bg-white border-4 border-sage-calm items-center justify-center text-sage-calm shadow-lg group-hover:scale-110 transition-transform">
        <div className="w-2 h-2 rounded-full bg-sage-calm"></div>
      </div>
    </div>
  );
};

const MaternitySuite = () => {
  const journey = [
    {
      phase: 'Month 0-1',
      title: 'Pre-conception & Planning',
      description: 'Preparing your body and mind for the beautiful journey ahead. Focus on nutrition, screenings, and emotional readiness.',
      highlights: ['Genetic Screenings', 'Folic Acid Support', 'Lifestyle Optimization'],
      icon: <Sparkles size={24} />,
      color: 'bg-sage-calm'
    },
    {
      phase: 'Trimester 1',
      title: 'The Foundation',
      description: 'The first 12 weeks where the magic begins. Navigating early symptoms and establishing your prenatal care plan.',
      highlights: ['Initial Ultrasound', 'NIPT Screening', 'Morning Sickness Management'],
      icon: <Heart size={24} />,
      color: 'bg-soft-pink'
    },
    {
      phase: 'Trimester 2',
      title: 'The Golden Period',
      description: 'Energy returns as your baby grows. A time for anatomical scans and feeling those first precious movements.',
      highlights: ['Anomaly Scan', 'Glucose Testing', 'Maternity Wellness'],
      icon: <Sun size={24} />,
      color: 'bg-dusty-rose'
    },
    {
      phase: 'Trimester 3',
      title: 'The Final Stretch',
      description: 'Preparing for the big day. Focusing on birth plans, comfort, and final growth checks for your little one.',
      highlights: ['Birth Plan Consultation', 'GBS Screening', 'NST Monitoring'],
      icon: <Footprints size={24} />,
      color: 'bg-forest-text'
    },
    {
      phase: 'The Birth',
      title: 'Empowered Labour',
      description: 'A supportive, calm, and medically excellent environment for your delivery, tailored to your preferences.',
      highlights: ['24/7 Specialist Cover', 'Pain Management Options', 'Immediate Skin-to-Skin'],
      icon: <Baby size={24} />,
      color: 'bg-gold-warm'
    },
    {
      phase: 'Postpartum',
      title: 'The Fourth Trimester',
      description: 'Healing and bonding. Dedicated support for physical recovery, lactation, and emotional well-veing.',
      highlights: ['Lactation Support', 'Pelvic Floor Recovery', 'Mental Health Checkups'],
      icon: <ShieldCheck size={24} />,
      color: 'bg-sage-calm'
    }
  ];

  return (
    <div className="bg-cream-base min-h-screen">
      {/* Hero Header */}
      <section className="pt-40 pb-20 px-6 text-center bg-white">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 text-dusty-rose font-accent font-bold uppercase tracking-widest text-xs mb-6"
          >
            <Baby size={16} />
            <span>The Maternity Journey</span>
          </motion.div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-forest-text mb-8">
            Nurturing <span className="italic text-sage-calm font-normal">New Life</span>
          </h1>
          <p className="text-lg text-forest-text/60 font-body leading-relaxed">
            From the very first thought of conception to the precious moments of postpartum, our Maternity Suite provides a vertical slice of care that is both clinically rigorous and deeply personal.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
        <div className="max-w-6xl mx-auto">
          {journey.map((step, index) => (
            <TimelineStep key={index} step={step} index={index} />
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6 bg-forest-text text-cream-base overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sage-calm/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">Ready to begin your journey?</h2>
          <p className="text-lg text-cream-base/60 font-body mb-12">
            Schedule a pre-conception consultation with our obstetricians to start your journey on the right foot.
          </p>
          <button className="bg-dusty-rose text-white px-10 py-4 rounded-full font-accent font-bold hover:bg-white hover:text-forest-text transition-all duration-300 shadow-xl shadow-dusty-rose/20">
            Meet Our Obstetricians
          </button>
        </div>
      </section>
    </div>
  );
};

export default MaternitySuite;
