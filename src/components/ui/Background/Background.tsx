import styles from './Background.module.css'

export default function Background({
    children
}: {
    children: React.ReactNode
}) {
    return <div className={styles.background}>{children}</div>
}
