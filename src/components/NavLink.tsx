import styles from './Header/Header.module.css';
import { Link } from 'react-router-dom';

const NavLink = ({ name, path }: { name: string; path: string }) => {
    return (
        <li>
            <Link className={styles.link} to={path}>
                {name}
            </Link>
        </li>
    );
};

export default NavLink;
