# PMS Data Entry Guide - Deployment

## 🚀 Deployment Seçenekleri

### Seçenek 1: Coolify (Önerilen - İnstant Deploy)

```bash
# Coolify panel'de yeni uygulamaya gidin
Hostname: pms-guide.pmapartner.com
Build Pack: Docker
Repository: https://github.com/PMAPARTNER/pms-data-entry-guide
Branch: main
Dockerfile Path: ./Dockerfile
Port: 3000
```

**Çıktı URL:**
```
https://pms-guide.pmapartner.com
```

---

### Seçenek 2: Docker (Local Test)

```bash
# Clone repository
git clone https://github.com/PMAPARTNER/pms-data-entry-guide.git
cd pms-data-entry-guide

# Build image
docker build -t pms-guide .

# Run container
docker-compose up -d

# Access at http://localhost:3000
```

---

### Seçenek 3: Manual (Node.js Direct)

```bash
# Install dependencies
npm install

# Build
npm run build

# Start
npm start

# Access at http://localhost:3000
```

---

## 📋 Coolify Deploy Adımları

### 1. Coolify Panel'de Yeni Servis Oluştur

1. https://161.97.132.250:8000 (Coolify Panel)
2. **+ Add Service** → **Docker Image**
3. Seçenekler doldur:
   ```
   Name: PMS Data Entry Guide
   Repository URL: https://github.com/PMAPARTNER/pms-data-entry-guide
   Branch: main
   Dockerfile Path: ./Dockerfile
   Port: 3000
   Domain: pms-guide.pmapartner.com
   ```

### 2. Deploy Et

Click **Deploy** → ~2-3 dakika sonra canlı

### 3. Kontrol Et

```bash
https://pms-guide.pmapartner.com
```

---

## 🔧 Environment Variables (Coolify'de)

```
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://pms-guide.pmapartner.com
```

---

## 📊 Monitoring

- **Coolify Panel:** https://161.97.132.250:8000
- **Logs:** Container logs'ta görüntülenebilir
- **Health Check:** `/` → 200 OK

---

## 🔄 Auto-Update

Repository'ye push yaptığınız zaman:

```bash
git push origin main
```

**Coolify otomatik olarak:**
1. Repository pull eder
2. Dockerfile'ı build eder
3. Container replace eder
4. Site update olur (~2-3 dakika)

---

## ❌ Troubleshooting

### Build Başarısız?
- Repository public mu? ✓
- Branch adı doğru mu? (main) ✓
- Dockerfile var mı? ✓

### Container start etmiyor?
- Port 3000 açık mı?
- npm dependencies yüklü mü?
- Node.js versiyon uyumlu mu? (18+)

### Domain bağlanmıyor?
- DNS A record pmapartner.com'u gösteriyor mu?
- Coolify reverse proxy ayarlandı mı?

---

## 📞 Support

Sorun yaşarsanız:
- GitHub Issues: https://github.com/PMAPARTNER/pms-data-entry-guide/issues
- Email: tech@pmapartner.com
- Slack: #infrastructure

---

**Kurulum:** 2026-06-16  
**Güncelleme:** Her push'ta otomatik
