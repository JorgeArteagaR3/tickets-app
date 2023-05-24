import { RiMenu5Line } from "react-icons/ri";
import Button from "../UI/Button/Button";
import { Link } from "react-router-dom";
import ReactModal from "react-modal";
import { useEffect, useState } from "react";
import clsx from "clsx";

ReactModal.setAppElement("#root");

export default function NavBar() {
    const navUrls = [
        { name: "Search", path: "/" },
        { name: "Favorites", path: "/favorites" },
        { name: "Calendar", path: "/calendar" },
        { name: "My Tickets", path: "/tickets" },
    ];
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const url = useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isModalOpen, setIsModalOpen]);
    return (
        <nav>
            <div className="flex justify-between items-center mb-8">
                <div className="text-base font-bold">Raver.</div>
                <ul className="gap-2 hidden md:flex">
                    {navUrls.map((url) => (
                        <li key={url.name}>
                            <Link to={url.path}>{url.name}</Link>
                        </li>
                    ))}
                </ul>
                <div className="flex items-center gap-6">
                    <Button className="bg-myblack text-white">
                        Buy Tickets
                    </Button>
                    <RiMenu5Line
                        className="cursor-pointer"
                        onClick={openModal}
                    />
                </div>
            </div>
            <div>
                <h1 className="font-bold text-4xl">
                    Techno. Dance. <br /> Buy Tickets
                </h1>
            </div>
            <ReactModal
                isOpen={isModalOpen}
                preventScroll={true}
                onRequestClose={closeModal}
                overlayClassName="bg-[rgba(0,0,0,.5)] flex justify-end items-center absolute top-0 left-0 h-screen w-screen"
                className="w-2/4 bg-white pt-6 outline-none h-full"
            >
                <div className="w-full flex justify-end items-center h-8 pr-4">
                    <RiMenu5Line
                        className={clsx(
                            " cursor-pointer transition-all duration-500",
                            isModalOpen && " rotate-90 "
                        )}
                        onClick={closeModal}
                    />
                </div>
                <ul>
                    {navUrls.map((url) => (
                        <Link to={url.path}>
                            <li
                                className="px-6 py-1 hover:bg-mygreen"
                                key={url.name}
                            >
                                {url.name}
                            </li>
                        </Link>
                    ))}
                </ul>
            </ReactModal>
        </nav>
    );
}
