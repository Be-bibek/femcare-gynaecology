import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Award, ArrowRight, Leaf, MessageCircle, Video, Phone, CheckCircle, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

// ─── Doctor Data ───────────────────────────────────────────────────────────────
const DOCTORS = [
  {
    _id: 'd1',
    name: 'Dr. Sarah Mitchell',
    title: 'MD, FACOG',
    specialization: 'Obstetrics & Maternal-Fetal Medicine',
    expertise: ['High-Risk Pregnancy', 'Prenatal Care', 'Ultrasound'],
    problems: ['Pregnancy', 'Maternal Health'],
    experience: '14 Years',
    rating: 4.9,
    reviews: 1284,
    consultations: '3,200+',
    languages: ['English', 'Spanish'],
    nextSlot: 'Today, 4:00 PM',
    available: true,
    modes: ['video', 'phone', 'chat'],
    badge: 'Top Rated',
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
    accentColor: 'from-dusty-rose/20 to-soft-pink/10',
    tagColor: 'bg-soft-pink text-dusty-rose border-dusty-rose/20',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&h=700&auto=format&fit=crop',
  },
  {
    _id: 'd2',
    name: 'Dr. Emily Chen',
    title: 'MD, FACOG',
    specialization: 'Reproductive Endocrinology',
    expertise: ['PCOS', 'Fertility', 'Hormonal Imbalance', 'IVF Consultation'],
    problems: ['Fertility', 'Hormones'],
    experience: '18 Years',
    rating: 4.8,
    reviews: 976,
    consultations: '4,100+',
    languages: ['English', 'Mandarin'],
    nextSlot: 'Today, 6:30 PM',
    available: true,
    modes: ['video', 'phone'],
    badge: 'Fertility Expert',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    accentColor: 'from-sage-calm/40 to-sage-calm/10',
    tagColor: 'bg-sage-calm/20 text-forest-text border-sage-calm/50',
    image: 'https://images.unsplash.com/photo-1594824436951-7f12bc4175de?q=80&w=600&h=700&auto=format&fit=crop',
  },
  {
    _id: 'd3',
    name: 'Dr. Olivia Martinez',
    title: 'MD, Gynecologic Oncology',
    specialization: 'Preventive Screening & Oncology',
    expertise: ['Pap Smears', 'Colposcopy', 'Preventive Care', 'Cysts'],
    problems: ["Screening", "Oncology"],
    experience: '11 Years',
    rating: 4.9,
    reviews: 1820,
    consultations: '2,800+',
    languages: ['English', 'Spanish'],
    nextSlot: 'Tomorrow, 10:00 AM',
    available: false,
    modes: ['video', 'chat'],
    badge: 'Oncology Specialist',
    badgeColor: 'bg-rose-50 text-rose-700 border-rose-200',
    accentColor: 'from-dusty-rose/40 to-soft-pink/10',
    tagColor: 'bg-soft-pink text-dusty-rose border-dusty-rose/30',
    image: 'https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?q=80&w=600&h=700&auto=format&fit=crop',
  },
  {
    _id: 'd4',
    name: 'Dr. Aisha Khan',
    title: 'MD, Minimally Invasive Surgery',
    specialization: 'Endometriosis & Pelvic Pain',
    expertise: ['Endometriosis', 'Fibroids', 'Pelvic Pain', 'Laparoscopy'],
    problems: ['Chronic Pain', 'Surgery'],
    experience: '16 Years',
    rating: 4.7,
    reviews: 734,
    consultations: '1,900+',
    languages: ['English', 'Arabic', 'Urdu'],
    nextSlot: 'Today, 7:00 PM',
    available: true,
    modes: ['video', 'phone'],
    badge: 'Surgical Specialist',
    badgeColor: 'bg-sky-50 text-sky-700 border-sky-200',
    accentColor: 'from-gold-warm/20 to-gold-warm/5',
    tagColor: 'bg-gold-warm/10 text-gold-warm border-gold-warm/30',
    image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=600&h=700&auto=format&fit=crop',
  },
];

const STATS = [
  { label: 'Certified Specialists', value: '40+', icon: Award },
  { label: 'Consultations Done', value: '50,000+', icon: Users },
  { label: 'Avg. Rating', value: '4.9 ★', icon: Star },
  { label: 'Clinics Worldwide', value: '28', icon: Leaf },
];

const MODE_ICONS = { video: Video, phone: Phone, chat: MessageCircle };
const MODE_LABELS = { video: 'Video', phone: 'Phone', chat: 'Chat' };

