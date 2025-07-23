import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
const dotenv = require('dotenv')

function FlightDetail({token}){
    const{id} = useParams();
    const [flight, setFlight] = useState(null);

    useEffect(()=>{
        const fetchFlight = async () =>{
            const res = await fetch(`http://localhost:4000/flights/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if(res.ok){
                const data = await res.json();
                setFlight(data);
            }else{
                alert('Unauthorized or flight not found');
            }
        };

        fetchFlight();
    }, [id, token]);

    if(!flight) return <p>Loading flight details...</p>;

    return(
        <div>
            <h2>{flight.name || 'Flight Detail'}</h2>
            <p><strong>From:</strong>{flight.from}</p>
            <p><strong>To:</strong>{flight.to}</p>
            <p><strong>Price:</strong>{flight.price}</p>
        </div>
    )
}

export default FlightDetail;