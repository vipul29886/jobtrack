import {Outlet, NavLink} from 'react-router-dom'
import styles from './MainLayout.module.css'

export default function MainLayout() {
    return <>
    <header className={styles.header}>
        <h2 className={styles.brand}>JobTrack</h2>
    </header>
    <aside className={styles.sidebar}>
        <nav>
            <ul className={styles.navList}>
							<li className={styles.navItem}><NavLink to="/" end className={({isActive}) => isActive ? styles.navLinkActive : styles.navLink}>Dashboard</NavLink></li>
							<li className={styles.navItem}><NavLink to="/clients" end className={({isActive}) => isActive ? styles.navLinkActive : styles.navLink}>Clients</NavLink></li>
							<li className={styles.navItem}><NavLink to="/jobs" className={({isActive}) => isActive ? styles.navLinkActive : styles.navLink}>Jobs</NavLink></li>
							<li className={styles.navItem}><NavLink to="/candidates" end className={({isActive}) => isActive ? styles.navLinkActive : styles.navLink}>Candidates</NavLink></li>
							<li className={styles.navItem}><NavLink to="/submissions" end className={({isActive}) => isActive ? styles.navLinkActive : styles.navLink}>Submissions</NavLink></li>
							<li className={styles.navItem}><NavLink to="/interviews" end className={({isActive}) => isActive ? styles.navLinkActive : styles.navLink}>Interviews</NavLink></li>
							<li className={styles.navItem}><NavLink to="/placements" end className={({isActive}) => isActive ? styles.navLinkActive : styles.navLink}>Placements</NavLink></li>
							<li className={styles.navItem}><NavLink to="/reports" className={({isActive}) => isActive ? styles.navLinkActive : styles.navLink}>Reports</NavLink></li>
							<li className={styles.navItem}><NavLink to="/settings" className={({isActive}) => isActive ? styles.navLinkActive : styles.navLink}>Settings</NavLink></li>
            </ul>
        </nav>
    </aside>
    <main className={styles.main}>
        <Outlet/>
    </main>
    </>
}