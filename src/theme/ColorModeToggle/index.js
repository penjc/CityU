import React from 'react';
import clsx from 'clsx';
import { useColorMode } from '@docusaurus/theme-common';
import styles from './styles.module.css';

export default function ColorModeToggle({ className, ...props }) {
    const { colorMode, setColorMode } = useColorMode(); // 修改为 setColorMode

    return (
        <button
            type="button"
            className={clsx('clean-btn', styles.colorModeToggle, className)}
            onClick={() => {
                console.log('Current color mode:', colorMode); // 输出当前主题模式
                setColorMode(colorMode === 'dark' ? 'light' : 'dark'); // 使用 setColorMode 切换模式
                console.log('Color mode toggled!');
            }}
            {...props}>
            {colorMode === 'dark' ? (
                <img
                    src="https://cityuhk.cn/img/moon.svg" // 替换为你的图标路径
                    alt="Switch to light mode"
                    className={styles.icon}
                />
            ) : (
                <img
                    src="https://cityuhk.cn/img/sun.svg" // 替换为你的图标路径
                    alt="Switch to dark mode"
                    className={styles.icon}
                />
            )}
        </button>
    );
}