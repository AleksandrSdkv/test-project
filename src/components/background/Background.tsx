import styles from './background.module.css';

const Background = ({ isShow }: { isShow: boolean }) => {
    return (
        <>
            <div className={`${isShow && styles.blur}`}></div>
            <div className={styles.bgBlurLeft}></div>
            <div className={styles.bgBlurRight}></div>
            <div className={styles.borderBg}>
                <div className={styles.borderBgItem}></div>
                <div className={styles.borderBgItem}></div>
                <div className={styles.borderBgItem}></div>
                <div className={styles.borderBgItem}></div>
                <div className={styles.borderBgItem}></div>
            </div>
        </>
    );
};

export default Background;
