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
                        <span className={styles.navigator}> Navigator</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Simplifying your CityU journey.
                    </p>
                    <Link className={clsx('button button--primary', styles.ctaButton)} to="/start">
                        Get started →
                    </Link>
                </div>
                <div className={styles.imageContainer}>
                    <img
                        className={styles.heroImage}
                        src="/cityU-navigator/img/cityu.png"
                        alt="CityU Illustration"
                    />
                </div>
            </div>
        </div>

    );
}

function FeaturesSection() {
    const features = [
        {
            title: 'Course Recommendations',
            imgSrc: '/cityU-navigator/img/logo.svg',
            description: 'Discover the best courses based on your interests and career goals.',
        },
        {
            title: 'Resource Hub',
            imgSrc: '/cityU-navigator/img/resource-hub.svg',
            description: 'Access guides, tools, and materials curated for CityU CS students.',
        },
        {
            title: 'Career Insights',
            imgSrc: '/cityU-navigator/img/career-insights.svg',
            description: 'Plan your career with expert advice and alumni testimonials.',
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
            description="Your ultimate guide to CityU CS success">
            <main>
                <HeroBanner />
                <FeaturesSection />
            </main>
        </Layout>
    );
}