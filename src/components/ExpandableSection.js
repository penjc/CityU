import React, { useState } from 'react';
import styles from './ExpandableSection.module.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function ExpandableSection({ title = '展开内容', children }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSection = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.expandableSection}>
            <button className={styles.toggleButton} onClick={toggleSection}>
                <span>{title}</span>
                {isOpen ? (
                    <FaChevronUp className={styles.icon} />
                ) : (
                    <FaChevronDown className={styles.icon} />
                )}
            </button>
            {isOpen && <div className={styles.content}>{children}</div>}
        </div>
    );
}