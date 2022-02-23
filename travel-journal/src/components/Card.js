import './Card.css'
import locLogo from '../images/loc-logo.png'

export default function Card(props) {
    return (
        <>
            <div className="card">
                <div>
                    <img className="card-img" src={props.img} alt="travel" />
                </div>
                <div className="card-content">
                    <img src={locLogo} alt="location" />

                    <span className="location-text">{props.country.toUpperCase()}</span>
                    <span><a href={props.mapsUrl} className="location-link">View on Google Maps</a></span>

                    <h1 className="card-title">{props.title}</h1>
                    <p className="card-date">{props.date}</p>
                    <p className="card-desc">{props.description}</p>
                </div>
            </div>
            <hr />
        </>
    )
}