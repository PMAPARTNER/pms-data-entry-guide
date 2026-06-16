import Link from 'next/link';
import {
  BookOpen,
  AlertTriangle,
  Database,
  CheckSquare,
  HelpCircle,
  ArrowRight,
  Zap,
  Users,
  FileText,
} from 'lucide-react';

export const metadata = {
  title: 'PMS Veri Giriş Rehberi | PMAPARTNER',
  description: 'Elektra, Sedna ve Veboni PMS sistemlerinde optimal veri giriş metodolojisi',
};

export default function Home() {
  const guides = [
    {
      id: 'fundamentals',
      title: 'Temel Prensipler',
      description: 'Tüm PMS sistemlerinde uygulanması gereken temel kurallar ve standartlar',
      icon: BookOpen,
      href: '/fundamentals',
      color: 'from-blue-50 to-indigo-50',
      badge: 'Başlangıç',
    },
    {
      id: 'common-mistakes',
      title: 'Yaygın Hatalar',
      description: 'Operasyonelerde saptanan 15+ hata türü, nedenleri ve çözümleri',
      icon: AlertTriangle,
      href: '/common-mistakes',
      color: 'from-orange-50 to-red-50',
      badge: 'Kritik',
    },
    {
      id: 'pms-specific',
      title: 'PMS Rehberleri',
      description: 'Elektra, Sedna ve Veboni sistemlerine özel teknik rehberler',
      icon: Database,
      href: '/pms-specific',
      color: 'from-green-50 to-emerald-50',
      badge: '3 Rehber',
    },
    {
      id: 'case-studies',
      title: 'Case Studies',
      description: 'Gerçek senaryolar ve çözümleri: tur operatörleri, OTA, corporate',
      icon: FileText,
      href: '/case-studies',
      color: 'from-purple-50 to-pink-50',
      badge: '5 Örnek',
    },
    {
      id: 'workflows',
      title: 'İş Akışları',
      description: 'Adım adım süreçler ve karar ağaçları',
      icon: Zap,
      href: '/workflows',
      color: 'from-yellow-50 to-orange-50',
      badge: 'İnteraktif',
    },
    {
      id: 'checklist',
      title: 'Kontrol Listesi',
      description: 'İndirilebilir ve yazdırılabilir günlük kontrol listesi',
      icon: CheckSquare,
      href: '/checklist',
      color: 'from-teal-50 to-cyan-50',
      badge: 'İndir',
    },
  ];

  const stats = [
    { number: '145', label: 'Doğrulanmış Hata Senaryosu' },
    { number: '3', label: 'PMS Sistemi' },
    { number: '15+', label: 'Hata Türü' },
    { number: '5', label: 'Case Study' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-lg flex items-center justify-center">
              <Database className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">PMS Rehberi</h1>
              <p className="text-xs text-gray-600">PMAPARTNER</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-gray-700 hover:text-indigo-600 transition">
              Özellikler
            </Link>
            <Link href="#faq" className="text-gray-700 hover:text-indigo-600 transition">
              SSS
            </Link>
            <a
              href="https://github.com/PMAPARTNER/pms-data-entry-guide"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-indigo-600 transition"
            >
              GitHub
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-4">
          Otel PMS Sistemlerinde Optimal Veri Giriş
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Elektra, Sedna ve Veboni PMS sistemlerinde rezervasyon giriş hatalarını önlemek için
          kapsamlı rehber. Yaygın hatalar, çözümler, ve gerçek case studies.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition"
            >
              <div className="text-3xl font-bold text-indigo-600 mb-2">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Guides */}
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Rehberler</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide) => {
            const Icon = guide.icon;
            return (
              <Link key={guide.id} href={guide.href}>
                <div
                  className={`h-full bg-gradient-to-br ${guide.color} rounded-xl p-6 border border-gray-200
                  hover:shadow-lg hover:scale-105 transition-all cursor-pointer group`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <Icon className="w-8 h-8 text-indigo-600" />
                    <span className="px-3 py-1 bg-white text-indigo-600 text-xs font-semibold rounded-full">
                      {guide.badge}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition">
                    {guide.title}
                  </h4>
                  <p className="text-gray-700 mb-4">{guide.description}</p>
                  <div className="flex items-center gap-2 text-indigo-600 font-semibold">
                    Devam Et
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Quick Facts */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <AlertTriangle className="w-12 h-12 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">15+ Hata Türü</h4>
              <p>Toplu rez, house use/complement, country/market mismatch ve daha fazla</p>
            </div>
            <div>
              <Users className="w-12 h-12 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Tüm Oteleler</h4>
              <p>Elektra, Sedna, Veboni kullanıcılarının tümü için uygun hata senaryoları</p>
            </div>
            <div>
              <Zap className="w-12 h-12 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Anında Uygulanabilir</h4>
              <p>Operasyonelerin bugün başlayabileceği pratik çözümler ve kontrol listesi</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section id="faq" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Sık Sorulan Sorular</h3>

        <div className="grid gap-4">
          {[
            {
              q: 'Toplu rezervasyonları nasıl doğru girmeliyim?',
              a: 'Toplu rez\'ler allotment modda veya grup modda girilmeli. Her oda ayrı bir satır olmalı ve ADR doğru hesaplanmalı.',
            },
            {
              q: 'House Use ve Complementary arasında fark nedir?',
              a: 'House Use personel/test konaklamadır, Complementary ödüllü/hediyelendirme amaçlı. Revenue hesaplaması ve vergilendirme farkı vardır.',
            },
            {
              q: 'OTA kanalından gelen rezervasyonlar nasıl güncellenir?',
              a: 'OTA rez\'ler kanal üzerinden güncellenmelidir. Doğrudan sistem güncellemesi iptal sayısını artırır ve reconciliation sorunlarına yol açar.',
            },
            {
              q: 'Kontrat odaları nasıl işaretlenir?',
              a: 'Kontrat odaları özel rate code ile girilmeli ve commission bilgisi hatalı hesaplanmamalıdır.',
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg p-6 border border-gray-200">
              <h5 className="font-bold text-gray-900 mb-2">❓ {item.q}</h5>
              <p className="text-gray-700">✓ {item.a}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-semibold"
          >
            Tüm Soruları Görmek <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-indigo-50 to-blue-50 border-t border-b border-gray-200 py-16 mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Hazır mısınız doğru veri girmek için?
          </h3>
          <p className="text-lg text-gray-700 mb-8">
            Temel prensiplerden başlayarak, PMS sistemine özel rehberlere ve gerçek case studylere
            kadar, tüm ihtiyacınız olan bilgi burada.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/fundamentals"
              className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-semibold"
            >
              Temel Prensipler ile Başla
            </Link>
            <a
              href="https://github.com/PMAPARTNER/pms-data-entry-guide"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition font-semibold"
            >
              GitHub'da Görüntüle
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Rehberler</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/fundamentals" className="hover:text-white transition">
                    Temel Prensipler
                  </Link>
                </li>
                <li>
                  <Link href="/common-mistakes" className="hover:text-white transition">
                    Yaygın Hatalar
                  </Link>
                </li>
                <li>
                  <Link href="/pms-specific" className="hover:text-white transition">
                    PMS Rehberleri
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Kaynaklar</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/case-studies" className="hover:text-white transition">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/workflows" className="hover:text-white transition">
                    İş Akışları
                  </Link>
                </li>
                <li>
                  <Link href="/checklist" className="hover:text-white transition">
                    Kontrol Listesi
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Destek</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/faq" className="hover:text-white transition">
                    Sık Sorulan Sorular
                  </Link>
                </li>
                <li>
                  <a href="https://ppg.pmapartner.com" className="hover:text-white transition">
                    PPG Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/PMAPARTNER/pms-data-entry-guide/issues"
                    className="hover:text-white transition"
                  >
                    Soru Sor
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">PMAPARTNER</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="https://pmapartner.com" className="hover:text-white transition">
                    Website
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/PMAPARTNER"
                    className="hover:text-white transition"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://ppg.pmapartner.com"
                    className="hover:text-white transition"
                  >
                    PPG Platform
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © 2026 PMAPARTNER. PMS Veri Giriş Rehberi - Tüm haklı saklıdır.
            </p>
            <p className="text-gray-400 text-sm">
              Yapıldığı tarih: 2026-06-16 | Sürüm: 1.0.0
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
