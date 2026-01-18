import { useState, useEffect } from 'react';
import './VisitorCounter.css';

function VisitorCounter() {
  const [visitorCount, setVisitorCount] = useState(0);
  const [loading, setLoading] = useState(true);

  const API_URL = typeof window !== 'undefined' && window.location.hostname !== 'localhost'
    ? '/api/visitor'
    : 'http://localhost:3001/api/visitor';

  useEffect(() => {
    const recordVisit = async () => {
      try {
        console.log('🔵 Calling API:', API_URL);
        // Record this visit
        const response = await fetch(API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          }
        });
        
        console.log('🔵 Response status:', response.status);
        
        if (response.ok) {
          const data = await response.json();
          console.log('✅ Visitor count:', data.count);
          setVisitorCount(data.count);
        } else {
          console.error('❌ API error:', response.status, response.statusText);
        }
      } catch (error) {
        console.error('❌ Error recording visit:', error);
        // Fallback to get count only
        try {
          const getResponse = await fetch(API_URL);
          if (getResponse.ok) {
            const data = await getResponse.json();
            console.log('📊 Fallback count:', data.count);
            setVisitorCount(data.count);
          }
        } catch (err) {
          console.error('❌ Error fetching count:', err);
        }
      } finally {
        setLoading(false);
      }
    };

    recordVisit();
  }, []);

  if (loading) {
    return null;
  }

  return (
    <div className="visitor-counter">
      <div className="visitor-icon">👁️</div>
      <div className="visitor-info">
        <div className="visitor-label">Lượt truy cập</div>
        <div className="visitor-count">{visitorCount.toLocaleString()}</div>
      </div>
    </div>
  );
}

export default VisitorCounter;
