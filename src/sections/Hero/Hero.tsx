import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './Hero.module.css';
import logoImg from '../../assets/logo/logo.png';

const NAMES = [
    "Değerli Eczacımız",
    "Zeynep Hanım",
    "Ahmet Bey",
    "Mehmet Bey",
    "Ayşe Hanım",
    "Selim Bey",
    "Ebru Hanım",
    "Caner Bey",
    "Merve Hanım",
    "Oğuzhan Bey",
    "Selin Hanım",
    "Deniz Hanım",
    "Burak Bey",
    "Gamze Hanım",
    "Emre Bey",
    "Pelin Hanım"
];

export default function Hero() {
    const [nameIndex, setNameIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setNameIndex((prev) => (prev + 1) % NAMES.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const isFemale = NAMES[nameIndex].includes("Hanım");

    return (
        <section className={styles.hero} id="home">
            <div className={`container ${styles.heroContent}`}>

                <h1 className={styles.title}>
                    Yeni Nesil <br />
                    <span className={styles.serif}>Eczane</span> Yönetimi
                </h1>

                <p className={styles.subtitle}>
                    Türkiye'nin en gelişmiş Eczane Yönetim Platformu ve Yapay Zeka Asistanı.
                    Verilerinizi güvenle buluta taşıyın, mevcut sisteminize akıllı bir katman ekleyin.
                </p>

                <div className={styles.btnGroup}>
                    <Link to="/coming-soon" className={styles.btnPrimary}>Ücretsiz Demo</Link>
                    <Link to="/coming-soon" className={styles.btnSecondary}>Süreci Keşfet</Link>
                </div>

                {/* Accurate Dashboard Mockup based on screenshots */}
                <div className={styles.mockupContainer}>
                    <div className={styles.appWindow}>
                        {/* Top Bar with Dynamic Gender Color */}
                        <div className={`${styles.appHeader} ${isFemale ? styles.appHeaderFemale : ''}`}>
                            <div className={styles.windowControls}>
                                <span className={styles.red}></span>
                                <span className={styles.yellow}></span>
                                <span className={styles.green}></span>
                            </div>
                            <div className={styles.appTitle}><span className={isFemale ? styles.pharelBrandFemale : styles.pharelBrand}>Pharel</span> - Akıllı Eczane Yönetim Sistemi</div>
                        </div>

                        <div className={styles.appBody}>
                            {/* Left Sidebar */}
                            <div className={styles.sidebar}>
                                <div className={styles.sidebarBrand}>
                                    <div className={styles.brandLogo}>
                                        <img src="/src/assets/logo/logo.png" alt="" />
                                    </div>
                                    <div className={styles.brandText}>
                                        <strong className={isFemale ? styles.pharelBrandFemale : styles.pharelBrand}>Pharel</strong>
                                        <small>Akıllı Eczane Yönetimi</small>
                                    </div>
                                </div>
                                {/* ... rest of sideNav remains unchanged ... */}
                                <nav className={styles.sideNav}>
                                    <div className={`${styles.navItemActive} ${isFemale ? styles.navItemActiveFemale : ''}`}>
                                        <svg className={styles.navIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                                        Anasayfa
                                    </div>
                                    <div className={styles.navItem}>
                                        <svg className={styles.navIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="10" rx="2" /><circle cx="12" cy="5" r="2" /><path d="M12 7v4" /><line x1="8" y1="16" x2="8" y2="16" /><line x1="16" y1="16" x2="16" y2="16" /></svg>
                                        Asistan Marketi
                                    </div>
                                    <div className={styles.navItem}>
                                        <svg className={styles.navIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" /><path d="m8.5 8.5 7 7" /></svg>
                                        İlaçlar
                                    </div>
                                    <div className={styles.navItem}>
                                        <svg className={styles.navIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" /></svg>
                                        POS İşlemleri
                                    </div>
                                    <div className={styles.navItem}>
                                        <svg className={styles.navIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
                                        Satın Alma
                                    </div>
                                    <div className={styles.navItem}>
                                        <svg className={styles.navIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 21h18" /><path d="M3 7v1a3 3 0 0 0 6 0V7m6 0v1a3 3 0 0 0 6 0V7M6 21V10m6 11V10m6 11V10M9 3h6" /></svg>
                                        Eczanem
                                    </div>
                                    <div className={styles.navItem}>
                                        <svg className={styles.navIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                        Entegrasyonlar
                                    </div>
                                </nav>
                                <div className={styles.sidebarVersion}>v1.0.0</div>
                            </div>

                            {/* Main Area */}
                            <div className={styles.mainArea}>
                                <div className={styles.welcomeBox}>
                                    <h2 className={styles.typingHeader}>
                                        Hoş Geldiniz,{' '}
                                        <div className={styles.nameFlipper}>
                                            <AnimatePresence mode="wait">
                                                <motion.span
                                                    key={NAMES[nameIndex]}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -20 }}
                                                    transition={{ duration: 0.5 }}
                                                    className={isFemale ? styles.flipNameFemale : styles.flipName}
                                                >
                                                    {NAMES[nameIndex]}
                                                </motion.span>
                                            </AnimatePresence>
                                        </div>
                                        {' '}👋
                                    </h2>
                                    <p>Eczane yönetim panelinizde bugün işler yolunda.</p>

                                    <div className={styles.quickStats}>
                                        <div className={`${styles.statItem} ${styles.statAction}`}>
                                            <small>Dünün Z Raporu</small>
                                            <div className={`${styles.actionWithIcon} ${isFemale ? styles.actionWithIconFemale : ''}`}>
                                                <Link to="/coming-soon" className={isFemale ? styles.brandColorFemale : styles.brandColor}>Özeti Göster</Link>
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={isFemale ? "#d63384" : "var(--color-primary)"} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                                            </div>
                                        </div>
                                        <div className={styles.statItem}>
                                            <small>Bekleyen Reçete</small>
                                            <strong className={isFemale ? styles.brandColorFemale : styles.brandColor}>12 Analiz</strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* ... assistant remains same ... */}
                            <div className={styles.asistanPane}>
                                <div className={styles.asistanHeader}>
                                    <div className={styles.asistanInfo}>
                                        <div className={styles.asistanLogo}>
                                            <img src={logoImg} alt="Pharel Logo" className={styles.logoImage} />
                                        </div>
                                        <div className={styles.asistanText}>
                                            <strong className={isFemale ? styles.pharelBrandFemale : styles.pharelBrand}>Pharel</strong>
                                            <span>Asistan <small className={isFemale ? styles.statusFemale : ''}>● Çevrimiçi</small></span>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.asistanBody}>
                                    <div className={styles.chatMsg}>
                                        Merhaba! Bugün size nasıl yardımcı olabilirim? Stok durumunu kontrol edebilir veya reçete analizi yapabilirim.
                                        <time>16:53</time>
                                    </div>

                                    <div className={`${styles.chatTags} ${isFemale ? styles.chatTagsFemale : ''}`}>
                                        <Link to="/coming-soon">Dünün Z raporu</Link>
                                        <Link to="/coming-soon">Kritik stoklar</Link>
                                        <Link to="/coming-soon">Bugünkü satışlar</Link>
                                    </div>
                                </div>

                                <div className={styles.chatInput}>
                                    <span>Bir şeyler sorun...</span>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={isFemale ? "#d63384" : "#00A86B"} strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13" /><polyline points="22 2 15 22 11 13 2 9 22 2" /></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
