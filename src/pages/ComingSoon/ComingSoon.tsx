import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './ComingSoon.module.css';
import logo from '../../assets/logo/logo.png'; // Import the logo

export default function ComingSoon() {
    return (
        <div className={styles.wrapper}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className={styles.container}
            >
                <div className={styles.logoBox}>
                    <img src={logo} alt="Pharel Logo" />
                </div>

                <h1 className={styles.title}>Yakında Hizmetinizde</h1>
                <p className={styles.description}>
                    Pharel Türkiye'nin en gelişmiş yapay zeka destekli dijital eczane asistanı
                    için hazırlıklar devam ediyor. Heyecan verici özellikler yolda!
                </p>

                <div className={styles.btnBox}>
                    <Link to="/" className={styles.btnPrimary}>Anasayfaya Dön</Link>
                </div>

                <div className={styles.footer}>
                    Pharel © 2026 | Geleceğin Eczanesini Beraber Kuralım.
                </div>
            </motion.div>
        </div>
    );
}
