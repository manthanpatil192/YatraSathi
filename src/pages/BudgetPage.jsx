import React, { useState, useMemo } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip as ChartTooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';
import { Doughnut, Bar } from 'react-chartjs-2';
import { FiDollarSign, FiUsers, FiPieChart, FiTrendingUp, FiCheckCircle, FiSave, FiAlertCircle, FiZap, FiCheck } from 'react-icons/fi';
import { apiService } from '../services/api';

ChartJS.register(ArcElement, ChartTooltip, Legend, CategoryScale, LinearScale, BarElement, Title);

const CATEGORIES = [
  { id: 'transport', label: 'Intercity Transport', color: '#2B9EB3', icon: '✈️' },
  { id: 'accommodation', label: 'Hotel & Stays', color: '#3CBEB5', icon: '🏨' },
  { id: 'food', label: 'Food & Dining', color: '#F4A261', icon: '🍽️' },
  { id: 'activities', label: 'Tours & Activities', color: '#E76F51', icon: '🏄‍♂️' },
  { id: 'misc', label: 'Shopping & Misc', color: '#94A3B8', icon: '🛍️' }
];

export default function BudgetPage() {
  const [budgetLimit, setBudgetLimit] = useState(40000);
  const [travelersCount, setTravelersCount] = useState(2);
  const [tripDays, setTripDays] = useState(5);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const [expenses, setExpenses] = useState({
    transport: 10000,
    accommodation: 14000,
    food: 8000,
    activities: 5000,
    misc: 3000
  });

  const totalSpent = useMemo(() => {
    return Object.values(expenses).reduce((acc, curr) => acc + (Number(curr) || 0), 0);
  }, [expenses]);

  const perPersonCost = useMemo(() => {
    return Math.round(totalSpent / (travelersCount || 1));
  }, [totalSpent, travelersCount]);

  const perDayCost = useMemo(() => {
    return Math.round(totalSpent / (tripDays || 1));
  }, [totalSpent, tripDays]);

  const healthScore = useMemo(() => {
    if (totalSpent === 0) return 100;
    const ratio = totalSpent / budgetLimit;
    if (ratio <= 0.8) return 96;
    if (ratio <= 1.0) return 85;
    if (ratio <= 1.2) return 60;
    return 35;
  }, [totalSpent, budgetLimit]);

  const doughnutData = {
    labels: CATEGORIES.map(c => c.label),
    datasets: [
      {
        data: CATEGORIES.map(c => expenses[c.id] || 0),
        backgroundColor: CATEGORIES.map(c => c.color),
        borderWidth: 0,
        hoverOffset: 6
      }
    ]
  };

  const barData = {
    labels: Array.from({ length: tripDays }, (_, i) => `Day ${i + 1}`),
    datasets: [
      {
        label: 'Est. Daily Expense (₹)',
        data: Array.from({ length: tripDays }, () => perDayCost),
        backgroundColor: '#3CBEB5',
        borderRadius: 8
      }
    ]
  };

  const handleSaveBudget = async () => {
    await apiService.saveBudget({
      total: totalSpent,
      budgetLimit,
      travelersCount,
      expenses,
      createdAt: new Date().toISOString()
    });
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen pt-40 sm:pt-44 md:pt-48 pb-32 text-white relative z-10 animate-fade-in">
      
      {/* Full Viewport Screen Background Photo */}
      <img 
        src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1600&q=80" 
        alt="Full Screen Lake Background" 
        className="fixed inset-0 w-full h-full object-cover filter brightness-[0.22] pointer-events-none z-0" 
      />

      {/* Full Viewport Screen Width Container */}
      <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
        
        {/* Header Card (Spacious Top Clearance to prevent text cut-off) */}
        <div className="bg-slate-900/90 backdrop-blur-2xl rounded-3xl p-6 sm:p-10 border border-slate-700/80 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mt-4 sm:mt-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-400/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold uppercase tracking-wider">
              <span>🏆 AI FINANCIAL ENGINE</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white leading-normal">
              Trip Budget & Group Cost Planner
            </h1>
            <p className="text-slate-200 text-xs sm:text-sm font-medium max-w-2xl leading-relaxed">
              Calculate running trip expenses, split costs for group travelers, and optimize savings with AI tariff benchmarks.
            </p>
          </div>

          <button
            onClick={handleSaveBudget}
            className="btn-bounce px-6 py-3.5 rounded-2xl bg-gradient-to-r from-coral-500 to-sunset-500 text-white font-heading font-extrabold text-xs shadow-lg flex items-center gap-2 shrink-0"
          >
            {savedSuccess ? <FiCheck /> : <FiSave />}
            <span>{savedSuccess ? 'Saved to DB!' : 'Save Budget Plan'}</span>
          </button>
        </div>

        {/* Real-Time Stats Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-slate-900/90 backdrop-blur-xl p-6 rounded-3xl border border-slate-700/80 shadow-xl space-y-2">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Total Est. Budget</span>
            <div className="text-3xl font-heading font-black text-amber-300">
              ₹{totalSpent.toLocaleString('en-IN')}
            </div>
            <p className="text-xs text-slate-400 font-medium">Target Limit: ₹{budgetLimit.toLocaleString('en-IN')}</p>
          </div>

          <div className="bg-slate-900/90 backdrop-blur-xl p-6 rounded-3xl border border-slate-700/80 shadow-xl space-y-2">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Per Person Cost ({travelersCount} Travelers)</span>
            <div className="text-3xl font-heading font-black text-teal-300">
              ₹{perPersonCost.toLocaleString('en-IN')}
            </div>
            <p className="text-xs text-slate-400 font-medium">Split evenly among group</p>
          </div>

          <div className="bg-slate-900/90 backdrop-blur-xl p-6 rounded-3xl border border-slate-700/80 shadow-xl space-y-2">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Daily Expense Rate ({tripDays} Days)</span>
            <div className="text-3xl font-heading font-black text-sky-300">
              ₹{perDayCost.toLocaleString('en-IN')}
            </div>
            <p className="text-xs text-slate-400 font-medium">Estimated daily burn rate</p>
          </div>

          <div className="bg-slate-900/90 backdrop-blur-xl p-6 rounded-3xl border border-slate-700/80 shadow-xl space-y-2">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Budget Health Score</span>
            <div className="flex items-center gap-2">
              <span className="text-3xl font-heading font-black text-emerald-400">{healthScore}/100</span>
              <span className="text-xs font-bold text-emerald-300 bg-emerald-950 px-2 py-0.5 rounded-md border border-emerald-800">
                {healthScore >= 85 ? 'Optimal 🟢' : 'Warning ⚠️'}
              </span>
            </div>
            <p className="text-xs text-slate-400 font-medium">AI Financial Status</p>
          </div>

        </div>

        {/* Sliders & Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <div className="lg:col-span-7 space-y-6">
            
            <div className="bg-slate-900/90 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-slate-700/80 shadow-xl space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <h3 className="font-heading font-extrabold text-lg text-white flex items-center gap-2">
                  <span>⚙️</span> Customize Category Expenses
                </h3>

                <div className="flex items-center gap-3 text-xs font-bold">
                  <label className="text-slate-400">Travelers:</label>
                  <input 
                    type="number"
                    min="1"
                    max="20"
                    value={travelersCount}
                    onChange={(e) => setTravelersCount(Number(e.target.value))}
                    className="w-16 bg-slate-950 border border-slate-700 rounded-xl px-2 py-1 text-center text-amber-300 font-black"
                  />
                </div>
              </div>

              <div className="space-y-5">
                {CATEGORIES.map((cat) => {
                  const val = expenses[cat.id] || 0;
                  const pct = totalSpent > 0 ? Math.round((val / totalSpent) * 100) : 0;
                  return (
                    <div key={cat.id} className="space-y-2">
                      <div className="flex justify-between items-center text-xs font-bold">
                        <span className="text-slate-200 flex items-center gap-1.5">
                          <span>{cat.icon}</span> {cat.label}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-amber-300 font-black">₹{val.toLocaleString('en-IN')}</span>
                          <span className="text-[10px] text-slate-400 font-mono">({pct}%)</span>
                        </div>
                      </div>

                      <input
                        type="range"
                        min="0"
                        max="30000"
                        step="500"
                        value={val}
                        onChange={(e) => setExpenses({ ...expenses, [cat.id]: Number(e.target.value) })}
                        className="w-full accent-teal-400 cursor-pointer bg-slate-950 h-2 rounded-lg"
                      />
                    </div>
                  );
                })}
              </div>

            </div>

            <div className="bg-slate-900/90 backdrop-blur-xl p-6 rounded-3xl border border-slate-700/80 shadow-xl space-y-4">
              <h3 className="font-heading font-extrabold text-base text-amber-300 flex items-center gap-2">
                <FiZap /> AI Tariff Saving Hacks for Indian Travel
              </h3>

              <div className="space-y-3 text-xs font-medium text-slate-300">
                <div className="p-3 bg-slate-950 rounded-2xl border border-slate-800">
                  💡 **Intercity Transit**: Booking IRCTC Vande Bharat or AC 3-Tier sleeper trains saves up to 55% compared to flights.
                </div>
                <div className="p-3 bg-slate-950 rounded-2xl border border-slate-800">
                  🏨 **Stay Benchmark**: Eco homestays and heritage hostels offer authentic meals & save ₹2,000/night vs luxury hotels.
                </div>
              </div>
            </div>

          </div>

          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-slate-900/90 backdrop-blur-xl p-6 rounded-3xl border border-slate-700/80 shadow-xl space-y-4">
              <h3 className="font-heading font-extrabold text-base text-white flex items-center gap-2">
                <FiPieChart className="text-teal-400" /> Expense Breakdown
              </h3>
              <div className="h-64 flex items-center justify-center">
                <Doughnut data={doughnutData} options={{ cutout: '70%', plugins: { legend: { position: 'bottom', labels: { color: '#e2e8f0', font: { family: 'Inter', size: 11 } } } } }} />
              </div>
            </div>

            <div className="bg-slate-900/90 backdrop-blur-xl p-6 rounded-3xl border border-slate-700/80 shadow-xl space-y-4">
              <h3 className="font-heading font-extrabold text-base text-white flex items-center gap-2">
                <FiTrendingUp className="text-sky-400" /> Daily Forecast Trend
              </h3>
              <div className="h-48">
                <Bar data={barData} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { x: { ticks: { color: '#94a3b8' } }, y: { ticks: { color: '#94a3b8' } } } }} />
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
