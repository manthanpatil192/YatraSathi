import React, { useState, useRef, useEffect } from 'react';
import { FiMessageSquare, FiX, FiSend, FiZap, FiDollarSign, FiShield, FiCompass, FiThumbsUp, FiHelpCircle } from 'react-icons/fi';
import { destinations } from '../../data/destinations';

export default function YatraAIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: 'Namaste! 🇮🇳 I am your YatraAI Smart Travel Assistant. Ask me anything about Indian cities, famous food, budget saving hacks, safety advice, or transit routes!',
      timestamp: 'Just now'
    }
  ]);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const quickPrompts = [
    '💡 Smart budget saving tips',
    '🍲 Best food in Goa',
    '🛡️ Is Kashmir safe for travel?',
    '🚌 Cheap travel options in India',
    '🏰 Top places in Jaipur'
  ];

  // Intelligent Context-Aware Response Engine
  const generateAIResponse = (userQuery) => {
    const q = userQuery.toLowerCase().trim();

    // 1. Search for matching city in dataset
    const matchedCity = destinations.find(d => 
      q.includes(d.name.toLowerCase()) || 
      (d.name.includes('&') && q.includes(d.name.split('&')[0].trim().toLowerCase()))
    );

    if (matchedCity) {
      if (q.includes('food') || q.includes('eat') || q.includes('dish') || q.includes('sweet') || q.includes('specialty')) {
        const foods = matchedCity.foodSpecialties?.map(f => `• **${f.name}**: ${f.desc}`).join('\n') || 'Local Thali & Street food';
        return `🍲 **Famous Food Specialties in ${matchedCity.name}**:\n${foods}`;
      }

      if (q.includes('reach') || q.includes('transit') || q.includes('flight') || q.includes('train') || q.includes('bus')) {
        return `🚌 **How to Reach ${matchedCity.name}**:\n${matchedCity.howToReachDetails || matchedCity.gettingThere}`;
      }

      if (q.includes('place') || q.includes('visit') || q.includes('attraction') || q.includes('see') || q.includes('spot')) {
        const spots = matchedCity.travelDestinationsInCity?.map(p => `• **${p.name}**: ${p.desc}`).join('\n') || matchedCity.highlights.join(', ');
        return `🏛️ **Top Places to Visit in ${matchedCity.name}**:\n${spots}`;
      }

      if (q.includes('safe') || q.includes('safety') || q.includes('security')) {
        const tips = matchedCity.safetyTips?.map(t => `• ${t}`).join('\n') || 'General tourist safety guidelines apply.';
        return `🛡️ **Safety Status for ${matchedCity.name}** (${matchedCity.safetyRating}):\n${tips}`;
      }

      // General City Info
      return `📌 **About ${matchedCity.name} (${matchedCity.state})**:\n${matchedCity.description}\n\n• **Best Season**: ${matchedCity.bestSeason}\n• **Avg Daily Budget**: ₹${matchedCity.averageCostPerDay}\n• **Must See**: ${matchedCity.highlights.join(', ')}`;
    }

    // 2. Budget & Smart Savings
    if (q.includes('budget') || q.includes('save') || q.includes('saving') || q.includes('cheap') || q.includes('money') || q.includes('cost')) {
      return `💰 **YatraSathi Smart Budget Hacks**:\n1. **Train vs Flight**: Book Vande Bharat or IRCTC AC 3-Tier sleeper trains to save 40-60% on intercity travel.\n2. **Local Dining**: Eat at popular heritage Thali dhabas instead of tourist cafes (Avg meal: ₹150-250).\n3. **Homestays**: Book eco-homestays or backpacker hostels (₹800-1500/night).\n4. **Travel Off-Peak**: Visit during shoulder months (Feb-April or Sept-Oct) for 30-50% hotel discounts.`;
    }

    // 3. Packing Advice
    if (q.includes('pack') || q.includes('packing') || q.includes('clothes') || q.includes('luggage')) {
      return `🎒 **Smart Packing Essentials for Indian Trips**:\n• **Beach/Coastal**: Light breathable cottons, sunblock SPF 50+, flip-flops, sunglasses.\n• **Himalayas/Mountains**: Layered thermals, fleece jacket, sturdy trekking shoes, lip balm.\n• **General**: Power bank (10,000mAh+), universal adapter, basic first-aid kit, and digital ID copies.`;
    }

    // 4. Safety & SOS
    if (q.includes('safe') || q.includes('safety') || q.includes('emergency') || q.includes('sos') || q.includes('help') || q.includes('solo')) {
      return `🛡️ **Safety & Emergency Advice**:\n• Use YatraSathi **SOS Button** on Safety page to share live GPS coordinates.\n• **National Emergency Numbers**: Police: 100 | Ambulance: 108 | Tourist Helpline: 1363 | Women Helpline: 1091.\n• Share live location pins with family when taking night cabs.`;
    }

    // 5. Default Fallback Assistance
    return `✨ I can help you plan your Indian adventure! Try asking:\n• *"What is the best food in Goa?"*\n• *"How to reach Manali?"*\n• *"Is Kashmir safe for solo travel?"*\n• *"Smart budget saving tips"*\n• *"Top places to visit in Jaipur"*`;
  };

  const handleSend = (textToSend) => {
    const query = textToSend || inputMessage;
    if (!query.trim()) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputMessage('');

    setTimeout(() => {
      const aiReply = generateAIResponse(query);
      const botMsg = {
        id: Date.now() + 1,
        sender: 'bot',
        text: aiReply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botMsg]);
    }, 400);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="btn-bounce w-14 h-14 rounded-full bg-gradient-to-tr from-ocean-600 via-seafoam-500 to-amber-400 text-white shadow-2xl flex items-center justify-center relative border-2 border-white/60"
          title="Ask YatraAI Smart Travel Assistant"
        >
          <FiMessageSquare size={26} />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-coral-500 rounded-full border-2 border-white animate-ping"></span>
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-coral-500 rounded-full border-2 border-white"></span>
        </button>
      )}

      {/* Expandable Glassmorphism Chat Window */}
      {isOpen && (
        <div className="bg-slate-900/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-slate-700/80 w-[90vw] sm:w-[400px] h-[540px] flex flex-col overflow-hidden animate-slide-up text-white">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-ocean-950 via-slate-900 to-ocean-900 p-4 text-white flex items-center justify-between border-b border-slate-700/80 shadow-md">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-2xl bg-amber-400 text-slate-950 font-black flex items-center justify-center text-lg shadow-sm">
                🤖
              </div>
              <div>
                <h4 className="font-heading font-extrabold text-sm leading-tight text-white">YatraAI Assistant</h4>
                <p className="text-[10px] text-seafoam-300 font-bold uppercase tracking-wider">Smart Travel & Budget Advice</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full hover:bg-white/20 text-white transition-colors"
            >
              <FiX size={18} />
            </button>
          </div>

          {/* Quick Prompt Chips */}
          <div className="p-2.5 bg-slate-950/80 border-b border-slate-800 flex items-center gap-1.5 overflow-x-auto scrollbar-hide">
            {quickPrompts.map((prompt, i) => (
              <button
                key={i}
                onClick={() => handleSend(prompt)}
                className="px-2.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-200 text-[11px] font-bold whitespace-nowrap hover:bg-ocean-600 hover:text-white transition-colors shrink-0"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Messages Feed */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-slate-950/40">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[88%] p-3.5 rounded-2xl text-xs leading-relaxed font-medium shadow-md ${
                    msg.sender === 'user'
                      ? 'bg-ocean-600 text-white rounded-br-none'
                      : 'bg-slate-800/90 text-slate-100 border border-slate-700/80 rounded-bl-none'
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>
                </div>
                <span className="text-[9px] font-bold text-slate-400 mt-1 px-1">{msg.timestamp}</span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Footer */}
          <div className="p-3 bg-slate-900 border-t border-slate-800 flex items-center gap-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask YatraAI for food, routes, or budget..."
              className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-white outline-none focus:ring-2 focus:ring-ocean-500 placeholder-slate-400"
            />
            <button
              onClick={() => handleSend()}
              className="p-2.5 rounded-xl bg-ocean-600 hover:bg-ocean-500 text-white transition-colors shadow-md"
            >
              <FiSend size={15} />
            </button>
          </div>

        </div>
      )}

    </div>
  );
}
