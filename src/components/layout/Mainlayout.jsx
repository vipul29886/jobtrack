import {Outlet, NavLink} from 'react-router-dom'

export default function MainLayout() {
    return <>
    <header>
        <h2>Job track header</h2>
    </header>
    <aside>
        <nav>
            <ul>
                <li><NavLink to="/" end>Dashboard</NavLink></li>
                <li><NavLink to="/applications">Applications</NavLink></li>
                <li><NavLink to="/reports">Reports</NavLink></li>
                <li><NavLink to="/settings">Settings</NavLink></li>
            </ul>
        </nav>
    </aside>
    <main>
        <Outlet/>
    </main>
    </>
}