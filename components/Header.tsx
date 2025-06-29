import styles from './header.module.css';
import Link from "next/link";

const Header = () => {
    return (
        <div className={styles.header}>
            <h1>Arvin Buid</h1>
            <div className={styles.nav}>
                <a href="mailto:arvinbuid01@gmail.com">Contact</a>
                <Link href="/">Projects</Link>
            </div>
        </div>
    );
}

export default Header;