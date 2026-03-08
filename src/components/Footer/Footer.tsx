import styles from './Footer.module.css';

const FOOTER_COLUMNS = [
    {
        title: 'Çözümler',
        links: ['SUT Denetimi', 'Akıllı Asistan', 'Stok Optimizasyonu', 'Miad Yönetimi', 'Medula Entegrasyonu', 'Bulut Yedekleme', 'CRM & İletişim', 'Karlılık Analizi']
    },
    {
        title: 'Kullanım',
        links: ['Modüler Asistan', 'Tam Akıllı Dönüşüm', 'Özel Entegrasyonlar', 'Web Erişimi', 'Mobil Panel', 'Eczane Panel']
    },
    {
        title: 'Kurumsal',
        links: ['Hakkımızda', 'Vizyonumuz', 'Teknoloji', 'Güvenlik', 'İş Ortakları']
    },
    {
        title: 'Kaynaklar',
        links: ['Kullanım Kılavuzu', 'Yapay Zeka Rehberi', 'SUT Değişiklikleri', 'Eczacılık 4.0', 'Tüm Kaynaklar']
    },
    {
        title: 'Şirket',
        links: ['İletişim', 'Kariyer', 'Destek Merkezi', 'Yasal Uyum', 'KVKK']
    }
];

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerTop}`}>
                <div className={styles.linksGrid}>
                    {FOOTER_COLUMNS.map((col, i) => (
                        <div key={i} className={styles.linkCol}>
                            <h4>{col.title}</h4>
                            <ul>
                                {col.links.map((link, j) => (
                                    <li key={j}><a href="#">{link}</a></li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className={`container ${styles.footerBottom}`}>
                <div className={styles.bottomBrandArea}>
                    <div className={styles.logo}>
                        <span className={styles.brand}>Pharel</span>
                    </div>
                    <div className={styles.copyright}>
                        &copy; {new Date().getFullYear()} Pharel. Tüm hakları saklıdır.
                    </div>
                </div>

                <div className={styles.bottomSocialArea}>
                    <a href="#" className={styles.linkedinLink} aria-label="LinkedIn">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
}
