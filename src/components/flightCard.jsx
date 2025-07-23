
export default function FlightCard({flight, hide}) {
    return(
        <div>
            <div hidden={hide} style={{ border: '1px solid black', padding: '1rem', marginBottom: '1rem' }}>
                <p><strong>{flight.airline}</strong></p>
                <p>From: {flight.from} -- To: {flight.to}</p>
                <p>Price: ${flight.price}</p>
                <button>Book now</button>
            </div>
        </div>
    )
}