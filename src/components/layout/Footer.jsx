import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative bg-[#0F5C68] text-white pt-24 mt-20">
      {/* Deep ocean wave top border */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform -translate-y-full">
        <svg
          className="relative block w-full h-[60px] md:h-[100px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.3,201.3,114.36c58.2-4.08,114.8-17.38,172.5-27.18Z"
            className="fill-[#0F5C68]"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* About YatraSathi */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-xl shadow-lg">
                🧭
              </div>
              <span className="text-2xl font-bold font-heading tracking-tight text-white">
                YatraSathi<span className="text-coral-500">.</span>
              </span>
            </div>
            <p className="text-ocean-100 leading-relaxed text-sm">
              Your ultimate companion for exploring the diverse landscapes, cultures, and hidden gems of India. We make travel smart, safe, and sustainable.
            </p>
            <div className="flex gap-4 pt-2">
              {['Facebook', 'Twitter', 'Instagram'].map((social) => (
                <a key={social} href="#" className="w-8 h-8 rounded-full bg-ocean-600/50 flex items-center justify-center hover:bg-ocean-500 hover:-translate-y-1 transition-all">
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 bg-white/80 rounded-sm"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Explore Destinations */}
          <div>
            <h3 className="text-lg font-bold font-heading mb-6 text-white">Explore Destinations</h3>
            <ul className="space-y-3">
              {['Beaches of Goa', 'Mountains of Himachal', 'Heritage of Rajasthan', 'Backwaters of Kerala', 'Temples of Tamil Nadu'].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-ocean-100 hover:text-white hover:translate-x-1 inline-block transition-transform text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Smart Tools */}
          <div>
            <h3 className="text-lg font-bold font-heading mb-6 text-white">Smart Tools</h3>
            <ul className="space-y-3">
              {['Trip Budget Planner', 'Safety & Emergency', 'Route Optimizer', 'AI Packing List', 'Eco-Footprint Calculator'].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-ocean-100 hover:text-white hover:translate-x-1 inline-block transition-transform text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold font-heading mb-6 text-white">Stay Updated</h3>
            <p className="text-ocean-100 text-sm mb-4 leading-relaxed">
              Get the latest travel tips, deals, and sustainable travel guides.
            </p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-xl bg-ocean-800/50 border border-ocean-600/50 text-white placeholder-ocean-300 focus:outline-none focus:ring-2 focus:ring-seafoam-500 focus:border-transparent transition-all"
              />
              <button className="w-full btn-bounce bg-coral-500 hover:bg-coral-600 text-white px-4 py-3 rounded-xl font-medium shadow-lg shadow-coral-500/30 transition-all duration-300">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-ocean-600/30 bg-[#0A454E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-ocean-200 text-sm">
            Made with <span className="text-coral-500 animate-pulse inline-block">❤️</span> for Indian Travelers
          </p>
          <div className="flex gap-6 text-sm text-ocean-200">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
          <p className="text-ocean-200 text-sm">
            © 2026 YatraSathi
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
