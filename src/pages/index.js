import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import { useEffect, useState } from 'react';
import styles from './index.module.css';

function HeroFeaturesSection() {
    const features = [
        {
            title: '课程全览',
            imgSrc: 'https://stepforx.com/img/course.svg',
            description: '探索完整的课程信息与学生真实评价。',
        },
        {
            title: '资源中心',
            imgSrc: 'https://stepforx.com/img/resource-hub.svg',
            description: '访问为城大学生精选的攻略和学习资料。',
        },
        {
            title: '职业洞察',
            imgSrc: 'https://stepforx.com/img/career-insights.svg',
            description: '借助校友经验，规划您的职业未来。',
        },
    ];

    return (
        <div className={clsx(styles.heroFeaturesSection)}>
            <div className={styles.heroContent}>
                <h1 className={styles.title}>
                    <span>CityU</span>
                    <span> 手册</span>
                </h1>
                <p className={styles.subtitle}>轻松畅游城大之旅</p>
                <Link
                    className={clsx('button button--primary', styles.ctaButton)}
                    to="/start"
                >
                    开始探索 →
                </Link>
            </div>
            <div className={styles.features}>
                        {features.map((feature, idx) => (
                            <div
                                key={idx}
                            >
                                <img
                                    src={feature.imgSrc}
                                    alt={feature.title}
                                    className={styles.featureImage}
                                    width="100"
                                    height="100"
                                />
                                <h3 className={styles.featureTitle}>
                                    {feature.title}
                                </h3>
                                <p className={styles.featureDescription}>
                                    {feature.description}
                                </p>
                            </div>
                        ))}
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
        fetch('https://stepforx.com/scripts/news.json')
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

export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            id="homePage"
            title={`${siteConfig.title}`}
            description="CityU 手册是香港城市大学学生的全方位资源平台，提供详细的课程信息、真实的学生评价、校园生活指南及职业发展资源，助力学生顺利适应大学生活并规划未来职业道路。">
            <main>
                <HeroFeaturesSection/>
                <Comments />
                <LatestNews />
            </main>
        </Layout>
    );
}