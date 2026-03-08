import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import logoImg from '../../assets/logo/logo.png';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
            <div className={`container ${styles.navWrapper}`}>
                <div className={styles.logo}>
                    <Link to="/">
                        <img src={logoImg} alt="Pharel Logo" className={styles.logoImage} />
                        <span className={styles.brandName}><span className={styles.pharelBrand}>Pharel</span></span>
                    </Link>
                </div>

                <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
                    <ul className={styles.navList}>
                        <li><Link to="/coming-soon" onClick={() => setIsOpen(false)}>Özellikler</Link></li>
                        <li><Link to="/coming-soon" onClick={() => setIsOpen(false)}>Modüller</Link></li>
                        <li><Link to="/coming-soon" onClick={() => setIsOpen(false)}>Paketler</Link></li>
                        <li>
                            <Link to="/coming-soon" className={styles.ctaBtn}>Ücretsiz Demo</Link>
                        </li>
                    </ul>
                </nav>

                <button
                    className={styles.hamburger}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className={isOpen ? styles.lineOpen1 : styles.line1}></span>
                    <span className={isOpen ? styles.lineOpen2 : styles.line2}></span>
                    <span className={isOpen ? styles.lineOpen3 : styles.line3}></span>
                </button>
            </div>
        </header>
    );
}
