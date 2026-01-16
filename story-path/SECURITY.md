# ⚠️ LỖI BẢO MẬT VÀ CÁCH XỬ LÝ

## Vấn đề

GitHub đã phát hiện **Claude API Key** trong code và cảnh báo về Secret Scanning. Đây là vấn đề bảo mật nghiêm trọng!

## Đã làm gì

✅ Xóa tất cả API keys khỏi code
✅ Tạo file `.env` cho local development
✅ Tạo file `.gitignore` để không commit `.env`
✅ Cập nhật hướng dẫn trong VERCEL_DEPLOY.md

## Cách xử lý ngay lập tức

### 1. Revoke API Key cũ (BẮT BUỘC)

**API key đã bị lộ nên PHẢI revoke ngay:**

1. Vào [Anthropic Console](https://console.anthropic.com/settings/keys)
2. Tìm key `sk-ant-api03-xpw1...`
3. Click **Delete** hoặc **Revoke**
4. Tạo API key mới

### 2. Tạo API Key mới

1. Vào [Anthropic Console](https://console.anthropic.com/settings/keys)
2. Click **Create Key**
3. Copy key mới
4. **KHÔNG BAO GIỜ** paste vào code hoặc commit lên Git

### 3. Cập nhật Local Development

Mở file `.env` và thay key mới:

```bash
CLAUDE_API_KEY=your_new_api_key_here
```

### 4. Cập nhật Vercel Environment Variables

1. Vào Vercel Dashboard → Project → Settings → Environment Variables
2. Tìm `CLAUDE_API_KEY`
3. Click **Edit** và thay bằng key mới
4. Click **Save**
5. Redeploy project

### 5. Remove key từ Git history (Nếu đã commit)

```bash
# Xóa file khỏi Git history
git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch VERCEL_DEPLOY.md" \
  --prune-empty --tag-name-filter cat -- --all

# Hoặc dùng BFG Repo-Cleaner (dễ hơn)
# https://rtyley.github.io/bfg-repo-cleaner/
```

## Nguyên tắc bảo mật

❌ **KHÔNG BAO GIỜ:**
- Commit API keys vào Git
- Share API keys qua chat/email
- Hardcode secrets trong code
- Push `.env` lên GitHub

✅ **LUÔN LUÔN:**
- Dùng environment variables
- Thêm `.env` vào `.gitignore`
- Revoke key ngay khi bị lộ
- Dùng `.env.example` làm template (không chứa key thật)

## File structure hiện tại

```
.env                 # Chứa API key thật (KHÔNG commit)
.env.example         # Template (có thể commit)
.gitignore           # Đảm bảo .env không bị commit
```

## Testing local

```bash
# Đảm bảo .env có API key
cat .env

# Chạy development server
npm run dev
```

## Deploy lên Vercel

Vercel sẽ tự động đọc environment variables từ Dashboard, KHÔNG đọc từ file `.env`!

---

**🚨 QUAN TRỌNG**: Hãy revoke API key cũ ngay lập tức để tránh bị lạm dụng!
