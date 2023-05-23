import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar/SearchBar";

function Home() {
    return (
        <>
            <header className="bg-gradient-to-r from-skyblue via-mypurple to-mygreen px-4 pt-6 pb-12 relative mb-12">
                <NavBar />
                <SearchBar />
            </header>
            <main className="px-4 font-bold">
                <h2>Most Popular Events</h2>
            </main>
        </>
    );
}

export default Home;
