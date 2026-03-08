import { motion } from 'framer-motion';
import styles from './SutAnalysis.module.css';

const STEPS = [
    {
        title: 'Akıllı İş Akışı Denetimi',
        desc: 'Operasyonel süreçleriniz başladığı anda yapay zeka asistanınız tüm riskleri ve verimlilik fırsatlarını saniyeler içinde tarar.'
    },
    {
        title: 'Hata Yakalama & Risk Önleme',
        desc: 'Derin entegrasyon sayesinde manuel girilen verilerdeki tutarsızlıkları ve güncel mevzuat değişikliklerini anında yakalar.'
    },
    {
        title: 'Akıllı Hatırlatıcılar',
        desc: 'Eczanem modülü üzerinden hastaların periyodik ihtiyaçlarını takip eder ve dijital asistan üzerinden otomatik bilgilendirme yapar.'
    }
];

export default function SutAnalysis() {
    return (
        <section className={styles.featuresSection} id="features">
            <div className={`container ${styles.grid}`}>
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={styles.textContent}
                >
                    <h2 className={styles.sectionTitle}>
                        <span className={styles.accent}>Dijital Asistan ile</span><br />
                        Kusursuz Operasyon
                    </h2>
                    <p className={styles.sectionDesc}>
                        Operasyonel hataları ve finansal riskleri tamamen ortadan kaldırmak için tasarlanmış
                        Türkiye'nin ilk yapay zeka destekli dijital eczane yönetim sistemi.
                    </p>

                    <div className={styles.steps}>
                        {STEPS.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className={styles.step}
                            >
                                <div className={styles.stepNumber}>0{idx + 1}</div>
                                <div>
                                    <h3 className={styles.stepTitle}>{step.title}</h3>
                                    <p className={styles.stepDesc}>{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className={styles.visualContent}
                >
                    {/* Modern Browser Mockup */}
                    <div className={styles.browserMockup}>
                        <div className={styles.browserHeader}>
                            <div className={styles.browserControls}>
                                <div className={styles.dot} />
                                <div className={styles.dot} />
                                <div className={styles.dot} />
                            </div>
                            <div className={styles.addressBar}>
                                <span className={styles.pharelName}>Pharel</span> Cloud - Güvenli Yönetim Paneli
                                <span className={styles.status}>● Aktif</span>
                            </div>
                        </div>

                        <div className={styles.browserContent}>
                            <div className={styles.dashboardContainer}>
                                <div className={styles.sidebarPlaceholder}>
                                    <div className={styles.sideLine} />
                                    <div className={styles.sideLine} style={{ width: '70%' }} />
                                    <div className={styles.sideLine} style={{ width: '90%' }} />
                                </div>

                                <div className={styles.mainWorkArea}>
                                    <div className={styles.workflowLabel}>
                                        Akıllı İş Akışı
                                        <span className={styles.liveBadge}>Canlı Tarama</span>
                                    </div>
                                    <div className={styles.widgetGrid}>
                                        <div className={styles.dataWidget}>
                                            <div className={styles.widgetTitle}>SUT Uyumu</div>
                                            <div className={styles.progressCircle} />
                                        </div>
                                        <div className={styles.dataWidget}>
                                            <div className={styles.widgetTitle}>Risk Analizi</div>
                                            <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#333' }}>Güvenli</div>
                                            <div className={styles.statBar}>
                                                <div className={styles.statFill} />
                                            </div>
                                        </div>
                                    </div>
                                    <button className={styles.actionBtn}>Süreci Başlat</button>
                                </div>
                            </div>

                            <div className={styles.browserFooter}>Pharel İşletim Sistemi © 2026</div>
                        </div>

                        {/* Floating AI Assistant Bubble */}
                        <motion.div
                            initial={{ x: 20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className={styles.aiOverlay}
                        >
                            <div className={styles.aiTag}>+ Pharel AI</div>
                            <p>Sistem aktif. Operasyonel risk analizi tamamlandı.</p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
