import EventCard from "../../components/EventCard/EventCard";
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar/SearchBar";

function Home() {
    return (
        <>
            <header className="bg-gradient-to-r from-skyblue via-mypurple to-mygreen px-4 pt-6 pb-12 relative mb-12 lg:h-[350px]">
                <NavBar />
                <SearchBar />
            </header>
            <main className="px-4 font-bold">
                <h2 className="mb-4">Most Popular Events</h2>
                <section className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                </section>
            </main>
        </>
    );
}

export default Home;
