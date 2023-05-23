import { RiMenu5Line } from "react-icons/ri";
import Button from "../UI/Button/Button";
import { Link } from "react-router-dom";
export default function NavBar() {
    const navUrls = [
        { name: "Search", path: "/" },
        { name: "Favorites", path: "/favorites" },
        { name: "Calendar", path: "/calendar" },
        { name: "My Tickets", path: "/tickets" },
    ];

    return (
        <nav>
            <div className="flex justify-between items-center mb-8">
                <div className="text-base font-bold">Raver.</div>
                <ul className="gap-2 hidden md:flex">
                    {navUrls.map((url) => (
                        <li>
                            <Link to={url.path}>{url.name}</Link>
                        </li>
                    ))}
                </ul>
                <div className="flex items-center gap-6">
                    <Button className="bg-myblack text-white">
                        Buy Tickets
                    </Button>
                    <RiMenu5Line />
                </div>
            </div>
            <div>
                <h1 className="font-bold text-4xl">
                    Techno. Dance. <br /> Buy Tickets
                </h1>
            </div>
        </nav>
    );
}
