import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { AboutUs } from './pages/AboutUs';
import { ContactUs } from './pages/ContactUs';
import { ChannelPartnerEngagement } from './pages/solutions/ChannelPartnerEngagement';
import { Automotive } from './pages/solutions/Automotive';
import { BusinessEvents } from './pages/solutions/BusinessEvents';
import { LoyaltyRewards } from './pages/solutions/LoyaltyRewards';
import { IndustrialAutomotive } from './pages/industries/IndustrialAutomotive';
import { Tech } from './pages/industries/Tech';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route
              path="/solutions/channel-partner-engagement"
              element={<ChannelPartnerEngagement />}
            />
            <Route path="/solutions/automotive" element={<Automotive />} />
            <Route path="/solutions/business-events" element={<BusinessEvents />} />
            <Route path="/solutions/loyalty-rewards" element={<LoyaltyRewards />} />
            <Route path="/industries/automotive" element={<IndustrialAutomotive />} />
            <Route path="/industries/tech" element={<Tech />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;