import React from "react";

const Card_character = ({ characters = [] }) => {
    return (
        <div className="row">
        {
        characters.map((item, index) => (
            <div key={index} className="col">
                <div className="card mb-4 shadow .h-100" style={{ width: "15rem" }}>
                    <img src={item.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">{item.status}</p>
                        <a href={`/details/${item.id}`} className="btn btn-info">Details</a>
                    </div>
                </div>
            </div>
            ))
        }
    </div>
    )
}

export default Card_character

