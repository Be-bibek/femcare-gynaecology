import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, BookOpen } from 'lucide-react';

const LabourAndPuerperium = () => {
  const categories = [
    {
      title: 'Delivery',
      articles: ['Induction of Labour', 'Operative Vaginal Delivery', 'Prelabour Rupture of Membranes', 'Caesarean Section', 'VBAC']
    },
    {
      title: 'Obstetric Emergencies',
      articles: ['Shoulder Dystocia', 'Cord Prolapse', 'Eclampsia', 'Uterine Rupture', 'Amniotic Fluid Embolism']
    },
    {
      title: 'Puerperium',
      articles: ['Primary PPH', 'Secondary PPH', 'Perinatal Mental Health', 'Postpartum Contraception', 'Breastfeeding Problems']
    }
  ];

  return (
    <div className="bg-cream-base min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="flex items-center text-sm font-accent text-forest-text/60 mb-4">
            <Link to="/" className="hover:text-dusty-rose transition-colors">Home</Link>
            <ChevronRight size={14} className="mx-2" />
            <span className="text-forest-text font-bold">Labour & Puerperium</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-forest-text mb-6">Labour & Puerperium</h1>
              <p className="text-lg text-forest-text/70 font-body leading-relaxed">
                Detailed insights into delivery methods, obstetric emergencies, and postpartum care. Essential clinical protocols for a safe and healthy birth journey.
              </p>
            </div>
            <div className="h-64 rounded-[40px] overflow-hidden shadow-2xl border-4 border-white">
              <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop" alt="Labour & Puerperium" className="w-full h-full object-cover" />
            </div>
          </div>
        </motion.div>

        <div className="space-y-12">
          {categories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-cream-base"
            >
              <h2 className="font-display text-3xl font-bold text-forest-text mb-8 pb-4 border-b border-cream-base">
                {category.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.articles.map((article, i) => (
                  <Link 
                    key={i} 
                    to="#" 
                    className="flex items-center p-4 rounded-xl hover:bg-sage-calm/30 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-forest-text/5 flex items-center justify-center text-forest-text mr-4 group-hover:bg-forest-text group-hover:text-white transition-colors">
                      <BookOpen size={18} />
                    </div>
                    <span className="font-accent font-medium text-forest-text group-hover:text-dusty-rose transition-colors">
                      {article}
                    </span>
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LabourAndPuerperium;
