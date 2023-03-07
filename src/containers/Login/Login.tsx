 import React, { useState } from 'react'
 import styles from './login.module.css'
 import { TextInput } from '@mantine/core'

 function LoginWrapper({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.base}>
            {children}
        </div>
    )
 }

 export default function Login() {
    const [login, setLogin] = useState({ email: '', password: '' })
    return (
        <LoginWrapper>
            <div>
                <TextInput 
                    label="e-mail"
                    value={login.email} 
                    error={!!login.email.length}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLogin(l => ({ ...l, email: e.target.value }))} 
                    withAsterisk 
                />
                <TextInput 
                    label="password"
                    type="password"
                    value={login.password}
                    error={!!login.email.length}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLogin(l => ({ ...l, password: e.target.value }))} 
                    withAsterisk 
                />
            </div>
        </LoginWrapper>
    )
 }