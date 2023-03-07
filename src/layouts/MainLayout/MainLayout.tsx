import { Outlet } from 'react-router-dom'
import Background from 'components/ui/Background/Background'

export default function MainLayout() {
    return (
        <Background>
            <Outlet />
        </Background>
    )
}
