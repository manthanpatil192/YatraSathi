// Groq AI API Service Integration
// Supports ultra-fast Llama 3.3 70B & Mixtral models via Groq Cloud

export const fetchGroqChatResponse = async (userPrompt, apiKey, conversationHistory = []) => {
  if (!apiKey || !apiKey.trim()) {
    throw new Error('No Groq API Key provided');
  }

  const endpoint = 'https://api.groq.com/openai/v1/chat/completions';

  const systemMessage = {
    role: 'system',
    content: `You are YatraAI, an expert Indian travel assistant for YatraSathi.
You provide helpful, concise, enthusiastic, and highly accurate travel advice for Indian destinations, culture, budget travel, regional food, safety, and transportation. Keep responses under 200 words unless detailed itinerary is requested. Use bullet points and emojis.`
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
        'Authorization': `Bearer ${apiKey.trim()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: messages,
        temperature: 0.7,
        max_tokens: 600
      })
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      throw new Error(errData.error?.message || `Groq API Error: ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0]?.message?.content || 'Sorry, I could not process your travel request.';
  } catch (error) {
    console.warn('Groq API Call Failed, falling back to local AI:', error.message);
    throw error;
  }
};
