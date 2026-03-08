import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Workflow.module.css';

// Local Logos - Inputs
import pharelLogo from '../../assets/logo/logo.png';
import eczaneLogo from '../../assets/logo/eczane-logo.png';
import systemIcon from '../../assets/logo/pdf-logo.svg'; // Using as dummy generic

// Local Logos - Outputs
import excelLogo from '../../assets/logo/xlsx-file.png';
import pdfLogo from '../../assets/logo/pdf-logo.svg';
import whatsappLogo from '../../assets/logo/whatsapp-logo.svg';

type PipelineType = 'sut' | 'purchase' | 'sales';

interface PipelineConfig {
    id: PipelineType;
    tabLabel: string;
    description: string;
    inputs: Array<{ icon: any, label: string }>;
    aiTask: string;
    outputs: Array<{ id: string, icon: any, label: string, title: string, content: any }>;
}

export default function Workflow() {
    const [activePipeline, setActivePipeline] = useState<PipelineType>('sut');
    const [activeOutput, setActiveOutput] = useState<string | null>(null);

    const pipelines: PipelineConfig[] = [
        {
            id: 'sut',
            tabLabel: 'SUT Denetimi',
            description: 'Mevcut sistem ve resmi kurum verileriyle reçete PDF\'lerini eczacı gözüyle denetleyin.',
            inputs: [
                { icon: systemIcon, label: 'Resmi Sistem' },
                { icon: systemIcon, label: 'Sorgu Verisi' },
                { icon: eczaneLogo, label: 'Eczane' }
            ],
            aiTask: 'AKILLI DENETİM',
            outputs: [
                {
                    id: 'pdf', icon: pdfLogo, label: 'PDF', title: 'SUT Denetim Raporu',
                    content: <div className={styles.previewPdf}><div className={styles.pdfPage}><div className={styles.pdfTitle}>SUT DENETİM</div><div className={styles.pdfLine} /><div className={styles.pdfText}>SUT Kuralları %100 Uyumlu. 0 Kesinti Riski.</div></div></div>
                },
                {
                    id: 'whatsapp', icon: whatsappLogo, label: 'WhatsApp', title: 'Anlık Uyarı',
                    content: <div className={styles.previewWhatsapp}><div className={styles.whatsappBubble}>🔔 <b className={styles.pharelBrand}>Pharel</b>: 3 Reçete SUT uyumsuzluğu nedeniyle işaretlendi.</div></div>
                }
            ]
        },
        {
            id: 'purchase',
            tabLabel: 'Satın Alma & Stok',
            description: 'Eczanenizin satış geçmişine bakarak stok eksiklerini öngörür ve en karlı sepeti oluşturur.',
            inputs: [
                { icon: eczaneLogo, label: 'Mevcut Stok' },
                { icon: systemIcon, label: 'Satış Trendi' },
                { icon: systemIcon, label: 'Depo Verisi' }
            ],
            aiTask: 'AKILLI TEDARİK',
            outputs: [
                {
                    id: 'pdf', icon: pdfLogo, label: 'PDF', title: 'Öneri Raporu',
                    content: <div className={styles.previewPdf}><div className={styles.pdfPage}><div className={styles.pdfTitle}>SİPARİŞ ÖNERİSİ</div><div className={styles.pdfLine} /><div className={styles.pdfText}>X ilacının stoğu mevcut satış hızıyla 4 güne tükenecek. En karlı alım: Y Deposu (₺145.50 / 10+2 MF).</div></div></div>
                },
                {
                    id: 'whatsapp', icon: whatsappLogo, label: 'WhatsApp', title: 'Stok Uyarısı',
                    content: <div className={styles.previewWhatsapp}><div className={styles.whatsappBubble}>⚠️ <b className={styles.pharelBrand}>Pharel</b>: Z ilacı kritik seviyede (Kalan: 3 Kutu). Merkez depoda indirim yakaladım. Hemen sepete atılsın mı?</div></div>
                }
            ]
        },
        {
            id: 'sales',
            tabLabel: 'Satış & Analiz',
            description: 'Günlük işlemlerinizi sadeleştirerek karlılık, ciro kaybı ve stok raporları sunar.',
            inputs: [
                { icon: eczaneLogo, label: 'Satış Verisi' },
                { icon: systemIcon, label: 'Pazar Durumu' },
                { icon: eczaneLogo, label: 'E-Fatura' }
            ],
            aiTask: 'PERFORMANS',
            outputs: [
                {
                    id: 'pdf', icon: pdfLogo, label: 'PDF', title: 'Genel Analiz',
                    content: <div className={styles.previewPdf}><div className={styles.pdfPage}><div className={styles.pdfTitle}>AYLIK ÖZET</div><div className={styles.pdfLine} /><div className={styles.pdfText}>Bu ayki ilaç dışı ürün satışınız %15 arttı. Yokta olan ilaçlar yüzünden tahmini kaçan ciro: ₺4.250.</div></div></div>
                },
                {
                    id: 'excel', icon: excelLogo, label: 'Excel', title: 'Detay Raporu',
                    content: <div className={styles.previewExcel}><div className={styles.excelHeader}>Performans_Raporu.xlsx</div><table><thead><tr><th>Ürün</th><th>Aylık Satış</th><th>Stok Durumu</th></tr></thead><tbody><tr><td>İlaç X</td><td>125 Kutu</td><td>Kritik</td></tr><tr><td>İlaç Y</td><td>45 Kutu</td><td>Yeterli</td></tr></tbody></table></div>
                }
            ]
        }
    ];

    const currentPipeline = pipelines.find(p => p.id === activePipeline)!;

    const paths = {
        pc: [
            "M150,80 C350,80 350,200 500,200",
            "M150,200 L500,200",
            "M150,320 C350,320 350,200 500,200",
            "M500,200 L850,200"
        ],
        mobile: [
            "M80,80 C80,180 200,220 200,300",
            "M200,80 L200,300",
            "M320,80 C320,180 200,220 200,300",
            "M200,300 L200,520"
        ]
    };

    return (
        <section className={styles.workflowSection} id="how-it-works">
            <div className={`container ${styles.container}`}>
                <div className={styles.header}>
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className={styles.title}>
                        <span className={styles.pharelBrand}>Pharel</span> <span className={styles.smallBrand}>Akıllı İş Akışı</span>
                    </motion.h2>
                    <p className={styles.subtitle}>
                        Eczanenizin her adımında AI gücünü hissedin. İşinize uygun pipeline'ı seçin.
                    </p>

                    {/* PIPELINE SWITCHER */}
                    <div className={styles.pipelineSwitcher}>
                        {pipelines.map(p => (
                            <button
                                key={p.id}
                                className={`${styles.pipelineTab} ${activePipeline === p.id ? styles.pipelineTabActive : ''}`}
                                onClick={() => {
                                    setActivePipeline(p.id);
                                    setActiveOutput(null);
                                }}
                            >
                                {p.tabLabel}
                            </button>
                        ))}
                    </div>
                </div>

                <div className={styles.diagramArea}>
                    {/* SVG Layers */}
                    <svg className={styles.svgLayer} preserveAspectRatio="none" viewBox="0 0 1000 400">
                        <g className={styles.pcOnlyG}>
                            {paths.pc.map((d, i) => (
                                <path key={`pc-p-${i}`} d={d} className={i === 3 ? styles.lineOutput : styles.line} />
                            ))}
                            <AnimatePresence mode="wait">
                                <motion.g key={activePipeline}>
                                    {paths.pc.map((d, i) => (
                                        <motion.circle
                                            key={`pc-c-${i}-${activePipeline}`}
                                            r={i === 3 ? 5 : 4}
                                            fill={i === 3 ? "var(--color-primary)" : "#94a3b8"}
                                            style={{ offsetPath: `path('${d}')` }}
                                            animate={{ offsetDistance: "100%" }}
                                            transition={{ duration: i === 3 ? 1.5 : (3 + i * 0.5), repeat: Infinity, ease: "linear" }}
                                        />
                                    ))}
                                </motion.g>
                            </AnimatePresence>
                        </g>
                    </svg>

                    <svg className={styles.svgLayerMobile} preserveAspectRatio="none" viewBox="0 0 400 600">
                        <g className={styles.mobileOnlyG}>
                            {paths.mobile.map((d, i) => (
                                <path key={`mb-p-${i}`} d={d} className={i === 3 ? styles.lineOutput : styles.line} />
                            ))}
                            <AnimatePresence mode="wait">
                                <motion.g key={activePipeline}>
                                    {paths.mobile.map((d, i) => (
                                        <motion.circle
                                            key={`mb-c-${i}-${activePipeline}`}
                                            r={i === 3 ? 5 : 4}
                                            fill={i === 3 ? "var(--color-primary)" : "#94a3b8"}
                                            style={{ offsetPath: `path('${d}')` }}
                                            animate={{ offsetDistance: "100%" }}
                                            transition={{ duration: i === 3 ? 1.5 : (3 + i * 0.5), repeat: Infinity, ease: "linear" }}
                                        />
                                    ))}
                                </motion.g>
                            </AnimatePresence>
                        </g>
                    </svg>

                    <div className={styles.nodesOverlay}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activePipeline}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className={styles.nodesOverlay}
                            >
                                {/* INPUTS */}
                                {currentPipeline.inputs.map((input, idx) => (
                                    <div key={idx} className={`${styles.node} ${styles['in' + (idx + 1)]}`}>
                                        <div className={styles.icon} title={input.label}>
                                            <img src={input.icon} alt={input.label} />
                                        </div>
                                        <span className={styles.label}>{input.label}</span>
                                    </div>
                                ))}

                                {/* AI CENTER */}
                                <div className={styles.hubNode}>
                                    <div className={styles.hubCircle}>
                                        <img src={pharelLogo} alt="Pharel" />
                                    </div>
                                    <strong className={styles.hubTaskLabel}>{currentPipeline.aiTask}</strong>
                                </div>

                                {/* OUTPUTS */}
                                <div className={styles.outNode}>
                                    <div className={styles.outCard} onMouseLeave={() => setActiveOutput(null)}>
                                        <div className={styles.outIcons}>
                                            {currentPipeline.outputs.map((out) => (
                                                <button
                                                    key={out.id}
                                                    className={`${styles.badge} ${activeOutput === out.id ? styles.badgeActive : ''}`}
                                                    onMouseEnter={() => setActiveOutput(out.id)}
                                                    onClick={() => setActiveOutput(out.id)}
                                                >
                                                    <div className={styles.outIconWrapper}>
                                                        <img src={out.icon} alt={out.label} />
                                                    </div>
                                                    <span className={styles.label}>{out.label}</span>
                                                </button>
                                            ))}
                                        </div>
                                        <div className={styles.outTitle}>ÇIKTI MERKEZİ</div>

                                        <AnimatePresence>
                                            {activeOutput && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                    className={styles.previewOverlay}
                                                >
                                                    <div className={styles.previewContent}>
                                                        <h5>{currentPipeline.outputs.find(o => o.id === activeOutput)?.title}</h5>
                                                        {currentPipeline.outputs.find(o => o.id === activeOutput)?.content}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                <div className={styles.footerNote}>
                    <p className={styles.pipelineInfo}><strong>{currentPipeline.tabLabel}:</strong> {currentPipeline.description}</p>
                    <p className={styles.subInfo}>İstediğiniz pipeline'ı seçerek <span className={styles.pharelBrand}>Pharel</span>'in nasıl çalıştığını hemen görün.</p>
                </div>
            </div>
        </section>
    );
}
