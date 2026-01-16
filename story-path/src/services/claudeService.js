const API_URL = process.env.NODE_ENV === 'production' 
  ? '/api/chat' 
  : 'http://localhost:3001/api/chat';

export const sendMessageToClaude = async (userMessage, characterContext) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: userMessage,
        character: characterContext
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`API Error: ${errorData.error || response.statusText}`);
    }

    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error('Claude API Error:', error);
    throw error;
  }
};
