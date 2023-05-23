import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Favorites from "./pages/Favorites/Favorites";
import Calendar from "./pages/Calendar/Calendar";
import Tickets from "./pages/Tickets/Tickets";
function App() {
    const router = createBrowserRouter([
        { path: "/", element: <Home /> },
        { path: "/favorites", element: <Favorites /> },
        { path: "/calendar", element: <Calendar /> },
        { path: "/tickets", element: <Tickets /> },
    ]);
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
