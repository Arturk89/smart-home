 import React, { useState } from 'react'
 import styles from './login.module.css'
 import { TextInput, Button } from '@mantine/core'
 import { IconKey } from '@tabler/icons-react'

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
            <div style={{ padding: '2rem', border: '1px solid black' }}>
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
                <Button leftIcon={<IconKey size="1rem" />}>
                    Connect to database
                </Button>
            </div>
        </LoginWrapper>
    )
 }