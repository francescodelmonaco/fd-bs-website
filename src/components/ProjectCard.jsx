import { Link } from "react-router-dom"

export default function ProjectCard({ name, image, year, link }) {
    return (
        <Link
            className="card text-bg-dark"
            to={link}
            target="_blank"
            rel="noopener noreferrer"
        >
            <img src={image} className="card-img" alt={`${name} screen`} />
            <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center shadow text-center">
                <h5 className="card-title rounded-pill text-bg-light p-3 text-uppercase shadow">{name}</h5>
                <p className="card-text"><small>{year}</small></p>
            </div>
        </Link>
    )
}