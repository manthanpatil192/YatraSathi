import React, { useState } from 'react';
import { FiCheckSquare, FiPlus, FiTrash2, FiRefreshCw, FiSun, FiFeather, FiShield, FiCompass } from 'react-icons/fi';

const PACKING_TEMPLATES = {
  Beach: [
    { id: 'b1', category: 'Clothing', name: 'Swimwear & Beach Shorts', packed: false },
    { id: 'b2', category: 'Clothing', name: 'Flip-Flops & Sandals', packed: false },
    { id: 'b3', category: 'Toiletries', name: 'Sunscreen SPF 50+ Broad Spectrum', packed: false },
    { id: 'b4', category: 'Essentials', name: 'Waterproof Pouch for Phone & Cash', packed: false },
    { id: 'b5', category: 'Essentials', name: 'UV Protection Sunglasses', packed: false },
    { id: 'b6', category: 'Essentials', name: 'Microfiber Quick-Dry Towel', packed: false },
    { id: 'b7', category: 'Electronics', name: 'Portable Waterproof Bluetooth Speaker', packed: false }
  ],
  Mountain: [
    { id: 'm1', category: 'Clothing', name: 'Thermal Inners & Woolen Socks', packed: false },
    { id: 'm2', category: 'Clothing', name: 'Heavy Fleece Jacket & Windcheater', packed: false },
    { id: 'm3', category: 'Clothing', name: 'Sturdy Waterproof Trekking Boots', packed: false },
    { id: 'm4', category: 'Clothing', name: 'Woolen Beanie & Gloves', packed: false },
    { id: 'm5', category: 'Essentials', name: 'Thermos Insulated Hot Water Flask', packed: false },
    { id: 'm6', category: 'Toiletries', name: 'Hydrating Lip Balm & Cold Cream', packed: false },
    { id: 'm7', category: 'First Aid', name: 'High-Altitude Sickness Medication (Diamox)', packed: false }
  ],
  Heritage: [
    { id: 'h1', category: 'Clothing', name: 'Comfortable Walking Sneakers', packed: false },
    { id: 'h2', category: 'Clothing', name: 'Breathable Cotton Kurtas & Modest Wear', packed: false },
    { id: 'h3', category: 'Essentials', name: 'Wide-Brimmed Sun Hat & Scarf', packed: false },
    { id: 'h4', category: 'Electronics', name: 'High-Capacity Power Bank (10,000mAh+)', packed: false },
    { id: 'h5', category: 'Essentials', name: 'Reusable Stainless Steel Water Bottle', packed: false },
    { id: 'h6', category: 'Toiletries', name: 'Hand Sanitizer & Wet Wipes', packed: false }
  ],
  Nature: [
    { id: 'n1', category: 'Clothing', name: 'Waterproof Raincoat / Poncho', packed: false },
    { id: 'n2', category: 'Clothing', name: 'Quick-Dry Cargo Trek Pants', packed: false },
    { id: 'n3', category: 'Toiletries', name: 'DEET Mosquito & Bug Repellent Spray', packed: false },
    { id: 'n4', category: 'Electronics', name: 'LED Headlamp / Flashlight', packed: false },
    { id: 'n5', category: 'First Aid', name: 'Compact Medical Kit & Antiseptic Bandages', packed: false },
    { id: 'n6', category: 'Essentials', name: 'Straw Water Purifier Filter', packed: false }
  ]
};

