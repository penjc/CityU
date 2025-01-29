import React from 'react';
import clsx from 'clsx';
import { useColorMode } from '@docusaurus/theme-common';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

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
                    src={useBaseUrl("/img/moon.svg")}
                    alt="Switch to light mode"
                    className={styles.icon}
                />
            ) : (
                <img
                    src={useBaseUrl("/img/sun.svg")}
                    alt="Switch to dark mode"
                    className={styles.icon}
                />
            )}
        </button>
    );
}