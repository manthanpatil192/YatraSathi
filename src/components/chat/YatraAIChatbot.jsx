import React, { useState, useRef, useEffect } from 'react';
import { FiMessageSquare, FiX, FiSend, FiZap, FiDollarSign, FiShield, FiCompass, FiThumbsUp } from 'react-icons/fi';

export default function YatraAIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: 'Namaste! 🇮🇳 I am YatraAI, your smart travel & budget saving assistant. Ask me anything about saving costs, local food, packing, or travel safety!',
      timestamp: 'Just now'
    }
  ]);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const quickPrompts = [
    '💡 Smart budget saving tips',
    '🎒 Packing tips for Goa',
    '🛡️ Is solo travel safe in Jaipur?',
    '🚌 Cheap transit options'
  ];

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

    // Generate smart response
    setTimeout(() => {
      let replyText = "Great question! Here's a smart tip: Plan multi-city travel using sleeper trains or state AC buses to save up to 40% on transit costs. Book accommodation 2 weeks in advance for local homestays!";
      
      const q = query.toLowerCase();
      if (q.includes('budget') || q.includes('save') || q.includes('saving') || q.includes('cost')) {
        replyText = "💰 **Smart Budget Saving Tips**:\n1. Travel during shoulder seasons (Feb-April, Sept-Oct) for 30-50% lower hotel rates.\n2. Eat at popular local heritage dhabas & thali houses instead of tourist cafes.\n3. Take IRCTC Vande Bharat or overnight sleeper trains instead of last-minute flights.\n4. Use YatraSathi Budget Calculator to track running daily totals!";
      } else if (q.includes('packing') || q.includes('pack')) {
        replyText = "🎒 **Smart Packing Checklist**:\n• Light cotton clothes for coastal/heritage cities\n• Thermal innerwear & windcheater for mountains\n• Reusable water bottle & power bank (10,000mAh+)\n• Basic medical kit & offline ID copies.";
      } else if (q.includes('safe') || q.includes('safety') || q.includes('solo')) {
        replyText = "🛡️ **Travel Safety Advice**:\n1. Use YatraSathi SOS button to share live location pin.\n2. Keep emergency contacts stored offline.\n3. Stay in verified homestays & hotels with high safety ratings.";
      } else if (q.includes('transit') || q.includes('bus') || q.includes('train')) {
        replyText = "🚌 **Transit Advice**:\n• Use local metro networks in Delhi, Mumbai, and Kolkata.\n• Book state transport Volvo buses (e.g. HRTC, KSRTC, MSRTC) for reliable mountain routes.";
      }

      const botMsg = {
        id: Date.now() + 1,
        sender: 'bot',
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, botMsg]);
    }, 600);
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
        <div className="bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-slate-200 w-[90vw] sm:w-[380px] h-[520px] flex flex-col overflow-hidden animate-slide-up">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-ocean-900 via-ocean-800 to-seafoam-900 p-4 text-white flex items-center justify-between shadow-md">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-2xl bg-amber-400 text-slate-950 font-black flex items-center justify-center text-lg shadow-sm">
                🤖
              </div>
              <div>
                <h4 className="font-heading font-extrabold text-sm leading-tight">YatraAI Assistant</h4>
                <p className="text-[10px] text-seafoam-200 font-bold uppercase tracking-wider">Smart Travel & Budget Tips</p>
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
          <div className="p-2.5 bg-slate-50 border-b border-slate-100 flex items-center gap-1.5 overflow-x-auto scrollbar-hide">
            {quickPrompts.map((prompt, i) => (
              <button
                key={i}
                onClick={() => handleSend(prompt)}
                className="px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-[11px] font-bold whitespace-nowrap hover:bg-ocean-50 hover:text-ocean-700 transition-colors shadow-2xs shrink-0"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Messages Feed */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-slate-50/50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3.5 rounded-2xl text-xs leading-relaxed font-medium shadow-xs ${
                    msg.sender === 'user'
                      ? 'bg-ocean-600 text-white rounded-br-none'
                      : 'bg-white text-slate-800 border border-slate-200/80 rounded-bl-none'
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
          <div className="p-3 bg-white border-t border-slate-100 flex items-center gap-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask YatraAI for tips or budget saving..."
              className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-800 outline-none focus:ring-2 focus:ring-ocean-500"
            />
            <button
              onClick={() => handleSend()}
              className="p-2.5 rounded-xl bg-ocean-600 hover:bg-ocean-700 text-white transition-colors shadow-md"
            >
              <FiSend size={15} />
            </button>
          </div>

        </div>
      )}

    </div>
  );
}
