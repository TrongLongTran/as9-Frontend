import FlightCard from "./flightCard";
import { HashLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

export default function FlightList({ flights, hide }) {
    let navigatine = useNavigate()
    function reRouteHome(e){
        e.preventDefault();
        navigatine("/")
    }
    return(
        <div>
            <div className="spinner" hidden={!hide}>
                <HashLoader 
                size={50}
                color="#000000"
                />
            </div>
            <div hidden={hide} className="yesData">
                <button onClick={reRouteHome}>Back to home page</button>
                {flights.map((flight)=>(
                    //If pass flights instead, there will be an error, since flight does not exist in FlightCard
                    <FlightCard hide={hide} key={flight.id} flight={flight} />
                ))}
            </div>
        </div>
    )
}