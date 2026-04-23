import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, ArrowLeft, CheckCircle2, AlertCircle, ClipboardCheck } from 'lucide-react';

const questions = [
  {
    id: 1,
    question: "What brings you to FemCare today?",
    options: [
      { label: "Routine Wellness Checkup", value: "routine" },
      { label: "Specific Health Symptom", value: "symptom" },
      { label: "Pregnancy & Maternity Support", value: "maternity" },
      { label: "Fertility & Conception Guidance", value: "fertility" }
    ]
  },
  {
    id: 2,
    question: "Are you experiencing any of the following symptoms?",
    type: "multi",
    options: [
      { label: "Irregular Cycles", value: "irregular" },
      { label: "Pelvic Pain or Discomfort", value: "pain" },
      { label: "Unusual Hormonal Changes", value: "hormones" },
      { label: "None, just checking in", value: "none" }
    ]
  },
  {
    id: 3,
    question: "How would you describe your current wellness priority?",
    options: [
      { label: "Preventive Care & Screening", value: "prevention" },
      { label: "Active Treatment Plan", value: "treatment" },
      { label: "Educational Resources", value: "education" },
      { label: "Specialist Consultation", value: "specialist" }
    ]
  }
];

const HealthAssessment = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isFinished, setIsFinished] = useState(false);

  const handleOptionSelect = (value) => {
    setAnswers({ ...answers, [questions[currentStep].id]: value });
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers({});
    setIsFinished(false);
  };

  return (
    <div className="pt-32 pb-20 bg-cream-base min-h-screen px-6 flex items-center justify-center">
      <div className="max-w-3xl w-full">
        {!isFinished ? (
          <div className="bg-white rounded-[48px] p-8 md:p-16 shadow-2xl shadow-forest-text/5 border border-cream-base relative overflow-hidden">
            {/* Progress Bar */}
            <div className="absolute top-0 left-0 w-full h-2 bg-sage-calm/20">
              <motion.div 
                className="h-full bg-dusty-rose"
                initial={{ width: 0 }}
                animate={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
              ></motion.div>
            </div>

            <header className="mb-12 flex justify-between items-center">
              <div>
                <span className="text-xs font-accent font-bold uppercase tracking-widest text-forest-text/40">
                  Question {currentStep + 1} of {questions.length}
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-forest-text mt-2">
                  Health Assessment
                </h2>
              </div>
              <div className="w-12 h-12 bg-sage-calm rounded-full flex items-center justify-center text-forest-text">
                <ClipboardCheck size={24} />
              </div>
            </header>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="font-display text-2xl font-bold text-forest-text mb-10 leading-tight">
                  {questions[currentStep].question}
                </h3>

                <div className="grid grid-cols-1 gap-4">
                  {questions[currentStep].options.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleOptionSelect(option.value)}
                      className="group flex items-center justify-between p-6 rounded-3xl border border-cream-base hover:border-dusty-rose hover:bg-soft-pink transition-all duration-300 text-left"
                    >
                      <span className="font-accent font-semibold text-forest-text group-hover:text-forest-text">
                        {option.label}
                      </span>
                      <div className="w-8 h-8 rounded-full border-2 border-cream-base group-hover:border-dusty-rose flex items-center justify-center group-hover:bg-white transition-all">
                        <ArrowRight size={16} className="text-transparent group-hover:text-dusty-rose transition-colors" />
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-12 flex items-center justify-between">
              <button 
                onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                disabled={currentStep === 0}
                className="flex items-center space-x-2 text-sm font-accent font-bold text-forest-text/40 hover:text-forest-text disabled:opacity-0 transition-all"
              >
                <ArrowLeft size={16} />
                <span>Back</span>
              </button>
              <div className="flex space-x-2">
                {questions.map((_, i) => (
                  <div key={i} className={`w-2 h-2 rounded-full transition-all ${i === currentStep ? 'w-6 bg-dusty-rose' : 'bg-sage-calm'}`}></div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-[48px] p-8 md:p-16 shadow-2xl border border-cream-base text-center"
          >
            <div className="w-24 h-24 bg-sage-calm rounded-full flex items-center justify-center mx-auto mb-10 text-forest-text">
              <CheckCircle2 size={48} />
            </div>
            <h2 className="font-display text-4xl font-bold text-forest-text mb-6">Your Wellness Summary</h2>
            <p className="text-lg text-forest-text/60 font-body mb-12 max-w-md mx-auto">
              Based on your responses, we've identified a **Personalized Care Path** for you.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-sage-calm/20 p-8 rounded-[32px] text-left">
                <div className="flex items-center space-x-3 mb-4 text-forest-text">
                  <Sparkles size={20} className="text-dusty-rose" />
                  <h4 className="font-accent font-bold uppercase tracking-widest text-xs">Recommended Profile</h4>
                </div>
                <h3 className="font-display text-2xl font-bold text-forest-text mb-2">Routine Maintenance</h3>
                <p className="text-sm text-forest-text/60">Focus on preventive screenings and annual checkups.</p>
              </div>
              <div className="bg-soft-pink p-8 rounded-[32px] text-left">
                <div className="flex items-center space-x-3 mb-4 text-forest-text">
                  <AlertCircle size={20} className="text-dusty-rose" />
                  <h4 className="font-accent font-bold uppercase tracking-widest text-xs">Next Steps</h4>
                </div>
                <h3 className="font-display text-2xl font-bold text-forest-text mb-2">Book a Consultation</h3>
                <p className="text-sm text-forest-text/60">Speak with a specialist about your hormonal health.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-forest-text text-white px-10 py-4 rounded-full font-accent font-bold hover:bg-forest-text/90 transition-all w-full sm:w-auto">
                Schedule Consultation
              </button>
              <button 
                onClick={resetQuiz}
                className="text-forest-text/60 font-accent font-bold hover:text-forest-text transition-all"
              >
                Retake Assessment
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default HealthAssessment;
