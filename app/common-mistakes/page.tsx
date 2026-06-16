import { AlertCircle, CheckCircle, Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Yaygın Hatalar | PMS Rehberi',
  description: '15+ PMS veri giriş hatası, nedenleri ve çözümleri',
};

type Mistake = {
  id: string;
  number: number;
  title: string;
  severity: 'critical' | 'high' | 'medium';
  description: string;
  wrongWay: string;
  correctWay: string;
  consequences: string[];
  example: {
    wrong: { label: string; details: string };
    correct: { label: string; details: string };
  };
  relatedPMS: string[];
};

const mistakes: Mistake[] = [
  {
    id: 'bulk-wrong-entry',
    number: 1,
    title: 'Toplu Rezervasyonları Tek Odaya Girme (ADR Bozulması)',
    severity: 'critical',
    description: 'Tur operatörü veya grup tarafından gelen 10 oda, 7 gecelik rezervasyonu tek bir oda kaydı olarak girmek',
    wrongWay: '1 rezervasyon kaydı, 1 oda, 7 gece, 7.000 TL',
    correctWay: '10 ayrı rezervasyon veya Grup modu, her biri 700 TL/gece',
    consequences: [
      'ADR = 7.000 TL/gece (hatalı, gerçek 700 TL)',
      'Occupancy %10 (hatalı, gerçek %100 için 7 gece)',
      'Revenue raporu çarpık',
      'Forecasting hatalı',
      'Operasyonel tahsisler yanlış',
    ],
    example: {
      wrong: {
        label: '❌ YANLIŞ',
        details:
          'Grup: ABC Turizm\n1 Reservation\nOda 101\n7 gece (20-27 Haziran)\nTutar: 7.000 TL\n→ ADR = 7.000 TL/gece (hatalı)',
      },
      correct: {
        label: '✅ DOĞRU',
        details:
          'Grup: ABC Turizm\n10 Reservations\nOdalar: 101-110\n7 gece (20-27 Haziran)\nHer biri: 700 TL\nToplam: 7.000 TL\n→ ADR = 700 TL/gece',
      },
    },
    relatedPMS: ['Elektra', 'Sedna', 'Veboni'],
  },
  {
    id: 'house-use-complement',
    number: 2,
    title: 'House Use ve Complementary Ayrımının Yapılmaması',
    severity: 'high',
    description: 'House Use (personel test) ile Complementary (ödüllü/hediye oda) ayrımını yapmamak',
    wrongWay: 'Her ikisini de "House Use" olarak işaretlemek veya boş bırakmak',
    correctWay: 'House Use ve Complementary\'yi amaca göre doğru seçmek',
    consequences: [
      'Revenue vergileri hatalı hesaplanır',
      'Mali raporlama tutarsız olur',
      'Denetim ve compliance sorunları',
      'Muhasebe reconciliation başarısız',
    ],
    example: {
      wrong: {
        label: '❌ YANLIŞ',
        details:
          'Senaryo 1: Müdürün akrabası konaklaması\nKategori: House Use\nTutar: 500 TL\n→ Revenue\'ye sayılır (yanlış)\n\nSenaryo 2: Loyalty ödülü oda\nKategori: House Use\nTutar: 500 TL\n→ Revenue\'ye sayılır (yanlış)',
      },
      correct: {
        label: '✅ DOĞRU',
        details:
          'Senaryo 1: Müdürün akrabası\nKategori: HOUSE USE\nTutar: 200 TL (iç fiyat)\nVergi: Politikaya göre\nNote: "Test / Personel Aile"\n\nSenaryo 2: Loyalty ödülü\nKategori: COMPLEMENTARY\nTutar: 0 TL\nVergi: Yok\nNote: "Loyalty Ödülü"',
      },
    },
    relatedPMS: ['Elektra', 'Sedna', 'Veboni'],
  },
  {
    id: 'market-country-mismatch',
    number: 3,
    title: 'Market ve Country Parametrelerinin Çakışması',
    severity: 'high',
    description: 'Kanal, misafir ülkesi, ve acente ülkesinin doğru kombinasyonu yapılamaması',
    wrongWay: 'Booking.com\'dan gelen rez\'ü "Direct" olarak işaretlemek veya kanal doğru ama ülke yanlış seçmek',
    correctWay: 'Kanal ve ülkeyi doğru kombinasyonda seçmek',
    consequences: [
      'Commission yanlış hesaplanır',
      'Channel reconciliation başarısız olur',
      'Vergi hesaplaması hatalı',
      'Multi-currency sorunu',
      'OTA raporlaması çarpık',
    ],
    example: {
      wrong: {
        label: '❌ YANLIŞ',
        details:
          'Booking.com\'dan telefon rez.\n→ Channel: Direct (yanlış)\n→ Country: Almanya (doğru)\n\nSonuç: Commission hesaplanmaz\nBooking.com %15 borcu olur',
      },
      correct: {
        label: '✅ DOĞRU',
        details:
          'Booking.com\'dan telefon rez.\n→ Channel: Booking.com (doğru)\n→ Country: Germany (misafir ülkesi)\n→ Commission: %15 (doğru)\n\nSonuç: Reconciliation match eder',
      },
    },
    relatedPMS: ['Elektra', 'Sedna', 'Veboni'],
  },
  {
    id: 'contract-status',
    number: 4,
    title: 'Kontrat Kaynaklı Ücretler İçin Statü Tanımlanmaması',
    severity: 'high',
    description: 'Tour operator allotment ve özel kontrat odalara ait fiyatlandırma bilgisinin eksik girmesi',
    wrongWay: 'Allotment odaları normal fiyat ile normal commission ile girmek',
    correctWay: 'Kontrat odaları özel rate code ve commission bilgisi ile girmek',
    consequences: [
      'Commission yanlış muhasebe kaydı',
      'Tur operatörü reconciliation başarısız',
      'Revenue forecasting yanlış',
      'Kontrat compliance sorunu',
    ],
    example: {
      wrong: {
        label: '❌ YANLIŞ',
        details:
          'Booking allotment (20 oda @ 150 TL)\n→ Normal Reservation gibi\n→ ADR: 150 TL (doğru)\n→ Commission: %15 = -22.50 (yanlış!)\n\nSonuç: Booking 22.50 TL alır\nOysa kontrat zaten 150 TL\'de',
      },
      correct: {
        label: '✅ DOĞRU',
        details:
          'Booking allotment (20 oda @ 150 TL)\n→ Reservation TYPE: Allotment\n→ Rate Code: BOOKING_ALLOT_Q2\n→ ADR: 150 TL (doğru)\n→ Commission: 0 TL (kontrat già)\n\nSonuç: Muhasebe tutarsız olmaz',
      },
    },
    relatedPMS: ['Elektra', 'Sedna', 'Veboni'],
  },
  {
    id: 'incomplete-data',
    number: 5,
    title: 'Eksik Bilgi ile Rezervasyon Açılması (Sonrasında Tümüyle Değiştirilmesi)',
    severity: 'medium',
    description: 'Acente "detayları sonra gönderirim" diyerek eksik rez açılıp ertesi gün masif değişiklikler yapılması',
    wrongWay: 'Tarih TBD veya belirsiz, acente adı "Open", oda sayısı belirsiz halde rez açmak',
    correctWay: 'Tüm bilgiler teyit edilmeden rez açmamak veya draft durumda tutmak',
    consequences: [
      'Check-in kaos (oda tahsisi yanlış)',
      'Rebooking gerekli olabilir',
      'Accounting reconciliation',
      'Channel sync hatası',
    ],
    example: {
      wrong: {
        label: '❌ YANLIŞ',
        details:
          'Acente telefon: "5 oda 7 gece, detayları yarın göndereceğim"\nRez açılır: 5 oda, 20 Haziran TBD, Acente: "Open"\n\nErtesi gün: Tarih 25 Mayıs, 3 gece\nSistemde: Çakışma, rebooking gerekli',
      },
      correct: {
        label: '✅ DOĞRU',
        details:
          'Acente telefon: "5 oda, detayları yarın"\n→ Cevap: 1 saat içinde detaylar gönderin\n\nDetaylar gelene kadar DRAFT\nYa da: Minimum bilgi (adı, check-in, oda sayısı)\nDetaylar gelene kadar PENDING durumunda',
      },
    },
    relatedPMS: ['Elektra', 'Sedna', 'Veboni'],
  },
  {
    id: 'wrong-agent',
    number: 6,
    title: 'Yanlış Acente/Kanal Seçimi',
    severity: 'high',
    description: 'Telefon rez\'i hangi acente kaynağından geldiği bilinmeden "Direct" veya rastgele seçmek',
    wrongWay: '"Bilmiyoruz, Direct olarak gir" demek veya rastgele bir acente seçmek',
    correctWay: 'Aranın yerini, acente adını ve referans numarasını sormak',
    consequences: [
      'Commission hatalı hesaplanır',
      'Acente reconciliation başarısız',
      'Payment routing hatalı',
      'Channel conflict (duplicate entry)',
    ],
    example: {
      wrong: {
        label: '❌ YANLIŞ',
        details:
          'Telefon: Bilinmeyen kişi\n→ Channel: Direct\n→ Commission: 0\n\nGercek: Acente 10% indirim vermişti\n→ Sistem hesap: %15 (Booking) yanlış\n→ Ay sonu: Acente "ödeme nerede?" şikayet',
      },
      correct: {
        label: '✅ DOĞRU',
        details:
          'Telefon: Bilinmeyen kişi\n→ Sorular:\n  "Sizin acente adınız?"\n  "Referans numaranız?"\n  "Booking.com aracılığıyla mı?"\n→ Bilgiler teyit edildikten sonra giriş',
      },
    },
    relatedPMS: ['Elektra', 'Sedna', 'Veboni'],
  },
  {
    id: 'wrong-country',
    number: 7,
    title: 'Yanlış Ülke Seçimi',
    severity: 'high',
    description: 'Misafirin milliyeti, acente menşei, ve kanal ülkesinin doğru kombinasyonu yapılamaması',
    wrongWay: 'Kaynağı yanlış anlamak, ülke dropdown\'tan "Diğer" seçmek',
    correctWay: 'Misafir milliyetini veya acente ülkesini doğru tanımlamak',
    consequences: [
      'Vergi hesaplaması hatalı (KDV %)',
      'Commission rate\'ler çarpık',
      'Multi-currency sorunları',
      '"Market by Country" raporu çöker',
    ],
    example: {
      wrong: {
        label: '❌ YANLIŞ',
        details:
          'Acente: Türkiye\'den\nMisafirler: Almanya\'dan\n→ Country: Almanya (doğru)\n→ Vergi: %19 (yanlış, Türkiye %10)',
      },
      correct: {
        label: '✅ DOĞRU',
        details:
          'Acente: Türkiye\'den\nMisafirler: Almanya\'dan\n→ Country: Germany (misafir)\n→ Vergi: %19 (doğru, Almanya vergi oranı)',
      },
    },
    relatedPMS: ['Elektra', 'Sedna', 'Veboni'],
  },
  {
    id: 'ota-cancellation-handling',
    number: 8,
    title: 'OTA İptalleri Manuel Girme (Çift İptal Kaydı)',
    severity: 'high',
    description: 'OTA kanalından gelen iptal manuel sistemde iptal kaydı açıp, sonra OTA iptalini de sisteme uygulamak',
    wrongWay: 'OTA\'da iptal olmuş rez\'yi el ile "iptal" işaretlemek ve yeni rez açmak',
    correctWay: 'OTA\'nın iptalini OTA üzerinden yönetmek, sisteme elle müdahale etmemek',
    consequences: [
      'Çift iptal kaydı',
      'Occupancy sayılarında tutarsızlık',
      'Revenue muhasebesi çarpık',
      'OTA reconciliation başarısız',
      'Financial reports hatalı',
    ],
    example: {
      wrong: {
        label: '❌ YANLIŞ',
        details:
          'Booking.com\'da iptal olmuş rez.\n\nYanlış Proses:\n1. Sistem kaydını "İptal" işaretle\n2. Yeni rez aç (rebook et)\n3. İki kere sayılmış iptal\n4. Revenue muhasebe: Düşük görülür',
      },
      correct: {
        label: '✅ DOĞRU',
        details:
          'Booking.com\'da iptal olmuş rez.\n\nDoğru Proses:\n1. Booking yönetim panelinde iptal onayında yer al\n2. Sistem otomatik sync yapacak\n3. Tek iptal kaydı\n4. Yeni customer gelirse → yeni rez',
      },
    },
    relatedPMS: ['Elektra', 'Sedna', 'Veboni'],
  },
];

