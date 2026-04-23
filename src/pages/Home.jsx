import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, BookOpen, Clock, Activity, CheckCircle2, Award, Zap, Heart } from 'lucide-react';
import HeroCanvas from '../components/3d/HeroCanvas';

import FeaturedDoctorsSection from '../components/sections/FeaturedDoctorsSection';
import FeaturedProducts from '../components/sections/FeaturedProducts';
import Testimonials from '../components/sections/Testimonials';
import BlogPreview from '../components/sections/BlogPreview';

const Home = () => {
  const topics = [
    { name: 'History Taking and Examinations', count: '14 Topics', path: '/history-and-examination', color: 'bg-sage-calm', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&auto=format&fit=crop' },
    { name: 'Labour and Puerperium', count: '33 Topics', path: '/labour-and-puerperium', color: 'bg-soft-pink', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&auto=format&fit=crop' },
    { name: 'Gynaecological Disorders', count: '50 Topics', path: '/gynaecology', color: 'bg-dusty-rose', image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=600&auto=format&fit=crop' },
    { name: 'Sexual Health', count: '31 Topics', path: '/sexual-health', color: 'bg-cream-base', image: 'https://images.unsplash.com/photo-1631217818242-27ae17ff5858?q=80&w=600&auto=format&fit=crop' },
    { name: 'Operations & Procedures', count: '18 Topics', path: '/operations-and-procedures', color: 'bg-sage-calm', image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=600&auto=format&fit=crop' }
  ];

  const proFeatures = [
    { title: 'Comprehensive Articles', desc: 'Access 150 expert-written topics in obstetrics and gynaecology, all concise and clinically relevant.', icon: <BookOpen className="text-dusty-rose" /> },
    { title: 'Question Bank', desc: 'Test your knowledge with a wide range of high-quality multiple-choice questions.', icon: <Activity className="text-sage-calm" /> },
    { title: 'Distraction-Free Learning', desc: 'Stay focused with an advert-free experience across all devices.', icon: <Heart className="text-soft-pink" /> },
    { title: 'Cross-Platform Access', desc: 'Seamlessly switch between desktop, tablet, and mobile — your progress is always in sync.', icon: <Zap className="text-gold-warm" /> },
    { title: 'Progress Tracking', desc: 'Monitor your performance automatically and identify areas for improvement.', icon: <CheckCircle2 className="text-forest-text" /> },
    { title: 'Custom Quiz Builder', desc: 'Generate quizzes tailored to your individual learning needs.', icon: <Award className="text-dusty-rose" /> }
  ];

  return (
    <div className="bg-white min-h-screen pt-20">
      
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden bg-cream-base">
        <div className="absolute inset-0 opacity-40 mix-blend-multiply">
          <HeroCanvas />
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-forest-text leading-tight mb-6">
                Learn Obstetrics and Gynaecology <span className="text-dusty-rose italic">Online</span>
              </h1>
              <p className="text-lg text-forest-text/70 font-body mb-8 leading-relaxed max-w-xl">
                Master obstetrics and gynaecology with FemCare. Access clear, concise articles, clinical guides, and illustrations designed for medical professionals, or connect with our specialists directly.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Link to="#" className="bg-forest-text text-white px-8 py-4 rounded-full font-accent font-bold hover:bg-forest-text/90 transition-all shadow-xl shadow-forest-text/20 whitespace-nowrap">
                  Get Started Today
                </Link>
                <span className="text-sm font-accent font-medium text-forest-text/60 flex items-center">
                  <Star size={16} className="text-gold-warm mr-2 fill-current" />
                  7 Day Money Back Guarantee
                </span>
              </div>
            </motion.div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-cream-base">
              <h3 className="font-accent font-bold text-forest-text mb-2 flex items-center"><Award size={18} className="mr-2 text-gold-warm" /> The best revision tool for exams</h3>
              <p className="text-sm text-forest-text/70 italic">"The question bank is perfect for exam prep -focused, high-yield, and easy to practise on my phone. The performance tracking helps me see exactly where to improve"</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-cream-base md:ml-8">
              <h3 className="font-accent font-bold text-forest-text mb-2 flex items-center"><Activity size={18} className="mr-2 text-sage-calm" /> Invaluable on the job</h3>
              <p className="text-sm text-forest-text/70 italic">"As a junior trainee, I use FemCare daily for quick refreshers in clinic and theatre. With Pro, the ad-free app and question bank make it an essential resource."</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-cream-base">
              <h3 className="font-accent font-bold text-forest-text mb-2 flex items-center"><CheckCircle2 size={18} className="mr-2 text-dusty-rose" /> Concise, clear, and easy to use</h3>
              <p className="text-sm text-forest-text/70 italic">"FemCare is my go-to for understanding key topics - concise, clear, and easy to use. Having it on the app means I can learn anywhere, anytime"</p>
            </div>
          </div>
        </div>
      </section>

      {/* 1. Consult Expert Specialists */}
      <FeaturedDoctorsSection />

      {/* Explore Topics */}
      <section className="py-24 px-6 bg-cream-base">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12 border-b border-dusty-rose/20 pb-6">
            <h2 className="font-display text-4xl font-bold text-forest-text">Explore Topics</h2>
            <Link to="/physiology" className="hidden sm:flex items-center text-sm font-accent font-bold text-dusty-rose hover:text-forest-text transition-colors">
              View all <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic, index) => (
              <Link key={index} to={topic.path} className={`group block relative p-8 rounded-3xl border border-cream-base overflow-hidden transition-all duration-500 h-64 flex flex-col justify-end`}>
                <div className="absolute inset-0 z-0">
                  <img src={topic.image} alt={topic.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-60" />
                  <div className={`absolute inset-0 ${topic.color} opacity-40 group-hover:opacity-20 transition-opacity duration-500`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-text/60 to-transparent" />
                </div>
                <div className="relative z-10">
                  <h3 className="font-display text-2xl font-bold text-white mb-2 group-hover:text-dusty-rose transition-colors">{topic.name}</h3>
                  <p className="text-sm font-accent text-white/80 flex items-center">
                    <BookOpen size={14} className="mr-2" /> {topic.count}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Recommended Products */}
      <FeaturedProducts />

      {/* Pro Features Section */}
      <section className="py-24 px-6 bg-forest-text text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-dusty-rose font-accent font-bold tracking-widest uppercase text-sm mb-4 block">FemCare Pro</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Learn smarter. Revise faster. Excel in practice.</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {proFeatures.map((feature, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-white/60 font-body text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="#" className="inline-block bg-dusty-rose text-white px-10 py-4 rounded-full font-accent font-bold hover:bg-white hover:text-forest-text transition-all shadow-xl shadow-dusty-rose/20">
              See Prices
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Healing Stories */}
      <Testimonials />

      {/* 4. Women's Health Insights */}
      <BlogPreview />
      
    </div>
  );
};

export default Home;
