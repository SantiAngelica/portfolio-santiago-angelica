import { useState, useContext } from "react"

function Slider({ urls }) {


    return (
        <div id={urls[0]} className="carousel slide mb-3">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={urls[0]} className="d-block w-100" alt={urls[0]} />
                </div>
                <div className="carousel-item">
                    <img src={urls[1]} className="d-block w-100" alt={urls[1]} />
                </div>
                <div className="carousel-item">
                    <img src={urls[2]} className="d-block w-100" alt={urls[2]} />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target={`#${urls[0]}`} data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target={`#${urls[0]}`} data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Slider