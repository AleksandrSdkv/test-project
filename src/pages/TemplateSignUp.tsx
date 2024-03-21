import { FunctionComponent, useState } from 'react';
import Header from '../components/Header/Header';
import consultationStyles from '../components/Consultation/Consultation.module.css';
import styles from './TemplateSignUp.module.css';
import Background from '../components/background/Background';
import { useGetStatistic } from '../hooks/useGetStatistic';
import { useGetDateSum } from '../hooks/useGetDateSum';
import { backgroundClass } from '../utils/constants';
import LoginForm from '../components/Form/Form';
import Consultation from '../components/Consultation/Consultation';

const TemplateSignUp: FunctionComponent = () => {
    // Сумирует цыфры даты
    const sumDate = useGetDateSum();
    const [loading, setLoading] = useState(false);
    const { valute } = useGetStatistic();
    const [isShowPopup, setIsshowPopup] = useState(false);

    // Получает данные с курса валют
    let GBP = Math.round(valute?.GBP?.Value);

    // Эмулирует загрузку данных
    function preloaderPage() {
        setLoading(true);
    }

    function handlerClosePopup(e: any) {
        // Отвечает за открытие бокового меню, закрывается по нажатию "на паранжу"
        if (e.target.className === backgroundClass) {
            setIsshowPopup(!isShowPopup);
        }
    }
    function handlerTogglePopup(e: any) {
        setIsshowPopup(!isShowPopup);
    }
    setTimeout(preloaderPage, 500);
    return (
        <>
            {!loading ? (
                <Background isShow={isShowPopup} />
            ) : (
                <section onClick={(e) => handlerClosePopup(e)}>
                    <Background isShow={isShowPopup} />
                    <Header />
                    <div
                        className={
                            !isShowPopup ? styles.closePopup : styles.popup
                        }
                    >
                        <LoginForm handlerTogglePopup={handlerTogglePopup} />
                    </div>
                    <div className={consultationStyles.titleWraper}>
                        <Consultation handlerTogglePopup={handlerTogglePopup} />
                        <div className={styles.statistic}>
                            <div className={styles.statisticWraper}>
                                <h3 className={styles.statisticTitle}>
                                    {sumDate}
                                </h3>
                                <span className={styles.statisticSubTitle}>
                                    техник для достижения целей
                                </span>
                                <span
                                    className={styles.statisticSubTitleMiniSize}
                                >
                                    техники
                                </span>
                            </div>
                            <div className={styles.statisticWraper}>
                                <h3 className={styles.statisticTitle}>
                                    {GBP ? GBP : '...'}
                                </h3>
                                <span className={styles.statisticSubTitle}>
                                    увеличение личной продуктивности
                                </span>
                                <span
                                    className={styles.statisticSubTitleMiniSize}
                                >
                                    продуктивности
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.mentorImg}></div>
                </section>
            )}
        </>
    );
};

export default TemplateSignUp;
