import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Pricing.module.css';

const PLANS = [
    {
        name: 'Modüler Ara Katman',
        tagline: 'Mevcut Sisteminize Güç Katın',
        description: 'Mevcut eczane otomasyonunuzu değiştirmeden, sadece Pharel\'in akıllı denetim ve asistan yeteneklerini eklemek isteyenler için.',
        features: [
            'SUT Denetim Asistanı',
            'Akıllı Sistem Entegrasyonu',
            'Her Otomasyona Uyumlu Ara Katman',
            'Hızlı Kurulum & Kolay Kullanım'
        ],
        type: 'MODÜL SEÇENEĞİ',
        isPopular: false
    },
    {
        name: 'Tam Akıllı Dönüşüm',
        tagline: 'Uçtan Uca Dijital Eczane',
        description: 'Eczanesini baştan sona bulut tabanlı, yapay zeka destekli ve mobil erişilebilir bir sistemle yönetmek isteyen vizyoner eczacılar için.',
        features: [
            'Gelişmiş Yapay Zeka Asistanı',
            'Akıllı Miad & Stok Optimizasyonu',
            'Bulut Veri Güvenliği & Yedekleme',
            '7/24 Web ve Mobil Erişim'
        ],
        type: 'TAM ÇÖZÜM',
        isPopular: true
    },
    {
        name: 'Kurumsal & Özel',
        tagline: 'İhtiyaca Özel Yapılandırma',
        description: 'Büyük ölçekli eczaneler ve özel entegrasyon gereksinimi olan yapılar için modüllerimizi ihtiyaca göre terzi dikim kurguluyoruz.',
        features: [
            'Büyük Ölçekli Operasyon Desteği',
            'Özel Yazılım Entegrasyonları',
            'VIP Teknik Destek ve Eğitim',
            'Sınırsız Terminal Yapılandırması'
        ],
        type: 'ÖZEL KURGU',
        isPopular: false
    }
];

export default function Pricing() {
    const [showSingleDetails, setShowSingleDetails] = useState(false);

    return (
        <section className={styles.pricingSection} id="pricing">
            <div className={`container ${styles.container}`}>
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        İhtiyacınıza Göre <br />
                        <span className={styles.serif}>Modüler Kurgulayın</span>
                    </h2>
                    <p className={styles.subtitle}>
                        Henüz kurulum aşamasındayız; Pharel'in esnek yapısı sayesinde eczaneniz için en doğru kullanım senaryosunu birlikte tasarlayabiliriz.
                    </p>
                </div>

                <div className={styles.grid}>
                    {/* Single Products Card (Interactive) - Now at the beginning */}
                    <div className={`${styles.card} ${styles.singleCard}`}>
                        <div className={styles.planType}>TEKİL ÜRÜNLER</div>
                        <div className={styles.cardHeader}>
                            <h3 className={styles.planName}>Nokta Atışı Çözümler</h3>
                            <div className={styles.tagline}>Sadece İhtiyacınız Olanı Seçin</div>
                            <p className={styles.planDesc}>Tüm sistemi almak yerine, Pharel'in güçlü modüllerine tekil olarak sahip olabilirsiniz.</p>
                        </div>

                        <div className={styles.singleAction}>
                            <button
                                onClick={() => setShowSingleDetails(!showSingleDetails)}
                                className={styles.detailsToggle}
                            >
                                {showSingleDetails ? 'Detayları Gizle ↑' : 'Tüm Modülleri Gör ↓'}
                            </button>

                            {showSingleDetails && (
                                <div className={styles.detailsArea}>
                                    <ul>
                                        <li>SUT Denetim Modülü</li>
                                        <li>Stok & Miad Modülü</li>
                                        <li>Akıllı Satın Alma</li>
                                        <li>Dijital Reçete Asistanı</li>
                                    </ul>
                                </div>
                            )}
                        </div>

                        <Link to="/coming-soon" className={styles.planBtn}>Demo ve Bilgi Al</Link>
                    </div>

                    {PLANS.map((plan, idx) => (
                        <div key={idx} className={`${styles.card} ${plan.isPopular ? styles.popular : ''}`}>
                            <div className={styles.planType}>{plan.type}</div>
                            <div className={styles.cardHeader}>
                                <h3 className={styles.planName}>{plan.name}</h3>
                                <div className={styles.tagline}>{plan.tagline}</div>
                                <p className={styles.planDesc}>{plan.description}</p>
                            </div>

                            <ul className={styles.featureList}>
                                {plan.features.map((f, i) => (
                                    <li key={i}>
                                        <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                                        {f}
                                    </li>
                                ))}
                            </ul>

                            <Link to="/coming-soon" className={styles.planBtn}>Demo ve Bilgi Al</Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
