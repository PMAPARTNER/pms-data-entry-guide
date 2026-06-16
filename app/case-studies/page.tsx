import { TrendingDown, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Case Studies | PMS Rehberi',
  description: 'Gerçek senaryolar ve çözümleri',
};

const cases = [
  {
    id: 'adr-killer',
    number: 1,
    title: '"ADR Katili" Vakası - Toplu Rezervasyon Hatası',
    icon: TrendingDown,
    scenario: {
      setup: 'Yerel tur operatörü, 15 odalık spor grubu satışı (Toplam: 150.000 TL)',
      mistake: 'Tek kayıt: Oda 101, 30 kişi, 150.000 TL',
      period: '3 gece (20-23 Mayıs)',
    },
    impact: {
      occupancy: 'Sistem: 1 Oda (yanlış) → Gerçek: 15 Oda',
      adr: 'ADR: 150.000 TL/gece (hatalı) → Gerçek: 10.000 TL/gece',
      revpar: 'Tüm raporlar çöp olur',
    },
    solution: {
      steps: [
        'Allotment/Grup blokajı aç (PMS Grup Modu)',
        '15 ayrı fiziksel odaya SPLIT et (101-115)',
        'Fiyat: 10.000 TL × 3 gece / 15 oda = 2.000 TL/oda/gece',
        'Her odaya ayrı rezervasyon kaydı',
      ],
    },
    result: {
      occupancy: '✓ Sistem: 15 Oda (doğru)',
      adr: '✓ ADR: 10.000 TL/gece (doğru)',
      reporting: '✓ Tüm raporlar tutarlı',
    },
  },
  {
    id: 'fake-cancellation',
    number: 2,
    title: '"Yalancı İptal Krizi" Vakası - OTA Kanal Değişimi',
    icon: TrendingDown,
    scenario: {
      setup: 'Expedia üzerinden 5 gecelik rezervasyon (200 EUR)',
      mistake: 'Misafir arayıp "Doğrudan sizden alacağım" der → Ön büro Expedia rez\'i iptal eder',
      period: 'Ayda 50 kez yaşanıyor',
    },
    impact: {
      cancellation_rate: 'OTA İptal Oranı: +5% (ayda 50 fake kayıp)',
      false_signal: 'PPG: "Expedia malı değil, acenteden kayıplar var!" ⚠️',
      decision: 'Yönetim: Expedia fiyatlarını düşürmek için bütçe kesiyor (YANLIŞ)',
    },
    solution: {
      steps: [
        'Eski Expedia rez\'ini "İptal" değil',
        '**"Kanal Değişikliği / Direkt\'e Döndü"** seç',
        'Yeni direkt rezervasyon aç',
        'PPG bunu satış dönüşümü olarak kaydeder',
      ],
    },
    result: {
      cancellation_rate: '✓ OTA İptal Oranı: -5% (gerçekçi)',
      direct_booking: '✓ Direkt Satış (Direct Booking): +1 (doğru)',
      decision: '✓ Yönetim doğru kararlar alır',
    },
  },
  {
    id: 'wrong-market-country',
    number: 3,
    title: '"Yanlış Hedef Kitle" Vakası - Market/Country Hatası',
    icon: AlertTriangle,
    scenario: {
      setup: 'TUI UK\'den rezervasyon: T.C. vatandaşı, İngiltere\'de iş yapan misafir',
      mistake: 'Market: İç Pazar | Country: Türkiye',
      period: '1 konaklama',
    },
    impact: {
      market_data: 'TUI UK\'nin üretimi eksik görünür',
      internal_market: 'İç pazarın verisi yapay olarak şişer',
      budget: 'Pazarlama bütçesi yanlış bölgeye ayrılır',
    },
    solution: {
      steps: [
        'Market: UK / Avrupa (Satışın geldiği ticari bölge)',
        'Country: Turkey (Misafir T.C. vatandaşı)',
        'Acente: TUI UK (tam kod)',
        'İki alan birbirinden bağımsız tutulmalı',
      ],
    },
    result: {
      market_data: '✓ TUI UK verisi doğru kaydedilir',
      budget: '✓ Pazarlama bütçesi doğru yere gider',
      reporting: '✓ Pazar analizi tutarlı ve güvenilir',
    },
  },
  {
    id: 'dummy-booking',
    number: 4,
    title: '"Kâğıt Rezervasyon" Vakası - Eksik Veri Girişi',
    icon: AlertTriangle,
    scenario: {
      setup: 'Acente: "Adını TBA yazın, fiyatı boş bırakın, check-in günü düzeltirim"',
      mistake: 'Rez: Oda 201, Ad: TBA, Fiyat: Boş, Country: Boş',
      period: 'O anda PPG paneline yansıyor',
    },
    impact: {
      realtime: 'PPG anlık olarak veriyi çeker, yönetim yanlış bilgi alır',
      forecast: 'Gün sonu Forecast raporunda fantastik rakamlar',
      chaos: 'Bir saat sonra "TBA" yerine "John Smith" girilirse, başka bir satış gibi görünür',
    },
    solution: {
      steps: [
        'Rez açmadan önce TÜM bilgileri al:',
        '- Tam isim ve soyadı',
        '- Acente adı ve kodu',
        '- Nihai fiyat',
        '- Yetişkin/çocuk sayısı',
        '- Misafir ülkesi (Country)',
        'Eksik bilgi varsa Status: **PENDING** yapıp bilgiler gelene kadar bekle',
      ],
    },
    result: {
      data_quality: '✓ PPG panelleri gerçek veri alır',
      forecast: '✓ Gün sonu Forecast doğru',
      operations: '✓ Operasyon kaosu yaşanmaz',
    },
  },
  {
    id: 'house-use-comp',
    number: 5,
    title: '"Ücretsiz Oda Kaos" Vakası - House Use vs Complementary',
    icon: AlertTriangle,
    scenario: {
      setup: 'İki ayrı ücretsiz oda kaydı yapılıyor',
      mistake: 'Müdürün akrabası: House Use | Loyalty ödülü: House Use (her ikisi de)',
      period: '1 ay',
    },
    impact: {
      revenue: 'Revenue: 0 TL (doğru)',
      tax: 'Vergi hesaplaması çöp (House Use vergilendirilir, Comp hayır)',
      compliance: 'Denetim: "Neden 15 gece ücretsiz oda verdinizan?" (Müdür kapalı tutamalıydı)',
    },
    solution: {
      steps: [
        'Müdürün akrabası → HOUSE USE (0 TL, Vergi: Kontrol edilir)',
        'Loyalty ödülü → COMPLEMENTARY (0 TL, Vergi: Yok)',
        'Influencer → HOUSE USE (200 TL iç fiyat, Vergi: Kontrol)',
        'Her tür için açıklayıcı note ekle',
      ],
    },
    result: {
      revenue: '✓ Revenue doğru',
      tax: '✓ Vergiler doğru hesaplanır',
      compliance: '✓ Audit ready',
    },
  },
];

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/" className="text-indigo-600 hover:text-indigo-700 text-sm mb-2 inline-block">
            ← Ana Sayfa
          </Link>
          <h1 className="text-4xl font-bold text-gray-900">Case Studies</h1>
          <p className="text-gray-600 mt-2">
            Gerçek senaryolar, hataların sonuçları ve optimum çözümleri
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-12">
          {cases.map((caseItem) => {
            const Icon = caseItem.icon;
            return (
              <div key={caseItem.id} className="bg-white rounded-lg border-l-4 border-indigo-500 shadow-lg overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-6">
                  <div className="flex items-start gap-4">
                    <Icon className="w-8 h-8 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="text-sm font-semibold opacity-90">Vaka #{caseItem.number}</div>
                      <h2 className="text-2xl font-bold">{caseItem.title}</h2>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-8">
                  {/* Scenario */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <h4 className="font-bold text-blue-900 mb-2">🎬 Senaryo</h4>
                      <div className="text-sm text-blue-800 space-y-1">
                        {Object.entries(caseItem.scenario).map(([key, value]) => (
                          <div key={key}>
                            <span className="font-semibold capitalize">{key}:</span>
                            {' '}
                            {String(value)}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                      <h4 className="font-bold text-red-900 mb-2">❌ Hatalar</h4>
                      <div className="text-sm text-red-800 space-y-1">
                        {Object.entries(caseItem.impact).map(([key, value]) => (
                          <div key={key}>
                            <span className="font-semibold capitalize">{key.replace('_', ' ')}:</span>
                            {' '}
                            {String(value)}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <h4 className="font-bold text-green-900 mb-2">✅ Çözüm</h4>
                      <ul className="text-sm text-green-800 space-y-1">
                        {caseItem.solution.steps.slice(0, 3).map((step, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                            <span>{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Full Solution Steps */}
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h4 className="font-bold text-green-900 mb-4">🎯 Adım Adım Çözüm</h4>
                    <ol className="space-y-3">
                      {caseItem.solution.steps.map((step, idx) => (
                        <li key={idx} className="flex gap-4 text-green-800">
                          <span className="font-bold flex-shrink-0 text-green-600">{idx + 1}.</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* Results */}
                  <div className="bg-gradient-to-r from-green-100 to-emerald-100 border border-green-300 rounded-lg p-6">
                    <h4 className="font-bold text-green-900 mb-4">📊 Sonuçlar</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(caseItem.result).map(([key, value]) => (
                        <div key={key} className="flex items-start gap-3">
                          <TrendingUp className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <div className="font-semibold text-green-900 capitalize">
                              {key.replace('_', ' ')}
                            </div>
                            <div className="text-sm text-green-800">{String(value)}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary */}
        <div className="mt-16 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4">📚 Case Studies Özeti</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-3">
              <span>→</span>
              <span>Toplu rez\'leri Split modda girmek ADR\'ı kurtarır</span>
            </li>
            <li className="flex items-start gap-3">
              <span>→</span>
              <span>Kanal değişikliğini doğru işaretlemek iptal oranlarını gerçekçi tutar</span>
            </li>
            <li className="flex items-start gap-3">
              <span>→</span>
              <span>Market ve Country\'yi doğru ayrıştırmak pazarlama bütçesini korur</span>
            </li>
            <li className="flex items-start gap-3">
              <span>→</span>
              <span>Eksik veri ile rez açmak operasyonel kaosu yaratır, önlemek en iyisidir</span>
            </li>
            <li className="flex items-start gap-3">
              <span>→</span>
              <span>House Use ve Complementary\'yi doğru ayırmak muhasebe denetimini kolaylaştırır</span>
            </li>
          </ul>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex justify-between">
          <Link
            href="/common-mistakes"
            className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition font-semibold"
          >
            ← Yaygın Hatalar
          </Link>
          <Link
            href="/checklist"
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-semibold"
          >
            Kontrol Listesi →
          </Link>
        </div>
      </main>
    </div>
  );
}
