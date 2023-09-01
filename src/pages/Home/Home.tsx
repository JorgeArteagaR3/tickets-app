import React, { useEffect, useState } from "react";
import EventCard from "../../components/EventCard/EventCard";
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import { getAllEvents } from "../../services/events";
import { EventsContext } from "../../store";
import { EventType } from "../../types/event";

function Home() {
    const [events, setEvents] = useState([] as Partial<EventType>[])

    async function fetchEvents() {
        const response = await getAllEvents()
        console.log(response)
        setEvents(response)
    }

    useEffect(() => {
        fetchEvents()
    }, [])

    return (
        <>
            <EventsContext.Provider value={events}>
                <header className="bg-gradient-to-r from-skyblue via-mypurple to-mygreen px-4 pt-6 pb-12 relative mb-12 lg:h-[350px]">
                    <NavBar />
                    <SearchBar />
                </header>
                <main className="px-4 font-bold">
                    <h2 className="mb-4">Most Popular Events</h2>
                    <section className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                        {events.map(event => {
                            return <EventCard key={event.id} title={event.title} imgSrc={event?.bgImage?.imagePath} date={event.startDate && new Date(event.startDate).toDateString()} />
                        })}
                    </section>
                </main>
            </EventsContext.Provider>
        </>
    );
}



export default Home;
