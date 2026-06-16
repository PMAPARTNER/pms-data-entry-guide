# PMS Veri Giriş Rehberi

**Comprehensive PMS Data Entry Guide for Elektra, Sedna, and Veboni Systems**

🌐 **Live Site:** https://pmapartner.github.io/pms-data-entry-guide  
📚 **GitHub Repo:** https://github.com/PMAPARTNER/pms-data-entry-guide

---

## 📋 İçerik

Bu rehber, otel PMS sistemlerine yapılan rezervasyon girişlerindeki yaygın hataları önlemek ve optimum veri giriş metodolojisini sunmak için hazırlanmıştır.

### Sayfalar

- **Ana Sayfa** - Özet ve rehberlere hızlı erişim
- **Yaygın Hatalar** - 8+ detaylı hata analizi ve çözümleri
- **Case Studies** - 5 gerçek senaryo ve sonuçları
- **PMS Rehberleri** - Elektra, Sedna, Veboni için teknik rehberler
- **İş Akışları** - Adım adım prosesler ve karar ağaçları
- **Kontrol Listesi** - İndirilebilir günlük checklist
- **SSS** - Sık sorulan sorular ve cevapları

---

## 🚀 Kurulum & Geliştirme

```bash
# Proje klonla
git clone https://github.com/PMAPARTNER/pms-data-entry-guide.git
cd pms-data-entry-guide

# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev

# Tarayıcıda aç
# http://localhost:3000
```

---

## 🛠️ Teknoloji Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Charts:** Recharts
- **Deployment:** GitHub Pages (Automated)

---

## 📦 Yapı

```
pms-guide/
├── app/
│   ├── page.tsx                 # Ana sayfa
│   ├── common-mistakes/
│   │   └── page.tsx            # Yaygın hatalar
│   ├── case-studies/
│   │   └── page.tsx            # Case studies
│   ├── pms-specific/
│   │   └── page.tsx            # PMS rehberleri
│   ├── workflows/
│   │   └── page.tsx            # İş akışları
│   ├── checklist/
│   │   └── page.tsx            # Kontrol listesi
│   ├── faq/
│   │   └── page.tsx            # SSS
│   ├── layout.tsx              # Root layout
│   └── globals.css             # Global styles
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages deployment
├── package.json
├── tailwind.config.ts
└── README.md
```

---

## 📊 Kapsanan Hatalar

### Kritik Hatalar 🔴
1. **Toplu Rez Tek Odaya Girmek** - ADR ve Occupancy sapması
2. **OTA İptalleri Manuel Girme** - Çift iptal kaydı

### Yüksek Öncelik Hatalar 🟠
3. **House Use/Complementary Ayrımı** - Mali raporlama hatası
4. **Market/Country Çakışması** - Vergi ve commission hatası
5. **Kontrat Statüsü Tanımlanmaması** - Revenue distortion
6. **Eksik Veri Girişi** - Operasyonel kaos
7. **Yanlış Acente Seçimi** - Commission reconciliation
8. **Yanlış Ülke Seçimi** - Multi-currency sorunları

---

## 📚 Case Studies

### 1. "ADR Katili" Vakası
**Senaryo:** 15 odalık grup tek odaya  
**Sonuç:** ADR 150.000 TL/gece (hatalı)  
**Çözüm:** Split modu ile 15 ayrı kayıt  

### 2. "Yalancı İptal Krizi" Vakası
**Senaryo:** OTA'dan Direct'e kanal değişimi  
**Sonuç:** %45 fake iptal oranı  
**Çözüm:** "Kanal Değişikliği" nedenini seç  

### 3. "Yanlış Hedef Kitle" Vakası
**Senaryo:** Market/Country karıştırılması  
**Sonuç:** Pazarlama bütçesi yanlış bölgeye gider  
**Çözüm:** İki alanı bağımsız tutmak  

### 4. "Kâğıt Rezervasyon" Vakası
**Senaryo:** Eksik bilgi ile rez açılması  
**Sonuç:** PPG panelinde yanlış veri  
**Çözüm:** Tüm bilgileri teyit ettikten sonra girmek  

### 5. "Ücretsiz Oda Kaos" Vakası
**Senaryo:** House Use ve Complementary karıştırılması  
**Sonuç:** Vergi hesaplaması hatalı  
**Çözüm:** Her tür için doğru statü seçmek  

---

## ✅ Kontrol Listesi (Pre-Entry Checklist)

Her rezervasyon girilmeden önce kontrol et:

- [ ] Toplu rez mi? → Split/Allotment modda gir
- [ ] Ücretsiz oda? → House Use/Complementary doğru ayrımı
- [ ] Market/Country doğru? → Bağımsız alanlar
- [ ] Tüm bilgiler tam? → Ad, fiyat, ülke, yaş
- [ ] OTA iptali? → Kanal değişikliği notunu yaz

---

## 🌐 Deployment

### GitHub Pages (Otomatik)

Repo'ya push yaptığınız zaman otomatik deploy olur:

```bash
git add .
git commit -m "Update guide content"
git push origin main
# GitHub Actions otomatik build ve deploy eder
# ~ 2 dakika sonra site live olur
```

**Site URL:** https://pmapartner.github.io/pms-data-entry-guide

---

## 🤝 Katkı

Hata bulduğunuz veya gelişme öneriniz varsa:

1. **GitHub Issues:** https://github.com/PMAPARTNER/pms-data-entry-guide/issues
2. **Pull Request:** Yeni sayfalar/içerik için PR açabilirsiniz
3. **Email:** tech@pmapartner.com

---

## 📝 Lisans

© 2026 PMAPARTNER. Tüm haklı saklıdır.

---

## 📱 Ek Kaynaklar

- 🔐 [Security Audit Dashboard](https://ppg.pmapartner.com/admin/security-audit)
- 📊 [PPG Panel](https://ppg.pmapartner.com)
- 🛠️ [PMS Talimatnamesi](https://github.com/PMAPARTNER)
- 💬 [GitHub Discussions](https://github.com/PMAPARTNER/pms-data-entry-guide/discussions)

---

**Son Güncelleme:** 2026-06-16  
**Versiyon:** 1.0.0  
**Durum:** ✅ Live
