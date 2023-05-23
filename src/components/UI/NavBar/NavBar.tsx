import { RiMenu5Line } from "react-icons/ri";

export default function NavBar() {
    const navUrls = [
        { name: "Search", path: "/" },
        { name: "Favorites", path: "/" },
        { name: "Calendar", path: "/" },
        { name: "My Tickets", path: "/" },
    ];

    return (
        <nav className="bg-gradient-to-r from-skyblue via-mypurple to-mygreen flex justify-between py-4 px-6 items-center">
            <div className="text-base font-bold">Raver</div>
            <ul className="gap-2 hidden md:flex">
                {navUrls.map((url) => (
                    <li>
                        <a href={url.path}>{url.name}</a>
                    </li>
                ))}
            </ul>
            <div className="flex items-center gap-6">
                <button className="bg-myblack text-white rounded-full text-xs px-2 py-2">
                    Buy Tickets
                </button>
                <RiMenu5Line />
            </div>
        </nav>
    );
}
