import { Outlet } from "react-router-dom"
import Header from "./Header"
import CartOverview from "../features/cart/CartOverview";

function AppLayout() {
    return (
        <div>
            <Header />

            <main>
                <h2>CONTENT</h2>
                <Outlet />
            </main>

            <CartOverview />
        </div>
    )
}

export default AppLayout
