import Button from "../UI/Button/Button";
import { useState } from "react";
import { BsCalendar4Week } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { CgMenuGridO } from "react-icons/cg";
export default function SearchBar() {
    const [form, setForm] = useState({ searchText: "", date: Date });
    const viewSize = window.screen.width;
    return (
        <form
            className="absolute left-0 right-0 mx-auto bg-white w-11/12 bottom-0 translate-y-2/4 rounded-full shadow-sm 
                    overflow-hidden flex items-center h-10 py-1 pr-6 justify-between"
        >
            <input
                type="text"
                placeholder={
                    viewSize > 450 ? "Search by name or type..." : "Search..."
                }
                className="pl-6 outline-none text-xs pr-4 w-full"
            />
            <div className="flex h-full w-full">
                <div className="text-xs h-full border-x px-2 flex md:gap-2 items-center">
                    <BsCalendar4Week />
                    <span className="hidden md:block">Date</span>
                </div>
                <div className="text-xs border-r h-full px-2 flex md:gap-2 items-center">
                    <SlLocationPin />
                    <span className="hidden md:block">Location</span>
                </div>
                <div className="text-xs  h-full px-2 flex md:gap-2 items-center mr-4">
                    <CgMenuGridO />
                    <span className="hidden md:block">Type of event</span>
                </div>
            </div>
            <Button className="bg-mygreen">Search</Button>
        </form>
    );
}
