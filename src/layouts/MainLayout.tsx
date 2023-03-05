import { Outlet } from 'react-router-dom'

export default function MainLayout() {
    return (
        <>
            <h1 className="text-3xl font-semibold underline">Hello world!</h1>
            <Outlet />
        </>
    )
}
