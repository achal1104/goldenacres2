import { useEffect, useRef } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Legal from './pages/Legal';
import { LEGAL } from './data';
import { AboutPage, OwnershipPage, GoldPage, ReferralPage, HowPage, ContactPage } from './pages/Pages';

function ScrollManager() {
  const { pathname, hash } = useLocation();
  const prev = useRef(pathname);
  useEffect(() => {
    const changed = prev.current !== pathname;
    prev.current = pathname;
    if (hash) {
      const t = setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView(), changed ? 450 : 20);
      return () => clearTimeout(t);
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, hash]);
  return null;
}

function Page({ children, title }) {
  useEffect(() => { if (title) document.title = `${title} | GOLDENACRES`; else document.title = 'GOLDENACRES | Land Ownership with Gold Bonus Programme'; }, [title]);
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}>
      {children}
    </motion.div>
  );
}

export default function App() {
  const location = useLocation();
  return (
    <>
      <ScrollManager />
      <Navbar />
      <main id="main" tabIndex={-1}>
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Page><Home /></Page>} />
            <Route path="/privacy-policy" element={<Page title={LEGAL.privacy.title}><Legal kind="privacy" /></Page>} />
            <Route path="/terms-and-conditions" element={<Page title={LEGAL.terms.title}><Legal kind="terms" /></Page>} />
            <Route path="/disclaimer" element={<Page title={LEGAL.disclaimer.title}><Legal kind="disclaimer" /></Page>} />
            <Route path="/about" element={<Page title="About Us"><AboutPage /></Page>} />
            <Route path="/land-ownership" element={<Page title="Land Ownership"><OwnershipPage /></Page>} />
            <Route path="/gold-benefits" element={<Page title="Gold Benefits"><GoldPage /></Page>} />
            <Route path="/referral-programme" element={<Page title="Referral Programme"><ReferralPage /></Page>} />
            <Route path="/how-it-works" element={<Page title="How It Works"><HowPage /></Page>} />
            <Route path="/contact" element={<Page title="Contact Us"><ContactPage /></Page>} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}
