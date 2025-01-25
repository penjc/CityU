import React, { useState, useEffect } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import './changeLog.css';

function Changelog() {
    const { siteConfig } = useDocusaurusContext();
    const CHANGE_LOG = siteConfig.customFields.CHANGE_LOG;

    const [commits, setCommits] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const fetchCommits = async (page) => {
        setLoading(true);
        try {
            const response = await fetch(
                `https://api.github.com/repos/penjc/CityU/commits?per_page=50&page=${page}`,
                {
                    headers: {
                        Authorization: `Bearer ${CHANGE_LOG}`,
                    },
                }
            );
            if (!response.ok) {
                throw new Error('Failed to fetch commits');
            }
            const data = await response.json();
            setCommits((prevCommits) => [...prevCommits, ...data]);
            if (data.length < 50) {
                setHasMore(false);
            }
        } catch (error) {
            console.error('Error fetching commits:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCommits(page);
    }, [page]);

    const handleScroll = () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight && hasMore && !loading) {
            setPage((prevPage) => prevPage + 1);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [hasMore, loading]);

    if (!commits.length && loading) {
        return <p className="loading-text">正在加载更新日志...</p>;
    }

    // 分组提交记录按年份和月份
    const groupedCommits = commits.reduce((acc, commit) => {
        const date = new Date(commit.commit.author.date);
        const year = date.getFullYear();
        const month = date.toLocaleString('default', { month: 'long' });
        const key = `${year} 年 ${month}`;

        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(commit);
        return acc;
    }, {});

    return (
        <div className="changelog-container">
            <h1 className="changelog-title">更新日志</h1>
            {Object.entries(groupedCommits).map(([key, commits]) => (
                <div key={key} className="changelog-group">
                    <h2 className="changelog-group-title">{key}</h2>
                    <ul className="commit-list">
                        {commits.map((commit, index) => (
                            <li key={index} className="commit-item">
                                <p>
                                    <a
                                        href={commit.html_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="commit-link"
                                    >
                                        {commit.commit.message}
                                    </a>
                                    <span className="commit-meta"> — {commit.commit.author.name}, {new Date(commit.commit.author.date).toLocaleDateString()}</span>
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
            {loading && <p className="loading-text">正在加载更多...</p>}
        </div>
    );
}

export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            id="changeLogPage"
            title={`${siteConfig.title}`}
            description="CityU 手册是香港城市大学学生的全方位资源平台，提供详细的课程信息、真实的学生评价、校园生活指南及职业发展资源，助力学生顺利适应大学生活并规划未来职业道路。"
        >
            <main>
                <Changelog />
            </main>
        </Layout>
    );
}
