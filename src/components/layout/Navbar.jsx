import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, User, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSubjectsOpen, setIsSubjectsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const subjects = [
    { name: 'Physiology', path: '/physiology' },
    { name: 'Pregnancy', path: '/pregnancy' },
    { name: 'Labour & Puerperium', path: '/labour-and-puerperium' },
    { name: 'Gynaecology', path: '/gynaecology' },
    { name: 'Sexual Health', path: '/sexual-health' },
    { name: 'History & Examination', path: '/history-and-examination' },
    { name: 'Operations & Procedures', path: '/operations-and-procedures' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 bg-dusty-rose rounded-full flex items-center justify-center text-white group-hover:rotate-12 transition-transform duration-300">
            <Heart size={20} fill="currentColor" />
          </div>
          <span className="font-display text-2xl font-bold text-forest-text tracking-tight">
            FemCare
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          <div 
            className="relative"
            onMouseEnter={() => setIsSubjectsOpen(true)}
            onMouseLeave={() => setIsSubjectsOpen(false)}
          >
            <button className="flex items-center space-x-1 font-accent text-sm font-medium text-forest-text/80 hover:text-dusty-rose transition-colors py-2">
              <span>Subjects</span>
              <ChevronDown size={16} />
            </button>

            <AnimatePresence>
              {isSubjectsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-cream-base py-2 overflow-hidden"
                >
                  {subjects.map((subject) => (
                    <Link
                      key={subject.path}
                      to={subject.path}
                      className="block px-6 py-3 font-accent text-sm text-forest-text/80 hover:bg-soft-pink hover:text-dusty-rose transition-colors"
                      onClick={() => setIsSubjectsOpen(false)}
                    >
                      {subject.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            to="/question-bank"
            className={`font-accent text-sm font-medium transition-colors hover:text-dusty-rose ${
              location.pathname === '/question-bank' ? 'text-dusty-rose font-bold' : 'text-forest-text/80'
            }`}
          >
            Question Bank
          </Link>
          <Link
            to="#"
            className="font-accent text-sm font-medium text-forest-text/80 hover:text-dusty-rose transition-colors"
          >
            Pricing
          </Link>

          <div className="flex items-center space-x-4 pl-4 border-l border-cream-base">
            <Link
              to="#"
              className="flex items-center space-x-2 font-accent text-sm font-medium text-forest-text/80 hover:text-dusty-rose transition-colors"
            >
              <User size={16} />
              <span>Log In</span>
            </Link>
            <Link
              to="#"
              className="bg-dusty-rose text-white px-5 py-2 rounded-full font-accent text-sm font-bold hover:bg-forest-text transition-all active:scale-95 shadow-lg shadow-dusty-rose/20"
            >
              Sign Up
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-forest-text"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-white border-t border-cream-base shadow-xl lg:hidden overflow-hidden"
          >
            <div className="p-6 flex flex-col space-y-6">
              <div className="space-y-4">
                <h4 className="font-accent font-bold text-xs uppercase text-forest-text/40 tracking-widest">Subjects</h4>
                {subjects.map((subject) => (
                  <Link
                    key={subject.path}
                    to={subject.path}
                    className="block font-accent text-lg font-medium text-forest-text"
                    onClick={() => setIsOpen(false)}
                  >
                    {subject.name}
                  </Link>
                ))}
              </div>
              
              <div className="pt-4 border-t border-cream-base space-y-4">
                <Link
                  to="/question-bank"
                  className="block font-accent text-lg font-medium text-forest-text"
                  onClick={() => setIsOpen(false)}
                >
                  Question Bank
                </Link>
                <Link
                  to="#"
                  className="block font-accent text-lg font-medium text-forest-text"
                  onClick={() => setIsOpen(false)}
                >
                  Pricing
                </Link>
              </div>

              <div className="pt-4 border-t border-cream-base grid grid-cols-2 gap-4">
                <Link
                  to="#"
                  className="flex items-center justify-center space-x-2 border border-cream-base text-forest-text px-4 py-3 rounded-xl font-accent font-bold"
                  onClick={() => setIsOpen(false)}
                >
                  <span>Log In</span>
                </Link>
                <Link
                  to="#"
                  className="flex items-center justify-center space-x-2 bg-dusty-rose text-white px-4 py-3 rounded-xl font-accent font-bold"
                  onClick={() => setIsOpen(false)}
                >
                  <span>Sign Up</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
