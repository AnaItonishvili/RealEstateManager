import { Outlet } from "react-router-dom"

function Layout() {
    return (
        <main>
            <nav>Nav</nav>
            <Outlet />
        </main>
    )
}

export default Layout