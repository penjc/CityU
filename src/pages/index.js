import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import { useColorMode } from '@docusaurus/theme-common'; // 使用新的路径

import styles from './index.module.css';

function HeroBanner() {
    const { colorMode } = useColorMode(); // 获取当前主题模式

    return (
        <div
            className={clsx(
                styles.hero,
                colorMode === 'dark' ? styles.heroDark : styles.heroLight
            )}
        >
            <div className={styles.container}>
                <div className={styles.textContent}>
                    <h1 className={styles.title}>
                        <span className={styles.cityu}>CityU</span>
                        <span className={styles.navigator}> 手册</span>
                    </h1>
                    <p className={styles.subtitle}>
                        轻松畅游城大之旅
                    </p>
                    <Link className={clsx('button button--primary', styles.ctaButton)} to="/start">
                        开始探索 →
                    </Link>
                </div>
                <div className={styles.imageContainer}>
                    <img
                        className={styles.heroImage}
                        src="/cityU-navigator/img/cityu.png"
                        alt="CityU 插图"
                    />
                </div>
            </div>
        </div>
    );
}

function FeaturesSection() {
    const features = [
        {
            title: '课程推荐',
            imgSrc: '/cityU-navigator/img/course.svg',
            description: '根据您的兴趣和职业目标发现最适合的课程。',
        },
        {
            title: '资源中心',
            imgSrc: '/cityU-navigator/img/resource-hub.svg',
            description: '访问为城大学生精选的攻略和学习资料。',
        },
        {
            title: '职业洞察',
            imgSrc: '/cityU-navigator/img/career-insights.svg',
            description: '借助校友经验，规划您的职业未来。',
        },
    ];

    return (
        <div className={clsx(styles.section)}>
            <div className="container">
                <div className="row">
                    {features.map((feature, idx) => (
                        <div key={idx} className="col col--4 text--center">
                            <img
                                src={feature.imgSrc}
                                alt={feature.title}
                                className={styles.featureImage}
                                width="100"
                                height="100"
                            />
                            <Heading as="h3" className={styles.featureTitle}>
                                {feature.title}
                            </Heading>
                            <p className={styles.featureDescription}>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            id="homePage"
            title={`${siteConfig.title}`}
            description="您的 CityU 学术与生活指南">
            <main>
                <HeroBanner />
                <FeaturesSection />
            </main>
        </Layout>
    );
}