import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './hooks/useAuth';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import OfflineIndicator from './components/OfflineIndicator';
import YatraAIChatbot from './components/chat/YatraAIChatbot';

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
  <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50">
    <div className="w-16 h-16 border-4 border-ocean-200 border-t-coral-500 rounded-full animate-spin"></div>
    <p className="mt-4 text-ocean-700 font-heading text-xl animate-pulse">Loading adventure...</p>
  </div>
);

const AppContent = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/';

  return (
    <div className={`flex flex-col min-h-screen relative overflow-x-hidden ${!isLoginPage ? 'glass-beachy-bg' : ''}`}>
      
      {/* Decorative Beachy Sea Mountain Ambient Glow Blobs for App Pages */}
      {!isLoginPage && (
        <>
          <div className="fixed top-20 left-0 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl pointer-events-none -translate-x-1/2"></div>
          <div className="fixed bottom-20 right-0 w-[30rem] h-[30rem] bg-teal-200/30 rounded-full blur-3xl pointer-events-none translate-x-1/3"></div>
          <div className="fixed top-1/2 left-1/3 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl pointer-events-none"></div>
        </>
      )}

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
