import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './hooks/useAuth';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import OfflineIndicator from './components/OfflineIndicator';
import YatraAIChatbot from './components/chat/YatraAIChatbot';
import AuroraBackground from './components/background/AuroraBackground';

// Lazy load pages
const LoginPage = lazy(() => import('./pages/LoginPage'));
const HomePage = lazy(() => import('./pages/HomePage'));
const ExplorePage = lazy(() => import('./pages/ExplorePage'));
const DestinationDetailPage = lazy(() => import('./pages/DestinationDetailPage'));
const ItineraryPage = lazy(() => import('./pages/ItineraryPage'));
const BudgetPage = lazy(() => import('./pages/BudgetPage'));
const RouteOptimizerPage = lazy(() => import('./pages/RouteOptimizerPage'));
const SafetyPage = lazy(() => import('./pages/SafetyPage'));
const PackingPage = lazy(() => import('./pages/PackingPage'));
const EcoDiscoveryPage = lazy(() => import('./pages/EcoDiscoveryPage'));

const LoadingFallback = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-slate-950 text-white">
    <div className="w-16 h-16 border-4 border-ocean-400 border-t-amber-400 rounded-full animate-spin"></div>
    <p className="mt-4 text-amber-300 font-heading text-xl animate-pulse">Loading adventure...</p>
  </div>
);

const AppContent = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/';

  return (
    <div className={`flex flex-col min-h-screen relative overflow-x-hidden ${!isLoginPage ? 'bg-slate-950 text-slate-100' : ''}`}>
      
      {/* 3D Northern Lights (Aurora Borealis) Canvas Background for all app pages */}
      {!isLoginPage && <AuroraBackground />}

      {!isLoginPage && <Navbar />}

      <main className="flex-grow relative z-10">
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/destination/:id" element={<DestinationDetailPage />} />
            <Route path="/itinerary" element={<ItineraryPage />} />
            <Route path="/budget" element={<BudgetPage />} />
            <Route path="/route-optimizer" element={<RouteOptimizerPage />} />
            <Route path="/safety" element={<SafetyPage />} />
            <Route path="/packing" element={<PackingPage />} />
            <Route path="/eco-discovery" element={<EcoDiscoveryPage />} />
          </Routes>
        </Suspense>
      </main>

      {!isLoginPage && <Footer />}
      <OfflineIndicator />
      <YatraAIChatbot />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
