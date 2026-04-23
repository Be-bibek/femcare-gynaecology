import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Pages
import Home from './pages/Home';
import Physiology from './pages/Physiology';
import Pregnancy from './pages/Pregnancy';
import LabourAndPuerperium from './pages/LabourAndPuerperium';
import Gynaecology from './pages/Gynaecology';
import SexualHealth from './pages/SexualHealth';
import HistoryAndExamination from './pages/HistoryAndExamination';
import OperationsAndProcedures from './pages/OperationsAndProcedures';
import QuestionBank from './pages/QuestionBank';

// ScrollToTop component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen selection:bg-dusty-rose/30">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/physiology" element={<Physiology />} />
            <Route path="/pregnancy" element={<Pregnancy />} />
            <Route path="/labour-and-puerperium" element={<LabourAndPuerperium />} />
            <Route path="/gynaecology" element={<Gynaecology />} />
            <Route path="/sexual-health" element={<SexualHealth />} />
            <Route path="/history-and-examination" element={<HistoryAndExamination />} />
            <Route path="/operations-and-procedures" element={<OperationsAndProcedures />} />
            <Route path="/question-bank" element={<QuestionBank />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
