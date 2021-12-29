import React from 'react'

function Forecast(props) {
    return (
        <div>
            { props.display && props.city.length ? 
                <h2>Displaying {props.city}</h2> :
                <h2>Enter a city name to display its 5 day weather forecast</h2> 
            }
        </div>
    )
}

export default Forecast
