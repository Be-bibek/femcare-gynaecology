import { Heart, Globe, MessageCircle, Users, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-forest-text text-cream-base pt-20 pb-10 overflow-hidden relative">
      {/* Decorative background shape */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sage-calm/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-dusty-rose rounded-full flex items-center justify-center text-white">
                <Heart size={16} fill="currentColor" />
              </div>
              <span className="font-display text-2xl font-bold tracking-tight">
                FemCare
              </span>
            </Link>
            <p className="text-cream-base/60 font-body text-sm leading-relaxed">
              Empowering women through every stage of their life with expert care, empathy, and advanced medical excellence.
            </p>
            <div className="flex space-x-4">
              {[Globe, MessageCircle, Users].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-dusty-rose hover:border-dusty-rose transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4 text-cream-base/60 text-sm font-accent">
              {['About Us', 'Specialists', 'Services', 'Health Hub', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to="#" className="hover:text-dusty-rose transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold mb-6 text-white">Services</h4>
            <ul className="space-y-4 text-cream-base/60 text-sm font-accent">
              {['Gynaecology', 'Obstetrics', 'Prenatal Care', 'Postpartum', 'Screening'].map((item) => (
                <li key={item}>
                  <Link to="#" className="hover:text-dusty-rose transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-display text-lg font-bold text-white">Monthly Wellness</h4>
            <p className="text-cream-base/60 text-sm font-body">
              Join our community for monthly health tips and expert advice.
            </p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Your email address"
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-dusty-rose transition-colors"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-dusty-rose text-white px-4 rounded-lg flex items-center justify-center hover:bg-dusty-rose/90 transition-colors">
                <Mail size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-cream-base/30 font-accent tracking-widest uppercase">
          <p>© 2026 FemCare. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
