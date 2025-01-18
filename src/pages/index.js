import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import { useColorMode } from '@docusaurus/theme-common';
import { useEffect, useState } from 'react';
import styles from './index.module.css';

function HeroBanner() {
    const { colorMode } = useColorMode();

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
        <div className={clsx(styles.featureSection)}>
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

// 课程评论
import courseReviews from '/static/scripts/comment.json';
const getRandomReviews = (reviewsData) => {
    const courses = Object.entries(reviewsData); // Use entries to get course_code and course details
    const selectedCourses = [];
    const seenReviews = new Set();

    while (selectedCourses.length < 4) {
        const [courseCode, courseDetails] = courses[Math.floor(Math.random() * courses.length)];
        const randomReview = courseDetails.reviews[Math.floor(Math.random() * courseDetails.reviews.length)];
        const reviewIdentifier = `${courseCode}-${randomReview.text}`;

        if (!seenReviews.has(reviewIdentifier)) {
            selectedCourses.push({
                course_code: courseCode, // Include course_code
                course_name: courseDetails.course_name, // Include course_name
                review_text: randomReview.text,
                author: randomReview.author,
                link: courseDetails.link
            });
            seenReviews.add(reviewIdentifier);
        }
    }

    return selectedCourses;
};

function Comments() {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const selectedReviews = getRandomReviews(courseReviews);
        setReviews(selectedReviews);
    }, []);

    return (
        <div className={clsx(styles.commentsSection)}>
            <div className="container">
                <Heading as="h2" className={styles.commentsTitle}>课程评价</Heading>
                <div className="row">
                    {reviews.map((review, index) => (
                        <div key={index} className="col col--6">
                            <div className={styles.commentCard}>
                                <div className={styles.commentCardContent}>
                                    {/* Display course_code and course_name */}
                                    <h3 className={styles.courseCode}>{review.course_code} - {review.course_name}</h3>
                                    <p className={styles.reviewText}>{review.review_text}</p>
                                    <p className={styles.reviewAuthor}><strong>-- {review.author}</strong></p>
                                    <Link
                                        to={review.link}
                                        className={styles.commentLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        查看详情 →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}



// 新闻板块
function LatestNews() {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://penjc.github.io/cityU-navigator/scripts/news.json')
            .then((response) => response.json())
            .then((data) => {
                setNews(data);
            })
            .catch((error) => {
                console.error('Error loading news:', error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading || news.length === 0) {
        return null;
    }

    return (
        <div className={clsx(styles.newsSection)}>
            <div className="container">
                <div align="center" style={{ lineHeight: '1.5', fontSize: '0.9rem' }}>
                    <Heading as="h2" className={styles.news}>城大新闻</Heading>
                </div>
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
                                    <Link to={item.link} className={styles.newsLink}>查看详情 →</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function Runtime() {
    const [runtime, setRuntime] = useState('');

    useEffect(() => {
        const startDate = new Date("01/10/2025 12:00:00"); // 替换为你的站点上线时间

        const updateRuntime = () => {
            const now = new Date();
            const diff = now - startDate;

            const days = Math.floor(diff / (24 * 60 * 60 * 1000));
            const hours = Math.floor((diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
            const minutes = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000));
            const seconds = Math.floor((diff % (60 * 1000)) / 1000);

            setRuntime(`${days}天 ${hours}小时 ${minutes}分 ${seconds}秒`);
        };

        const interval = setInterval(updateRuntime, 1000);
        return () => clearInterval(interval); // 清理定时器
    }, []);

    return (
        <div className={clsx(styles.siteStats)}>
            <span className={styles.runItem}>
                <img src='/cityU-navigator/img/run.svg' alt="运行" className={styles.icon}/>
                <strong>本站已运行：</strong> {runtime}
            </span>
        </div>
    );
}


function SiteStats() {
    const [visitCount, setVisitCount] = useState(0);
    const [visitorCount, setVisitorCount] = useState(0);

    useEffect(() => {
        // 访问量（每次访问页面都会增加）
        let visits = parseInt(localStorage.getItem('visitCount') || '0', 10);
        visits += 1;
        localStorage.setItem('visitCount', visits);
        setVisitCount(visits);

        // 访客量（基于 SessionStorage 判断是否为新会话）
        if (!sessionStorage.getItem('isNewVisitor')) {
            let visitors = parseInt(localStorage.getItem('visitorCount') || '0', 10);
            visitors += 1;
            localStorage.setItem('visitorCount', visitors);
            sessionStorage.setItem('isNewVisitor', 'true');
            setVisitorCount(visitors);
        } else {
            const currentVisitors = parseInt(localStorage.getItem('visitorCount') || '0', 10);
            setVisitorCount(currentVisitors);
        }
    }, []);

    return (
        <div className={clsx(styles.siteStats)}>
            <span className={styles.statItem}>
                <img src='/cityU-navigator/img/view.svg' alt="访问量" className={styles.icon} />
                <strong>本站访问量 {visitCount.toLocaleString()} 次</strong>
            </span>
            <span className={styles.separator}>|</span>
            <span className={styles.statItem}>
                <img src='/cityU-navigator/img/user.svg' alt="访客量" className={styles.icon} />
                <strong>本站访客量 {visitorCount.toLocaleString()} 人</strong>
            </span>
        </div>
    );
}

export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            id="homePage"
            title={`${siteConfig.title}`}
            description="您的 CityU 学术与生活指南">
            <main>
                <HeroBanner />
                <FeaturesSection />
                <Comments />
                <LatestNews />
                {/*<Runtime />*/}
                <SiteStats />
            </main>
        </Layout>
    );
}