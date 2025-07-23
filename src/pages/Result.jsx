import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import FlightList from "../components/flightList";
import NoResult from "./NoResult.jsx";
import { gql, useQuery } from "@apollo/client";
import { useLocation } from "react-router-dom";
dotenv = dotenv.config();

export default function Result(){
    //GetFlights name is optional
    // const FET_FLIGHTS = gql`
    //     query GetFlights($from: String, $to: String){
    //         flights(from: $from, to: $to){
    //             id
    //             from
    //             to
    //             price
    //             airline
    //             departureTime   
    //         }
    //     }
    // `
    // function useQueryParams(){
    //     return new URLSearchParams(useLocation().search);
    // }
    // const query = useQueryParams();
    // const from = query.get('from');
    // const to = query.get('to');


    // if(!from || !to){
    //     return <p>Waiting for search parameters...</p>
    // }

    // const {loading, error, data} = useQuery(FET_FLIGHTS, {
    //     variables: {from, to}
    // })

    // if (loading){
    //     return <p>Loading flights...</p>
    // }

    // if(error){
    //     return <p>Error loading flights</p>
    // }

    // const flights = data?.flights||[];

    // if(flights.length==0){
    //     return <NoResult from={from} to={to} />;
    // }
        const [searchParams] = useSearchParams();
    // These 2 need to be lower  cased since user might write it in lowercase too
    const from = searchParams.get('from');
    const to = searchParams.get('to');
    const page = searchParams.get('page');
    const limit = searchParams.get('limit');

    const [flights, setFlight] = useState([])
    const [loading, loadState] = useState(true)
    
    //Forget [] will result in the app only run once
    const api = import.meta.env.VITE_API_URL;
    useEffect(()=>{
        fetch(`${api}?from=${from}&to=${to}&page=${page}&limit=${limit}`)
        .then((res)=>res.json())
        .then((data)=>{
            // let result = data.data.filter(checkFOrm)
            setFlight(data)
            setTimeout(changeLoad, 1000)
        })
    }, [from, to])

    function changeLoad() {
        loadState(false)
    }

    if (flights.length==0){
        return(
            <div>
                <NoResult hide={loading} from={from} to={to} />
            </div>
        )
    }
    else{

    return(
        <div>
            <h2>Flight from {from} to {to}</h2>
            <FlightList flights={flights} />
        </div>
    )}
}