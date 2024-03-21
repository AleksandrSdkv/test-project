import styles from './Header.module.css';
import NavLink from '../NavLink';
import { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handlerOpenMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <header className={styles.mentorHeader}>
            <div className={styles.logo}></div>
            <nav className={`${!isOpen ? styles.navBar : styles.navBarShow}`}>
                <ul
                    className={`${!isOpen ? styles.headerList : styles.openNavBar}`}
                >
                    {styles.openNavBar && (
                        <button
                            className={styles.closeMenu}
                            onClick={handlerOpenMenu}
                        ></button>
                    )}
                    <NavLink name="Обо мне" path="/" />
                    <NavLink name="Наставничество" path="/" />
                    <NavLink name="Мероприятия" path="/" />
                    <NavLink name="Кейсы" path="/" />
                    <NavLink name="Отзывы" path="/" />
                    <NavLink name="Контакты" path="/" />
                </ul>
            </nav>
            <div className={styles.phoneWraper}>
                <div
                    onClick={handlerOpenMenu}
                    className={`${!isOpen && styles.showMenu}`}
                ></div>

                <a href="tel:+79991112233" className={styles.phone}>
                    <div className={styles.phoneIcon}></div>
                    8-345-123-34-45
                </a>
            </div>
        </header>
    );
};

export default Header;
