import styles from './ButtonPopup.module.css';

const ButtonPopup = ({
    name,
    nameMinSize,
    handler,
    type,
}: {
    name: string;
    nameMinSize: string;
    handler?: (e: any) => void;
    type: string;
}) => {
    return (
        <div className={`${styles.consultationItem} ${styles[type]}`}>
            <h2 className={styles.consultationTitle}>{name}</h2>
            <h2 className={styles.consultationTitleMinSize}>{nameMinSize}</h2>
            <button
                onClick={(e) => {
                    if (handler !== undefined) handler(e);
                }}
                className={styles.consultationButton}
            ></button>
        </div>
    );
};

export default ButtonPopup;
