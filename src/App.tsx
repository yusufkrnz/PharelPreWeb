import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Hero from './sections/Hero/Hero'
import SutAnalysis from './sections/SutAnalysis/SutAnalysis'
import Modules from './sections/Modules/Modules'
import Pricing from './sections/Pricing/Pricing'
import Workflow from './sections/Workflow/Workflow'
import Footer from './components/Footer/Footer'
import ComingSoon from './pages/ComingSoon/ComingSoon'

function MainContent() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SutAnalysis />
        <Modules />
        <Workflow />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        {/* Catch-all route to handle "wherever they click" if we decide to redirect everything */}
        <Route path="*" element={<ComingSoon />} />
      </Routes>
    </Router>
  )
}

export default App
