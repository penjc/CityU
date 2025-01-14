import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import { useColorMode } from '@docusaurus/theme-common'; // 使用新的路径
import { useEffect, useState } from 'react';

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

function LatestNews() {
    const [news, setNews] = useState([]); // 保存新闻数据
    const [loading, setLoading] = useState(true); // 加载状态

    useEffect(() => {
        // 从静态文件中加载新闻数据
        fetch('/cityu-navigator/scripts/news.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                if (Array.isArray(data) && data.length > 0) {
                    setNews(data); // 确保 data 是非空数组
                } else {
                    console.error('No news data available:', data);
                }
            })
            .catch((error) => {
                console.error('Error loading news:', error);
            })
            .finally(() => {
                setLoading(false); // 不管成功与否都设置为加载完成
            });
    }, []);

    // 仅在数据加载成功且非空时显示新闻板块
    if (loading || news.length === 0) {
        return null;
    }

    return (
        <div className={clsx(styles.newsSection)}>
            <div className="container">
                <Heading as="h2">城大动态</Heading>
                <div className="row">
                    {news.map((item, idx) => (
                        <div key={idx} className="col col--6">
                            <div className={styles.newsCard}>
                                <div className={styles.newsCardContent}>
                                    <div className={styles.newsHeader}>
                                        <h3 className={styles.newsTitle}>{item.title}</h3>
                                        <p className={styles.newsDate}>{item.date}</p>
                                    </div>
                                    <p className={styles.newsDescription}>{item.description}</p>
                                    <Link to={item.link} className={styles.newsLink}>查看更多</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function QuickLinks() {
    const links = [
        { title: '图书馆', url: 'https://www.cityu.edu.hk/lib/', icon: '/path/to/library-icon.svg' },
        { title: 'AIMS', url: 'https://banweb.cityu.edu.hk/', icon: '/path/to/aims-icon.svg' },
        { title: 'Canvas', url: 'https://canvas.cityu.edu.hk/', icon: '/path/to/canvas-icon.svg' },
    ];

    return (
        <div className={clsx(styles.quickLinksSection)}>
            <div className="container">
                <Heading as="h2">快捷导航</Heading>
                <div className="row">
                    {links.map((link, idx) => (
                        <div key={idx} className="col col--4 text--center">
                            <Link to={link.url} className={styles.quickLinkCard}>
                                <img src={link.icon} alt={link.title} />
                                <p>{link.title}</p>
                            </Link>
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
                <LatestNews />
                {/*<QuickLinks/>*/}
            </main>
        </Layout>
    );
}