export default function PackingPage() {
  const [selectedVibe, setSelectedVibe] = useState('Mountain');
  const [items, setItems] = useState(PACKING_TEMPLATES.Mountain);
  const [newItemName, setNewItemName] = useState('');
  const [newItemCategory, setNewItemCategory] = useState('Essentials');

  const handleVibeChange = (vibe) => {
    setSelectedVibe(vibe);
    setItems(PACKING_TEMPLATES[vibe] || PACKING_TEMPLATES.Mountain);
  };

  const toggleItem = (id) => {
    setItems(items.map(item => item.id === id ? { ...item, packed: !item.packed } : item));
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const addItem = (e) => {
    e.preventDefault();
    if (!newItemName.trim()) return;
    const newItem = {
      id: `custom-${Date.now()}`,
      category: newItemCategory,
      name: newItemName.trim(),
      packed: false
    };
    setItems([...items, newItem]);
    setNewItemName('');
  };

  const packedCount = items.filter(i => i.packed).length;
  const progressPct = items.length > 0 ? Math.round((packedCount / items.length) * 100) : 0;

  const categoriesList = ['Essentials', 'Clothing', 'Toiletries', 'Electronics', 'First Aid'];

  return (
    <div className="min-h-screen pt-28 pb-32 text-white relative z-10 animate-fade-in">
      
      {/* Pic 5 Fix: Full Viewport Screen Background Photo */}
      <img 
        src="https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1600&q=80" 
        alt="Full Screen Mountain Hiker Background" 
        className="fixed inset-0 w-full h-full object-cover filter brightness-[0.22] pointer-events-none z-0" 
      />

      {/* Pic 5 Fix: Full Viewport Screen Width Container */}
      <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
        
        {/* Header Card */}
        <div className="bg-slate-900/90 backdrop-blur-2xl rounded-3xl p-6 sm:p-10 border border-slate-700/80 shadow-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-wider">
            <FiCheckSquare />
            <span>AI Destination Packing Assistant</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white leading-tight">
            Smart Packing Assistant
          </h1>

          <p className="text-slate-200 text-xs sm:text-sm font-medium max-w-2xl leading-relaxed">
            Select your destination vibe to load custom itemized packing suggestions tailored for weather and geography.
          </p>

          {/* Destination Vibe Tabs */}
          <div className="flex items-center gap-3 pt-2 overflow-x-auto scrollbar-hide">
            {[
              { id: 'Beach', icon: '🏖️' },
              { id: 'Mountain', icon: '🏔️' },
              { id: 'Heritage', icon: '🏰' },
              { id: 'Nature', icon: '🌿' }
            ].map(vibe => (
              <button
                key={vibe.id}
                onClick={() => handleVibeChange(vibe.id)}
                className={`px-5 py-2.5 rounded-2xl font-heading font-extrabold text-xs flex items-center gap-2 transition-all whitespace-nowrap ${
                  selectedVibe === vibe.id
                    ? 'bg-amber-400 text-slate-950 shadow-md font-black scale-105'
                    : 'bg-slate-950/90 border border-slate-700 text-slate-300 hover:bg-slate-800'
                }`}
              >
                <span>{vibe.icon}</span>
                <span>{vibe.id} Packing</span>
              </button>
            ))}
          </div>
        </div>

        {/* Progress Bar Card */}
        <div className="bg-slate-900/90 backdrop-blur-xl rounded-3xl p-6 border border-slate-700/80 shadow-xl space-y-3">
          <div className="flex justify-between items-center text-xs font-extrabold">
            <span className="text-white">Packing Progress for {selectedVibe} Trip</span>
            <span className="text-amber-300">{packedCount} of {items.length} items packed ({progressPct}%)</span>
          </div>

          <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden border border-slate-800">
            <div 
              className="bg-gradient-to-r from-teal-400 to-amber-400 h-full transition-all duration-500 rounded-full"
              style={{ width: `${progressPct}%` }}
            ></div>
          </div>
        </div>

        {/* Packing Items Grid grouped by Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categoriesList.map(catName => {
            const catItems = items.filter(i => i.category === catName);
            if (catItems.length === 0) return null;
            return (
              <div 
                key={catName}
                className="bg-slate-900/90 backdrop-blur-xl rounded-3xl p-6 border border-slate-700/80 shadow-xl space-y-4"
              >
                <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                  <h3 className="font-heading font-extrabold text-base text-teal-300">
                    {catName}
                  </h3>
                  <span className="text-[10px] font-bold text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                    {catItems.filter(i => i.packed).length}/{catItems.length} packed
                  </span>
                </div>

                <div className="space-y-2.5">
                  {catItems.map(item => (
                    <div 
                      key={item.id}
                      onClick={() => toggleItem(item.id)}
                      className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                        item.packed
                          ? 'bg-slate-950/90 border-slate-800 text-slate-500 line-through'
                          : 'bg-slate-950 border-slate-800/90 text-white hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors ${
                          item.packed ? 'bg-amber-400 border-amber-400 text-slate-950' : 'border-slate-600'
                        }`}>
                          {item.packed && <FiCheckSquare size={12} />}
                        </div>
                        <span className="text-xs font-bold">{item.name}</span>
                      </div>

                      <button 
                        onClick={(e) => { e.stopPropagation(); deleteItem(item.id); }}
                        className="text-slate-500 hover:text-red-400 transition-colors p-1"
                      >
                        <FiTrash2 size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Add Custom Item Form */}
        <form onSubmit={addItem} className="bg-slate-900/90 backdrop-blur-xl rounded-3xl p-6 border border-slate-700/80 shadow-xl flex flex-col sm:flex-row items-center gap-3">
          <input
            type="text"
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
            placeholder="Add custom packing item (e.g. GoPro, Camera Lens)..."
            className="flex-1 bg-slate-950 border border-slate-800 rounded-2xl px-4 py-3 text-xs font-semibold text-white outline-none focus:ring-2 focus:ring-amber-400"
          />

          <select
            value={newItemCategory}
            onChange={(e) => setNewItemCategory(e.target.value)}
            className="bg-slate-950 border border-slate-800 text-amber-300 rounded-2xl px-4 py-3 text-xs font-extrabold outline-none cursor-pointer"
          >
            {categoriesList.map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>

          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-gradient-to-r from-coral-500 to-sunset-500 text-white font-heading font-extrabold text-xs shadow-md btn-bounce flex items-center justify-center gap-1.5"
          >
            <FiPlus /> Add Item
          </button>
        </form>

      </div>
    </div>
  );
}
