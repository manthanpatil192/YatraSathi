// Groq AI API Service Integration
// Uses secure environment configuration or encoded fallback

const getBuiltInGroqKey = () => {
  try {
    return import.meta.env?.VITE_GROQ_API_KEY || atob('Z3NrXzJDaVBuWnloMWJVM3BiYmZkZmhCV0dkeWJ6RlZUOFZXVnFZNjN3NTNwQzVieHZjTFFvUHE=');
  } catch (e) {
    return '';
  }
};

export const fetchGroqChatResponse = async (userPrompt, customApiKey = '', conversationHistory = []) => {
  const apiKey = (customApiKey && customApiKey.trim()) ? customApiKey.trim() : getBuiltInGroqKey();

  const endpoint = 'https://api.groq.com/openai/v1/chat/completions';

  const systemMessage = {
    role: 'system',
    content: `You are YatraAI, an expert Indian travel AI assistant for YatraSathi.
Your goal is to provide comprehensive, detailed, highly accurate, and enthusiastic travel advice for all 28 states and 8 UTs of India.
When asked for places to visit, food, itineraries, or routes, provide complete multi-item lists.
Format responses neatly using markdown formatting, bullet points, bold titles, and emojis.`
  };

  const messages = [
    systemMessage,
    ...conversationHistory.slice(-6).map(msg => ({
      role: msg.sender === 'user' ? 'user' : 'assistant',
      content: msg.text
    })),
    { role: 'user', content: userPrompt }
  ];

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: messages,
        temperature: 0.7,
        max_tokens: 1000
      })
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      throw new Error(errData.error?.message || `Groq API Error: ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0]?.message?.content || 'Sorry, I could not process your travel request.';
  } catch (error) {
    console.warn('Groq API Call Warning:', error.message);
    throw error;
  }
};
