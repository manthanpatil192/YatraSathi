// Complete Web Speech API Speech Synthesis Utility with Browser Fallbacks

let cachedVoices = [];

const getVoices = () => {
  if (!('speechSynthesis' in window)) return [];
  if (cachedVoices.length > 0) return cachedVoices;
  cachedVoices = window.speechSynthesis.getVoices() || [];
  return cachedVoices;
};

if ('speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => {
    cachedVoices = window.speechSynthesis.getVoices() || [];
  };
}

export const speak = (text, options = {}) => {
  if (!('speechSynthesis' in window)) {
    console.warn('Speech synthesis not supported in this browser');
    if (options.onError) options.onError('Speech synthesis not supported');
    return null;
  }

  // Cancel existing speech
  window.speechSynthesis.cancel();

  if (!text || text.trim() === '') return null;

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = options.rate || 0.95;
  utterance.pitch = options.pitch || 1.0;
  utterance.volume = options.volume || 1.0;
  utterance.lang = options.lang || 'en-IN';

  const voices = getVoices();
  if (voices.length > 0) {
    const preferredVoice = 
      voices.find(v => v.lang === 'en-IN') ||
      voices.find(v => v.lang.startsWith('en-IN')) ||
      voices.find(v => v.lang.startsWith('en')) ||
      voices[0];
    if (preferredVoice) utterance.voice = preferredVoice;
  }

  if (options.onStart) utterance.onstart = options.onStart;
  if (options.onEnd) utterance.onend = options.onEnd;
  if (options.onError) utterance.onerror = options.onError;

  // Speak
  window.speechSynthesis.speak(utterance);

  // Resume Chrome keep-alive hack for long speech
  const keepAliveInterval = setInterval(() => {
    if (!window.speechSynthesis.speaking) {
      clearInterval(keepAliveInterval);
    } else {
      window.speechSynthesis.pause();
      window.speechSynthesis.resume();
    }
  }, 10000);

  utterance.onend = (e) => {
    clearInterval(keepAliveInterval);
    if (options.onEnd) options.onEnd(e);
  };

  return utterance;
};

export const stopSpeaking = () => {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
};

export const pauseSpeaking = () => {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.pause();
  }
};

export const resumeSpeaking = () => {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.resume();
  }
};

export const isSpeaking = () => {
  return 'speechSynthesis' in window && window.speechSynthesis.speaking;
};
