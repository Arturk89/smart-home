import { Outlet } from 'react-router-dom'
import styles from './mainLayout.module.css'

export default function MainLayout() {
    return (
        <div className={styles.background}>
            <Outlet />
        </div>
    )
}
