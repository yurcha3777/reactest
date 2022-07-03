import {useEffect, useState} from "react";
import {Flight} from "../flight/Flight";


function Flights() {

    const [flights, setFlights] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(response => response.json())
            .then(value => setFlights(value.filter(value => value.launch_year !== '2020')))
    }, []);
    return (
        <div>
            {
                flights.map((flight, index) => <Flight key={index} item={flight}/>)
            }
        </div>
    );
}

export {Flights};