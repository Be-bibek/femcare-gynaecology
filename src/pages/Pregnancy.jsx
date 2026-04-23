import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, BookOpen } from 'lucide-react';

const Pregnancy = () => {
  const categories = [
    {
      title: 'Antenatal Care',
      articles: ['Antenatal Care', 'Small for Gestational Age', 'Large for Gestational Age', 'RBC Isoimmunisation', 'Prematurity', 'Prolonged Pregnancy', 'Multiple Pregnancy']
    },
    {
      title: 'Early Pregnancy',
      articles: ['Miscarriage', 'Recurrent Miscarriage', 'Ectopic Pregnancy', 'Hyperemesis Gravidarum', 'Gestational Trophoblastic Disease']
    },
    {
      title: 'Fetal Presentations & Liquor',
      articles: ['Breech Presentation', 'Abnormal lie, Malpresentation and Malposition', 'Oligohydramnios', 'Polyhydramnios']
    },
    {
      title: 'Placental Disorders',
      articles: ['Placenta Praevia', 'Placental Abruption']
    },
    {
      title: 'Hypertensive Disorders',
      articles: ['Pre-Eclampsia', 'Eclampsia']
    },
    {
      title: 'Maternal Medicine',
      articles: ['Gestational Diabetes', 'Headaches', 'Obstetric Cholestasis', 'Thyroid Disease in Pregnancy', 'Epilepsy in Pregnancy']
    },
    {
      title: 'Haematological Conditions',
      articles: ['Anaemia', 'Antiphospholipid Syndrome', 'Venous Thromboembolism']
    },
    {
      title: 'Infections',
      articles: ['Cytomegalovirus', 'Group B Strep', 'Parvovirus B19', 'Rubella', 'Varicella Zoster']
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
            <span className="text-forest-text font-bold">Pregnancy</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-forest-text mb-6">Pregnancy</h1>
          <p className="text-lg text-forest-text/70 font-body leading-relaxed max-w-3xl">
            Comprehensive guides on antenatal care, early pregnancy complications, and maternal medicine.
          </p>
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
                    className="flex items-center p-4 rounded-xl hover:bg-soft-pink/50 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-soft-pink/50 flex items-center justify-center text-dusty-rose mr-4 group-hover:bg-dusty-rose group-hover:text-white transition-colors">
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

export default Pregnancy;
