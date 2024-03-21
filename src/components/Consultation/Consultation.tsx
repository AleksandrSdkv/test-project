import ButtonPopup from '../ButtonPopup/ButtonPopup';
import styles from './Consultation.module.css';

const Consultation = ({
    handlerTogglePopup,
}: {
    handlerTogglePopup: (e: any) => void;
}) => {
    return (
        <>
            <h1 className={styles.title}>Создаю условия для вашего успеха</h1>
            <p className={styles.subtitle}>
                Когда ваше время и энергия лучше сфокусированы, стремление к
                новым возможностям становится реальностью, ваш успех зависит от
                ваших действий
            </p>
            <p className={styles.subtitleMinSize}>
                Ваш успех зависит от ваших действий
            </p>
            <div className={styles.consultationContainer}>
                <ButtonPopup
                    type="consultationItemWhite"
                    handler={handlerTogglePopup}
                    name="Записаться на консультацию"
                    nameMinSize="Записаться"
                />
                <ButtonPopup
                    type="consultationItemBlue"
                    handler={handlerTogglePopup}
                    name="Бесплатная консультация"
                    nameMinSize="Заказать звонок"
                />
            </div>
        </>
    );
};

export default Consultation;
