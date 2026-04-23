import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2, Activity, Award } from 'lucide-react';

const QuestionBank = () => {
  return (
    <div className="bg-cream-base min-h-screen pt-32 pb-24 px-6 flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[40px] p-10 md:p-16 shadow-xl border border-cream-base"
        >
          <div className="w-20 h-20 bg-sage-calm/20 rounded-full flex items-center justify-center mx-auto mb-8 text-sage-calm">
            <Activity size={40} />
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-forest-text mb-6">
            The Ultimate Question Bank
          </h1>
          <p className="text-lg text-forest-text/70 font-body leading-relaxed mb-12 max-w-2xl mx-auto">
            Test your knowledge with our high-yield, exam-focused multiple-choice questions. Track your performance, identify weak areas, and build custom quizzes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-left">
            <div className="bg-cream-base p-6 rounded-2xl">
              <CheckCircle2 size={24} className="text-dusty-rose mb-4" />
              <h3 className="font-accent font-bold text-forest-text mb-2">High-Yield Questions</h3>
              <p className="text-sm text-forest-text/60">Written and reviewed by experts to match real exam formats.</p>
            </div>
            <div className="bg-cream-base p-6 rounded-2xl">
              <Activity size={24} className="text-sage-calm mb-4" />
              <h3 className="font-accent font-bold text-forest-text mb-2">Performance Tracking</h3>
              <p className="text-sm text-forest-text/60">See exactly where you need to improve with detailed analytics.</p>
            </div>
            <div className="bg-cream-base p-6 rounded-2xl">
              <Award size={24} className="text-gold-warm mb-4" />
              <h3 className="font-accent font-bold text-forest-text mb-2">Custom Quizzes</h3>
              <p className="text-sm text-forest-text/60">Generate quizzes tailored to your specific learning needs.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="#" className="bg-forest-text text-white px-10 py-4 rounded-full font-accent font-bold hover:bg-forest-text/90 transition-all shadow-lg shadow-forest-text/20 w-full sm:w-auto">
              Start Practising Free
            </Link>
            <Link to="#" className="bg-white border-2 border-forest-text text-forest-text px-10 py-4 rounded-full font-accent font-bold hover:bg-forest-text hover:text-white transition-all w-full sm:w-auto">
              Unlock Pro Features
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default QuestionBank;
