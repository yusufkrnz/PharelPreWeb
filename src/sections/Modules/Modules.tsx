import styles from './Modules.module.css';

// Local Logos

const MODULES_DATA = [
    {
        id: 1,
        title: 'Akıllı Asistan & SUT Denetimi',
        description: 'Karmaşık SUT kurallarını analiz eder. Rapor ve reçete PDF\'lerini eczacı gözüyle denetleyerek kesinti riskini sıfırlar.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 8V4H8" /><rect width="16" height="12" x="4" y="8" rx="2" /><path d="M2 14h2" /><path d="M20 14h2" /><path d="M15 13v2" /><path d="M9 13v2" />
            </svg>
        )
    },
    {
        id: 2,
        title: 'Sistem Entegrasyonu',
        description: 'Mevcut eczane sisteminizle tam uyumlu. Resmi kurum sayfaları uygulama içinde yerleşik ve akıllı bir katman olarak çalışır.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
        )
    },
    {
        id: 3,
        title: 'Akıllı Satın Alım & Karlılık',
        description: 'En avantajlı MF ve fiyatlara anında ulaşın. Eczaneniz için en akıllı ilaç satın alma stratejilerini otomatik kurgulayın.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
        )
    },
    {
        id: 4,
        title: 'Eczaneler Arası İletişim & Takas',
        description: 'Eczaneler arası hızlı haberleşme ve çapraz satış ağı. Stok optimizasyonu ve acil ilaç takası için dijital iletişim köprüsü.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 6.1H3" /><path d="m21 12.1-4-4-4 4" /><path d="M3 17.9h14" /><path d="m3 11.9 4 4 4-4" />
            </svg>
        )
    },
    {
        id: 5,
        title: 'Akıllı Miad & Stok Takibi',
        description: 'Yaklaşan miadları önceden haber verir. Stok dengenizi AI ile optimize ederek finansal kayıpları engeller.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
            </svg>
        )
    },
    {
        id: 6,
        title: 'Güvenli Bulut Yedekleme',
        description: 'Tüm verilerinizi yüksek güvenlikli bulut altyapısına taşıyın. Veri kaybı riskini sıfırlayın ve her yerden erişin.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17.5 19A5.5 5.5 0 0 0 18 8a7 7 0 1 0-13.8 1.5A5 5 0 1 0 5 19h12.5Z" />
            </svg>
        )
    }
];

const TRUST_LOGOS: any[] = [];

export default function Modules() {
    return (
        <section className={styles.modulesSection} id="modules">
            <div className={`container ${styles.container}`}>
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        Baştan Sona <br />
                        <span className={`${styles.serif} ${styles.highlight}`}>Eczane</span> Yönetimi
                    </h2>
                    <p className={styles.subtitle}>
                        Pharel, eczanenizin tüm süreçlerini akıllandıran ve operasyonel yükünüzü hafifleten dijital bir iş ortağıdır.
                    </p>
                </div>

                <div className={styles.grid}>
                    {MODULES_DATA.map((mod) => (
                        <div key={mod.id} className={styles.card}>
                            <div className={styles.cardContent}>
                                <div className={styles.iconBox}>{mod.icon}</div>
                                <h3 className={styles.cardTitle}>{mod.title}</h3>
                                <p className={styles.cardDesc}>{mod.description}</p>
                            </div>
                            <div className={styles.cardFooter}>
                                <span className={styles.learnMore}>Detayları Gör →</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Static Trust Logos Section */}
                <div className={styles.trustLogos}>
                    {TRUST_LOGOS.map((logo, i) => (
                        <div key={i} className={styles.logoItem}>
                            <img
                                src={logo.logo}
                                alt={logo.name}
                                className={styles.trustLogo}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
