import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Navigation() {
    return (
        <>
        <header>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/movies">Movies</Link>
        </nav>
        </header>
        <main>
            <Suspense fallback={<h2>Loading...</h2>}>
                <Outlet />
            </Suspense>
        </main> 
        </>
    )
}