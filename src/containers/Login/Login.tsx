 import styles from './login.module.css'

 function LoginWrapper({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.base}>
            {children}
        </div>
    )
 }

 export default function Login() {
    return <LoginWrapper>Login</LoginWrapper>
 }