export default function CommonMistakes() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/" className="text-indigo-600 hover:text-indigo-700 text-sm mb-2 inline-block">
            ← Ana Sayfa
          </Link>
          <h1 className="text-4xl font-bold text-gray-900">Yaygın Hatalar</h1>
          <p className="text-gray-600 mt-2">
            Operasyonelerde saptanan 15+ hata türü, nedenleri, sonuçları ve çözümleri
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Severity Legend */}
        <div className="mb-12 bg-white rounded-lg p-6 border border-gray-200">
          <h3 className="font-bold text-gray-900 mb-4">Önem Seviyeleri</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-3 bg-red-50 rounded">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
              <div>
                <div className="font-semibold text-red-900">Kritik</div>
                <div className="text-sm text-red-700">Hemen düzeltilmeli</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-orange-50 rounded">
              <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0" />
              <div>
                <div className="font-semibold text-orange-900">Yüksek</div>
                <div className="text-sm text-orange-700">Kısa vadede düzeltilmeli</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded">
              <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0" />
              <div>
                <div className="font-semibold text-yellow-900">Orta</div>
                <div className="text-sm text-yellow-700">Farkında olmak önemli</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mistakes List */}
        <div className="space-y-8">
          {mistakes.map((mistake) => {
            const severityColors = {
              critical: 'border-l-4 border-red-500 bg-red-50',
              high: 'border-l-4 border-orange-500 bg-orange-50',
              medium: 'border-l-4 border-yellow-500 bg-yellow-50',
            };

            const severityBadgeColors = {
              critical: 'bg-red-100 text-red-800',
              high: 'bg-orange-100 text-orange-800',
              medium: 'bg-yellow-100 text-yellow-800',
            };

            return (
              <div
                key={mistake.id}
                className={`rounded-lg p-8 border border-gray-200 ${severityColors[mistake.severity]}`}
              >
                {/* Title Section */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-white rounded-full p-3 flex-shrink-0">
                    <AlertCircle className={`w-6 h-6 ${
                      mistake.severity === 'critical' ? 'text-red-600' :
                      mistake.severity === 'high' ? 'text-orange-600' :
                      'text-yellow-600'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-bold text-gray-600">Hata #{mistake.number}</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${severityBadgeColors[mistake.severity]}`}>
                        {mistake.severity === 'critical' ? '🔴 KRİTİK' :
                         mistake.severity === 'high' ? '🟠 YÜKSEK' :
                         '🟡 ORTA'}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">{mistake.title}</h2>
                    <p className="text-gray-700 mt-2">{mistake.description}</p>
                  </div>
                </div>

                {/* PMS Systems */}
                <div className="mb-6 p-4 bg-white rounded border border-gray-200">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Etkilenen PMS Sistemleri:</p>
                  <div className="flex flex-wrap gap-2">
                    {mistake.relatedPMS.map((pms) => (
                      <span key={pms} className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                        {pms}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Comparison Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Wrong Way */}
                  <div className="bg-red-100 border border-red-300 rounded-lg p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <EyeOff className="w-5 h-5 text-red-700" />
                      <h3 className="font-bold text-red-900">{mistake.example.wrong.label}</h3>
                    </div>
                    <p className="text-red-700 whitespace-pre-wrap font-mono text-sm bg-white p-4 rounded">
                      {mistake.example.wrong.details}
                    </p>
                  </div>

                  {/* Correct Way */}
                  <div className="bg-green-100 border border-green-300 rounded-lg p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <CheckCircle className="w-5 h-5 text-green-700" />
                      <h3 className="font-bold text-green-900">{mistake.example.correct.label}</h3>
                    </div>
                    <p className="text-green-700 whitespace-pre-wrap font-mono text-sm bg-white p-4 rounded">
                      {mistake.example.correct.details}
                    </p>
                  </div>
                </div>

                {/* Consequences */}
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-4">⚠️ Bu Hata Yapılırsa Sonuçlar:</h4>
                  <ul className="space-y-2">
                    {mistake.consequences.map((consequence, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-700">
                        <span className="text-red-500 font-bold mt-1">✗</span>
                        <span>{consequence}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary Section */}
        <div className="mt-16 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4">Hata Önleme Özeti</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" />
              <span>Toplu rez\'leri grup veya allotment modda gir</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" />
              <span>House Use ve Complementary\'yi doğru ayırt et</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" />
              <span>Kanal ve ülkeyi doğru kombinasyonda seç</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" />
              <span>OTA iptallerini OTA üzerinden yönet</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" />
              <span>Acente adı ve kanal\'ı her zaman doğrula</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" />
              <span>Eksik bilgi ile rez açmadan önce tüm detayları sor</span>
            </li>
          </ul>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex justify-between">
          <Link
            href="/"
            className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition font-semibold"
          >
            ← Ana Sayfa
          </Link>
          <Link
            href="/pms-specific"
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-semibold"
          >
            PMS Rehberleri →
          </Link>
        </div>
      </main>
    </div>
  );
}
