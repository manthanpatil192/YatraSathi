import React, { useState, useEffect } from 'react';
import { Briefcase, Check, Plus, Trash2, Edit2, Save, Umbrella, Mountain, Castle, Leaf } from 'lucide-react';

const destinations = [
  { id: 'beach', name: 'Beach', icon: <Umbrella className="w-5 h-5" />, color: 'bg-cyan-100 text-cyan-700 border-cyan-200' },
  { id: 'mountain', name: 'Mountain', icon: <Mountain className="w-5 h-5" />, color: 'bg-slate-100 text-slate-700 border-slate-200' },
  { id: 'heritage', name: 'Heritage', icon: <Castle className="w-5 h-5" />, color: 'bg-amber-100 text-amber-700 border-amber-200' },
  { id: 'nature', name: 'Nature', icon: <Leaf className="w-5 h-5" />, color: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
];

const initialCategories = {
  Essentials: [{ id: 1, text: 'Water Bottle', packed: false }, { id: 2, text: 'Snacks', packed: false }],
  Clothing: [{ id: 3, text: 'T-Shirts', packed: false }, { id: 4, text: 'Comfortable Shoes', packed: false }],
  Toiletries: [{ id: 5, text: 'Toothbrush', packed: false }, { id: 6, text: 'Sunscreen', packed: false }],
  Electronics: [{ id: 7, text: 'Phone Charger', packed: false }, { id: 8, text: 'Power Bank', packed: false }],
  Documents: [{ id: 9, text: 'ID Card', packed: false }, { id: 10, text: 'Tickets', packed: false }],
};

const PackingPage = () => {
  const [activeDest, setActiveDest] = useState('beach');
  const [categories, setCategories] = useState(initialCategories);
  const [newItemText, setNewItemText] = useState('');
  const [activeCategory, setActiveCategory] = useState(null);

  const toggleItem = (catName, id) => {
    setCategories(prev => ({
      ...prev,
      [catName]: prev[catName].map(item => item.id === id ? { ...item, packed: !item.packed } : item)
    }));
  };

  const deleteItem = (catName, id) => {
    setCategories(prev => ({
      ...prev,
      [catName]: prev[catName].filter(item => item.id !== id)
    }));
  };

  const addItem = (catName) => {
    if (!newItemText.trim()) return;
    const newItem = { id: Date.now(), text: newItemText, packed: false };
    setCategories(prev => ({
      ...prev,
      [catName]: [...prev[catName], newItem]
    }));
    setNewItemText('');
    setActiveCategory(null);
  };

  let totalItems = 0;
  let packedItems = 0;
  Object.values(categories).forEach(items => {
    totalItems += items.length;
    packedItems += items.filter(i => i.packed).length;
  });

  const progress = totalItems === 0 ? 0 : Math.round((packedItems / totalItems) * 100);

  return (
    <div className="min-h-screen bg-[#FFF8F0] font-sans pb-24">
      {/* Hero Section */}
      <header className="bg-white border-b border-slate-200 pt-24 pb-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#FFEFDB] to-[#E8A87C] opacity-40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2B9EB3] to-[#1A7A8A] text-white shadow-xl mb-6 transform -rotate-6">
            <Briefcase className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-800 mb-6 tracking-tight">
            Smart Packing Assistant
          </h1>
          <p className="text-slate-500 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
            Select your destination vibe and let's get your bags sorted. Check off items as you pack them!
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            {destinations.map(dest => (
              <button
                key={dest.id}
                onClick={() => setActiveDest(dest.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all duration-300 border-2 ${
                  activeDest === dest.id 
                    ? `${dest.color} shadow-lg transform -translate-y-1` 
                    : 'bg-white text-slate-500 border-slate-100 hover:bg-slate-50'
                }`}
              >
                {dest.icon}
                {dest.name}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-12">
        {/* Progress Bar */}
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-slate-200/50 border border-slate-100 mb-12">
          <div className="flex justify-between items-end mb-4">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-800">Packing Progress</h2>
              <p className="text-slate-500 font-medium text-sm mt-1">You're almost there!</p>
            </div>
            <div className="text-right">
              <span className="text-3xl font-black text-[#2B9EB3]">{progress}%</span>
              <p className="text-slate-400 font-bold text-xs uppercase tracking-wider">{packedItems} / {totalItems} Items</p>
            </div>
          </div>
          <div className="w-full bg-slate-100 h-4 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[#2B9EB3] to-[#3CBEB5] rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Categories */}
        <div className="space-y-8">
          {Object.entries(categories).map(([catName, items]) => (
            <div key={catName} className="bg-white rounded-3xl p-6 md:p-8 shadow-lg shadow-slate-200/40 border border-slate-100 transition-all hover:shadow-xl">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-extrabold text-slate-800">{catName}</h3>
                <span className="bg-slate-100 text-slate-600 font-bold text-xs px-3 py-1 rounded-full">
                  {items.filter(i => i.packed).length}/{items.length}
                </span>
              </div>
              
              <div className="space-y-3 mb-6">
                {items.map(item => (
                  <div key={item.id} className="group flex items-center justify-between p-3 md:p-4 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                    <label className="flex items-center gap-4 cursor-pointer flex-1">
                      <div className={`w-6 h-6 rounded-md flex items-center justify-center transition-colors ${item.packed ? 'bg-[#3CBEB5] text-white' : 'bg-slate-200 text-transparent hover:bg-slate-300'}`}>
                        <Check className="w-4 h-4" />
                      </div>
                      <input 
                        type="checkbox" 
                        className="hidden" 
                        checked={item.packed} 
                        onChange={() => toggleItem(catName, item.id)} 
                      />
                      <span className={`font-semibold text-lg transition-all duration-300 ${item.packed ? 'text-slate-400 line-through' : 'text-slate-700'}`}>
                        {item.text}
                      </span>
                    </label>
                    <button 
                      onClick={() => deleteItem(catName, item.id)}
                      className="p-2 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-xl opacity-0 group-hover:opacity-100 transition-all focus:opacity-100"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Add Item */}
              {activeCategory === catName ? (
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    value={newItemText}
                    onChange={(e) => setNewItemText(e.target.value)}
                    placeholder="Enter item name..."
                    className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#2B9EB3] focus:border-transparent transition-all"
                    onKeyDown={(e) => e.key === 'Enter' && addItem(catName)}
                    autoFocus
                  />
                  <button
                    onClick={() => addItem(catName)}
                    className="bg-[#2B9EB3] text-white px-5 py-3 rounded-xl font-bold hover:bg-[#1A7A8A] transition-colors shadow-md"
                  >
                    Add
                  </button>
                  <button
                    onClick={() => { setActiveCategory(null); setNewItemText(''); }}
                    className="bg-slate-100 text-slate-600 px-5 py-3 rounded-xl font-bold hover:bg-slate-200 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button 
                  onClick={() => setActiveCategory(catName)}
                  className="flex items-center gap-2 text-[#2B9EB3] font-bold hover:text-[#1A7A8A] transition-colors py-2 px-4 rounded-xl hover:bg-cyan-50"
                >
                  <Plus className="w-5 h-5" />
                  Add New Item
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Save CTA */}
        <div className="mt-12 flex justify-center">
          <button className="flex items-center gap-3 bg-gradient-to-r from-[#E76F51] to-[#F4A261] text-white px-10 py-5 rounded-2xl font-black text-lg shadow-[0_10px_30px_rgba(231,111,81,0.3)] hover:shadow-[0_15px_40px_rgba(231,111,81,0.5)] transform hover:-translate-y-1 active:scale-[0.98] transition-all duration-300">
            <Save className="w-6 h-6" />
            Save My Checklist
          </button>
        </div>
      </main>
    </div>
  );
};

export default PackingPage;
