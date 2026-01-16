import express from 'express';
import cors from 'cors';
import { kv } from '@vercel/kv';

const app = express();
const PORT = process.env.PORT || 3001;

const CLAUDE_API_KEY = process.env.CLAUDE_API_KEY;
const CLAUDE_API_URL = 'https://api.anthropic.com/v1/messages';
const VISITOR_KEY = 'visitor_count';

app.use(cors());
app.use(express.json());

app.post('/api/chat', async (req, res) => {
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
    res.json({ response: data.content[0].text });
  } catch (error) {
    console.error('Server Error:', error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

// Visitor tracking endpoints
app.post('/api/visitor', async (req, res) => {
  try {
    // Use Redis INCR for atomic increment - perfect for Vercel
    const count = await kv.incr(VISITOR_KEY);
    
    res.json({ 
      count: count,
      message: 'Visitor recorded' 
    });
  } catch (error) {
    console.error('Visitor tracking error:', error);
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/visitor', async (req, res) => {
  try {
    let count = await kv.get(VISITOR_KEY);
    
    // Initialize if not exists
    if (count === null) {
      await kv.set(VISITOR_KEY, 0);
      count = 0;
    }
    
    res.json({ 
      count: count,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Get visitor error:', error);
    res.status(500).json({ error: error.message });
  }
});
