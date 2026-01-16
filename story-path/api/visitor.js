import Redis from 'ioredis';

const VISITOR_KEY = 'visitor_count';

// Initialize Redis client
let redis;
if (process.env.REDIS_URL) {
  redis = new Redis(process.env.REDIS_URL);
} else {
  // Fallback for development
  redis = null;
}

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    // Check if Redis is configured
    if (!redis) {
      console.error('Redis not configured!');
      return res.status(500).json({ 
        error: 'Redis database not configured',
        details: 'Missing REDIS_URL environment variable'
      });
    }

    if (req.method === 'POST') {
      // Increment visitor count atomically
      const count = await redis.incr(VISITOR_KEY);
      
      return res.status(200).json({ 
        count: count,
        message: 'Visitor recorded' 
      });
    }

    if (req.method === 'GET') {
      // Get current count
      let count = await redis.get(VISITOR_KEY);
      
      // Initialize if not exists
      if (count === null) {
        await redis.set(VISITOR_KEY, 0);
        count = 0;
      }
      
      return res.status(200).json({ 
        count: parseInt(count),
        timestamp: new Date().toISOString()
      });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error('Visitor API Error:', error);
    return res.status(500).json({ 
      error: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
}
