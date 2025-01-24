import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './friend.module.css';

const friendLinks = [
    // {
    //     title: 'Docusaurus',
    //     description: '易于维护的开源文档网站',
    //     website: 'https://docusaurus.io/',
    //     image: '/CityU/img/friend/d.png',
    // },
    {
        title: '图灵班学习指南',
        description: '浙江大学图灵班各门课程的学习指南以及学习资源',
        website: 'https://zju-turing.github.io/TuringCourses/',
        image: '/CityU/img/friend/zju.png',
    },
    {
        title: 'WHU课代表计划',
        description: '武汉大学课程资料整理',
        website: 'https://openwhu.github.io/',
        image: '/CityU/img/friend/whu.png',
    },
    {
        title: 'HITSZ OpenAuto',
        description: 'HITSZ 自动化课程攻略共享计划',
        website: 'https://hoa.moe/',
        image: '/CityU/img/friend/hitsz.png',
    },
    {
        title: 'TJU CourseSharing',
        description: '天津大学课程共享计划',
        website: 'https://cs.tjuse.com/zh-CN/',
        image: '/CityU/img/friend/tju.png',
    },
    {
        title: 'DUT Manual',
        description: '大工人的一站式生存指南',
        website: 'https://man.naosi.org/',
        image: '/CityU/img/friend/dut.png',
    },
    {
        title: '华工手册',
        description: '华南理工大学校园信息聚合的项目',
        website: 'https://www.gzic.online/',
        image: '/CityU/img/friend/scut.png',
    },
    {
        title: 'SHUFly',
        description: '上海大学溯源手册',
        website: 'https://shuosc.github.io/fly/',
        image: '/CityU/img/friend/shu.png',
    },
    {
        title: '清华大学飞跃手册',
        description: '清华大学留学经验文档',
        website: 'https://feiyue.online/',
        image: '/CityU/img/friend/thu.png',
    },
    {
        title: '南方科技大学飞跃手册',
        description: '南方科技大学留学经验文档',
        website: 'https://sustech-application.com/#/',
        image: '/CityU/img/friend/sust.png',
    },
];

function FriendCard({ site }) {
    return (
        <div className={clsx('card', 'shadow--md', styles.friendCard)}>
            <div className={styles.cardImageContainer}>
                <img src={site.image} alt={`${site.title} screenshot`} className={styles.cardImage} />
            </div>
            <div className={styles.cardBody}>
                <a href={site.website} className={styles.cardTitle} target="_blank" rel="noopener noreferrer">
                    <h3>{site.title}</h3>
                </a>
                <p className={styles.cardDescription}>{site.description}</p>
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
            <main className={styles.mainContent}>
                <h1 className={clsx('text--center', styles.pageTitle)}>友链</h1>
                <div className={styles.friendList}>
                    {friendLinks.map((site, index) => (
                        <FriendCard key={index} site={site} />
                    ))}
                </div>
            </main>
        </Layout>
    );
}
