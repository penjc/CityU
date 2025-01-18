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
    const courses = Object.values(reviewsData);
    const selectedCourses = [];
    const seenReviews = new Set();

    while (selectedCourses.length < 4) {
        const randomCourse = courses[Math.floor(Math.random() * courses.length)];
        const randomReview = randomCourse.reviews[Math.floor(Math.random() * randomCourse.reviews.length)];
        const reviewIdentifier = `${randomCourse.course_name}-${randomReview.text}`;

        if (!seenReviews.has(reviewIdentifier)) {
            selectedCourses.push({
                course_code: randomCourse.course_name,
                review_text: randomReview.text,
                author: randomReview.author,
                link: randomCourse.link
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
                                    <h3 className={styles.courseCode}>{review.course_code}</h3>
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
                                    <Link to={item.link} className={styles.newsLink}>查看详情</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
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
            </main>
        </Layout>
    );
}