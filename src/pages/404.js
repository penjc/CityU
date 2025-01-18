import React, { useEffect } from 'react';
import { useHistory } from '@docusaurus/router';

export default function NotFound() {
    const history = useHistory();

    useEffect(() => {
        // 获取当前路径并统一转换为小写
        const currentPath = window.location.pathname.toLowerCase();
        const correctBaseUrl = '/cityU-navigator';

        // 检查路径是否以 /cityu-navigator 开头（忽略大小写）
        if (currentPath.startsWith('/cityu-navigator')) {
            // 计算新的 URL 并进行重定向
            const newUrl = correctBaseUrl + window.location.pathname.substring('/cityu-navigator'.length) + window.location.search + window.location.hash;
            history.replace(newUrl);
        }
    }, [history]);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>页面未找到</h1>
            <p>如果未自动跳转，请检查链接拼写。</p>
        </div>
    );
}