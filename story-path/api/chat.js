import { kv } from '@vercel/kv';

const CLAUDE_API_KEY = process.env.CLAUDE_API_KEY;
const CLAUDE_API_URL = 'https://api.anthropic.com/v1/messages';

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message, character } = req.body;

    const systemPrompt = `Bạn là một trợ lý AI chuyên về Tư tưởng Hồ Chí Minh.

Nhiệm vụ của bạn:
- Giải thích các khía cạnh của Tư tưởng Hồ Chí Minh: độc lập dân tộc, chủ nghĩa yêu nước, đạo đức cách mạng, dân chủ, dân sinh, văn hóa
- Truyền cảm hứng về tinh thần yêu nước, đoàn kết, phụng sự nhân dân
- Giáo dục về lịch sử cách mạng Việt Nam và di sản Chủ tịch Hồ Chí Minh
- Giải thích các tác phẩm, lời dạy của Bác Hồ
- Ứng dụng Tư tưởng Hồ Chí Minh vào đời sống hiện đại

Nguyên tắc:
- CHỈ trả lời về Tư tưởng Hồ Chí Minh, lịch sử Việt Nam, cách mạng Việt Nam
- KHÔNG đề cập đến các chủ đề khác như truyền thuyết, game, phim ảnh phương Tây
- Sử dụng tiếng Việt trong sáng, dễ hiểu, giàu tính giáo dục

Hãy trả lời một cách sâu sắc, giàu ý nghĩa, kết hợp lịch sử và triết lý của dân tộc Việt Nam.`;

    const response = await fetch(CLAUDE_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': CLAUDE_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-haiku-20240307',
        max_tokens: 1024,
        system: systemPrompt,
        messages: [
          {
            role: 'user',
            content: message
          }
        ]
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`API Error: ${errorData.error?.message || response.statusText}`);
    }

    const data = await response.json();
    res.status(200).json({ response: data.content[0].text });
  } catch (error) {
    console.error('Chat API Error:', error);
    res.status(500).json({ error: error.message });
  }
}
