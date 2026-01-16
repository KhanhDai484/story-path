# Development vs Production

## Local Development (Máy cá nhân)

Chạy cả server Express và Vite:
```bash
npm run dev:full
```

Hoặc chỉ chạy Vite (nếu không cần test chatbot):
```bash
npm run dev
```

## Vercel Production

Vercel **KHÔNG SỬ DỤNG** `server.js`!

Vercel chỉ sử dụng:
- Frontend: Build từ Vite → folder `dist`
- Backend: Serverless Functions trong folder `api/`

### Cấu trúc API trên Vercel:

```
api/
  ├── chat.js      → https://your-domain.vercel.app/api/chat
  └── visitor.js   → https://your-domain.vercel.app/api/visitor
```

Mỗi file trong `api/` tự động trở thành một API endpoint.

### Kiểm tra API hoạt động:

Sau khi deploy, test các endpoint:

```bash
# Test visitor counter
curl https://your-domain.vercel.app/api/visitor

# Test chat (POST)
curl -X POST https://your-domain.vercel.app/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"Xin chào","character":{"name":"Test"}}'
```

## Lưu ý quan trọng

❌ **server.js**: Chỉ dùng cho local development
✅ **api/*.js**: Serverless functions cho Vercel production
