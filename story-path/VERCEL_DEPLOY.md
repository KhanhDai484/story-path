# 🚀 Hướng dẫn Deploy lên Vercel

## ⚠️ QUAN TRỌNG: Thứ tự Deploy

**Bạn PHẢI làm theo đúng thứ tự này:**
1. Deploy project lên Vercel trước (từ Git hoặc CLI)
2. Tạo KV (Redis) database trong Vercel Dashboard
3. Link KV database với project của bạn
4. Thêm CLAUDE_API_KEY vào Environment Variables
5. Redeploy để áp dụng variables

---

## Bước 1: Deploy Project lên Vercel

### Option A: Deploy từ Git (Khuyến nghị)

1. Push code lên GitHub
2. Vào [Vercel Dashboard](https://vercel.com/dashboard) → **Add New Project**
3. Import repository từ GitHub
4. Click **Deploy** (chưa cần config gì cả, cứ deploy trước)
5. Đợi deployment hoàn tất

### Option B: Deploy từ CLI

```bash
# Cài Vercel CLI
npm install -g vercel

# Trong thư mục project
vercel

# Hoặc deploy production ngay
vercel --prod
```

---

## Bước 2: Tạo KV (Redis) Database

**SAU KHI deploy xong project, làm các bước sau:**

1. Vào [Vercel Dashboard](https://vercel.com/dashboard)
2. Chọn project vừa deploy
3. Vào tab **Storage**
4. Click **Create Database**
5. Chọn **KV (Redis)**
6. Đặt tên database (ví dụ: `visitor-counter` hoặc `story-path-kv`)
7. Click **Create**

---

## Bước 3: Link KV với Project

Vercel sẽ hỏi bạn muốn link KV database với project nào:

1. Chọn project của bạn từ danh sách
2. Chọn environment: **Production, Preview, Development** (chọn tất cả)
3. Click **Connect**

Vercel sẽ TỰ ĐỘNG thêm các environment variables:
- `KV_REST_API_URL`
- `KV_REST_API_TOKEN`
- `KV_REST_API_READ_ONLY_TOKEN`

---

## Bước 4: Thêm CLAUDE_API_KEY

1. Trong project dashboard → **Settings** → **Environment Variables**
2. Click **Add New**
3. Điền:
   - **Key**: `CLAUDE_API_KEY`
   - **Value**: `<YOUR_CLAUDE_API_KEY_HERE>` (thay bằng API key thật của bạn)
   - **Environments**: Chọn tất cả (Production, Preview, Development)
4. Click **Save**

⚠️ **Lưu ý**: KHÔNG BAO GIỜ commit API key vào Git!

---

## Bước 5: Redeploy

Sau khi thêm xong environment variables:

1. Vào tab **Deployments**
2. Click vào deployment mới nhất
3. Click menu **⋯** → **Redeploy**
4. Hoặc đơn giản: push commit mới lên GitHub để trigger auto-deploy

---

## Bước 6: Xác nhận Website Hoạt động

Sau khi deploy xong:
1. Mở URL được cung cấp
2. Kiểm tra chatbot hoạt động
3. Refresh trang, xem số lượt truy cập tăng

## 📝 Lưu ý

- ✅ Vercel KV (Redis) tự động handle concurrent requests
- ✅ Không giới hạn số lượng truy cập
- ✅ Data persistent (không mất khi redeploy)
- ✅ Free tier: 10,000 requests/day

## 🔧 Troubleshooting

**Lỗi "KV not configured":**
- Đảm bảo đã tạo KV database trong Vercel
- Check environment variables đã được link

**Chatbot không hoạt động:**
- Kiểm tra `CLAUDE_API_KEY` đã được set trong Environment Variables
- Xem logs: `vercel logs`

**Visitor counter không tăng:**
- Check browser console for errors
- Xem Vercel function logs

## 🎉 Done!

Website đã sẵn sàng với:
- ✅ Chatbot AI (Tư tưởng Hồ Chí Minh)
- ✅ Visitor counter (real-time)
- ✅ Scalable infrastructure
- ✅ Free hosting trên Vercel
