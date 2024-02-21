import React from 'react';
import classNames from 'classnames/bind';
import styles from './CSSModule.module.css';

const cx = classNames.bind(styles);

const CSSModule = () => {
    return (
        // <div className={`${styles.wrapper} ${styles.inverted}`}>
        // 9.3.1 classnames
        <div className={cx('wrapper', 'inverted')}>
            안녕하세요, 저는 <span className='something'>CSS Module!</span>
        </div>
    );
};

export default CSSModule;