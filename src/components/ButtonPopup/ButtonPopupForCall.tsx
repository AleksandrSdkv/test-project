import styles from './ButtonPopup.module.css';

const ButtonPopupForCall = ({
    name,
    handler,
    type,
    disabled,
}: {
    name: string;
    handler?: (e: any) => void;
    type: string;
    disabled?: boolean;
}) => {
    return (
        <div
            className={`${styles.consultationItem} ${styles[type]} ${!disabled ? '' : styles.consultationItemBlueError}`}
        >
            <h2 className={styles.consultationTitleCall}>{name}</h2>
            <button
                disabled={disabled}
                onClick={(e) => {
                    if (handler !== undefined) handler(e);
                }}
                className={styles.consultationButton}
            ></button>
        </div>
    );
};

export default ButtonPopupForCall;
