import SearchForm from "../components/searchForm"
export default function Home(){
    return(
        <div className="homePage">
            <h1>Welcome to flight search app</h1>
            <h3>Search for flight</h3>
            <SearchForm />
        </div>
    )
}