// ─── Doctor Card ───────────────────────────────────────────────────────────────
function DoctorCard({ doctor, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative bg-white rounded-3xl overflow-hidden border border-cream-base shadow-sm hover:shadow-lg transition-all duration-500 flex flex-col"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        {/* Gradient accent layer */}
        <div className={`absolute inset-0 bg-gradient-to-br ${doctor.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10`} />

        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />

        {/* Rating badge */}
        <div className="absolute top-4 right-4 z-20 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
          <Star size={12} className="text-gold-warm fill-gold-warm" />
          <span className="text-xs font-bold text-forest-text">{doctor.rating}</span>
          <span className="text-[9px] text-forest-text/40">({doctor.reviews.toLocaleString()})</span>
        </div>

        {/* Specialty badge — top left */}
        <div className="absolute top-4 left-4 z-20">
          <span className={`text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border ${doctor.badgeColor}`}>
            {doctor.badge}
          </span>
        </div>

        {/* Availability pill — bottom */}
        <div className="absolute bottom-4 left-4 z-20">
          <span className={`text-[9px] font-bold uppercase tracking-wider px-2.5 py-1.5 rounded-full flex items-center gap-1.5 ${doctor.available ? 'bg-emerald-500 text-white' : 'bg-gray-500/80 text-white'}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${doctor.available ? 'bg-white animate-pulse' : 'bg-white/50'}`} />
            {doctor.available ? `Next: ${doctor.nextSlot}` : `Next: ${doctor.nextSlot}`}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Name + title */}
        <div className="mb-3">
          <h3 className="font-display font-bold text-lg text-forest-text leading-tight">{doctor.name}</h3>
          <p className="text-[10px] text-forest-text/40 font-accent tracking-wide mt-0.5">{doctor.title}</p>
          <p className="text-sm text-gold-warm font-medium mt-1">{doctor.specialization}</p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-2 mb-4 py-3 border-y border-cream-base">
          <div className="text-center">
            <p className="font-display text-base text-forest-text">{doctor.experience}</p>
            <p className="text-[9px] text-forest-text/40 uppercase tracking-wider">Exp.</p>
          </div>
          <div className="text-center border-x border-cream-base">
            <p className="font-display text-base text-forest-text">{doctor.consultations}</p>
            <p className="text-[9px] text-forest-text/40 uppercase tracking-wider">Consults</p>
          </div>
          <div className="text-center">
            <p className="font-display text-base text-forest-text">{doctor.reviews.toLocaleString()}</p>
            <p className="text-[9px] text-forest-text/40 uppercase tracking-wider">Reviews</p>
          </div>
        </div>

        {/* Expertise chips */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {doctor.expertise.slice(0, 3).map(e => (
            <span key={e} className={`text-[9px] font-bold px-2.5 py-1 rounded-full border ${doctor.tagColor}`}>
              {e}
            </span>
          ))}
          {doctor.expertise.length > 3 && (
            <span className="text-[9px] text-forest-text/40 px-2.5 py-1 rounded-full border border-cream-base">
              +{doctor.expertise.length - 3}
            </span>
          )}
        </div>

        {/* Consultation modes */}
        <div className="flex items-center gap-2 mb-5">
          <span className="text-[9px] text-forest-text/40 uppercase tracking-wider">Via:</span>
          {doctor.modes.map(mode => {
            const Icon = MODE_ICONS[mode];
            return (
              <span key={mode} className="flex items-center gap-1 text-[9px] text-forest-text/60 bg-cream-base border border-cream-base px-2 py-1 rounded-full">
                <Icon size={9} /> {MODE_LABELS[mode]}
              </span>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-auto flex gap-2">
          <Link
            to={`/consultation?doctor=${doctor._id}`}
            className="flex-1 text-center py-2.5 bg-forest-text text-white rounded-full text-xs font-accent font-bold tracking-wider hover:bg-gold-warm transition-colors duration-300 shadow-sm"
          >
            Book Consult
          </Link>
          <Link
            to={`/doctors/${doctor._id}`}
            className="px-4 py-2.5 border border-cream-base text-forest-text/60 rounded-full text-xs font-accent hover:border-forest-text/40 hover:text-forest-text transition-colors duration-300"
          >
            Profile
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main Section ──────────────────────────────────────────────────────────────
export default function FeaturedDoctorsSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sage-calm/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-soft-pink/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 pb-8 border-b border-cream-base">
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-accent font-bold text-dusty-rose tracking-[0.2em] text-xs uppercase mb-3 flex items-center gap-2"
            >
              <Leaf size={12} /> Certified Specialists
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-forest-text mb-4"
            >
              Consult Expert Specialists
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-forest-text/70 text-lg leading-relaxed font-body"
            >
              Personalized, empathic medical care — supporting you at every stage. Speak with a certified specialist in minutes.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
          >
            <Link
              to="/doctors"
              className="hidden md:inline-flex items-center gap-2 text-xs font-accent font-bold tracking-widest uppercase text-dusty-rose hover:text-forest-text transition-all duration-300 mt-4 md:mt-0"
            >
              View All Doctors <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>

        {/* Doctor Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {DOCTORS.map((doctor, index) => (
            <DoctorCard key={doctor._id} doctor={doctor} index={index} />
          ))}
        </div>

        {/* Bottom CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-forest-text rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <p className="font-display text-3xl font-bold text-white mb-2">Not sure which specialist to choose?</p>
            <p className="text-white/70 text-sm font-body flex items-center gap-2">
              <CheckCircle size={14} className="text-gold-warm" />
              Answer 5 quick questions — we'll match you with the right specialist in seconds.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              to="/consultation"
              className="bg-gold-warm text-white px-8 py-3.5 rounded-full font-accent font-bold text-xs tracking-widest uppercase hover:bg-dusty-rose transition-colors text-center"
            >
              Find My Doctor
            </Link>
            <Link
              to="/health-assessment"
              className="bg-transparent text-white/80 border border-white/30 px-8 py-3.5 rounded-full font-accent font-bold text-xs tracking-widest uppercase hover:border-white transition-colors text-center"
            >
              Start Assessment
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
