import React, { useState, useMemo } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip as ChartTooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';
import { Doughnut, Bar } from 'react-chartjs-2';

ChartJS.register(ArcElement, ChartTooltip, Legend, CategoryScale, LinearScale, BarElement, Title);

const CATEGORIES = [
  { id: 'transport', label: 'Transport', color: '#2B9EB3', icon: '✈️' },
  { id: 'accommodation', label: 'Accommodation', color: '#3CBEB5', icon: '🏨' },
  { id: 'food', label: 'Food & Dining', color: '#F4A261', icon: '🍽️' },
  { id: 'activities', label: 'Activities', color: '#E76F51', icon: '🏄‍♂️' },
  { id: 'misc', label: 'Miscellaneous', color: '#94A3B8', icon: '🛍️' },
];

export default function BudgetPage() {
  const [budgetLimit, setBudgetLimit] = useState(50000);
  const [expenses, setExpenses] = useState({
    transport: 12000,
    accommodation: 15000,
    food: 8000,
    activities: 5000,
    misc: 2000,
  });

  const tripDays = 5;

  const totalSpent = useMemo(() => {
    return Object.values(expenses).reduce((acc, curr) => acc + (Number(curr) || 0), 0);
  }, [expenses]);

  const perDayAverage = useMemo(() => {
    return Math.round(totalSpent / tripDays);
  }, [totalSpent, tripDays]);

  const isOverBudget = totalSpent > budgetLimit;

  const doughnutData = {
    labels: CATEGORIES.map(c => c.label),
    datasets: [
      {
        data: CATEGORIES.map(c => expenses[c.id] || 0),
        backgroundColor: CATEGORIES.map(c => c.color),
        borderWidth: 0,
        hoverOffset: 4,
      },
    ],
  };

  const doughnutOptions = {
    cutout: '75%',
    plugins: {
      legend: { position: 'bottom', labels: { padding: 20, usePointStyle: true, font: { family: 'Inter' } } },
    }
  };

  const barData = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'],
    datasets: [
      {
        label: 'Est. Daily Spend',
        data: [8000, 7500, 9000, 8500, 9000],
        backgroundColor: '#3CBEB5',
        borderRadius: 6,
      }
    ]
  };

  const barOptions = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: {
      y: { beginAtZero: true, grid: { borderDash: [4, 4], color: '#f1f5f9' } },
      x: { grid: { display: false } }
    }
  };

  const handleExpenseChange = (id, value) => {
    setExpenses(prev => ({ ...prev, [id]: Number(value) }));
  };

  return (
    <div className="min-h-screen pt-20 pb-32 animate-fade-in">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#1A7A8A] to-[#2B9EB3] py-12 px-6 shadow-md relative overflow-hidden">
        {/* Ambient Blobs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#3CBEB5] rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#2A9D8F] rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">Trip Budget Planner</h1>
            <p className="text-ocean-100 text-lg">Manage your tropical getaway expenses seamlessly.</p>
          </div>
          <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-2 flex items-center">
            <span className="px-4 py-2 text-white font-semibold">Currency:</span>
            <select className="bg-white text-ocean-900 rounded-lg px-4 py-2 font-bold outline-none cursor-pointer">
              <option value="INR">₹ INR</option>
              <option value="USD">$ USD</option>
              <option value="EUR">€ EUR</option>
            </select>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Running Total & Inputs */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* Running Total Card */}
          <div className="glass-card bg-white rounded-3xl p-8 shadow-xl border border-slate-100 relative overflow-hidden">
            <div className={`absolute top-0 left-0 w-full h-2 ${isOverBudget ? 'bg-coral-500' : 'bg-seafoam-500'}`}></div>
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-xl font-heading font-bold text-slate-700">Total Expenses</h2>
              <div className={`px-3 py-1 rounded-full text-sm font-bold shadow-sm ${isOverBudget ? 'bg-red-50 text-red-600 border border-red-100' : 'bg-green-50 text-green-600 border border-green-100'}`}>
                {isOverBudget ? 'Over Budget' : 'On Track'}
              </div>
            </div>
            
            <div className="mb-6">
              <span className="text-4xl md:text-5xl font-extrabold text-ocean-700 tracking-tight">₹ {totalSpent.toLocaleString()}</span>
              <p className="text-slate-500 mt-2 font-medium">of ₹ {budgetLimit.toLocaleString()} budget</p>
            </div>

            <div className="flex items-center justify-between bg-sand-50 rounded-xl p-4 border border-sand-100">
              <span className="text-slate-600 font-medium">Per Day Average</span>
              <span className="text-xl font-bold text-slate-800">₹ {perDayAverage.toLocaleString()}</span>
            </div>
          </div>

          {/* Budget Adjusters */}
          <div className="glass-card bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-heading font-bold text-slate-800">Categories</h3>
              <button className="text-ocean-600 text-sm font-semibold hover:text-ocean-800 transition-colors">Reset All</button>
            </div>

            <div className="space-y-6">
              {CATEGORIES.map(cat => (
                <div key={cat.id} className="group">
                  <div className="flex items-center justify-between mb-2">
                    <label className="flex items-center gap-2 font-semibold text-slate-700">
                      <span>{cat.icon}</span> {cat.label}
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-medium">₹</span>
                      <input 
                        type="number"
                        value={expenses[cat.id]}
                        onChange={(e) => handleExpenseChange(cat.id, e.target.value)}
                        className="w-28 bg-slate-50 border border-slate-200 rounded-lg py-1.5 pl-7 pr-3 text-right font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-ocean-400 transition-all"
                      />
                    </div>
                  </div>
                  <input 
                    type="range"
                    min="0"
                    max="30000"
                    step="500"
                    value={expenses[cat.id]}
                    onChange={(e) => handleExpenseChange(cat.id, e.target.value)}
                    className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-ocean-500"
                    style={{ accentColor: cat.color }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Charts & Tips */}
        <div className="lg:col-span-7 space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Doughnut Chart */}
            <div className="glass-card bg-white rounded-3xl p-6 shadow-xl border border-slate-100 flex flex-col items-center justify-center">
              <h3 className="text-lg font-heading font-bold text-slate-800 w-full text-left mb-4">Expense Breakdown</h3>
              <div className="w-full max-w-[250px] aspect-square relative">
                <Doughnut data={doughnutData} options={doughnutOptions} />
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none pb-8">
                  <span className="text-sm text-slate-500 font-medium">Total</span>
                  <span className="text-xl font-bold text-slate-800">₹ {(totalSpent/1000).toFixed(1)}k</span>
                </div>
              </div>
            </div>

            {/* Bar Chart */}
            <div className="glass-card bg-white rounded-3xl p-6 shadow-xl border border-slate-100 flex flex-col justify-between">
              <h3 className="text-lg font-heading font-bold text-slate-800 mb-4">Daily Forecast</h3>
              <div className="flex-1 w-full flex items-center">
                <Bar data={barData} options={barOptions} />
              </div>
            </div>
          </div>

          {/* Budget Tips & Actions */}
          <div className="glass-card bg-gradient-to-br from-ocean-50 to-sand-50 rounded-3xl p-8 shadow-md border border-ocean-100 flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center text-3xl shrink-0">
              💡
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-bold text-ocean-900 mb-2">Smart Saving Tip</h4>
              <p className="text-slate-600 leading-relaxed text-sm">
                You're spending a significant portion on Transport. Consider booking multi-stop rail passes or group shuttles instead of private cabs to save up to 20% on transit costs!
              </p>
            </div>
            <div className="shrink-0 w-full md:w-auto">
              <button className="btn-bounce bg-coral-500 hover:bg-coral-600 text-white w-full md:w-auto px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all">
                Save Budget
              </button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
