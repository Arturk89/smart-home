import styles from '../css/login.module.css'

export function LoginWrapper({ children }: { children: React.ReactNode }) {
    return <div className={styles.base}>{children}</div>
}
